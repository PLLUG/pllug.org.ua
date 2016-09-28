from django.conf import settings
from django.views.generic import TemplateView
from web.common.mixins import BaseTemplateMixin


class IndexView(BaseTemplateMixin, TemplateView):
    template_name = 'home/index.html'


class RoadmapView(BaseTemplateMixin, TemplateView):
    template_name = 'home/roadmap.html'


class ContactView(BaseTemplateMixin, TemplateView):
    template_name = 'home/contact.html'
