
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

from django.core import validators
from django.db import models
from django.contrib.auth.models import AbstractUser,BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.core.validators import MaxLengthValidator,MinLengthValidator
from django.conf import settings

class UserManger(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        #user.fullname = full_name
        user.set_password(password)
        user.save(using=self._db)
        return user
    # def create_user(self, email, password=None):
    #     if not email:
    #         raise ValueError("User must have an email")
    #     user = self.model(email=self.normalize_email(email))
    #     user.set_password(password)
    #     user.save(using=self._db)
    #     return user

    def create_staffuser(self, email, password=None):
        user = self.create_user(email=email,  password=password)
        user.staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password, **kwargs):
        user = self.model(username=username, is_staff=True, is_superuser=True,
                          **kwargs)
        user.set_password(password)
        user.save()
        return user

class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = models.CharField(_("Name of User"), blank=True, null=True, max_length=255)
    PREFERRED_GENRE = (
        ("pop", "Pop"),
        ("hip-hop-rap","Hip-hop and Rap"),
        ("rock","Rock"),
        ("dance-and-electric-music","Dance and Electronic music"),
        ("jazz","Jazz"),
        ("funk","Funk"),
        ("classical-music","Classical Music"),
        ("k-pop","K-Pop"),
        ("opera","Opera"),
        ("metal","Metal"),
        ("others","Others"),
    )

    passcode = models.CharField(max_length=255,null=True,blank=True) # Given By Admin
    full_name = models.CharField(max_length=255,null=True,blank=True)
    username = models.CharField(max_length=55, validators=[
                                MinLengthValidator(4)])
    #age = models.PositiveIntegerField(default=0)
    age = models.CharField(max_length=255,null=True,blank=True)
    preferred_genre = models.CharField(max_length=55, choices=PREFERRED_GENRE, null=True, blank=True)
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )

    privacy_policy = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    objects = UserManger()

    def __str__(self): #show the object's name
        return self.email

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})


class PasswordResetToken(models.Model):
    token = models.CharField(max_length=255, null=True,
                             blank=True, validators=[MaxLengthValidator(4)])

    def __str__(self):
        return self.token 

class Token(models.Model):
    token = models.CharField(max_length=255, null=True,
                             blank=True, validators=[MaxLengthValidator(4)])

    def __str__(self):
        return self.token        

class Profile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='profile/images/')

    def __str__(self):
        return self.user.username

#For Asset Management
class Assets(models.Model):
    logo = models.ImageField(upload_to='logo/images/')
    name=  models.CharField(max_length=100,blank=True,null=True)
    asset_id = models.IntegerField(default=0)
    total_quantity = models.IntegerField(default=0)
    price = models.FloatField(default=0.0)

    def __str__(self):
        return self.name        



class RequestPop(models.Model):

    request_pop = models.PositiveIntegerField(default=0)
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):

        return "{}-{}".format(self.user,self.request_pop)

class AssetsTransaction(models.Model):

    user = models.ForeignKey(
      settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    asset = models.ForeignKey(Assets, on_delete=models.CASCADE)

    want_to_purchase = models.PositiveIntegerField(default=0)

    price = models.FloatField(default=0.0)
    def __str__(self):
        return "{}-{}-{}".format(self.user,self.want_to_purchase,self.asset)

 
class QuestionAnswer(models.Model):
    question = models.CharField(max_length=255,blank=True,null=True)
    answer = models.TextField()

    def __str__(self):
        return "{}-{}".format(self.question,self.answer)        