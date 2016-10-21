from rest_framework import serializers
from web.blog.models import Post
from web.home.models import QaItem


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'created_at', 'updated_at', )


class QaItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = QaItem
        fields = ('id', 'question', 'answer', 'created_at', 'updated_at')
        extra_kwargs = {
            'answer': {
                'required': False,
                'allow_blank': True
            }
        }
