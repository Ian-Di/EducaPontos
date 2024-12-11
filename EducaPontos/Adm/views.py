from django.shortcuts import render

# Create your views here.
def adm(request):
    return render(request, 'adm.html')