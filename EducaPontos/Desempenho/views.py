from django.shortcuts import render

# Create your views here.
def desempenho(request):
    return render(request, 'desempenho.html')