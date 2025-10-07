from django.db.models.signals import post_migrate
from django.dispatch import receiver
from experiences.models import Experience
from datetime import date

@receiver(post_migrate)
def create_default_experiences(sender, **kwargs):
    if not Experience.objects.exists():
        Experience.objects.create(
            title="Senior Full Stack Developer",
            company="Stellar",
            location="Bordeaux, France",
            start_date=date(2024, 4, 1),
            end_date=None,
            description="Full Stack Development integrating custom modules into OpenWISP, an open source technology, and development of a customer facing website.",
        )
        
        Experience.objects.create(
            title="Senior Software Engineer",
            company="Remote",
            location="Remote",
            start_date=date(2023, 2, 1),
            end_date=date(2024, 3, 1),
            description="Full Stack Development on a number of different projects which involved rapid prototyping frontends and creating APIs and services which would use AI to suggest content to the user.",
        )

        Experience.objects.create(
            title="Technology Consultant III",
            company="Hewlett Packard Enterprise",
            location="Galway, Ireland",
            start_date=date(2019, 3, 1),
            end_date=date(2022, 12, 1),
            description="Originally hired primarily as a frontend developer with a focus on data visualization, very quickly moved on to full stack development. Was a core member of the RMA team, displaying flexibility and a willingness to learn and work with new technologies.",
        )
        
        Experience.objects.create(
            title="International Consultant",
            company="The AKKAdemy",
            location="Bordeaux, France",
            start_date=date(2018, 7, 1),
            end_date=date(2019, 1, 1),
            description="Hired as an international consultant who would be sent to different cities across France based on the needs of clients.",
        )