from rest_framework.viewsets import ModelViewSet
from .serializers import PostsSerializer
from web.blog.models import Post


class PostsViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostsSerializer
