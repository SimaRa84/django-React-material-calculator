# myproject/models.py
from django.db import models

class MaterialType(models.Model):
    rate = models.CharField(max_length=100)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class DesignOption(models.Model):
    rate = models.CharField(max_length=100)
    label = models.CharField(max_length=100)

    def __str__(self):
        return self.label