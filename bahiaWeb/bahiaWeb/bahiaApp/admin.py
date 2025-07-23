from django.contrib import admin
from bahiaApp.models import pag1, pag2, pag3
from django.utils.html import format_html
#from bahiaWeb.settings import get_app_list
# Register your models here.


admin.site.register(pag1)
admin.site.register(pag2)

admin.site.register(pag3)
#admin.AdminSite.get_app_list = get_app_list
def has_delete_permission(self, request, obj=None):
    return False

