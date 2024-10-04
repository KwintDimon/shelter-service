from rest_framework import viewsets, generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny

from shelter.models import (
    Shelter,
    ShelterType,
    Facility
)
from shelter.serializers import (
    ShelterSerializer,
    ShelterTypeSerializer,
    FacilitySerializer
)


class ShelterViewSet(viewsets.ModelViewSet):
    queryset = Shelter.objects.all()
    serializer_class = ShelterSerializer

    def get_permissions(self):
        if self.action in ["list", "retrieve"]:
            self.permission_classes = [AllowAny]
        else:
            self.permission_classes = [IsAuthenticated]
        return super().get_permissions()


class ShelterTypeCreateView(generics.CreateAPIView):
    queryset = ShelterType.objects.all()
    serializer_class = ShelterTypeSerializer
    permission_classes = [IsAdminUser]


class FacilityCreateView(generics.CreateAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer
    permission_classes = [IsAuthenticated]
