from django.conf.urls import url

import main.views


urlpatterns = [

    url(r'^login', main.views.UserUtils.userLogin, name='login'),
    url(r'^send/email', main.views.EmailUtils.sendInvitedMail, name='email'),
    url(r'^sign/up', main.views.UserUtils.createUser, name='signUp'),

]
