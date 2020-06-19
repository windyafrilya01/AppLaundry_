import { Platform } from "@ionic/angular";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { BehaviorSubject } from "rxjs";

const TOKEN_KEY = "auth-token";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(null);

  constructor(private storage: Storage, private plt: Platform) {
    this.find();
  }

  async find() {
    await this.plt.ready();
    this.checkToken();
  }

  async checkToken() {
    const res = await this.storage.get(TOKEN_KEY);
    console.log(res);
    if (res) {
      this.authenticationState.next(true);
    } else {
      this.authenticationState.next(false);
    }
  }

  async login() {
    await this.storage.set(TOKEN_KEY, "Bearer 1234567");
    return this.authenticationState.next(true);
  }

  async logout() {
    await this.storage.remove(TOKEN_KEY);
    await this.storage.remove("accountData");
    return this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
