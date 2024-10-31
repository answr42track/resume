import { Component, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { Education, Experience, ResumeContent, Skills } from "./models/resume-content-model";
import { ResumeTopicContentComponent } from "./components/resume-topic-content/resume-topic-content.component";

@Component({
  selector: "app-resume",
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule, MatListModule, ResumeTopicContentComponent],
  templateUrl: "./resume.component.html",
  styleUrl: "./resume.component.css",
})
export class ResumeComponent {
  topics: ResumeContent[] = [new Experience(), new Education(), new Skills()];
  selectedIndex = signal(0);

  onSectionSelect(index: number) {
    this.selectedIndex.set(index);
  }

  isSelected(index: number): boolean {
    return this.selectedIndex() == index;
  }
}
