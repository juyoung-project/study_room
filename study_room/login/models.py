from django.db import models
from django.utils import timezone


class UserDetail(models.Model):
    user = models.ForeignKey('auth.user',blank=False, null=False)
    create_time = models.DecimalField(default=timezone.now())

