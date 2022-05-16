from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import viewsets, status
import re,random
from django.contrib.sites.shortcuts import get_current_site
from django.http import HttpResponseRedirect
from rest_framework.views import APIView
from django.http import Http404
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt

#Password Reset

from django.template import loader
from django.http import HttpResponse
from django.core.mail import EmailMessage
from django.utils.encoding import force_text
from django.utils.encoding import force_bytes
from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from users.models import PasswordResetToken,Assets,RequestPop, AssetsTransaction, QuestionAnswer,Profile
from django.http import HttpResponse, JsonResponse


from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
    PasswordRecoverySerializer,
    ResetSerializer,
    AssetSerializer,
    AssetsTransactionSerializer,
    RequestPopSerializer,
    ProfileSerializer,
    TokenSerializer,
    QuestionAnswerSerializer,
    POPUsererializer
    
    
)

User = get_user_model()
class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post",]

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = SignupSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfileUpdate(generics.UpdateAPIView):

    queryset = User.objects.all()
    #permission_classes = (IsAuthenticated,)
    serializer_class = SignupSerializer 

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = SignupSerializer(snippet)
        return Response(serializer.data)


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})


   
class PasswordRecoveryViewSet(viewsets.ViewSet):
    """
    Reset password endpoint.
    """
    authentication_classes = []
    serializer_class = PasswordRecoverySerializer
    #permission_classes = [AllowAny]

    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = get_user_model().objects.get(email=request.data['email'])
            
            token = random.randint(1000, 9999)
            if  token:
                token_generate = PasswordResetToken.objects.create(token=token)
                token_generate.save()
                print("Token is:",token)
            current_site = get_current_site(request)
            mail_subject = 'Account Password Recovery'
            message = loader.get_template('emails/forgotPassword.html').render(
                {
                    'name': user.full_name,
                    'domain': current_site.domain,
                    'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                    'token': token,
                })
            to_email = user.email
            email = EmailMessage(mail_subject, message, to=[to_email])
            email.content_subtype = 'html'
            email.send()
            response_data = {
                "token": token,
            }
            return Response(response_data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)







#Tocheck if user has valid token
def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = get_user_model().objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, get_user_model().DoesNotExist):
        user = None
    if user is not None:
        tcheck = PasswordResetToken.objects.filter(token=token).last()
        return HttpResponseRedirect(redirect_to = 'passwordform')
                   
        # user.is_active = True
        # user.save()
        #login(request, user)
        # return redirect('home')
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')
    else:
        return HttpResponse('Activation link is invalid!')        


class ResetViewSet(ModelViewSet):
    serializer_class = ResetSerializer
    http_method_names = ["post"]   

    def get_object(self, queryset=None):
            obj = self.request.user
            return obj

# def update(self, request, *args, **kwargs):
#     self.object = self.get_object()
#     serializer = self.get_serializer(data=request.data)

#     if serializer.is_valid():
       
#         # set_password also hashes the password that the user will get
#         self.object.set_password(serializer.data.get("password"))
#         self.object.save()
#         response = {
#             'status': 'success',
#             'code': status.HTTP_200_OK,
#             'message': 'Password updated successfully',
#             'data': []
#         }

#         return Response(response)

#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)         


class AssetsList(APIView):
    """
    List all snippets, or create a new snippet.
    """

    def get(self, request, format=None):
        snippets = Assets.objects.all()
        serializer = AssetSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = AssetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 



#Asset CRUD Operation   

class AssetsDetail(ModelViewSet):
    """
    Retrieve, update or delete a snippet instance.
    """

    # def get_object(self, pk):
    #     try:
    #         return Assets.objects.get(pk=pk)
    #     except Assets.DoesNotExist:
    #         raise Http404

    # def get(self, request, pk, format=None):
    #     snippet = self.get_object(pk)
    #     serializer = AssetSerializer(snippet)
    #     return Response(serializer.data)

    # def put(self, request, pk, format=None):
    #     snippet = self.get_object(pk)
    #     serializer = AssetSerializer(snippet, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def delete(self, request, pk, format=None):
    #     snippet = self.get_object(pk)
    #     snippet.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)        

    serializer_class = AssetSerializer
    http_method_names = ["post"]


#Asset Details
# 
# 
class AssetsViewSet(ModelViewSet):
    serializer_class = AssetSerializer
    http_method_names = ["post","get","put","delete"]
    queryset=Assets.objects.all()

    def get(self, request, format=None):
        users = Assets.objects.all()
        serializer = AssetSerializer(users, many=True)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = AssetSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Asset Transaction ViewSets
class AssetTransactionViewSet(ModelViewSet):
    serializer_class = AssetsTransactionSerializer
    http_method_names = ["post","get","put","delete"]
    queryset=AssetsTransaction.objects.all()

    def get(self, request, format=None):
        users = AssetsTransaction.objects.all()
        serializer = AssetsTransactionSerializer(users, many=True)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = AssetsTransactionSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)






#Request POP ViewSets
class RequestPopViewSet(ModelViewSet):
    serializer_class = RequestPopSerializer
    http_method_names = ["post","get","put","delete"]
    queryset=RequestPop.objects.all()

    def get(self, request, format=None):
        users = RequestPop.objects.all()
        serializer = RequestPopSerializer(users, many=True)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = RequestPopSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#To get access profile and do other operations
class ProfileViewSet(ModelViewSet):
    serializer_class = ProfileSerializer
    http_method_names = ["post","get","put","delete"]
    queryset=Profile.objects.all()

    def get(self, request, format=None):
        users = Profile.objects.all()
        serializer = ProfileSerializer(users, many=True)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = ProfileSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   

#Generated Token Holder and Operations.
class TokenViewSet(ModelViewSet):
    serializer_class = TokenSerializer
    http_method_names = ["post","get","put","delete"]
    queryset=Token.objects.all()

    def get(self, request, format=None):
        users = Token.objects.all()
        serializer = TokenSerializer(users, many=True)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = TokenSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)              

#QuestionANswer Section for Help Section
class QuestionAnswerViewSet(ModelViewSet):
    serializer_class = QuestionAnswerSerializer
    http_method_names = ["post","get","put","delete"]
    queryset=QuestionAnswer.objects.all()

    def get(self, request, format=None):
        users = QuestionAnswer.objects.all()
        serializer = QuestionAnswerSerializer(users, many=True)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = QuestionAnswerSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   



class UsersViewSet(ModelViewSet):
    serializer_class = UserSerializer
    http_method_names = ["get",]
    queryset=User.objects.all()

    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)



      

class POPUserViewSet(ModelViewSet):
    serializer_class = POPUsererializer
    http_method_names = ["get",]
    queryset=RequestPop.objects.all()

    def get(self, request, format=None):
        users = RequestPop.objects.all()
        serializer = POPUsererializer(users, many=True)
        return Response(serializer.data)