import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'skeleton-input-overlay',
  templateUrl: './input-overlay.component.html',
  styleUrls: ['./input-overlay.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class InputOverlayComponent {
  @Input() active = false
}
