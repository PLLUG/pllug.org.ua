from django.db import models


class QaItem(models.Model):
    question = models.CharField(max_length=120)
    answer = models.CharField(max_length=120, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'Question: {}'.format(self.question)


class Partner(models.Model):
    name = models.CharField(max_length=120)
    link = models.URLField(max_length=200)
    image = models.ImageField(upload_to='partner_logos')
    order = models.SmallIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'Partner {}'.format(self.name)


class Meeting(models.Model):

    MONDAY = 0
    TUESDAY = 1
    WEDNESDAY = 2
    THORSDAY = 3
    FRIDAY = 4
    SATURDAY = 5
    SUNDAY = 6

    DAYS = (
        (MONDAY, 'Monday'),
        (TUESDAY, 'Tuesday'),
        (WEDNESDAY, 'Wednesday'),
        (THORSDAY, 'Thorsday'),
        (FRIDAY, 'Friday'),
        (SATURDAY, 'Saturday'),
        (SUNDAY, 'Sunday')
    )

    name = models.CharField(max_length=120)
    address = models.CharField(max_length=120)
    day = models.SmallIntegerField(default=MONDAY, choices=DAYS)
    order = models.SmallIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'Meeting: {}'.format(self.name)
