import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthenticationService } from "./services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authenticationService: AuthenticationService,
    public router: Router
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    this.authenticationService.authenticationState.subscribe((state) => {
      console.log(state)
      
      if(state === null){
        console.log('NULL')
      }else if (!state) {
        console.log("Boooo");
        this.router.navigate(["login"], { replaceUrl: true });
      } else {
        console.log("HOHOHO");
        this.router.navigate(["dashboard"], { replaceUrl: true });
      }
    });
  }
}
