from django.db import models
from .proveedor import Proveedor

class Telefono(models.Model):
    email = models.CharField(max_length=255)
    proveedor = models.ForeignKey(Proveedor,on_delete=models.CASCADE)