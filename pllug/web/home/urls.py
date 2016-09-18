from django.conf.urls import url

from .views import IndexView, RoadmapView

urlpatterns = [
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^roadmap/$', RoadmapView.as_view(), name="roadmap")
]
