import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material.module';
import { BaseClass } from 'src/app/core/base.class';
import * as actions from '../../../store/actions/filters.actions';

@Component({
  selector: 'app-price-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss']
})
export class PriceFilterComponent extends BaseClass {
  minValue = new FormControl(0);
  maxValue = new FormControl(0);

  filterByPrice() {
    this.store.dispatch(
      actions.setFilters({
        maxValue: this.maxValue.value || 0,
        minValue: this.minValue.value || 0,
        page: 0,
      })
    );
  }

  clearFilter() {
    this.store.dispatch(actions.removePriceFilter());
    this.minValue.reset();
    this.maxValue.reset();
  }

  validateValues() {
    const minValue = this.minValue.value;
    const maxValue = this.maxValue.value;

    if (!minValue) {
      this.messageService.error('Debe agregar un valor minimo', 'error');
      return;
    }

    if (!maxValue) {
      this.filterByPrice();
      return;
    }

    if (maxValue > minValue) {
      this.filterByPrice();
      return;
    }
    this.messageService.error('El valor maximo debe de ser mayor', 'error');
  }
}
