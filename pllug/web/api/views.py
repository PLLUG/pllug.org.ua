from rest_framework.viewsets import ModelViewSet
from .serializers import PostsSerializer, QaItemSerializer
from web.blog.models import Post
from web.home.models import QaItem


class PostsViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostsSerializer


class QaItemsViewSet(ModelViewSet):
    queryset = QaItem.objects.all()
    serializer_class = QaItemSerializer
