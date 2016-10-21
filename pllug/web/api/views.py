from rest_framework.viewsets import ModelViewSet
from .serializers import PostsSerializer, QaItemSerializer
from web.blog.models import Post
from web.home.models import QaItem


class PostsViewSet(ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostsSerializer


class QaItemsViewSet(ModelViewSet):
    queryset = QaItem.objects.exclude(answer='').order_by('-updated_at')
    serializer_class = QaItemSerializer
