from django.contrib import admin

from .models import QaItem


class QaItemAdmin(admin.ModelAdmin):
    list_display = ('question', 'answer', 'created_at', 'updated_at',)
    list_filter = ('created_at', 'updated_at',)


admin.site.register(QaItem, QaItemAdmin)
