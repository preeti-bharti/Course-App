import { Component } from '@angular/core';
import { faCoffee,faPen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courses-app';
  faCoffee = faCoffee;
  faPen=faPen;
}
