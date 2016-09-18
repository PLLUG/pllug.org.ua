from django.conf.urls import url

from .views import PostsListView, PostDetailView

urlpatterns = [
    url(r'$', PostsListView.as_view(), name='posts'),
    url(r'/(?P<post_id>\d+)$', PostDetailView, name='post_details'),
]
