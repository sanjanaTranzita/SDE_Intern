import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'STRING INTERPOLATION';
  data ='In Angular, string interpolation is a way to bind expressions and variables within a template.It allows you to embed dynamic values from your component directly into the HTML templates. The syntax for string interpolation in Angular is using double curly braces ({{ }}).'
}
