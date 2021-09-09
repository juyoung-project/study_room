import json

from django.http import response
from rest_framework_jwt.settings import api_settings
# from rest_framework_jwt.views import api_settings
from study_room.base.exclude_url_list import whitelist


def StatisticsMiddleware(get_response):

    def middleware(request):
        body_unicode = request.body.decode('utf-8')
        if is_token_invalid(request):
            raise Exception
        if body_unicode:
            body = json.loads(body_unicode)
            setattr(request,"_body",body)
        response = get_response(request)
        return response

    return middleware


def is_token_invalid(request):
    jwt_decode_handler = api_settings.JWT_DECODE_HANDLER
    jwt_payload_get_user_id_handler = api_settings.JWT_PAYLOAD_GET_USER_ID_HANDLER

    if request.path in whitelist():
        return False
    try :
        payload = jwt_decode_handler(request.headers["Authorization"])
    except Exception :
        return True
    user_id = jwt_payload_get_user_id_handler(payload)

    return not( user_id == request.user.id )