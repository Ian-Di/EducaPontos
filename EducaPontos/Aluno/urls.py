from django.contrib import admin
from django.urls import path
from .views import aluno

urlpatterns = [
    path('', aluno, name='aluno'),
]