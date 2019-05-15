import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router'
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.css']
})
export class MyNavbarComponent {

  isSplash: boolean = false;
  ActiveBtnName: string = "";
  selected = 'option2';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(public translate: TranslateService, private breakpointObserver: BreakpointObserver, private route: ActivatedRoute) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    this.route.url.subscribe(data => {
      if (data[0].path == "analysis") {
        var urlPath: any = this.route.firstChild.firstChild;
        this.ActiveBtnName = urlPath.routeConfig.path;
        this.isSplash = urlPath.routeConfig.path == 'splash' ? true : false;
      }
      console.log(data)
    })
  }

  changeLangulage(eve){
    this.translate.use(eve.value);
  }


}
