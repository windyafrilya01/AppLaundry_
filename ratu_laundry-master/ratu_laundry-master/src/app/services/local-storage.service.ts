import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private storage: Storage) { }

  pageParameter: any;
  totalPrice: any;

  // set a key/value
  async storeData(name: string, value: any) {
    await this.storage.set(name, value);
  }

  // Or to get a key/value pair
  async getData(name: string) {
    const result = await this.storage.get(name)
    return result
  }
}
