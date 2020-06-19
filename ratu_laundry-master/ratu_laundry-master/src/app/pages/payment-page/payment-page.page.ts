import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
  selector: "app-payment-page",
  templateUrl: "./payment-page.page.html",
  styleUrls: ["./payment-page.page.scss"],
})
export class PaymentPagePage implements OnInit {
  harga: number = null;
  money: number = null;

  constructor(
    public localStorage: LocalStorageService,
    public alertController: AlertController,
    public router: Router
  ) {}

  ngOnInit() {
    this.harga = this.localStorage.totalPrice;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Transaksi diterima",
      message: "Pakaian anda Rapi adalah Prioritas kami.",
      buttons: [
        {
          text: "Okay",
          role: "okay",
          cssClass: "primary",
          handler: () => {
            this.router.navigate(['dashboard'], { skipLocationChange: true });
          },
        },
      ],
    });
    if (this.money - this.harga >= 0) {
      await alert.present();
    } else {
      console.log(this.harga);
      console.log(this.money);
      console.log(this.money - this.harga >= 0);
    }
  }

  back() {
    this.router.navigate(["/order-page"], { skipLocationChange: true });
  }
}
