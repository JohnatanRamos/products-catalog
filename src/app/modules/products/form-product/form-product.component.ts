import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

import { BaseClass } from 'src/app/core/base.class';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { IProduct } from '../interfaces/IProduct';
import { HeaderModalComponent } from 'src/app/shared/components/header-modal/header-modal.component';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HeaderModalComponent
  ],
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent extends BaseClass implements OnInit {
  announcer = inject(LiveAnnouncer);
  
  @Input() data!: IProduct;
  @Output() onDeleteProduct = new EventEmitter();
  @Output() onCloseModal = new EventEmitter();
  @Output() onSaveProduct = new EventEmitter();
  
  productoForm!: FormGroup;
  keywords: string[] = [];
  urlRegex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;  

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      sku: ['', Validators.required],
      imagen: ['', [Validators.pattern(this.urlRegex)]],
      etiquetas: [],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
    });

    if (this.data) {
      this.productoForm.patchValue(this.data);
    }
  }

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);

      this.announcer.announce(`removed ${keyword}`);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.keywords.push(value);
    }
    event.chipInput!.clear();
  }

  handleDeleteProduct() {
    this.onDeleteProduct.emit();
  }

  handleCloseModal() {
    this.onCloseModal.emit();
  }

  handleSaveProduct() {
    this.onSaveProduct.emit(this.productoForm.getRawValue());
  }
}
