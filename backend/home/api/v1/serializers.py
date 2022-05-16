from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from rest_framework import serializers
from rest_auth.serializers import PasswordResetSerializer
import django.contrib.auth.password_validation as validators
from django.core import exceptions
from rest_framework import  status
from users.models import Assets,AssetsTransaction,Profile,Token,RequestPop,QuestionAnswer



User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    class Meta:
        model = User
        fields = ['passcode','full_name','username','age','preferred_genre','email','password','confirm_password','privacy_policy']
        #fields = '__all__'
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                }
            },
            'email': {
                'required': True,
                'allow_blank': False,
            }
        }

    def _get_request(self):
        request = self.context.get('request')
        if request and not isinstance(request, HttpRequest) and hasattr(request, '_request'):
            request = request._request
        return request

    def validate(self, data):
        '''
        Ensure the passwords are the same
        '''
        if data['password']:
            errors = dict()
            try:
                # validate the password and catch the exception
                validators.validate_password(password=data['password'], user=get_user_model())

                # the exception raised here is different than serializers.ValidationError
            except exceptions.ValidationError as e:
                errors['password'] = list(e.messages)

            if errors:
                raise serializers.ValidationError(errors)
            if data['password'] != data['confirm_password']:
                raise serializers.ValidationError(
                    "The passwords have to be the same"
                )
        return data    

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address."))
        return email

    def create(self, validated_data):
        user = User(
            email=validated_data.get('email'),
            name=validated_data.get('name'),
            age=validated_data.get('age'),
            passcode=validated_data.get('passcode'),
            full_name=validated_data.get('full_name'),
            preferred_genre=validated_data.get('preferred_genre'),
            privacy_policy=validated_data.get('privacy_policy'),
            username=generate_unique_username([
                validated_data.get('name'),
                validated_data.get('email'),
                'user'
            ])
        )
        user.set_password(validated_data.get('password'))
        user.save()
        request = self._get_request()
        setup_user_email(request, user, [])
        return user


        def update(self, instance, validated_data):

            instance.full_name = validated_data.get('full_name')
            instance.save()

            return instance       

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()





class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name']


class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""
    password_reset_form_class = ResetPasswordForm

    class Meta:
        model = User
        fields = ['email',]

#By Email Password will be recovered with the help of token 
class PasswordRecoverySerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)

    class Meta:
        model = get_user_model()
        fields = (
            'email',
        )

    def validate(self, validated_data):
        """
        Check for existing E-mail
        """
        email = validated_data['email']
        try:
            self.user = get_user_model().objects.get(email=email)
        except exceptions.ObjectDoesNotExist:
            raise serializers.ValidationError('email does not exist')
        return validated_data


class ResetSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    class Meta:
        model = User
        fields = ['password','confirm_password']
        #fields = '__all__'
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                }
            },
            
        }

    def _get_request(self):
        request = self.context.get('request')
        if request and not isinstance(request, HttpRequest) and hasattr(request, '_request'):
            request = request._request
        return request

    def validate(self, data):
        '''
        Ensure the passwords are the same
        '''
        if data['password']:
            errors = dict()
            try:
                # validate the password and catch the exception
                validators.validate_password(password=data['password'], user=get_user_model())

                # the exception raised here is different than serializers.ValidationError
            except exceptions.ValidationError as e:
                errors['password'] = list(e.messages)

            if errors:
                raise serializers.ValidationError(errors)
            if data['password'] != data['confirm_password']:
                raise serializers.ValidationError(
                    "The passwords have to be the same"
                )
        return data    

    def get_object(self):
        
        return self.request.user


    def create(self, validated_data):
        # user = get_user_model().objects.get(email=self.get_object)
        # if user:

        #     user.set_password(validated_data.get('password'))
        #     user.save()
        #     request = self._get_request()
        #     setup_user_email(request, user, [])
        #     return user
        user = User(password=validated_data.get('password'))
        #user =  self.request.user
        user.set_password(validated_data.get('password'))
        user.save()
        request = self._get_request()
        setup_user_email(request, user, [])
        return user    

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()



class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assets
        fields = '__all__'     



#Serializer for Asset Transaction


class AssetsTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssetsTransaction
        fields = '__all__'    



class RequestPopSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestPop
        fields = '__all__'    


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'      



class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = '__all__'                 

class QuestionAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionAnswer
        fields = '__all__'    

        

#Get POPrequest


class POPUsererializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')

    class Meta:
        model = RequestPop
        fields = ('id', 'username','request_pop')