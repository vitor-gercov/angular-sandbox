import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringHelperService {
  isStringEmpty(value: string): boolean {
    return value === undefined || value.trim() === ''
  }
}
