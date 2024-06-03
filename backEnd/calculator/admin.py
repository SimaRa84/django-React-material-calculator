# myproject/admin.py
from django.contrib import admin
from .models import MaterialType,  DesignOption

class MaterialAdmin(admin.ModelAdmin):
    list_display = ('name', 'rate')

class DesignAdmin(admin.ModelAdmin):
    list_display = ('label', 'rate')
    
admin.site.register(DesignOption, DesignAdmin)

admin.site.register(MaterialType, MaterialAdmin)

