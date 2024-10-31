import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Contact } from "../../models/contact.model";
import { CONTACTS } from "../../models/dummy-contacts";

@Component({
  selector: "app-contact-element",
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: "./contact-element.component.html",
  styleUrl: "./contact-element.component.css"
})
export class ContactElementComponent {
  @Input() contact = CONTACTS[0];
  @Input() onClick: ((contact: Contact) => void) | undefined;

  get imagePath() {
    return "assets/" + this.contact.iconPath;
  }

  get name() {
    return this.contact.name;
  }

  onContactClick() {
    if (!this.onClick) {
      return;
    }

    this.onClick(this.contact);
  }
}
