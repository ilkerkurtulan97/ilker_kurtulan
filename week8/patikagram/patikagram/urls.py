from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from main.views import UserViewSet, PostViewSet, CommentViewSet, LikeViewSet

# We are registering our viewset(controllers) to the routers
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'likes', LikeViewSet)

# Here are our urls for the rest api
urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
