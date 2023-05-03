from django.db import models

# Create your models here.


class React(models.Model):
	user = models.CharField(max_length=30)
	password = models.CharField(max_length=50)
