import { Component } from '@angular/core';
import { faSquareGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';

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

  title = "Hi, i'm Chelsea!"
  subtitle = "Certified Full Stack Developer"
  paragraph ="I am passionate about developing applications and creating solutions."


  icons = [faSquareGithub, faLinkedin, faDev];
  
// end imported icons
}
