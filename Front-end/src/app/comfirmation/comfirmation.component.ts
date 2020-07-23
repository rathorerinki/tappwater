import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router'; // import Router and NavigationEnd

declare let ga: Function;

@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.css']
})
export class ComfirmationComponent implements OnInit {

  constructor(private router:Router,private translate: TranslateService, public title: Title,) {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        let value;
        var str=event.urlAfterRedirects;
        var splitted = str.split("/", 2); 
  
        if(splitted[1]=='confirmation'){
          value='Confirmation page';
        console.log("event.urlAfterRedirects true",value)
        ga('set', 'page', value);
        ga('send', 'pageview');
  
  }
      }

    })
   }

  ngOnInit() {
    this.translate.addLangs(['English', 'Spanish','Italian']);
    console.log(sessionStorage.getItem("pageTitle")=='Spanish' || sessionStorage.getItem("pageTitle")=='English' ||sessionStorage.getItem("pageTitle")=='English'||sessionStorage.getItem("pageTitle")=='Italian')

    if(sessionStorage.getItem("pageTitle")=='Spanish' || sessionStorage.getItem("pageTitle")=='English' ||sessionStorage.getItem("pageTitle")=='Italian'){

      let lang=sessionStorage.getItem("pageTitle");
      this.translate.use(lang);  
      console.log("1");
    }
    else{
      this.translate.addLangs(['English', 'Spanish','Italian']);
      this.translate.setDefaultLang('English');
  
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'English');
  
      console.log("2");
    }
  }
  okay(){
    sessionStorage.removeItem("pageTitle")
    this.router.navigate(['/'])
  }
}
