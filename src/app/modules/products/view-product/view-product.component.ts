import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../interfaces/IProduct';
import { HeaderModalComponent } from 'src/app/shared/components/header-modal/header-modal.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [CommonModule, HeaderModalComponent, MaterialModule],
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  @Input() data!: IProduct;
  @Output() onDeleteProduct = new EventEmitter();
  @Output() onCloseModal = new EventEmitter();
  @Output() onChangeView = new EventEmitter();

  etiquetas!: string;

  ngOnInit(): void {
    this.etiquetas = this.data.etiquetas.join(',');
  }

  handleDeleteProduct() {
    this.onDeleteProduct.emit();
  }

  handleCloseModal() {
    this.onCloseModal.emit();
  }

  handleChangeView() {
    this.onChangeView.emit();
  }
}
