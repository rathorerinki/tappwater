
import { Component, OnInit, ViewChild, KeyValueDiffers, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';

import {TranslateService} from '@ngx-translate/core';

export interface PeriodicElement {
 
}

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})

export class TypographyComponent  implements OnInit ,DoCheck{
  next_: boolean;
  differ: any;
  data:any={};
  url:any="http://18.191.230.23:3000/";
  private countriesOptions: string[] = ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","St Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts-Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos Is","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  
  averageDataRange: boolean;

  // public addresses: any=[{
  //   address: '',
  // }];

  // public addresses: any=[];
  temp_data:any=[];
  Cities: any=[{
    city: '',
    post_from: '',
    post_to: '',
    random_post_code:[{
      Post_code_random: '',
    }]
  }];
  button_true: boolean;
  constructor(private router: Router,public translate: TranslateService,public _apiservice:ApiService,private differs: KeyValueDiffers) { 
      
  }
  
ngOnInit(){

  this.display();
  
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
  console.log("i",i)
  this.Cities[i].random_post_code.push({
    Post_code_random: '',
  });
  console.log("this.addresses",this.Cities)
}
removeAddress(i:number,j: number) {
  this.Cities[i].random_post_code.splice(j, 1);
}
remove_city(i){
  this.Cities.splice(i, 1);
}
ngDoCheck() {

}
 
country(event){
  console.log("event",event)
}

next(){
  
  this.data['city']=this.Cities;
  if( this.button_true){

        if((this.data['city'][0]['city'] !=undefined   || this.data['city'][0]['city']!='') && this.data['country'] !=undefined && ((this.data['city'][0]['post_from'] !=undefined || this.data['city'][0]['post_from'] !='')&& (this.data['city'][0]['post_to'] !=undefined || this.data['city'][0]['post_to']!='')) && this.data['utlity_enter'] !=undefined  && this.data['drinkable'] !=undefined ){

          this._apiservice.send_data(this.url+'insert',this.data).subscribe(res=>{    
              this.router.navigate(['/notifications'],{ state: { id: res,city:this.data['city']} });
          })
        }
        if(!((this.data['city'][0]['city'] !=undefined   || this.data['city'][0]['city']!='') && this.data['country'] !=undefined && ((this.data['city'][0]['post_from'] !=undefined || this.data['city'][0]['post_from'] !='')&& (this.data['city'][0]['post_to'] !=undefined || this.data['city'][0]['post_to']!='')) && this.data['utlity_enter'] !=undefined  && this.data['drinkable'] !=undefined )){
        alert("Please fill all the fields");
        } 
  }
  else if(this.data['country']!=undefined){
    alert('Defualt value are not exists for the '+this.data['country']+', Please set defualt values first!')

  }

    }
    
    back(){
      this.next_=false;
 
    }
change(country){
  this.data['country']=country;
  this._apiservice.sendData(this.url+"find_description",this.data).subscribe(res=>{
     if(res['data']!='Country not found'){

    this.data['description']=res['data']['description'];
    this.data['description_local']=res['data']['description_local']
    this.data.blog_english__country=res['data']['blog_english']
    this.data.blog_local_country=res['data']['blog_local']
    console.log("description",res['data']) 
    this.button_true=true;

       
    }
    else{
      alert('Defualt value are not exists for the '+country+', Please set defualt values first!')
      this.button_true=false;
    }
    })
}

  display(){

      const browserLang = this.translate.getBrowserLang();
      this.translate.use(sessionStorage.getItem('selected_language'));   
      this.data['random_post_code']=this.temp_data.join()
       
    }

}
