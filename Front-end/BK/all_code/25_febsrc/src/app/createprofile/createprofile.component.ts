import { Component, OnInit } from '@angular/core';
import {  Routes } from '@angular/router';
import {Router} from '@angular/router';
import { ApiService } from '../api.service';

import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { Session } from 'protractor';
declare var $: any;


export interface Food {
  value: string;
  viewValue: string;
  img: string;
}

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent implements OnInit {
  data:any={};
  pageTitle: string;
  lang_data:string;
  selectedCode='English'
  languages: any[] = [
    { value: 'English', viewValue: 'English', img: '../../assets/english.png' },
    { value: 'Spanish', viewValue: 'Spanish', img: '../../assets/spanish.png' },

  ];
  path: boolean =true;
  constructor(private router:Router,private apiservices:ApiService,private translate: TranslateService, public title: Title) { }

  ngOnInit(): void {
$(".mat-form-field-infix").css("line-height",1);

   
      if(sessionStorage.getItem("pageTitle")){
        this.selectedCode=sessionStorage.getItem("pageTitle");
        if(this.selectedCode=='English'){
          // alert("in")
          this.path=true;
        }
        else if(this.selectedCode=='Spanish'){
        this.path=false;
        }
        this.translate.setDefaultLang(this.selectedCode);
        this.translate.use(this.selectedCode);
      }
else{
      // alert(sessionStorage.getItem("pageTitle"))
      this.translate.addLangs(['English', 'Spanish']);
      this.translate.setDefaultLang('English');
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'English');
      console.log("this.translate.use",this.translate.currentLang)
      console.log(this.translate); 
     } 
  }

  catch_value(event)
  {
console.log("event",event);

  }
  setTheTitle(): void {
    this.title.setTitle(this.pageTitle);  
    console.log(this.lang_data)
    
  }
  function1(l,lang_data){


    if(lang_data=='English'){
      // alert("in")
      this.path=true;
    }
    else if(lang_data=='Spanish'){
    this.path=false;
    }
    console.log("pageTitle",lang_data)
    sessionStorage.removeItem("pageTitle")
    sessionStorage.setItem("pageTitle",lang_data)
  }
  okay(){

    console.log(this.data);    
    this.apiservices.postdata("post_code",this.data).subscribe(data=>{

      console.log("response",data);
    

      if(data['status']=="false"){

        this.router.navigate(['/Nodata',this.data['postcode']])

      }
      else if(data['status']=="true"){
        
        var temp=data['data'];
        temp=temp[0];
        console.log("data['data'][0]['_id']",temp['_id'])
        this.router.navigate(['/Report',temp['_id'],this.data['postcode']] )
      }

    })
    // this.router.navigate(['/Nodata'])
    
  }

}
