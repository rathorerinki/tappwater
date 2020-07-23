import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router, NavigationEnd} from '@angular/router'; // import Router and NavigationEnd

import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { Session } from 'protractor';
// declare var $: any;
import * as $ from 'jquery';  


export interface Food {
  value: string;
  viewValue: string;
  img: string;
}
declare let ga: Function;

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
  value:any="English";
  languages: any[] = [
    { value: 'English', viewValue: 'English', img: '../../assets/english.png' },
    { value: 'Spanish', viewValue: 'Spanish', img: '../../assets/spanish.png' },
    { value: 'Italian', viewValue: 'Italian', img: '../../assets/it.png' },

  ];
   private countriesOptions: string[] = ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","St Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts-Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos Is","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  country  : any="Spain";
  path: boolean =true;
  page_redirect: string='/tap-water-quality-report';
  msg: string;
  msg_con: boolean;
  constructor(private router:Router,private apiservices:ApiService,private translate: TranslateService, public title: Title) { 
 
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        let value;
        if(event.urlAfterRedirects=='/'){
          value='Home page'
        console.log("event.urlAfterRedirects true",value)
        ga('set', 'page', value);
        ga('send', 'pageview');

}

      }

    });
 
    this.data.country=this.country;

  }

  ngOnInit(): void {
    console.log(this.data.country)
    $(".mat-form-field-infix").css("line-height",1);
   
      if(sessionStorage.getItem("pageTitle")){
        this.selectedCode=sessionStorage.getItem("pageTitle");
        this.value=this.selectedCode;
        if(this.selectedCode=='English'){
          // alert("in")
          this.value='English';
          this.page_redirect='/tap-water-quality-report'
        }
        else if(this.selectedCode=='Spanish'){
          this.value='Spanish';
          this.page_redirect='/calidad-del-agua'
        }
        else if(this.selectedCode=='Italian'){
          this.value='Italian';
          this.page_redirect='/calidad-del-agua'
        }

        if(this.value=='Spanish'&& this.data.country=='Spain'){
          console.log("if")
            // this.translate.addLangs(['English', 'Spanish','Italian']);
            this.translate.setDefaultLang('Spanish');
            this.translate.use('Spanish');
               }
         else if(this.value=='Italian'&& this.data.country=='Italy'){
          this.translate.setDefaultLang('Italian');
          this.translate.use('Italian');
          // console.log(this.translate);
         }
         else {
          this.translate.setDefaultLang('English');
          this.translate.use('English');
          // console.log("this.translate.use",this.translate.currentLang)
    
         }
        // this.translate.setDefaultLang(this.selectedCode);
        // this.translate.use(this.selectedCode);
      }
else{
      this.translate.addLangs(['English', 'Spanish','Italian']);
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
      console.log("l",lang_data)
    if(lang_data=='Spanish'&& this.country=='Spain'){
    this.value=lang_data;

        console.log("1")
        this.translate.use("Spanish")
        sessionStorage.setItem("pageTitle","Spanish")
        this.page_redirect='/calidad-del-agua'
        }
      else if(lang_data=='Italian'&& this.country=='Italy'){
    this.value=lang_data;

        this.translate.use("Italian")
        sessionStorage.setItem("pageTitle","Italian")
        this.page_redirect='/calidad-del-agua'

      }
    else {
        this.translate.use("English")
        this.value=lang_data;
        sessionStorage.setItem("pageTitle","English")
        this.page_redirect='/tap-water-quality-report'


      }    
    
  }


  change_country(country){
    console.log("country",country ,"lang:-",this.value)
    this.data.country=country;
    
    if(this.value=='Spanish'&& country=='Spain'){
     console.log("1")
      this.translate.addLangs(['English', 'Spanish','Italian']);
      this.translate.setDefaultLang('English');
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'Spanish');
      console.log("this.translate.use",this.translate.currentLang)
      // console.log(this.translate);
     }
     else if(this.value=='Italian'&& country=='Italy'){
      console.log("2")
      this.translate.addLangs(['English', 'Spanish','Italian']);
      this.translate.setDefaultLang('English');
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/Italian|Spanish/) ? browserLang : 'Italian');
      console.log("this.translate.use",this.translate.currentLang)
      // console.log(this.translate);
     }
     else {
    console.log("3")
      this.translate.addLangs(['English', 'Spanish','Italian']);
      this.translate.setDefaultLang('English');
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'English');
      // console.log("this.translate.use",this.translate.currentLang)

     }
  }
  okay(){
    console.log(this.data)

    if(this.value=='Spanish' && this.data.country=='Spain'){
        console.log("its'spanish")
        sessionStorage.setItem("pageTitle","Spanish")

    }
     else if(this.value=="Italian" && this.data.country =="Italy"){
      console.log("its'Italian")
      sessionStorage.setItem("pageTitle","Italian")

     }
     else{
      console.log("its'Othre")
      sessionStorage.setItem("pageTitle","English")


     }

    console.log(this.data,"gfgh",sessionStorage.getItem("pageTitle"));
    
        console.log("data>>>>>>>>>>>>>>>",this.data)
    this.apiservices.postdata("post_code",this.data).subscribe(data=>{
      console.log("response",data);
      if(data['status']=="country not found"){
        this.msg_con=true;
        // this.msg="No report found for given postcode and country";
        this.router.navigate(['/Nodata',this.data['postcode'],this.data['country']])

      }
      else if(data['status']=="false"){
        this.router.navigate(['/Nodata',this.data['postcode'],this.data['country']])
      }
      else if(data['status']=="true"){       

        console.log("data['data']",data['data']['_id'])
        this.router.navigate([this.page_redirect,data['data']['_id'],this.data['postcode']] )
      }

    })
    // this.router.navigate(['/Nodata'])
    
  }

}
