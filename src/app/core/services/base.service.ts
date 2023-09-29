import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/modules/products/interfaces/IProduct';
import { IGetProducts } from 'src/app/modules/products/interfaces/IGetProducts';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  apiUrl = 'http://localhost:3000/';

  http = inject(HttpClient);

  getWithFilters(nameMethod: string, options: {}) {
    const query = new URLSearchParams(options).toString();
    return this.http.get<IGetProducts>(
      this.apiUrl + nameMethod + `/?${query}`
    );
  }

  postMethod(nameMethod: string, body: IProduct) {
    return this.http.post(this.apiUrl + nameMethod, body);
  }

  patchMethod(nameMethod: string, body: IProduct) {
    return this.http.patch(this.apiUrl + nameMethod, body);
  }

  deleteMethod(nameMethod: string) {
    return this.http.delete(this.apiUrl + nameMethod);
  }
}
