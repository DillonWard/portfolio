from rest_framework.decorators import api_view
import experiences.repository

@api_view(["GET"])
def get_experiences(request):
    response = experiences.repository.get_experiences()
    return response