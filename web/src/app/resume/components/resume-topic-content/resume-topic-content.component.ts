import { Component, Input } from "@angular/core";
import { ResumeContent } from "../../models/resume-content-model";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-resume-topic-content",
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: "./resume-topic-content.component.html",
  styleUrl: "./resume-topic-content.component.css",
})
export class ResumeTopicContentComponent {
  @Input() topic!: ResumeContent;
}
