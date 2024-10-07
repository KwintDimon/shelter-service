from django.contrib import admin
from shelter.models import (
    ShelterType,
    Facility,
    Shelter,
    ShelterImage
)


class ShelterImageInline(admin.TabularInline):
    model = ShelterImage
    extra = 1


@admin.register(Shelter)
class ShelterAdmin(admin.ModelAdmin):
    list_display = ("shelter_type", "user", "location", "capacity", "created_at")
    list_filter = ("shelter_type", "location")
    search_fields = ("location", "description")
    inlines = [ShelterImageInline]


@admin.register(Facility)
class FacilityAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(ShelterType)
class ShelterTypeAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)
