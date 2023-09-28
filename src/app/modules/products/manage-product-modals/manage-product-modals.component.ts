import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseClass } from 'src/app/core/base.class';
import { ViewProductComponent } from '../view-product/view-product.component';
import { FormProductComponent } from '../form-product/form-product.component';
import { IProduct } from '../interfaces/IProduct';
import { refreshList } from 'src/app/store/actions/filters.actions';

@Component({
  selector: 'app-manage-product-modals',
  standalone: true,
  imports: [CommonModule, ViewProductComponent, FormProductComponent],
  templateUrl: './manage-product-modals.component.html',
  styleUrls: ['./manage-product-modals.component.scss']
})
export class ManageProductModalsComponent extends BaseClass implements OnInit {
  private dialogRef = inject(MatDialogRef<ManageProductModalsComponent>);
  data: IProduct = inject(MAT_DIALOG_DATA);

  viewProductForm = false;

  ngOnInit(): void {
    if (this.data) {
      this.viewProductForm = false;
    } else {
      this.viewProductForm = true;
    }
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }

  validateAction(body: IProduct) {
    if (this.data) {
      this.editarProducto(body);
      return;
    }
    this.guardarProducto(body);
  }

  guardarProducto(body: IProduct) {
    this.baseService.postMethod(`products`, body).subscribe({
      next: () => {
        this.messageService.message('Producto creado.', 'success');
        this.cerrarModal();
        this.store.dispatch(refreshList());
      },
      error: (error: HttpErrorResponse) => {
        this.messageService.message(error.error.message, 'error');
      }
    });
  }

  editarProducto(body: IProduct) {
    this.baseService.patchMethod(`products/${this.data._id}`, body).subscribe({
      next: () => {
        this.messageService.message('Producto actualizado correctamente.', 'success');
        this.cerrarModal();
        this.store.dispatch(refreshList());
      },
      error: (error: HttpErrorResponse) => {
        this.messageService.message(error.error.message, 'error');
      }
    });
  }

  eliminar() {
    this.baseService.deleteMethod(`products/${this.data._id}`).subscribe({
      next: () => {
        this.messageService.message('Producto eliminado correctamente.', 'success');
        this.cerrarModal();
        this.store.dispatch(refreshList());
      }
    });
  }
}
