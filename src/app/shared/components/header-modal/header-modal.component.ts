import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material.module';

@Component({
  selector: 'app-header-modal',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss']
})
export class HeaderModalComponent {
  @Input() title!: string;
}
