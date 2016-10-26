from django.contrib import admin

from .models import QaItem, Partner, Meeting


class QaItemAdmin(admin.ModelAdmin):
    list_display = ('question', 'answer', 'created_at', 'updated_at',)
    list_filter = ('created_at', 'updated_at',)


class PartnerAdmin(admin.ModelAdmin):
    list_display = ('name', 'image', 'link', )
    list_filter = ('created_at', 'updated_at',)


class MeetingAdmin(admin.ModelAdmin):
    list_display = ('name', 'day', 'address', 'created_at', 'updated_at')
    list_filter = ('created_at', 'updated_at', 'day', )


admin.site.register(QaItem, QaItemAdmin)
admin.site.register(Partner, PartnerAdmin)
admin.site.register(Meeting, MeetingAdmin)
