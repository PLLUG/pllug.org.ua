from django.db import models


class QaItem(models.Model):
    question = models.CharField(max_length=120)
    answer = models.CharField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
