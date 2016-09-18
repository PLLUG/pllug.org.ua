from django.views.generic import TemplateView


class PostsListView(TemplateView):
    template_name = 'blog/posts.html'


class PostDetailView(TemplateView):
    template_name = 'blog/post_details.html'
