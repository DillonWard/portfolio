from .serializers import ProjectSerializer
from .models import Project
from backend.utils import handle_response

def get_projects():
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return handle_response(data=serializer.data)
