import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yama',
  standalone: true,
  imports: [],
  templateUrl: './yama.component.html',
  styleUrl: './yama.component.css'
})
export class YamaComponent {
  constructor(private router: Router) {}

  palCrud() {
    this.router.navigate(['/crud']);
  }
}
