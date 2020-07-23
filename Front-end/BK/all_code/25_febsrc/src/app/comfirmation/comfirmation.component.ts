import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.css']
})
export class ComfirmationComponent implements OnInit {

  constructor(private router:Router,private translate: TranslateService, public title: Title,) { }

  ngOnInit() {
    this.translate.addLangs(['English', 'Spanish']);
    console.log(sessionStorage.getItem("pageTitle")=='Spanish' || sessionStorage.getItem("pageTitle")=='English')

    if(sessionStorage.getItem("pageTitle")=='Spanish' || sessionStorage.getItem("pageTitle")=='English'){

      let lang=sessionStorage.getItem("pageTitle");
      this.translate.use(lang);  
      console.log("1");
    }
    else{
      this.translate.addLangs(['English', 'Spanish']);
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
