import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { MaterialModule } from '../../modules/material.module';
import { BaseClass } from 'src/app/core/base.class';
import * as actions from '../../../store/actions/filters.actions';
import { IFilters } from '../../interfaces/IFilters.interface';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent extends BaseClass implements OnInit {
  @Input() totalRecords!: number;
  
  $store!: Subscription;
  page!: number;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.$store = this.store.select('filters').subscribe({
      next: (res: IFilters) => {
        this.page = res.page || 0;
      }
    });
  }

  changePage(event: PageEvent) {
    this.store.dispatch(actions.setFilters({ page: event.pageIndex, limit: event.pageSize }));
  }
}
