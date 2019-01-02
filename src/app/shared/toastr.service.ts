import { Injectable } from '@angular/core';
import { Toastr } from './toastr.model';

import Toastify from 'toastify-js';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  showToast(toastify: Toastr) {
    return Toastify({
      text: toastify.text,
      duration: 2500,
      className: 'toastr-' + toastify.className,
    }).showToast();
  };
}
