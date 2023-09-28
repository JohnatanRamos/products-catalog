import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';
import { IGetProducts } from '../interfaces/IGetProducts';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';
import { BaseClass } from 'src/app/core/base.class';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { IFilters } from 'src/app/shared/interfaces/IFilters.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    PaginatorComponent,
    MaterialModule
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export default class ProductsComponent extends BaseClass implements OnInit, OnDestroy {
  $store!: Subscription;
  products: IProduct[] = [];
  totalRecords: number = 0;

  ngOnInit(): void {
    this.$store = this.store.select('filters').subscribe({
      next: (res: IFilters) => {
        this.filters = res;
        this.getProducts();
      }
    });
  }

  ngOnDestroy(): void {
    this.$store.unsubscribe();
  }

  getProducts() {
    this.baseService.getWithFilters('products/filters', this.filters).subscribe({
      next: (res: IGetProducts) => {
        this.products = res.products;
        this.totalRecords = res.totalRecords;
      },
    });
  }
}
