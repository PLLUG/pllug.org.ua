from django.conf.urls import url

from .views import PostsListView, PostDetailView

urlpatterns = [
    url(r'^$', PostsListView.as_view(), name='posts'),
    url(r'^(?P<slug>[-\w]+)/$', PostDetailView.as_view(), name='post_details'),
]
