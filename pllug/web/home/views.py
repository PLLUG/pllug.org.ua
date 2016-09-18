from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'home/index.html'


class RoadmapView(TemplateView):
    template_name = 'home/roadmap.html'


class ContactView(TemplateView):
    template_name = 'home/contact.html'
