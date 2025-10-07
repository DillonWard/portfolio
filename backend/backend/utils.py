
from rest_framework.response import Response
from rest_framework import status

def handle_response(data=None, can_be_empty=False):
    if isinstance(data, list) and len(data) == 0 and can_be_empty is False:
        return Response(
            status=status.HTTP_404_NOT_FOUND, content_type="application/json"
        )
    else:
        return Response(
            data=data, status=status.HTTP_200_OK, content_type="application/json"
        )
