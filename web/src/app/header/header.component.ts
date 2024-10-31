import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { ContactElementComponent } from "./components/contact-element/contact-element.component";
import { CONTACTS } from "./models/dummy-contacts";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatButtonModule, ContactElementComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css"
})
export class HeaderComponent {
  contacts = CONTACTS;
}
