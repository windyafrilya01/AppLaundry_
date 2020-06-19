import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.page.html",
  styleUrls: ["./services.page.scss"],
})
export class ServicesPage implements OnInit {
  constructor(
    public localStorage: LocalStorageService,
    public router: Router
  ) {}

  data: string;

  listDetail = [
    {
      name: "Komplit",
      items: [
        { name: "Cuci Komplit Reguler (2 HARI)", harga: 8000 },
        {
          name: "Cuci Komplit Kilat (1 HARI)",
          harga: 15000,
        },
        {
          name: "Cuci Komplit 5 Jam (5 JAM)",
          harga: 20000,
        },
      ],
    },
    {
      name: "Cuci",
      items: [
        { name: "Cuci Kering Reguler (2 HARI)", harga: 6000 },
        {
          name: "Cuci Kering Kilat (1 HARI)",
          harga: 9000,
        },
        {
          name: "Cuci Kering Express (5 JAM)",
          harga: 15000,
        },
      ],
    },
    {
      name: "Setrika",
      items: [
        { name: "Setrika Reguler (2 HARI)", harga: 6000 },
        {
          name: "Setrika Kilat (1 HARI)",
          harga: 9000,
        },
        {
          name: "Setrika Express (5 JAM)",
          harga: 12000,
        },
      ],
    },
  ];

  useThis: any;

  ngOnInit() {
    this.data = this.localStorage.pageParameter;
    this.useThis = this.listDetail.find(
      (element) => element.name === this.data
    );
    console.log(this.useThis);
  }

  async orderPage(data: number) {
    console.log(data);
    await this.localStorage.storeData("price", data);
    this.router.navigate(["/order-page"], { skipLocationChange: true });
  }

  back() {
    this.router.navigate(["/dashboard"], { skipLocationChange: true });
  }
}
