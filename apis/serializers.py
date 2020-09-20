from rest_framework import serializers
from todoApp import models


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'completed',
        )
        model = models.Todo