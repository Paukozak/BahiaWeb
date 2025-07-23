from django import forms
from .models import pag4

class xd(forms.ModelForm):
    class Meta:
        model = pag4
        fields = ['options','nombre','telefono','email','mensaje']