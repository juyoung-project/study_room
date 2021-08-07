import json

from django.shortcuts import redirect
from django.views import View

from study_room.base.returnUtils import ReturnService


class LoginTemplateHandler():

    def login_page_html(self):
        return ReturnService.build_render_page(self, 'login.html')


class LoginHandler():

    def test(request):

        REST_API_KEY  = "724d1f5002a5bfd4c1d87b7bbaff586f"
        REDIRECT_URI = 'http://localhost:80'

        API_HOST = f'https://kauth.kakao.com/oauth/authorize?client_id={REST_API_KEY}&redirect_uri={REDIRECT_URI}&response_type=code'

        # response = request.POST(API_HOST)
        # text = json.loads(response.text)
        # print(response.status_code)
        # print(text)

        return redirect(API_HOST)