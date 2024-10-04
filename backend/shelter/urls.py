from django.urls import path, include

from rest_framework.routers import DefaultRouter

from shelter.views import (
    ShelterViewSet,
    ShelterTypeCreateView,
    FacilityCreateView
)

app_name = "shelter"
router = DefaultRouter()

router.register("shelters", ShelterViewSet)
urlpatterns = [
    path("", include(router.urls)),
    path("shelter-types/", ShelterTypeCreateView.as_view(), name="create-shelter-type"),
    path("facilities/", FacilityCreateView.as_view(), name="create-facility"),
]
