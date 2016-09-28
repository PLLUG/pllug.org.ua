from django.conf import settings


class BaseTemplateMixin(object):

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update({
            'STATIC_URL': settings.STATIC_URL
        })
        return context
