from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    url = models.URLField(blank=True, null=True)
    frontend_technologies = models.JSONField(default=list, blank=True)
    backend_technologies = models.JSONField(default=list, blank=True)
    other_technologies = models.JSONField(default=list, blank=True)
    
    def __str__(self):
        return self.name