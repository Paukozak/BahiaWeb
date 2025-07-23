from django.shortcuts import render
from django.http import HttpResponse
from formulario.models import pag4
from .forms import xd
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages


from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def contactanos(request):  
    form = xd()  
    form_valid="🏄 Formulario enviado exitosamente"               
    if request.method=="POST":
        form = xd(request.POST or None)
        if form.is_valid():
            form.save()
            #print("se envió uwuwu")
            subject="🏄 " + request.POST["nombre"] + " completó el formulario"#nombre que figure en el formulario html
            message=request.POST["mensaje"] + " | Mail: " + request.POST["email"] + " | Teléfono: " + request.POST["telefono"] #mensaje + mail de la persona, para poder contestar
            email_from=settings.EMAIL_HOST_USER # los mails se envían desde este
            email_to=["webnow.arg@gmail.com"] # a este
            send_mail(subject, message, email_from, email_to)
            #messages.success(request, 'Formluario enviado exitosamente')

            return render(request, "contacto.html",{
            "form_valid": form_valid
            })
        else:
            form_valid= "Tuvimos problema para enviar tu formulario. Intenta de nuevo!"
            return render(request, "contacto.html",{
            "form_valid": form_valid
            })
    return render(request, "contacto.html")


def amelia(request):
    obj = pag4.objects.get(id=1)
    context={
        'object': obj
    }

