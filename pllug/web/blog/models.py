from django.db import models
from django.conf import settings


class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL)
    title = models.CharField(max_length=120)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'Post: {}'.format(self.title)

    @property
    def slug(self):
        return '-'.join(self.title.lower().split(' '))

    @property
    def url(self):
        return '/blog/{}'.format(self.slug)
