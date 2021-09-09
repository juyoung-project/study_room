import smtplib
from email.message import EmailMessage

from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny
from rest_framework_jwt.settings import api_settings

from study_room.base.returnUtils import ReturnService
from rest_framework_jwt.views import obtain_jwt_token
import bcrypt


class UserUtils:

    @csrf_exempt
    def getLoginUserCheck(request):
        print("aaaaa")
        return ReturnService.build_json({"isSuccess": True},"")

    @csrf_exempt
    @permission_classes([AllowAny])
    def createUser(request):

        body = request.body

        email = body.get("email")
        password = body.get("password")
        username = body.get("nick_name")

        if User.objects.filter(email=email).count() > 0:
            return ReturnService.build_json({},"이미존재하는 이메일 입니다.")
        else :
            User.objects.create_user(username=username, email=email,password=password)

        return ReturnService.build_json({})

    @csrf_exempt
    def userLogin(request):
        JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
        JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER

        body = request.body
        email = body.get("email")
        password = body.get("password")
        try:
            user = User.objects.get(email=email)
        except ObjectDoesNotExist:
            return ReturnService.build_json({},"존재하지 않는 이메일")

        if check_password(password,user.password) :
            print("비밀벙호 일치")

        payload = JWT_PAYLOAD_HANDLER(user)
        jwt_token = JWT_ENCODE_HANDLER(payload)  # 토큰 발행
        return ReturnService.build_json({"access_token":jwt_token},"토근 까지 완료")