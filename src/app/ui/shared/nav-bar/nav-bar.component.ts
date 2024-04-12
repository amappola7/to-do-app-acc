import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  titleButton: string = "Ul"

  onClick() {
    alert('Presionaste el botón');
  }
}
