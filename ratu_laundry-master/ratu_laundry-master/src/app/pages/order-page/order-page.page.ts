import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { ToastControllerService } from "src/app/services/toast-controller.service";

@Component({
  selector: "app-order-page",
  templateUrl: "./order-page.page.html",
  styleUrls: ["./order-page.page.scss"],
})
export class OrderPagePage implements OnInit {
  constructor(
    public localStorage: LocalStorageService,
    public showToast: ToastControllerService,
    public routing: Router
  ) {}

  jenisPakaian = [
    {
      nama: "Baju",
      jumlah: 0,
      src: "../../assets/icon/baju.png",
    },
    {
      nama: "Bed Cover",
      jumlah: 0,
      src: "../../assets/icon/bedCover.png",
    },
    {
      nama: "Boneka",
      jumlah: 0,
      src: "../../assets/icon/boneka.png",
    },
    {
      nama: "Celana",
      jumlah: 0,
      src: "../../assets/icon/celana.png",
    },
  ];

  harga: number = 0;
  hargaDasar: any;

  async ngOnInit() {
    this.hargaDasar = await this.localStorage.getData("price");
  }

  add(index: number) {
    this.jenisPakaian[index].jumlah++;
    this.countTotal();
  }

  minus(index: number) {
    if (this.jenisPakaian[index].jumlah > 0) {
      this.jenisPakaian[index].jumlah--;
      this.countTotal();
    }
  }

  countTotal() {
    let massa: number = 0;

    this.jenisPakaian.map((element) => {
      massa = element.jumlah + massa;
    });

    this.harga = massa * this.hargaDasar;
  }

  async goToPayment() {
    if (this.harga === 0) {
      this.showToast.presentToast({
        message: "Tolong masukkan info barang anda!",
        duration: 2000,
      });
    } else {
      this.localStorage.totalPrice = this.harga;
      this.routing.navigate(["/payment-page"], { skipLocationChange: true });
    }
  }

  back() {
    this.routing.navigate(["/services"], { skipLocationChange: true });
  }
}
