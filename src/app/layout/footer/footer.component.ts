import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MentionsLegalesComponent } from "../../shared/mentions-legales/mentions-legales.component";
import { PolitiqueConfidentialiteComponent } from "../../shared/politique-confidentialite/politique-confidentialite.component";

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive, MentionsLegalesComponent, PolitiqueConfidentialiteComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
