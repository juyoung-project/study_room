

from django.db import models

# Create your models here.
from django.utils import timezone


class UserDetail(models.Model):
    user = models.ForeignKey('auth.user',blank=False, null=False, on_delete=models.CASCADE)
    nick_name = models.CharField(max_length=256)
    create_time = models.DateTimeField(default=timezone.now())
    isdeleted = models.BooleanField(default=False)


class EmailHistory(models.Model):
    receive_email = models.CharField(max_length=256, blank=False, null=False)
    receive_time = models.DateTimeField(default=timezone.now())
