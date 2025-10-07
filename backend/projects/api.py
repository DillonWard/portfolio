from rest_framework.decorators import api_view
import projects.repository

@api_view(["GET"])
def get_projects(request):
    response = projects.repository.get_projects()
    return response