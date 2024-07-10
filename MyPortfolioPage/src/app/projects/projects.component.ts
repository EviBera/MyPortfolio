import { Component } from '@angular/core';
import { IProject } from './project.model';

@Component({
  selector: 'mpp-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: IProject[] = [
    {
      name: "My Porfolio Page",
      description: `This website you are looking at currently. It is made with Angular 16.2.`,
      links: [
        "https://github.com/EviBera/MyPortfolio",
        "https://evibera.github.io/MyPortfolio/"
      ]
    },
    {
      name: "Craftsman Contact",
      description: `This is a .NET 8.0 web application for connecting clients and various kinds of craftsmen.
The app uses a PostgreSQL database and Entity Framework Core to deal with data. The project
includes Identity for user handling, JWT for authentication. The unit test project uses 
NUnit and Moq, for integration testing I used xUnit. Based on the tests I have set up 
GitHub Actions workflow for CI/CD. I have added a React frontend with React Bootstrap 
to style the UI. The app is deployed through DockerHub on Render.`,
      links: [
        "https://github.com/EviBera/CraftsmanContact",
        "https://craftsmen.onrender.com"
      ]
    },
    {
      name: "Adopt a pet",
      description: `A full-stack application with .NET 8.0 backend, Angular 18 frontend, and
      PostgreSQL database. This website is under construction, I am working 
      on it for an imaginary pet rescue team, that looks for adopters for pets.`,
      links: [
        "https://github.com/EviBera/adopt-a-pet"
      ]
    },
    {
      name: "Freestyle MERN-project",
      description: `As a final project in CodeCool's Web module, our team has built a movie night planner
application to summarize our current studies. As a team member, I have worked both on
the frontend (React) and on the backend (Express.js, Node.js, and MongoDB).`,
      links: [
        "https://github.com/CodecoolGlobal/freestyle-mern-project-react-MoserTamas",
        "https://github.com/CodecoolGlobal/freestyle-mern-project-2-react-Betty134"
      ]
    },
    {
      name: "Solar Watch",
      description: `The Solar Watch is an ASP.NET Core 6.0 web API that serves sunrise and sunset data for a
user-chosen city. The database stores the geocoordinates of requested cities and the
solar data for the given day. During the project I have learned about asynchronous
programming, ORM (Entity Framework Core), authentication and authorization
(Identity, JSON Web Tokens). This was a solo project, I worked on the application alone in CodeCool's last module.`,
      links: [
        "https://github.com/CodecoolGlobal/solarwatch-2-csharp-EviBera",
        "https://github.com/CodecoolGlobal/solarwatch-3-csharp-EviBera",
        "https://github.com/CodecoolGlobal/solarwatch-4-csharp-EviBera",
        "https://github.com/CodecoolGlobal/solarwatch-5-csharp-EviBera",
        "https://github.com/CodecoolGlobal/solarwatch-6-csharp-csharp-EviBera",
        
      ]
    },
    {
      name: "The Employee Madness",
      description: `In this school project I have used advanced MERN stack operations and 
      routing. The application displays and handles 'employee data' in various ways.`,
      links: ["https://github.com/CodecoolGlobal/the-employee-madness-v2-react-EviBera"]
    },
    {
      name: "Get to know Lara",
      description: `This is the very first project along my journey in learning the 
      Laravel framework. I used PHP 8.1, Laravel, Sanctum for authorization, MariaDB 
      for storing data on the backend and React to build the frontend. 
      (The application is still under construction.)`,
      links: ["https://github.com/CodecoolGlobal/get-to-know-lara-php-EviBera.git"]
    },
    {
      name: "The ThunderstORM",
      description: `This project serves for practicing database operations, handling 
      PhpSpreadsheet and making a custom Artisan command. It also uses PHP 8.1 and Laravel.`,
      links: ["https://github.com/CodecoolGlobal/the-thunderstorm-php-EviBera.git"]
    },
    {
      name: "El Proyecte Grande",
      description: `The El Proyecte Grande is a team PHP Laravel project where we 
      experienced creating a webshop. My task was to write the Product Design Document 
      and make the controllers and some of the routing. We practiced agile methodology 
      and worked in a Scrum team for multiple sprints.`,
      links: ["https://github.com/CodecoolGlobal/el-proyecte-grande-design-general-hajosroli.git"]
    }
  ];
}
