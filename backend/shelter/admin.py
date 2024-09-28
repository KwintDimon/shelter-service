from django.contrib import admin
from models import (
    ShelterType,
    Facility,
    Shelter,
)

admin.site.register(ShelterType)
admin.site.register(Shelter)
admin.site.register(Facility)
