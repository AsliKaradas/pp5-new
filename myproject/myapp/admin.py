from django.contrib import admin
from .models import CustomUser, Post, Like, Comment

admin.site.register(CustomUser)
admin.site.register(Post)
admin.site.register(Like)
admin.site.register(Comment)