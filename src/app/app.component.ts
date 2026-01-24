import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./section/hero/hero.component";
import { NavbarComponent } from "./core/navbar/navbar.component";
import { AboutComponent } from "./section/about/about.component";
import { SkillsComponent } from "./section/skills/skills.component";
import { ProjectsComponent } from "./section/projects/projects.component";
import { ExperienceComponent } from "./section/experience/experience.component";
import { ContactComponent } from "./section/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, NavbarComponent, AboutComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Basavaraj-portfolio';
}
