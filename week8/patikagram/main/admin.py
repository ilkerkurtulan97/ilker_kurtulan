from django.contrib import admin

from main.models import Like, Post, Comment

# Register your models here.

# Over here we are using Admin to control Post
#@admin.register(Post)
class CommentInline(admin.StackedInline):
    model = Comment
    extra = 0
    readonly_fields = ('user', 'content')
    can_delete = False
    
    def has_add_permission(self, request, obj):
        return False
    
class LikeInline(admin.TabularInline):
    model = Like
    extra = 0
    readonly_fields = ('user', 'post')
    can_delete = False
    
    def has_add_permission(self, request, obj):
        return False

class PostAdmin(admin.ModelAdmin):
    list_display = ["id", "content", "author", "created_at", "like_comment_count"]
    list_filter = ["author", "created_at"]
    search_fields = ["content","author__username"]
    autocomplete_fields = ["author"]
    inlines = [CommentInline, LikeInline]
    
    def like_comment_count(self, post):
        return f"Likes: {post.likes_count} / Comments: {post.comments_count}"
    

class LikeAdmin(admin.ModelAdmin):
    list_display = ["id", "post", "user", "created_at"]
    list_filter = ["created_at"]
    autocomplete_fields = ["post", "user"]
    
class CommentAdmin(admin.ModelAdmin):
    list_display = ["id", "post", "user", "created_at"]
    list_filter = ["created_at"]
    search_fields = ["content","author__username"]
    autocomplete_fields = ["post", "user"]

admin.site.register(Post, PostAdmin)
admin.site.register(Like, LikeAdmin)
admin.site.register(Comment, LikeAdmin)