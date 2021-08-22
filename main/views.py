import smtplib
from email.message import EmailMessage

from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny
from rest_framework_jwt.settings import api_settings

from study_room.base.returnUtils import ReturnService
from rest_framework_jwt.views import obtain_jwt_token
import bcrypt

from argon2 import PasswordHasher

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
            User.objects.create_user(username=username, email=email,password=password_crypt)

        return ReturnService.build_json({})

    @ensure_csrf_cookie
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

            payload = JWT_PAYLOAD_HANDLER(user)
            jwt_token = JWT_ENCODE_HANDLER(payload)  # 토큰 발행
            request.COOKIES["access_token"] = jwt_token
            # print(response.COOKIES.get("access_token"))
            return ReturnService.build_json({"access_token":jwt_token},"토근 까지 완료")

        return ReturnService.build_json({},"비밀번호 또는 이메일이 일치하지 않습니다.")

class EmailUtils:

    @csrf_exempt
    def sendInvitedMail(request):

        body = request.body
        print(obtain_jwt_token)
        email_from = "kjo8830@gamil.com"
        email_to = body['to']
        print(email_to)
        email_subject = "Study_Room에서 보내는 초대 링크입니다"
        email_content = "도도니 이메일 발송까지 성공했지롱 으로 놀러오세요"

        msg = EmailMessage()
        msg.set_content(email_content)

        msg["From"] = email_from
        msg["To"] = email_to
        msg["Subject"] = email_subject

        smtp = smtplib.SMTP("smtp.gmail.com", 587)
        smtp.starttls()
        smtp.login("kjo8830@gmail.com", "@korea59")

        smtp.send_message(msg)
        smtp.quit()

        return ReturnService.build_json({})