from django.conf.urls import url

from .views import IndexView, RoadmapView, ContactView

urlpatterns = [
    url(r'^roadmap/', RoadmapView.as_view(), name='roadmap'),
    url(r'^contact/', ContactView.as_view(), name='contact'),
    url(r'^$', IndexView.as_view(), name='index'),
]
