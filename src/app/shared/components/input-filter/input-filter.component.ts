import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as actions from '../../../store/actions/filters.actions';

@Component({
  selector: 'app-input-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss'],
})
export class InputFilterComponent implements OnInit, OnDestroy {
  protected store = inject(Store<AppState>);
  $worldToSearch!: Subscription;
  worldToSearch = new FormControl('');

  ngOnInit(): void {
    this.$worldToSearch = this.worldToSearch.valueChanges
      .pipe(debounceTime(600))
      .subscribe({
        next: () => {
          const value = this.worldToSearch.value || '';

          if (value || value !== '') {
            this.addFilter(value);
          } else {
            this.removeFilter();
          }
        },
      });
  }

  ngOnDestroy(): void {
    this.$worldToSearch.unsubscribe();
  }

  removeFilter() {
    this.store.dispatch(actions.removeFilter({ field: 'valueToFilter' }));
  }

  addFilter(valueToFilter: string) {
    this.store.dispatch(
      actions.setFilters({
        valueToFilter,
        page: 0,
      })
    );
  }
}
