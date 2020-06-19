import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  constructor(
    private authService: AuthenticationService,
    public localStorage: LocalStorageService,
    public router: Router
  ) {}
  data: any = {
    fullName: "",
  };
  async ngOnInit() {
    this.data = await this.localStorage.getData("accountData");
    console.log(this.data);
  }

  logout() {
    this.authService.logout();
  }

  goDetails(data: string) {
    console.log(data);
    this.localStorage.pageParameter = data;
    this.router.navigate(["/services"], { skipLocationChange: true });
  }
}
