import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  pageTitle: string;
  constructor(private translate: TranslateService, public title: Title,private apiservices:ApiService) { }
  ngOnInit(): void {
    this.translate.addLangs(['English', 'Spanish']);
    this.translate.setDefaultLang('English');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'English');

    console.log(this.translate);
  }

  setTheTitle(): void {
    this.title.setTitle(this.pageTitle);
    
  }
}
