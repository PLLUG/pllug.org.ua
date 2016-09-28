from django.contrib import admin

from .models import QaItem


class QaItemAdmin(admin.ModelAdmin):
    pass


admin.site.register(QaItem, QaItemAdmin)
