from django.http import HttpResponse
from django.shortcuts import render
from django.http import response
from bahiaApp.models import pag1, pag2, pag3

def inicio(request): 
    context  = {"model": pag1.objects.get(pk=1)}                         #INICIO
    return render(request, "index.html", context)
    

def about(request):                                                        #ABOUT
    context  = {"model": pag2.objects.get(pk=1)}                        
    return render(request, "about.html", context)

def servicios(request):                                                     #SERVICIOS
    context  = {"model": pag3.objects.get(pk=1),
    "model2": pag3.objects.get(pk=2),
    "model3": pag3.objects.get(pk=3),
    "model4": pag3.objects.get(pk=5),
    "model5": pag3.objects.get(pk=6),
    "model6": pag3.objects.get(pk=7),
    "model7": pag3.objects.get(pk=8)}                      
    return render(request, "servicios.html", context)


    