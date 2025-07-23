from msilib.schema import RadioButton
from random import choices
from tkinter import Widget
from turtle import title
from django.db import models
from django import forms
from django.forms import CharField, ImageField, Textarea
from django.utils.html import format_html, mark_safe

# Create your models here.

class pag4(models.Model):
    nombre=models.CharField(max_length=60, default="")
    telefono=models.CharField(max_length=15, default="")
    email=models.EmailField(max_length=50, default="")
    mensaje=models.TextField(max_length=100, default="")
    options=models.CharField(max_length=50, default="")

    def __str__(self):
        return self.nombre;
    
    class Meta:
        verbose_name_plural = ("Respuestas de formulario")