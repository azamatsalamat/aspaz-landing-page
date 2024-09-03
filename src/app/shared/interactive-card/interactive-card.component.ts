import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interactive-card',
  standalone: true,
  imports: [],
  templateUrl: './interactive-card.component.html',
  styleUrl: './interactive-card.component.css'
})
export class InteractiveCardComponent {
  @Input({required: true}) title!: string;
}
