from django.contrib.auth.models import User
from rest_framework import serializers

from main.models import UserDetail


class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetail
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        field = '__all__'