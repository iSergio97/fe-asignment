import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  finder: FormControl = new FormControl("");

  showChanges(): void {
    console.log(this.finder.value);
  }

  showLog() {
    console.log("Botón pulsado");
    this.router.navigate(["/"]);
    
  }

}
