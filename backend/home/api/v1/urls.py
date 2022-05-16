from django.urls import path, include
from rest_framework.routers import DefaultRouter


from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    PasswordRecoveryViewSet,
    activate,
    ResetViewSet,
    AssetsDetail,
    ProfileUpdate,
    AssetsViewSet,
    AssetTransactionViewSet,
    RequestPopViewSet,
    ProfileViewSet,
    TokenViewSet,
    QuestionAnswerViewSet,
    UsersViewSet,
    POPUserViewSet
    
    )

from .import viewsets

from .serializers import PasswordSerializer    

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("reset", PasswordRecoveryViewSet, basename="reset")
router.register("pchange", ResetViewSet, basename="pchange")
router.register("asset", AssetsViewSet, basename="asset")
router.register("asset/<int:pk>", AssetsViewSet, basename="assetdetails")
router.register("asset_transaction", AssetTransactionViewSet, basename="asset_transaction")
router.register("asset_transaction_op/<int:pk>", AssetTransactionViewSet, basename="asset_transaction_op")
#To get Popup from admin
router.register("request_popup", RequestPopViewSet, basename="request_popup")
router.register("request_popup/<int:pk>", RequestPopViewSet, basename="request_popup_each")

#Profile for admin
router.register("profile", ProfileViewSet, basename="profile")
router.register("profile/<int:pk>", ProfileViewSet, basename="profile_each")


#For Token Management
router.register("token", TokenViewSet, basename="token")
router.register("token/<int:pk>", TokenViewSet, basename="token_each")

#For Question Answer for help section
router.register("qnas", QuestionAnswerViewSet, basename="qnas")
router.register("qnas/<int:pk>", QuestionAnswerViewSet, basename="qnas_each")

#userlist for admin
router.register("users", UsersViewSet, basename="users")

router.register("poprequestuser", POPUserViewSet, basename="poprequestuser")










urlpatterns = [
    path("", include(router.urls)),
    path(r'^user/activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        activate, name='password_reset_confirm'),
    path('update_profile/<int:pk>/', ProfileUpdate.as_view(), name='update_profile'),    
    #path("asset/<int:pk>", viewsets.asset_detail, name="assetdetails")
    
]
