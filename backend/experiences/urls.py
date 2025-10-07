from django.urls import path
from .api import get_experiences

urlpatterns = [
    path("get-experiences/", get_experiences, name="get_experiences"),
]