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
      name: "Craftsman Contact",
      description: `This is a .NET 8.0 web application for connecting clients and various kinds of craftsmen.
The app uses an MSSQL database and Entity Framework to deal with data. The project
includes Identity for user handling. The unit test project uses NUnit and Moq, for
integration testing I used xUnit. Based on the tests I have set up GitHub Actions
workflow for CI. At this moment I work on the frontend with React.`,
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
      description: `As a final project in the Web module, our team has built a movie night planner
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
(Identity, JSON Web Tokens). This was a solo project, I worked on the application alone.`,
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
      description: `In this school project I used advanced MERN stack operations and routing. The
application displays and handles 'employee data' in various ways.`,
      links: ["https://github.com/CodecoolGlobal/the-employee-madness-v2-react-EviBera"]
    },
    {
      name: "My Porfolio Page",
      description: `This website you are looking at currently.`,
      links: ["https://github.com/EviBera/MyPortfolio"]
    }
  ];
}
