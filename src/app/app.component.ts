import { Component } from '@angular/core';
import { BaseClass } from './core/base.class';
import { ManageProductModalsComponent } from './modules/products/manage-product-modals/manage-product-modals.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseClass {
  title = 'Productos';
  productForm = ManageProductModalsComponent;
}
