import { Component, OnInit, KeyValueDiffers } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../app/api.service';
import { forkJoin } from 'rxjs';
import {MatRadioModule, MatRadioChange, MatRadioButton} from '@angular/material/radio';


declare const google: any;


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  private countriesOptions: string[] = ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","St Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts-Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos Is","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  data:any={};
  next_: boolean;
  differ: any;
  url:any="http://18.191.230.23:3000/"

  //start water safety
  Free_Chlorine:any={};
  Total_Chlorine:any={};
  Chloramine: any={};

  data_water_safety: any=[];

  //end water safety

  //start general
  Temperature:any={};
  Hardness:any={};
  Hardness_f:any={};
  pH:any={};
  Turbidity:any={};
  Conductivity:any={};
  Color:any={};
  Odor:any={};
  TDS:any={};
  Microplastics:any={};
  LSI:any={};
  Bicarbonate:any={};
  Alkalinity:any={};
  Oxidation:any={};
  data_general: any=[];
//end general


//start pathogens
eColi:any={};
Clostridium:any={};
Enterococcus:any={};
Microbial_Cysts:any={};
data_pathogens: any=[];

//end pathogens
//start chemical parameter
Cyanide_total:any={};
Fluoride:any={};
Mercury:any={};
Nitrites:any={};
Nitrates:any={};
data_chemical_parameter: any=[];
//end chemical parameter

//start Minerals
Magnesium:any={};
Calcium:any={};
Potassium:any={};
Chloride:any={};
  data_minerals: any=[];

//end Minerals
//start metals
Aluminium:any={};
Antimony:any={};
Arsenic:any={};
Barium:any={};
Cadmium:any={};
Chromium:any={};
Copper:any={};
Lead:any={};
Manganese:any={};
Iron:any={};
Nickel:any={};
Selenium:any={};
Sodium:any={};
Zinc:any={};
  data_metals: any=[];
//end metals

//start Chlorine_bi_products
Total_Trichloroethylene:any={};
Trichloroethylene:any={};
Tetrachloroethylene:any={};
Total_Trihalomethanes:any={};
Dichloromethane:any={};
data_Chlorine_bi_products: any=[];

//end Chlorine_bi_products
//Start HAAs


Total_haloacetic_acids:any={};
//end HAAs

//start Pesticides
Chlordane:any={};
Heptachlor:any={};
Lindane:any={};
Total_pesticides:any={};
data_HAAs: any=[];
  data_Pesticides: any=[];
//end Pesticides

//start Herbicides
D_2_4:any={};
Atrazine:any={};
Total_Herbicides:any={};
data_Herbicides: any=[];
//end Herbicides

//start Perfluorinated_chemicals_  
PFOA:any={};
PFOS:any={};
PFNA:any={};
data_other: any=[];
//end Perfluorinated_chemicals_

// start other
Ammonia:any={};
Asbestos:any={};
Perchlorate:any={};
Polonium:any={};
Radium:any={};
Silver:any={};
Sulfate:any={};
Uranium:any={};
data_Perfluorinated_chemicals: any=[];
 
  //end other
  Atenolol:any={};
  Carbamazepine:any={};
  Estrone:any={};
  Meprobamat:any={};
  Trimethoprim:any={};
  data_Pharmaceuticals: any=[];
  error: boolean;
  max: any;
  min: any;
  water_safety_test: Object;
  des: any={};
  Bactrias:any= {};
  ok: boolean=false;
  values:boolean
  change: Boolean;
  selection: any=' ';
  // default:boolean=true;
  Country:any={}
  fetch_country: any;
  constructor(private http:HttpClient,private router: Router,public translate: TranslateService,public _apiservice:ApiService,private differs: KeyValueDiffers) { 
    this.data.selection=' '
  }
  
ngOnInit(){
  // this.data['country']='Afghanistan';
  // console.log("value country",this.data['country'])
  const browserLang = this.translate.getBrowserLang();
  this.translate.use(sessionStorage.getItem('selected_language'));
  this._apiservice.getData(this.url+"all_country_custom").subscribe(data=>{
    console.log("data",data['data'])
    this.fetch_country=data['data'];
  })

}
 
data_function(checked){
console.log(checked)
}
ngDoCheck() {

}
function_selection(selection){
  if(this.selection=='true'){
    console.log(selection)
    this.Hide_display();
  this.data.selection="custom";
  }
  if(this.selection=='false'){
  console.log(selection)
  this.Country['country']='Spain'
  // if(this.Country['country']!=undefined){
    this.data.selection="default";  
      console.log("in")
       this.display();  
    //  }  
  }

}


country_function(country){
  if(this.Country['country']!=undefined){
  this.data.selection="default";
  this.data.custom_country=country;
    console.log("in")
     this.display();  
   }
}
onKey(event){ 
    this.min =event.srcElement.min;
    this.max=event.srcElement.max;
    var value=parseInt(event.srcElement.value);
  }

 
  alertfunction(){

    console.log("this.data",this.data['country'])
    if(this.data['country']!=undefined){
      this.details();
      
    }
   else{
     alert("Please select country");
   }
 }

 details(){
  console.log("this.data",this.data)

  //  return false;
  const description=this._apiservice.sendData(this.url+"details_description",this.data)
  let requestArray=[]
  requestArray.push(description,);
  forkJoin(requestArray).subscribe(results => {   
    if(results[0]['data']!="Country already exists"){
    this.data.description=''
    this.data.country;
    this.data.description_local=''
    this.data.blog_english=''
    this.data.blog_local=''
    this.ok=true
    console.log('this.ok',this.ok)
// return false;
      if(this.ok==true){

      this.Water_safety();
      this.general();
      this.pathogens();
      this.Chemical_parameters();
      this.Minerals();
      this.metals();
      this.Chlorine_bi_products();
      this.HAAs();
      this.Pesticides();
      this.Herbicides();
      this.Perfluorinated_chemicals_();
      this.Other();
      this.Pharmaceuticals()
      // return false;
      const Water_safety=this._apiservice.sendData(this.url+"insert_water_safety",this.data_water_safety)

      // const description=this._apiservice.sendData(this.url+"details_description",this.data)
     const general = this.http.post(this.url+"insert_general",this.data_general);
      const pathogens = this.http.post(this.url+"insert_pathogens",this.data_pathogens);
      const chemical_parameter = this.http.post(this.url+"insert_chemical_parameter",this.data_chemical_parameter);
      const Minerals = this.http.post(this.url+"insert_minerals",this.data_minerals);
      const metals = this.http.post(this.url+"insert_metals",this.data_metals);
      const Chlorine_bi_products = this.http.post(this.url+"insert_Chlorine_bi_products",this.data_Chlorine_bi_products);
      const HAAs = this.http.post(this.url+"insert_HAAs",this.data_HAAs);
      const Pesticides = this.http.post(this.url+"insert_Pesticides",this.data_Pesticides);
      const Herbicides=this.http.post(this.url+"insert_Herbicides",this.data_Herbicides)
      const Perfluorinated_chemicals_ = this.http.post(this.url+"insert_Perfluorinated_chemicals_",this.data_Perfluorinated_chemicals);
      const other = this.http.post(this.url+"insert_other",this.data_other);
      const Pharmaceuticals = this.http.post(this.url+"insert_Pharmaceuticals",this.data_Pharmaceuticals); 
    
      const requestArray = [];
      requestArray.push(Water_safety,
        general,pathogens,chemical_parameter,Minerals,metals,Chlorine_bi_products,HAAs,Pesticides,Herbicides,Perfluorinated_chemicals_,other,Pharmaceuticals
        );
      // requestArray.push(Water_safety,);
  
    
    // requestArray.push(Water_safety);
    forkJoin(requestArray).subscribe(results => {
      console.log("here",results);
      this.data_water_safety.pop();
      this.data_general.pop();
      this.data_pathogens.pop();
      this.data_chemical_parameter.pop();
      this.data_minerals.pop();
      this.data_metals.pop();
      this.data_Chlorine_bi_products.pop();
      this.data_Pesticides.pop();
      this.data_Herbicides.pop();
      this.data_other.pop();
      this.data_Perfluorinated_chemicals.pop();
      this.data_Pharmaceuticals.pop();
      alert("Insert successfully");
      // this.display();
    });

      }
      else{
        alert('Default values of '+this.data['country'] +' already exists!')
      }
  }
  else{
    alert(this.data['country']+" already exists, please choose other one!" )
  }
  })
}

update_default(){

  this.Water_safety();
  this.general();
  this.pathogens();
  this.Chemical_parameters();
  this.Minerals();
  this.metals();
  this.Chlorine_bi_products();
  this.HAAs();
  this.Pesticides();
  this.Herbicides();
  this.Perfluorinated_chemicals_();
  this.Other();
  this.Pharmaceuticals()

    const Water_safety=this._apiservice.sendData(this.url+"update_water_safety_many_all",this.data_water_safety)
    // const description=this._apiservice.sendData(this.url+"description",this.data)
  
    const general = this.http.post(this.url+"update_general_many_all",this.data_general);
    
    const pathogens = this.http.post(this.url+"update_pathogens_many_all",this.data_pathogens);
    const chemical_parameter = this.http.post(this.url+"update_chemical_parameter_many_all",this.data_chemical_parameter);
    const Minerals = this.http.post(this.url+"update_minerals_many_all",this.data_minerals);
    const metals = this.http.post(this.url+"update_metals_many_all",this.data_metals);
    const Chlorine_bi_products = this.http.post(this.url+"update_Chlorine_bi_products_many_all",this.data_Chlorine_bi_products);
    const HAAs = this.http.post(this.url+"update_HAAs_many_all",this.data_HAAs);
    const Pesticides = this.http.post(this.url+"update_Pesticides_many_all",this.data_Pesticides);
    const Herbicides=this.http.post(this.url+"update_Herbicides_many_all",this.data_Herbicides)
    const Perfluorinated_chemicals_ = this.http.post(this.url+"update_Perfluorinated_chemicals__many_all",this.data_Perfluorinated_chemicals);
    const other = this.http.post(this.url+"update_other_many_all",this.data_other);
    const Pharmaceuticals = this.http.post(this.url+"update_Pharmaceuticals_many_all",this.data_Pharmaceuticals); 
    
    const requestArray = [];
    requestArray.push(Water_safety,general,
      pathogens,chemical_parameter,Minerals,metals,Chlorine_bi_products,HAAs,Pesticides,Herbicides,Perfluorinated_chemicals_,other,Pharmaceuticals
      );

  
  // requestArray.push(Water_safety);
  forkJoin(requestArray).subscribe(results => {
    console.log("here",results);
    alert("update successfully");
    
    this.display();

  });

}
//start water safety
  Water_safety(){


    this.Total_Chlorine['Substance']="Total Chlorine";
    // this.Total_Chlorine.pop()
    this.Free_Chlorine['Substance']="Free Chlorine";
    this.Chloramine['Substance']="Chloramine";

    this.Total_Chlorine['Country']=this.data.country;
    this.Free_Chlorine['Country']=this.data.country;
    this.Chloramine['Country']=this.data.country;
///update only
    this.Free_Chlorine['country']=this.Country.country;
//update only
    this.Total_Chlorine['id']=localStorage.getItem('admin');
    this.Free_Chlorine['id']=localStorage.getItem('admin');
    this.Chloramine['id']=localStorage.getItem('admin');

    this.data_water_safety.push(this.Free_Chlorine,this.Total_Chlorine,this.Chloramine);

    console.log("data_water_safety",this.data_water_safety)
 }    
    // end water safety
    //start  general
general(){  

  this.Temperature['Substance']="Temperature";
  this.Hardness['Substance']="Hardness";
  this.Hardness_f['Substance']="Hardness f";
  this.pH['Substance']="pH";
  this.Turbidity['Substance']="Turbidity";
  this.Conductivity['Substance']="Conductivity"; 
   this.Color['Substance']="Color";
  this.Odor['Substance']="Odor";
  this.TDS['Substance']="TDS"; 
  this.Microplastics['Substance']="Microplastics";
  this.LSI['Substance']="LSI";
  this.Bicarbonate['Substance']="Bicarbonate";
  this.Alkalinity['Substance']="Alkalinity";
  this.Oxidation['Substance']="Oxidation";
    
  this.Temperature['Country']=this.data.country;
  this.Temperature['country']=this.Country.country;

  this.Hardness['Country']=this.data.country;
  this.Hardness_f['Country']=this.data.country;
  this.pH['Country']=this.data.country;
  this.Turbidity['Country']=this.data.country;
  this.Conductivity['Country']=this.data.country;
  this.Color['Country']=this.data.country;
  this.Odor['Country']=this.data.country;
  this.LSI['Country']=this.data.country;
  this.TDS['Country']=this.data.country;
  this.Microplastics['Country']=this.data.country;
  this.Bicarbonate['Country']=this.data.country;
  this.Alkalinity['Country']=this.data.country;
  this.Oxidation['Country']=this.data.country;

  this.data_general.push(this.Temperature);
  this.data_general.push(this.Hardness);
  this.data_general.push(this.Hardness_f);
  this.data_general.push(this.pH);
  this.data_general.push(this.Turbidity);
  this.data_general.push(this.Conductivity);
  this.data_general.push(this.Color);
  this.data_general.push(this.Odor);
  this.data_general.push(this.TDS);
  this.data_general.push(this.Microplastics);
  this.data_general.push(this.LSI);
  this.data_general.push(this.Bicarbonate);
  this.data_general.push(this.Alkalinity);
  this.data_general.push(this.Oxidation);
console.log("this.data_general..........................",this.data_general)
}
//End  general

pathogens(){

  this.Clostridium['Substance']="Clostridium";
  this.Bactrias['Substance']="Bacterias";
  this.eColi['Substance']="eColi";
  this.Enterococcus['Substance']="Enterococcus";
  this.Microbial_Cysts['Substance']="Microbial Cysts";
 
  this.Clostridium['Country']=this.data.country;
  this.Clostridium['country']=this.Country.country;

  this.Bactrias['Country']=this.data.country;
  this.eColi['Country']=this.data.country;
  this.Enterococcus['Country']=this.data.country;
  this.Microbial_Cysts['Country']=this.data.country;

  // this.Bactrias
  this.data_pathogens.push(this.Clostridium);
  this.data_pathogens.push(this.Bactrias);
  this.data_pathogens.push(this.eColi);
  this.data_pathogens.push(this.Enterococcus);
  this.data_pathogens.push(this.Microbial_Cysts);
  console.log("this.data_pathogens..........................",this.data_pathogens)

}

//end pathogens
//start chemical parameter

Chemical_parameters(){

  this.Cyanide_total['Substance']="Cyanide total";
  this.Fluoride['Substance']="Fluoride";
  this.Mercury['Substance']="Mercury";
  this.Nitrites['Substance']="Nitrites";
  this.Nitrates['Substance']="Nitrates";

  this.Cyanide_total['Country']=this.data.country;
  this.Cyanide_total['country']=this.Country.country;

  this.Fluoride['Country']=this.data.country;
  this.Mercury['Country']=this.data.country;
  this.Nitrites['Country']=this.data.country;
  this.Nitrates['Country']=this.data.country;

  

  this.data_chemical_parameter.push(this.Cyanide_total);
  this.data_chemical_parameter.push(this.Fluoride);
  this.data_chemical_parameter.push(this.Mercury);
  this.data_chemical_parameter.push(this.Nitrites);
  this.data_chemical_parameter.push(this.Nitrates);
  console.log("this.data_chemical_parameter..........................",this.data_chemical_parameter)

}

//end chemical parameter
//start Minerals
Minerals(){  
  this.Magnesium['Substance']="Magnesium";
  this.Calcium['Substance']="Calcium";
  this.Potassium['Substance']="Potassium";
  this.Chloride['Substance']="Chloride";

  

  this.Magnesium['Country']=this.data.country;
  this.Magnesium['country']=this.Country.country;

  this.Calcium['Country']=this.data.country;
  this.Potassium['Country']=this.data.country;
  this.Chloride['Country']=this.data.country;
  
  this.data_minerals.push(this.Magnesium);
  this.data_minerals.push(this.Calcium);
  this.data_minerals.push(this.Potassium);
  this.data_minerals.push(this.Chloride);
  console.log("this.data_minerals..........................",this.data_minerals)


}
//end Minerals

// start metals
metals(){

  
  this.Aluminium['Substance']="Aluminium";
  this.Antimony['Substance']="Antimony";
  this.Arsenic['Substance']="Arsenic";
  this.Barium['Substance']="Barium";
  this.Cadmium['Substance']="Cadmium";
  this.Chromium['Substance']="Chromium";
  this.Copper['Substance']="Copper";
  this.Lead['Substance']="Lead";
  this.Manganese['Substance']="Manganese";
  this.Iron['Substance']="Iron";
  this.Nickel['Substance']="Nickel";
  this.Selenium['Substance']="Selenium";
  this.Sodium['Substance']="Sodium";
  this.Zinc['Substance']="Zinc";

  this.Aluminium['Country']=this.data.country;
  this.Aluminium['country']=this.Country.country;

  this.Antimony['Country']=this.data.country;
  this.Arsenic['Country']=this.data.country;
  this.Barium['Country']=this.data.country;
  this.Cadmium['Country']=this.data.country;
  this.Chromium['Country']=this.data.country;
  this.Copper['Country']=this.data.country;
  this.Lead['Country']=this.data.country;
  this.Manganese['Country']=this.data.country;
  this.Iron['Country']=this.data.country;
  this.Nickel['Country']=this.data.country;
  this.Selenium['Country']=this.data.country;
  this.Sodium['Country']=this.data.country;
  this.Zinc['Country']=this.data.country;


  this.data_metals.push(this.Aluminium);
  this.data_metals.push(this.Antimony);
  this.data_metals.push(this.Arsenic);
  this.data_metals.push(this.Barium);
  this.data_metals.push(this.Cadmium);
  this.data_metals.push(this.Chromium);
  this.data_metals.push(this.Iron);
  this.data_metals.push(this.Copper,this.Lead,this.Manganese);
  this.data_metals.push(this.Nickel);
  this.data_metals.push(this.Selenium);
  this.data_metals.push(this.Sodium);
  this.data_metals.push(this.Zinc);

  console.log("this.data_metals..........................",this.data_metals)

}

//end metals

//start Chlorine_bi_products
Chlorine_bi_products(){


  this.Total_Trichloroethylene['Substance']="Total Trichloroethylene"; 
  this.Trichloroethylene['Substance']="Trichloroethylene";
  this.Tetrachloroethylene['Substance']="Tetrachloroethylene";
  this.Total_Trihalomethanes['Substance']="Total Trihalomethanes";
  this.Dichloromethane['Substance']="Dichloromethane";

  
  this.Total_Trichloroethylene['Country']=this.data.country;
  this.Total_Trichloroethylene['country']=this.Country.country;

  this.Trichloroethylene['Country']=this.data.country;
  this.Tetrachloroethylene['Country']=this.data.country;
  this.Total_Trihalomethanes['Country']=this.data.country;
  // this.Total_Trihalomethanes['Country']=this.data.country;
  this.Dichloromethane['Country']=this.data.country;
  

  this.data_Chlorine_bi_products.push(this.Total_Trichloroethylene,this.Dichloromethane);
  this.data_Chlorine_bi_products.push(this.Trichloroethylene);
  this.data_Chlorine_bi_products.push(this.Tetrachloroethylene);
  this.data_Chlorine_bi_products.push(this.Total_Trihalomethanes);
  console.log("this.data_Chlorine_bi_products..........................",this.data_Chlorine_bi_products)

}
//end Chlorine_bi_products


// start HAAs
HAAs(){ 

  this.Total_haloacetic_acids['Substance']="Total haloacetic acids";
  
  this.Total_haloacetic_acids['Country']=this.data.country;
  this.Total_haloacetic_acids['country']=this.Country.country;
  
  this.data_HAAs.push(this.Total_haloacetic_acids);
  console.log("this.data_HAAs..........................",this.data_HAAs)

}
// end HAAs
//satrt Pesticides
Pesticides(){

  this.Chlordane['Substance']="Chlordane"; 
  this.Heptachlor['Substance']="Heptachlor";
  this.Lindane['Substance']="Lindane";
  this.Total_pesticides['Substance']="Total pesticides";

  this.Chlordane['Country']=this.data.country;
  this.Chlordane['country']=this.Country.country;

  this.Heptachlor['Country']=this.data.country;
  this.Lindane['Country']=this.data.country;
  this.Total_pesticides['Country']=this.data.country;

  


  this.data_Pesticides.push(this.Chlordane,this.Heptachlor,this.Lindane,this.Total_pesticides);
  console.log("this.data_Pesticides..........................",this.data_Pesticides)


}
//end Pesticides

// start Herbicides

Herbicides(){

  this.D_2_4['Substance']="D 2 4"; 
  this.Atrazine['Substance']="Atrazine";
  this.Total_Herbicides['Substance']="Total Herbicides";

  this.D_2_4['Country']=this.data.country;
  this.D_2_4['country']=this.Country.country;

  this.Atrazine['Country']=this.data.country;
  this.Total_Herbicides['Country']=this.data.country;


  this.data_Herbicides.push(this.D_2_4);
  this.data_Herbicides.push(this.Atrazine);
  this.data_Herbicides.push(this.Total_Herbicides);
  console.log("this.data_Herbicides..........................",this.data_Herbicides)

}

// End Herbicides

//start Other

Other(){

  this.Ammonia['Substance']="Ammonia"; 
  this.Asbestos['Substance']="Asbestos";
  this.Perchlorate['Substance']="Perchlorate";
  this.Polonium['Substance']="Polonium";
  this.Radium['Substance']="Radium";
  this.Silver['Substance']="Silver";
  this.Sulfate['Substance']="Sulfate";
  this.Uranium['Substance']="Uranium";

  
  this.Ammonia['Country']=this.data.country;
  this.Ammonia['country']=this.Country.country;

  this.Asbestos['Country']=this.data.country;
  this.Perchlorate['Country']=this.data.country;
  this.Polonium['Country']=this.data.country;
  this.Radium['Country']=this.data.country;  
  this.Silver['Country']=this.data.country;
  this.Sulfate['Country']=this.data.country;
  this.Uranium['Country']=this.data.country;

  this.data_other.push(this.Ammonia);
  this.data_other.push(this.Asbestos);
  this.data_other.push(this.Perchlorate);
  this.data_other.push(this.Polonium);
  this.data_other.push(this.Radium);
  this.data_other.push(this.Silver);
  this.data_other.push(this.Sulfate);
  this.data_other.push(this.Uranium);
  console.log("this.data_other..........................",this.data_other)
 
}
//end Other

// start Pharmaceuticals
Pharmaceuticals(){  
  this.Atenolol['Substance']="Atenolol"; 
  this.Carbamazepine['Substance']="Carbamazepine";
  this.Estrone['Substance']="Estrone";
  this.Meprobamat['Substance']="Meprobamat";
  this.Trimethoprim['Substance']="Trimethoprim";

  this.Atenolol['Country']=this.data.country;
  this.Atenolol['country']=this.Country.country;

  this.Carbamazepine['Country']=this.data.country;
  this.Estrone['Country']=this.data.country;
  this.Meprobamat['Country']=this.data.country;
  this.Trimethoprim['Country']=this.data.country;  
 


  this.Atenolol['table']="Pharmaceuticals"
  this.data_Pharmaceuticals.push(this.Atenolol);
  this.data_Pharmaceuticals.push(this.Carbamazepine);
  this.data_Pharmaceuticals.push(this.Estrone);
  this.data_Pharmaceuticals.push(this.Meprobamat);
  this.data_Pharmaceuticals.push(this.Trimethoprim);
  console.log("this.data_Pharmaceuticals..........................",this.data_Pharmaceuticals)

}

// end Pharmaceuticals

// start Perfluorinated_chemicals_
Perfluorinated_chemicals_(){  
  
  this.PFOA['Substance']="PFOA"; 
  this.PFOS['Substance']="PFOS";
  this.PFNA['Substance']="PFNA";

  this.PFOA['Country']=this.data.country;
  this.PFOA['country']=this.Country.country;

  this.PFOS['Country']=this.data.country;
  this.PFNA['Country']=this.data.country;

  this.data_Perfluorinated_chemicals.push(this.PFOA);
  this.data_Perfluorinated_chemicals.push(this.PFOS);
  this.data_Perfluorinated_chemicals.push(this.PFNA);
 


}
// end Perfluorinated_chemicals_

    back(){
      this.router.navigate(['/notifications']);
 
    }
    
         
     display(){
       console.log("hdgfhdgfdfgdfg in display")
      //  this.Country['country']='Afghanistan'
         //start water safety    
        this._apiservice.sendData(this.url+"change_value_fetch",this.Country).subscribe(res=>{ 
           this.water_safety_test=res
           if(!(res && res.constructor === Array && Object.keys(res).length === 0)){  
           this.Free_Chlorine=res[0];           
           this.Total_Chlorine=res[1];
           this.Chloramine=res[2];
           
           }
           })
          
       
         /*  this._apiservice.sendData(this.url+"find_description",this.data).subscribe(res=>{
             console.log("find_description..................",res['data'])
             if(res['data']=='Country not found'){
               console.log("null..............")
               alert('Default values of '+this.data['country'] +' is not exists,please select other country');
               // alert("sdgf")
             }else{
               this.data=res['data'];
     
             }
           })*/
     
     
           //end watersafety
           //start general
       
          this._apiservice.sendData(this.url+"change_value_fetch_general",this.Country).subscribe(res=>{
             if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
               console.log("dhgsgdhf",res)
             this.Temperature=res[0];
             this.Hardness=res[1];
             this.Hardness_f=res[2];
             this.pH=res[3];
             this.Turbidity=res[4];
             this.Conductivity=res[5];
             this.Color=res[6];
             this.Odor=res[7];
             this.TDS=res[8];
             this.Microplastics=res[9];
             this.LSI=res[10];
             this.Bicarbonate=res[11];
             this.Alkalinity=res[12];
             this.Oxidation=res[13];
             // this.Hardness_f=res[2];
             }
             })
       
       
       //end general
       
       //start pathogens
       
             this._apiservice.sendData(this.url+"change_value_fetch_pathogens",this.Country).subscribe(res=>{
               if(!(res && res.constructor === Array && Object.keys(res).length === 0)){         
       
               this.Clostridium=res[0];
               this.Bactrias=res[1]
               this.eColi=res[2];
               this.Enterococcus=res[3];
               this.Microbial_Cysts=res[4];
               }
       
               })
         //end pathogens
       
         //start chemical parameter
         this._apiservice.sendData(this.url+"change_value_fetch_chemical_parameter",this.Country).subscribe(res=>{
           if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
       
           this.Cyanide_total=res[0];
           this.Fluoride=res[1];
           this.Mercury=res[2];
           this.Nitrites=res[3];
           this.Nitrates=res[4];
           }
       
           })
           //end chemical parameter
       
       
           // start Minerals
           this._apiservice.sendData(this.url+"change_value_fetch_minerals",this.Country).subscribe(res=>{
             if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
         
             this.Magnesium=res[0];
             this.Calcium=res[1];
             this.Potassium=res[2];
             this.Chloride=res[3];
             }
              
             })
       
             //end Minerals
       
       //start metals
       this._apiservice.sendData(this.url+"change_value_fetch_metals",this.Country).subscribe(res=>{
       
         if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
       this.Aluminium=res[0];
       this.Antimony=res[1];
       this.Arsenic=res[2];
       this.Barium=res[3];
       this.Cadmium=res[4];
       this.Chromium=res[5];
       this.Copper=res[6];
       this.Iron=res[7];
       this.Lead=res[8];
       this.Manganese=res[9];
       this.Nickel=res[10];
       this.Selenium=res[11];
       this.Sodium=res[12];
       this.Zinc=res[13];   
         }
         })
       
       
       //end metals
       
       
       // start Chlorine_bi_products
       this._apiservice.sendData(this.url+"change_value_fetch_Chlorine_bi_products",this.Country).subscribe(res=>{
       
         if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
         this.Total_Trichloroethylene=res[0];
         this.Trichloroethylene=res[1];
         this.Tetrachloroethylene=res[2];
         this.Total_Trihalomethanes=res[3];
         this.Dichloromethane=res[4]
         }
          
         })
       // end Chlorine_bi_products
       
       //start HAAs
       
       this._apiservice.sendData(this.url+"change_value_fetch_HAAs",this.Country).subscribe(res=>{
         if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
       
             this.Total_haloacetic_acids=res[0];  
           } 
         })
       
       //end HAAs
       //start Pesticides
       this._apiservice.sendData(this.url+"change_value_fetch_Pesticides",this.Country).subscribe(res=>{
         if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
           this.Chlordane=res[0];
           this.Heptachlor=res[1];
           this.Lindane=res[2];
           this.Total_pesticides=res[3]
         }
         
            
           })
       
       //end Pesticides
       
       
       //satrt Herbicides
       this._apiservice.sendData(this.url+"change_value_fetch_Herbicides",this.Country).subscribe(res=>{
         if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
           this.D_2_4=res[0];
           this.Atrazine=res[1];
           this.Total_Herbicides=res[2];
           
         }
            
           })
       //end Herbicides
       
       
       //satrt other
       this._apiservice.sendData(this.url+"change_value_fetch_other",this.Country).subscribe(res=>{
         if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
           this.Ammonia=res[0];
           this.Asbestos=res[1];
           this.Perchlorate=res[2];    
           this.Polonium=res[3];
           this.Radium=res[4];
           this.Silver=res[5];
           this.Sulfate=res[6];
           this.Uranium=res[7];
       
         }
            
           })
       //end other
       
       
       //satrt Perfluorinated_chemicals_
       this._apiservice.sendData(this.url+"change_value_fetch_Perfluorinated_chemicals_",this.Country).subscribe(res=>{
         if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
           this.PFOA=res[0];
           this.PFOS=res[1];
           this.PFNA=res[2];    
         }
           })
       //end Perfluorinated_chemicals_
       
       //start Pharmaceuticals
       
       this._apiservice.sendData(this.url+"change_value_fetch_Pharmaceuticals",this.Country).subscribe(res=>{
         if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
           this.Atenolol=res[0];
           this.Carbamazepine=res[1];
           this.Estrone=res[2];    
           this.Meprobamat=res[3];    
           this.Trimethoprim=res[4];    
         }
        
           })
          
         }
        Hide_display(){
              this.Free_Chlorine={};
              this.Total_Chlorine={};
              this.Chloramine={};

              this.Temperature={};
              this.Hardness={};
              this.Hardness_f={};
              this.pH={};
              this.Turbidity={};
              this.Conductivity={};
              this.Color={};
              this.Odor={};
              this.TDS={};
              this.Microplastics={};
              this.LSI={};
              this.Bicarbonate={};
              this.Alkalinity={};
              this.Oxidation={};

              this.Clostridium={};
              this.Bactrias={};
              this.eColi={};
              this.Enterococcus={};
              this.Microbial_Cysts={};

              this.Cyanide_total={};
              this.Fluoride={};
              this.Mercury={};
              this.Nitrites={};
              this.Nitrates={};

              this.Magnesium={};
              this.Calcium={};
              this.Potassium={};
              this.Chloride={};

              this.Aluminium={};
              this.Antimony={};
              this.Arsenic={};
              this.Barium={};
              this.Cadmium={};
              this.Chromium={};
              this.Copper={};
              this.Iron={};
              this.Lead={};
              this.Manganese={};
              this.Nickel={};
              this.Selenium={};
              this.Sodium={};
              this.Zinc={};

              this.Total_Trichloroethylene={};
              this.Trichloroethylene={};
              this.Tetrachloroethylene={};
              this.Total_Trihalomethanes={};
              this.Dichloromethane={};

              this.Total_haloacetic_acids={}; 

              this.Chlordane={};
              this.Heptachlor={};
              this.Lindane={};
              this.Total_pesticides={};

              this.D_2_4={};
              this.Atrazine={};
              this.Total_Herbicides={};

              this.Ammonia={};
              this.Asbestos={};
              this.Perchlorate={};    
              this.Polonium={};
              this.Radium={};
              this.Silver={};
              this.Sulfate={};
              this.Uranium={};

              this.PFOA={}
              this.PFOS={}
              this.PFNA={} 

            this.Atenolol={};
           this.Carbamazepine={};
           this.Estrone={};    
           this.Meprobamat={};    
           this.Trimethoprim={};
          
          }

}
