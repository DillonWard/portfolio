from django.db.models.signals import post_migrate
from django.dispatch import receiver
from projects.models import Project

@receiver(post_migrate)
def create_default_projects(sender, **kwargs):
    if not Project.objects.exists():

        Project.objects.create(
            name="Portfolio",
            description="This website!",
            url="https://github.com/DillonWard/portfolio",
            frontend_technologies=["React", "Redux", "Chart.js", "Tailwind"],
            backend_technologies=["Django"],
            other_technologies=["Docker", "Docker Compose"],
        )

        Project.objects.create(
            name="Science Assistant",
            description="A web application that allowed users to save entities that came from the OpenAlex API, save them to a collection, and would suggest new entities to the user using an AI Microservice.",
            url=None,
            frontend_technologies=["Vue", "Pinia", "TailwindCSS", "Vite", "Chart.js"],
            backend_technologies=["Python", "Django", "FastAPI", "OpenAI", "Auth0"],
            other_technologies=["Docker", "Docker Compose", "Kubernetes", "Azure DevOps", "Pulsar", "RabbitMQ"],
        )
        
        Project.objects.create(
            name="AI Reviewer",
            description="A web application that would allow user's to upload a PDF of a paper that they were currently writing and using an AI Microservice suggest changes that the user could make, show matches for where the paper could be published, and would suggest upcoming conferences that the user could attend based on the content of their paper.",
            url=None,
            frontend_technologies=["Vue", "Pinia", "Tailwind", "Chart.js"],
            backend_technologies=["Python", "FastAPI", "Django", "Scrapy", "OpenAI", "Auth0"],
            other_technologies=["Docker", "Docker Compose", "Kubernetes", "Azure DevOps", "Pulsar", "RabbitMQ"],
        )

        Project.objects.create(
            name="Steer Management & Steer Management Portal",
            description="A large web application that used OpenWisp for managing networks of devices, and a portal that allowed users to log in and manage their own devices, view analytics on their network, and perform actions on their devices.",
            url=None,
            frontend_technologies=["Vue", "Vuex", "React", "Redux", "Tailwind", "Chart.js"],
            backend_technologies=["Python", "Django", "PostgreSQL"],
            other_technologies=["Docker", "Docker Compose", "OpenWisp", "Celery", "Redis", "Gitlab CI/CD", "Ansible"],
        )


        Project.objects.create(
            name="Right Mix Advisor",
            description="A web application that allows users to log in to their own dashboard, create other users, and perform analysis on applications on how they can be improved. The users could then present these findings to clients.",
            url=None,
            frontend_technologies=["Vue", "Vuex", "Chart.js", "D3.js", "Bulma", "Buefy"],
            backend_technologies=["Node", "Express", "Java", "Spring", "Python", "MySQL", "MongoDB", "PHP", "Laravel"],
            other_technologies=["Docker", "Docker Compose", "Kubernetes", "Azure DevOps"],
        )
        
        Project.objects.create(
            name="GreenLake Central",
            description="Creation of widgets and handling state management based on the user for a portal which contained multiple other widgets.",
            url=None,
            frontend_technologies=["React", "Redux"],
            backend_technologies=[],
            other_technologies=[],
        )
        
        Project.objects.create(
            name="Data Visualization",
            description="The migration of an in-house data visualization application that was originally in simple HTML, CSS, and JavaScript over to an Angular 6 application.",
            url=None,
            frontend_technologies=["Angular", "D3.js"],
            backend_technologies=[],
            other_technologies=[],
        )
        
        Project.objects.create(
            name="AI Handwriting Recogniser",
            description="A web application that allows users to draw numbers inside a canvas, and will use AI to recognize which number has been written using a model which has been trained with thousands of images of numbers.",
            url="https://github.com/DillonWard/Emerging-Technologies-Project",
            frontend_technologies=["HTML/CSS/JS"],
            backend_technologies=["Python", "Tensorflow", "Flask", "Keras"],
            other_technologies=[],
        )
