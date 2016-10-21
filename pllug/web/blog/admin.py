from django.contrib import admin
from .models import Post


class PostAdmin(admin.ModelAdmin):
    list_display = ('author', 'title', 'content', 'created_at', 'updated_at')
    list_filter = ('author', 'created_at', 'updated_at')


admin.site.register(Post, PostAdmin)
