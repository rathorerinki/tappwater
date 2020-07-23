import { Component, OnInit,ViewChild, KeyValueDiffers } from '@angular/core';

import { ContributorComponent } from '../contributor/contributor.component';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import {ApiService} from '../api.service';
import {MatExpansionModule, MatInputModule} from '@angular/material'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
export interface Brand {
  value: string;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  next_: boolean;
  differ: any;
  url:any="http://18.191.230.23:3000/";
  id: any;
  data:any={};
  private countriesOptions: string[] = ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","St Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts-Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos Is","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  country  : any;
  Cities: any=[];

  constructor(private router: Router,public translate: TranslateService,public _apiservice:ApiService,private differs: KeyValueDiffers) { 
      
    this.id=this.router.getCurrentNavigation().extras.state.id
    console.log(this.router.getCurrentNavigation().extras.state.id);  
  }

  
ngOnInit(){
 
  this.display();
  
}
ngDoCheck() {

}


addCities(){
  this.Cities.push({
    city: '',
    post_from: '',
    post_to: '',
    random_post_code:[
      {
        Post_code_random: '',
      }
    ]
  });
}
addAddress(i) {
  // console.log("i",i)
  this.Cities[i].random_post_code.push({
    Post_code_random: '',
  });
  // console.log("this.addresses",this.Cities)
}
removeAddress(i:number,j: number) {
  this.Cities[i].random_post_code.splice(j, 1);
}
remove_city(i){
  this.Cities.splice(i, 1);
}
  next(){
    this.data['city']=this.Cities;
  console.log("this.data",this.data)
    console.log("Rinky",this.data)
    this._apiservice.sendData(this.url+'update_basic_details',this.data).subscribe(
      res=>{
        console.log("Rinky",res);
        this.router.navigate(['/icons'],{ state: { id: this.data['_id'],country:this.data.country } });
      }
    )

    
    }
    back(){
      this.next_=false;
 
    }

  display(){     
      console.log("value",sessionStorage.getItem('selected_language'))    
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(sessionStorage.getItem('selected_language'));
      this._apiservice.postDataid(this.url+'select_details',this.id).subscribe(res=>{
     

        if(res['city'][0]['city']==undefined){
          console.log("here")
          this.addCities();
        }
        else{
        this.Cities=res['city'];
  
        }
  
        console.log("rs",res)

      if((res['post_to']!=null || res['post_to']!=undefined) && res['city'][0]['post_to']==undefined){
        console.log("1")
        this.Cities[0]['post_to']=res['post_to'];
      }

      if((res['post_from']!=null || res['post_from']!=undefined) && res['city'][0]['post_from']==undefined){
        this.Cities[0]['post_from']=res['post_from'];
        console.log("2")


      }


      this.data=res;
      this.country = this.data.country;
      console.log("3",this.Cities);

      console.log("response",this.data)
      })
          
    }
}

