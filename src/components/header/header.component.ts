import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from '../carrossel/carrossel.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CarrosselComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
