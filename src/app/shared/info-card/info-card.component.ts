import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  @Input({required: true}) image!: { src: string, alt: string };
  @Input({required: true}) title!: string;
  @Input({required: true}) text!: string;
}
