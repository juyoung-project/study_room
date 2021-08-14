from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets

from main.models import UserDetail
from main.serializer import UserSerializer
from study_room.base import returnUtils
from study_room.base.returnUtils import ReturnService


# class UserView(viewsets.ModelViewSet):
#     users = UserSerializer
#     userAll = users.objects.all()


class UserUtils:

    @csrf_exempt
    def getLoginUserCheck(request):
        print("aaaaa")
        return ReturnService.build_json({"isSuccess": True},"")

    def createUser(request):

        print("aaaa")

        return ReturnService.build_json({})
