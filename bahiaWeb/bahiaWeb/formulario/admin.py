from django.contrib import admin
from formulario.models import pag4

# Register your models here.
#admin.site.register(pag4)
@admin.register(pag4)
class formularioAdmin(admin.ModelAdmin):
    list_display=['nombre', 'telefono', 'email', 'options',]