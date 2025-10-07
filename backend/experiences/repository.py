from .serializers import ExperienceSerializer
from .models import Experience
from backend.utils import handle_response

def get_experiences():
    experiences = Experience.objects.all()
    serializer = ExperienceSerializer(experiences, many=True)
    return handle_response(data=serializer.data)
