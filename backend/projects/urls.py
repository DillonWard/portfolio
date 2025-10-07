from django.urls import path
from .api import get_projects

urlpatterns = [
    path("get-projects/", get_projects, name="get_projects"),
]