from django.contrib import admin
from django.urls import path
from .views import desempenho

urlpatterns = [
    path('', desempenho, name='desempenho'),
]