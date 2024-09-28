from django.db import models
from django.contrib.auth import get_user_model


class ShelterType(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f"{self.name}"


class Facility(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f"{self.name}"


class Shelter(models.Model):
    user = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        related_name="shelters"
    )
    shelter_type = models.ForeignKey(
        ShelterType,
        on_delete=models.SET_NULL,
        null=True,
        related_name="shelters"
    )
    facilities = models.ManyToManyField(Facility, blank=True)
    description = models.TextField()
    capacity = models.IntegerField()
    location = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.shelter_type.name}: {self.user.name}, {self.location}"
