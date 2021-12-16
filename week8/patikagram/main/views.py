from django.db.models import query
from rest_framework import viewsets
from django.contrib.auth.models import User
from . models import Comment, Like, Post


from main.serializers import UserSerializer, PostSerializer, CommentSerializer, LikeSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = CommentSerializer
    
class LikeViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = LikeSerializer
    