from django.db import models


class QaItem(models.Model):
    question = models.CharField(max_length=120)
    answer = models.CharField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'Question: {}'.format(self.question)


class Partner(models.Model):
    name = models.CharField(max_length=120)
    link = models.URLField(max_length=200)
    image = models.ImageField(upload_to='partner_logos')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'Partner {}'.format(self.name)
