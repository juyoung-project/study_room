import json

from django.http import HttpResponse
from django.shortcuts import render


class CustomEncoder(json.JSONEncoder):

    def default(self, obj):
        try:
            return super(CustomEncoder, obj).default(obj)
        except TypeError:
            return str(obj)


class ReturnService:

    @staticmethod
    def build_render_page(request, page_name,data=None, msg=None):
        return ReturnService.__build_render_page(request, page_name, data, msg)

    @staticmethod
    def build_json(data, msg=None):
        return HttpResponse(json.dumps(ReturnService.__build_msg(data, msg), default=lambda x: x.__dict__, indent=4, ensure_ascii=False), content_type='application/json');

    @staticmethod
    def __build_render_page(request, page_name, data, msg):
        return render(request, page_name, ReturnService.__build_msg(data,msg))

    @staticmethod
    def __build_msg(data,msg):
        return ReturnService.__build_success(data,msg)

    @staticmethod
    def __build_success(data, msg):
        return {
            "success": True,
            "status": True,
            "rejected": False,
            "returnCode" : 0,
            "data": data,
            "msg": msg,
        }