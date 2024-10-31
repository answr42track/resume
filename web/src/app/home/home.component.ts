import { Component } from '@angular/core';
import { HomeSideNavComponent } from './components/home-side-nav/home-side-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeSideNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
