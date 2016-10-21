from django.conf.urls import url, include
from rest_framework import routers

from .views import PostsViewSet, QaItemsViewSet

router = routers.DefaultRouter()
router.register(r'posts', PostsViewSet)
router.register(r'qa_items', QaItemsViewSet)

urlpatterns = [
    url('^', include(router.urls)),
]
