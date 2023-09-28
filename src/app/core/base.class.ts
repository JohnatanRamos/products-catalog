import { inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { Store } from "@ngrx/store";

import { AppState } from "../store/app.reducer";
import { BaseService } from './services/base.service';
import { IFilters } from "../shared/interfaces/IFilters.interface";
import { SweetAlertService } from "./services/sweet-alert.service";

export class BaseClass {
  protected baseService = inject(BaseService);
  protected store = inject(Store<AppState>);
  protected messageService = inject(SweetAlertService);
  protected fb = inject(FormBuilder);
  protected dialog = inject(MatDialog);
  protected filters: IFilters = {};
}
