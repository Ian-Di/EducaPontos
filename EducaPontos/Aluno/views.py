from django.shortcuts import render

# Create your views here.
def aluno(request):
    return render(request, 'aluno.html')
