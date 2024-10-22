from rest_framework import serializers

from shelter.models import (
    ShelterType,
    Facility,
    Shelter,
    ShelterImage
)


class ShelterTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShelterType
        fields = ["id", "name"]


class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = ShelterType
        fields = ["id", "name"]


class ShelterImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShelterImage
        fields = ["id", "image", "uploaded_at"]


class ShelterSerializer(serializers.ModelSerializer):
    shelter_type = ShelterTypeSerializer(read_only=True)
    facilities = FacilitySerializer(read_only=True, many=True)
    images = ShelterImageSerializer(many=True, read_only=True)
    image_files = serializers.ListField(
        child=serializers.ImageField(),
        write_only=True,
        required=False
    )

    shelter_type_id = serializers.PrimaryKeyRelatedField(
        queryset=ShelterType.objects.all(),
        source="shelter_type",
        write_only=True
    )

    facilities_ids = serializers.PrimaryKeyRelatedField(
        queryset=Facility.objects.all(),
        source="facilities",
        write_only=True,
        many=True
    )

    class Meta:
        model = Shelter
        fields = [
            "id",
            "user",
            "shelter_type",
            "shelter_type_id",
            "facilities",
            "facilities_ids",
            "description",
            "capacity",
            "location",
            "images",
            "image_files",
            "created_at",
        ]
        read_only_fields = ["created_at", "user"]

    def create(self, validated_data):
        facilities_data = validated_data.pop("facilities")
        user = self.context["request"].user
        image_files = validated_data.pop("image_files", [])
        shelter = Shelter.objects.create(user=user, **validated_data)
        shelter.facilities.set(facilities_data)

        for image_file in image_files:
            ShelterImage.objects.create(shelter=shelter, image=image_file)

        return shelter

    def update(self, instance, validated_data):
        if "image_files" in validated_data:
            ShelterImage.objects.filter(shelter=instance).delete()

            image_files = validated_data.pop("image_files")
            for image_file in image_files:
                ShelterImage.objects.create(shelter=instance, image=image_file)

        instance.shelter_type = validated_data.get("shelter_type", instance.shelter_type)
        instance.facilities.set(validated_data.get("facilities", instance.facilities))
        instance.description = validated_data.get("description", instance.description)
        instance.capacity = validated_data.get("capacity", instance.capacity)
        instance.location = validated_data.get("location", instance.location)

        instance.save()
        return instance
