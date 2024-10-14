from drf_spectacular.types import OpenApiTypes
from drf_spectacular.utils import extend_schema, OpenApiParameter
from rest_framework import viewsets, generics, serializers
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny

from shelter.models import (
    Shelter,
    ShelterType,
    Facility,
    ShelterImage,
)
from shelter.serializers import (
    ShelterSerializer,
    ShelterTypeSerializer,
    FacilitySerializer,
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

    @staticmethod
    def _params_to_ints(qs):
        """Converts a string IDs to a list of integers"""
        try:
            return [int(str_id) for str_id in qs.split(",")]
        except ValueError:
            raise serializers.ValidationError("Invalid facility IDs. IDs must be integers.")

    def get_queryset(self):
        """Retrieve the shelters with filters"""
        capacity = self.request.query_params.get("capacity")
        facilities = self.request.query_params.get("facilities")
        shelter_type = self.request.query_params.get("shelter_type")

        queryset = self.queryset

        if capacity:
            capacity = int(capacity)
            queryset = queryset.filter(capacity__gte=capacity)

        if facilities:
            facilities_ids = self._params_to_ints(facilities)
            queryset = queryset.filter(facilities__id__in=facilities_ids)

        if shelter_type:
            queryset = queryset.filter(shelter_type=shelter_type)

        return queryset.distinct()

    @extend_schema(
        parameters=[
            OpenApiParameter(
                "capacity",
                type=OpenApiTypes.NUMBER,
                description="Filter by shelter capacity (ex. ?capacity=5)",
            ),
            OpenApiParameter(
                "facilities",
                type={"type": "list", "items": {"type": "number"}},
                description="Filter by facilities id (ex. ?facilities=1,2)",
            ),
            OpenApiParameter(
                "shelter_type",
                type=OpenApiTypes.NUMBER,
                description="Filter by shelter type id (ex. ?shelter_type=1)",
            ),
        ]
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)


class ShelterTypeCreateView(generics.CreateAPIView):
    queryset = ShelterType.objects.all()
    serializer_class = ShelterTypeSerializer
    permission_classes = [IsAdminUser]


class FacilityCreateView(generics.CreateAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer
    permission_classes = [IsAuthenticated]
