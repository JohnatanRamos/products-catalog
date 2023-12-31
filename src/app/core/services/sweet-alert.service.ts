import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  message(text: string, typeMessage: SweetAlertIcon) {
    Swal.fire({
      icon: typeMessage,
      text,
      timer: 3500
    })
  }
}
