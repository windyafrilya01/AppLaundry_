import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { ToastControllerService } from "src/app/services/toast-controller.service";
import { LogInService } from "src/app/services/log-in.service";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public showToast: ToastControllerService,
    public user: LogInService,
    public localStorage: LocalStorageService,
    public router: Router
  ) {}

  ngOnInit() {}

  login(data: any) {
    console.log(data.form.value);
    const form = data.form.value;
    if (form == "" || form == "") {
      this.showToast.presentToast({
        message: "Kolom harus diisi",
        duration: "2000",
      });
    } else {
      let result = this.user.users.find(
        (element) =>
          element.username === form.username &&
          element.password === form.password
      );
      if (result !== undefined) {
        this.localStorage.storeData("accountData", result);
        this.showToast.presentToast({
          message: "Login Berhasil",
          duration: "2000",
        });

        this.authService.login();
      } else {
        this.showToast.presentToast({
          message: "Username atau Password Salah!",
          duration: "2000",
        });
      }
    }
  }
}
