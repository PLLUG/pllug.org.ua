from django.db import models


class QaItem(models.Model):
    question = models.CharField(max_length=120)
    answer = models.CharField(max_length=120)
