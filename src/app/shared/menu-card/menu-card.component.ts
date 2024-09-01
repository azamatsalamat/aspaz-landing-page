import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.css'
})
export class MenuCardComponent {
  @Input({required: true}) image!: { src: string, alt: string };
  @Input({required: true}) name!: string;
  @Input({required: true}) price!: number;
}
