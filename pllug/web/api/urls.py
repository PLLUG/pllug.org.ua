from django.conf.urls import url, include
from rest_framework import routers

from .views import PostsViewSet

router = routers.DefaultRouter()
router.register(r'posts', PostsViewSet)

urlpatterns = [
    url('^', include(router.urls)),
]
