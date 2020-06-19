import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class ToastControllerService {
  constructor(public toastController: ToastController) {}

  async presentToast({ message, duration }) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
    });
    toast.present();
  }
}
