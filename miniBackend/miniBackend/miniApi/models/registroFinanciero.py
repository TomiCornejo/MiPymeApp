from django.db import models
from .tipoRegistro import TipoRegistro
from .usuario import Usuario

class RegistroFinanciero(models.Model):
    fecha = models.DateField(auto_now=True)
    tipo = models.ForeignKey(TipoRegistro)
    minimarket = models.ForeignKey(Usuario,on_delete=models.CASCADE)