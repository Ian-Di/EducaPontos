from django.contrib import admin
from django.urls import path
from .views import adm

urlpatterns = [
    path('', adm, name='adm'),
]