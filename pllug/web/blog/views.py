from django.views.generic import TemplateView
from django.views.generic.detail import DetailView
from web.common.mixins import BaseTemplateMixin
from .models import Post


class PostsListView(BaseTemplateMixin, TemplateView):
    template_name = 'blog/posts.html'


class PostDetailView(DetailView, TemplateView):
    model = Post
    template_name = 'blog/post_details.html'
