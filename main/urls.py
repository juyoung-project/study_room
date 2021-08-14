from django.conf.urls import url

import main.views

urlpatterns = [

    url(r'^login', main.views.UserUtils.getLoginUserCheck, name='index'),

]
