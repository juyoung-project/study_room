import json

from django.http import response


def StatisticsMiddleware(get_response):

    def middleware(request):

        body_unicode = request.body.decode('utf-8')
        if body_unicode:
            body = json.loads(body_unicode)
            setattr(request,"_body",body)
        response = get_response(request)
        return response

    return middleware


