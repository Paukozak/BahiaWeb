from turtle import title
from unittest.util import _MAX_LENGTH
from django.db import models
from django.forms import CharField, ImageField, Textarea
from django.utils.html import format_html
from ckeditor.fields import RichTextField

# de Nutricionistas del Chaco

class pag1(models.Model):
    titulo=models.CharField(max_length=35)
    contenido=models.TextField(max_length=450)
    imagen=models.ImageField(upload_to="images", null=True)
    clientes_descripcion=models.TextField(max_length=250, default="")
    testimonio1= RichTextField(blank=True, null=True)
    testimonio2= RichTextField(blank=True, null=True)
    testimonio3= RichTextField(blank=True, null=True)
    
  
    

    def __str__(self):
      return ("Modificar contenido de Inicio");
    
    class Meta:
        verbose_name_plural = ("  Inicio")
    
class pag2(models.Model):
    titulo=models.CharField(max_length=40)
    contenido=models.TextField(max_length=350, default="")
    imagen_contenido=models.ImageField(upload_to="images", null=True)
    tofi_1=models.TextField(max_length=100, default="")
    tofi_2=models.TextField(max_length=150, default="")
    tofi_3=models.TextField(max_length=130, default="")
    imagen_tofi=models.ImageField(upload_to="images", null=True)
    barbi_1=models.TextField(max_length=100, default="")
    barbi_2=models.TextField(max_length=150, default="")
    barbi_3=models.TextField(max_length=130, default="")
    imagen_barbi=models.ImageField(upload_to="images", null=True)

    def __str__(self):
        return ("Modificar contenido de About Us");
    
    class Meta:
        verbose_name_plural = (" About Us")

class pag3(models.Model):
 #290
    servicio=models.CharField(max_length=60, default="") #context  = {"model": pag2.objects.get(pk=1),"model2": pag2.objects.get(pk=2)}
    descripcion=models.TextField(max_length=110, default="")
    descripcion_larga=models.TextField(max_length=450, default="")
    #descripcion ampliada

    def __str__(self):
        return (self.servicio);
    
    class Meta:
        verbose_name_plural = ("Servicios")

    
