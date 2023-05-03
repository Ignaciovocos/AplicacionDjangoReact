from django.contrib import admin
from django.urls import include, re_path

from app.views import *

urlpatterns = [
	re_path('admin/', admin.site.urls),
	re_path('wel/', ReactView.as_view(), name="something"),
]
