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
  value:any="English";
  languages: any[] = [
    { value: 'English', viewValue: 'English', img: '../../assets/english.png' },
    { value: 'Spanish', viewValue: 'Spanish', img: '../../assets/spanish.png' },
    { value: 'Italian', viewValue: 'Italian', img: '../../assets/it.png' },

  ];
   private countriesOptions: string[] = ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","St Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts-Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos Is","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  country  : any="Spain";
  path: boolean =true;
  constructor(private router:Router,private apiservices:ApiService,private translate: TranslateService, public title: Title) { }

  ngOnInit(): void {
$(".mat-form-field-infix").css("line-height",1);

   
      if(sessionStorage.getItem("pageTitle")){
        this.selectedCode=sessionStorage.getItem("pageTitle");
        if(this.selectedCode=='English'){
          // alert("in")
          this.value='English';
        }
        else if(this.selectedCode=='Spanish'){
          this.value='Spanish';
        }
        else if(this.selectedCode=='Italian'){
          this.value='Italian';
        }
        this.translate.setDefaultLang(this.selectedCode);
        this.translate.use(this.selectedCode);
      }
else{
      // alert(sessionStorage.getItem("pageTitle"))
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



    sessionStorage.setItem("pageTitle",lang_data)
    
    if(lang_data=='English'){
      return this.value='English'
    }
    else if(lang_data=='Spanish'){
      return this.value='Spanish'
    }
    else if(lang_data=='Italian'){
       this.value='Italian'
      

      }
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
