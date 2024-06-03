# myproject/urls.py
from django.contrib import admin
from django.urls import path

# from .views import material_options,  design_options
from . import views
 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/material-options/', views.material_options, name='material-options'),
    path('api/design-options/', views.design_options, name='design-options'),
]