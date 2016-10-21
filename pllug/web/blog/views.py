from django.views.generic import TemplateView
from web.common.mixins import BaseTemplateMixin


class PostsListView(BaseTemplateMixin, TemplateView):
    template_name = 'blog/posts.html'


class PostDetailView(BaseTemplateMixin, TemplateView):
    template_name = 'blog/post_details.html'
