import { Component } from '@angular/core';
import { faSquareGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

// imported icons

  faSquareGithub=faSquareGithub;
  faLinkedin = faLinkedin;
  faDev = faDev;

// end imported icons
}
