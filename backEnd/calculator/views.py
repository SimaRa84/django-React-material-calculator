# myproject/views.py
from django.http import JsonResponse
from .models import MaterialType,  DesignOption

def material_options(request):
    options = list(MaterialType.objects.values('rate', 'name'))
    return JsonResponse(options, safe=False)


def design_options(request):
    options = list(DesignOption.objects.values('rate', 'label'))
    return JsonResponse(options, safe=False)