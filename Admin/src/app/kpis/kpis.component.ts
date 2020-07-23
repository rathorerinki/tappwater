import { Component, OnInit, KeyValueDiffers } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../app/api.service';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kpis',
  templateUrl: './kpis.component.html',
  styleUrls: ['./kpis.component.scss']
})
export class KpisComponent implements OnInit {
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
  data:any={};
  countriesOptions: string[] ;
  constructor(private http:HttpClient,private router: Router,public translate: TranslateService,public _apiservice:ApiService,private differs: KeyValueDiffers) { 
  this.data['country']='Spain';
      
  }
  
ngOnInit(){
  // all_country
this._apiservice.getData(this.url+"all_country").subscribe(data=>{
    console.log("data",data['data'])
    this.countriesOptions=data['data']
  })

  this.display();
  
}
ngDoCheck() {

}

onKey(event){ 
    this.min =event.srcElement.min;
    this.max=event.srcElement.max;
    var value=parseInt(event.srcElement.value);
  }


  alertfunction(){

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

    const Water_safety=this._apiservice.sendData(this.url+"update_water_safety",this.data_water_safety)
    const description=this._apiservice.sendData(this.url+"description",this.data)
  
    const general = this.http.post(this.url+"update_general",this.data_general);
    const pathogens = this.http.post(this.url+"update_pathogens",this.data_pathogens);
    const chemical_parameter = this.http.post(this.url+"update_chemical_parameter",this.data_chemical_parameter);
    const Minerals = this.http.post(this.url+"update_minerals",this.data_minerals);
    const metals = this.http.post(this.url+"update_metals",this.data_metals);
    const Chlorine_bi_products = this.http.post(this.url+"update_Chlorine_bi_products",this.data_Chlorine_bi_products);
    const HAAs = this.http.post(this.url+"update_HAAs",this.data_HAAs);
    const Pesticides = this.http.post(this.url+"update_Pesticides",this.data_Pesticides);
    const Herbicides=this.http.post(this.url+"update_Herbicides",this.data_Herbicides)
    const Perfluorinated_chemicals_ = this.http.post(this.url+"update_Perfluorinated_chemicals_",this.data_Perfluorinated_chemicals);
    const other = this.http.post(this.url+"update_other",this.data_other);
    const Pharmaceuticals = this.http.post(this.url+"update_Pharmaceuticals",this.data_Pharmaceuticals); 
    
    const requestArray = [];
    requestArray.push(Water_safety,
      description,general,pathogens,chemical_parameter,Minerals,metals,Chlorine_bi_products,HAAs,Pesticides,Herbicides,Perfluorinated_chemicals_,other,Pharmaceuticals
      );

  
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
    alert("Update successfully");
    this.display();
  });
 }

//start water safety
  Water_safety(){


    this.Total_Chlorine['Substance']="Total Chlorine";
    this.Free_Chlorine['Substance']="Free Chlorine";
    this.Chloramine['Substance']="Chloramine";
    
    this.Total_Chlorine['country']=this.data.country;
    this.Free_Chlorine['country']=this.data.country;
    this.Chloramine['country']=this.data.country;

    this.Total_Chlorine['id']=localStorage.getItem('admin');
    this.Free_Chlorine['id']=localStorage.getItem('admin');
    this.Chloramine['id']=localStorage.getItem('admin');

    this.data_water_safety.push(this.Free_Chlorine,this.Total_Chlorine,this.Chloramine);
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



  this.Temperature['country']=this.data.country;
  this.Hardness['country']=this.data.country;
  this.Hardness_f['country']=this.data.country;
  this.pH['country']=this.data.country;
  this.Turbidity['country']=this.data.country;
  this.Conductivity['country']=this.data.country;
  this.Color['country']=this.data.country;
  this.Odor['country']=this.data.country;
  this.LSI['country']=this.data.country;
  this.TDS['country']=this.data.country;
  this.Microplastics['country']=this.data.country;
  this.Bicarbonate['country']=this.data.country;
  this.Alkalinity['country']=this.data.country;
  this.Oxidation['country']=this.data.country;


    
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

}
//End  general

pathogens(){

  this.Clostridium['Substance']="Clostridium";
  this.Bactrias['Substance']="Bacterias";
  this.eColi['Substance']="eColi";
  this.Enterococcus['Substance']="Enterococcus";
  this.Microbial_Cysts['Substance']="Microbial Cysts";
 
  this.Clostridium['country']=this.data.country;
  this.Bactrias['country']=this.data.country;
  this.eColi['country']=this.data.country;
  this.Enterococcus['country']=this.data.country;
  this.Microbial_Cysts['country']=this.data.country;

  // this.Bactrias
  this.data_pathogens.push(this.Clostridium);
  this.data_pathogens.push(this.Bactrias);
  this.data_pathogens.push(this.eColi);
  this.data_pathogens.push(this.Enterococcus);
  this.data_pathogens.push(this.Microbial_Cysts);

}

//end pathogens
//start chemical parameter

Chemical_parameters(){

  this.Cyanide_total['Substance']="Cyanide total";
  this.Fluoride['Substance']="Fluoride";
  this.Mercury['Substance']="Mercury";
  this.Nitrites['Substance']="Nitrites";
  this.Nitrates['Substance']="Nitrates";

  this.Cyanide_total['country']=this.data.country;
  this.Fluoride['country']=this.data.country;
  this.Mercury['country']=this.data.country;
  this.Nitrites['country']=this.data.country;
  this.Nitrates['country']=this.data.country;


  this.data_chemical_parameter.push(this.Cyanide_total);
  this.data_chemical_parameter.push(this.Fluoride);
  this.data_chemical_parameter.push(this.Mercury);
  this.data_chemical_parameter.push(this.Nitrites);
  this.data_chemical_parameter.push(this.Nitrates);

}

//end chemical parameter
//start Minerals
Minerals(){  
  this.Magnesium['Substance']="Magnesium";
  this.Calcium['Substance']="Calcium";
  this.Potassium['Substance']="Potassium";
  this.Chloride['Substance']="Chloride";

  
  this.Magnesium['country']=this.data.country;
  this.Calcium['country']=this.data.country;
  this.Potassium['country']=this.data.country;
  this.Chloride['country']=this.data.country;

  this.data_minerals.push(this.Magnesium);
  this.data_minerals.push(this.Calcium);
  this.data_minerals.push(this.Potassium);
  this.data_minerals.push(this.Chloride);

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


  this.Aluminium['country']=this.data.country;
  this.Antimony['country']=this.data.country;
  this.Arsenic['country']=this.data.country;
  this.Barium['country']=this.data.country;
  this.Cadmium['country']=this.data.country;
  this.Chromium['country']=this.data.country;
  this.Copper['country']=this.data.country;
  this.Lead['country']=this.data.country;
  this.Manganese['country']=this.data.country;
  this.Iron['country']=this.data.country;
  this.Nickel['country']=this.data.country;
  this.Selenium['country']=this.data.country;
  this.Sodium['country']=this.data.country;
  this.Zinc['country']=this.data.country;


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


}

//end metals

//start Chlorine_bi_products
Chlorine_bi_products(){


  this.Total_Trichloroethylene['Substance']="Total Trichloroethylene"; 
  this.Trichloroethylene['Substance']="Trichloroethylene";
  this.Tetrachloroethylene['Substance']="Tetrachloroethylene";
  this.Total_Trihalomethanes['Substance']="Total Trihalomethanes";
  this.Dichloromethane['Substance']="Dichloromethane";


  this.Total_Trichloroethylene['country']=this.data.country;
  this.Trichloroethylene['country']=this.data.country;
  this.Tetrachloroethylene['country']=this.data.country;
  this.Total_Trihalomethanes['country']=this.data.country;
  // this.Total_Trihalomethanes['country']=this.data.country;
  this.Dichloromethane['country']=this.data.country;

  this.data_Chlorine_bi_products.push(this.Total_Trichloroethylene,this.Dichloromethane);
  this.data_Chlorine_bi_products.push(this.Trichloroethylene);
  this.data_Chlorine_bi_products.push(this.Tetrachloroethylene);
  this.data_Chlorine_bi_products.push(this.Total_Trihalomethanes);

}
//end Chlorine_bi_products


// start HAAs
HAAs(){ 

  this.Total_haloacetic_acids['Substance']="Total haloacetic acids"; 
  this.Total_haloacetic_acids['country']=this.data.country;

  this.data_HAAs.push(this.Total_haloacetic_acids);





}
// end HAAs
//satrt Pesticides
Pesticides(){

  this.Chlordane['Substance']="Chlordane"; 
  this.Heptachlor['Substance']="Heptachlor";
  this.Lindane['Substance']="Lindane";
  this.Total_pesticides['Substance']="Total pesticides";


  
  this.Chlordane['country']=this.data.country;
  this.Heptachlor['country']=this.data.country;
  this.Lindane['country']=this.data.country;
  this.Total_pesticides['country']=this.data.country;

  this.data_Pesticides.push(this.Chlordane,this.Heptachlor,this.Lindane,this.Total_pesticides);


}
//end Pesticides

// start Herbicides

Herbicides(){

  this.D_2_4['Substance']="D 2 4"; 
  this.Atrazine['Substance']="Atrazine";
  this.Total_Herbicides['Substance']="Total Herbicides";

  this.D_2_4['country']=this.data.country;
  this.Atrazine['country']=this.data.country;
  this.Total_Herbicides['country']=this.data.country;


  this.data_Herbicides.push(this.D_2_4);
  this.data_Herbicides.push(this.Atrazine);
  this.data_Herbicides.push(this.Total_Herbicides);

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

  this.Ammonia['country']=this.data.country;
  this.Asbestos['country']=this.data.country;
  this.Perchlorate['country']=this.data.country;
  this.Polonium['country']=this.data.country;
  this.Radium['country']=this.data.country;  
  this.Silver['country']=this.data.country;
  this.Sulfate['country']=this.data.country;
  this.Uranium['country']=this.data.country;


  this.data_other.push(this.Ammonia);
  this.data_other.push(this.Asbestos);
  this.data_other.push(this.Perchlorate);
  this.data_other.push(this.Polonium);
  this.data_other.push(this.Radium);
  this.data_other.push(this.Silver);
  this.data_other.push(this.Sulfate);
  this.data_other.push(this.Uranium);
 
}
//end Other

// start Pharmaceuticals
Pharmaceuticals(){  
  this.Atenolol['Substance']="Atenolol"; 
  this.Carbamazepine['Substance']="Carbamazepine";
  this.Estrone['Substance']="Estrone";
  this.Meprobamat['Substance']="Meprobamat";
  this.Trimethoprim['Substance']="Trimethoprim";


  
  this.Atenolol['country']=this.data.country;
  this.Carbamazepine['country']=this.data.country;
  this.Estrone['country']=this.data.country;
  this.Meprobamat['country']=this.data.country;
  this.Trimethoprim['country']=this.data.country;

  this.Atenolol['table']="Pharmaceuticals"
  this.data_Pharmaceuticals.push(this.Atenolol);
  this.data_Pharmaceuticals.push(this.Carbamazepine);
  this.data_Pharmaceuticals.push(this.Estrone);
  this.data_Pharmaceuticals.push(this.Meprobamat);
  this.data_Pharmaceuticals.push(this.Trimethoprim);

}

// end Pharmaceuticals

// start Perfluorinated_chemicals_
Perfluorinated_chemicals_(){  
  
  this.PFOA['Substance']="PFOA"; 
  this.PFOS['Substance']="PFOS";
  this.PFNA['Substance']="PFNA";

  
  this.PFOA['country']=this.data.country;
  this.PFOS['country']=this.data.country;
  this.PFNA['country']=this.data.country;

  this.data_Perfluorinated_chemicals.push(this.PFOA);
  this.data_Perfluorinated_chemicals.push(this.PFOS);
  this.data_Perfluorinated_chemicals.push(this.PFNA);
 


}
// end Perfluorinated_chemicals_

    back(){
      this.router.navigate(['/notifications']);
 
    }

  display(){ 
 this.change('Spain');
    //end Pharmaceuticals
      // console.log(this._apiservice.take_language());
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(sessionStorage.getItem('selected_language'));    
    }
    
change(value){
this.data['country']=value;
console.log("value country",this.data['country'])
    //start water safety    
    this._apiservice.sendData(this.url+"change_value_fetch",this.data).subscribe(res=>{ 
      this.water_safety_test=res
      if(!(res && res.constructor === Array && Object.keys(res).length === 0)){  
      this.Free_Chlorine=res[0];
      this.Total_Chlorine=res[1];
      this.Chloramine=res[2];
      }
      })
      
  
      this._apiservice.sendData(this.url+"find_description",this.data).subscribe(res=>{
        console.log("find_description..................",res['data'])
        if(res['data']=='Country not found'){
          console.log("null..............")
          alert('Default values of '+value +' is not exists,please select other country');
          // alert("sdgf")
        }else{
          this.data=res['data'];

        }
      })


      //end watersafety
      //start general
  
      this._apiservice.sendData(this.url+"change_value_fetch_general",this.data).subscribe(res=>{
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
  
        this._apiservice.sendData(this.url+"change_value_fetch_pathogens",this.data).subscribe(res=>{
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
    this._apiservice.sendData(this.url+"change_value_fetch_chemical_parameter",this.data).subscribe(res=>{
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
      this._apiservice.sendData(this.url+"change_value_fetch_minerals",this.data).subscribe(res=>{
        if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
    
        this.Magnesium=res[0];
        this.Calcium=res[1];
        this.Potassium=res[2];
        this.Chloride=res[3];
        }
         
        })
  
        //end Minerals
  
  //start metals
  this._apiservice.sendData(this.url+"change_value_fetch_metals",this.data).subscribe(res=>{
  
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
  this._apiservice.sendData(this.url+"change_value_fetch_Chlorine_bi_products",this.data).subscribe(res=>{
  
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
  
  this._apiservice.sendData(this.url+"change_value_fetch_HAAs",this.data).subscribe(res=>{
    if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
  
        this.Total_haloacetic_acids=res[0];  
      } 
    })
  
  //end HAAs
  //start Pesticides
  this._apiservice.sendData(this.url+"change_value_fetch_Pesticides",this.data).subscribe(res=>{
    if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
      this.Chlordane=res[0];
      this.Heptachlor=res[1];
      this.Lindane=res[2];
      this.Total_pesticides=res[3]
    }
    
       
      })
  
  //end Pesticides
  
  
  //satrt Herbicides
  this._apiservice.sendData(this.url+"change_value_fetch_Herbicides",this.data).subscribe(res=>{
    if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
      this.D_2_4=res[0];
      this.Atrazine=res[1];
      this.Total_Herbicides=res[2];
      
    }
       
      })
  //end Herbicides
  
  
  //satrt other
  this._apiservice.sendData(this.url+"change_value_fetch_other",this.data).subscribe(res=>{
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
  this._apiservice.sendData(this.url+"change_value_fetch_Perfluorinated_chemicals_",this.data).subscribe(res=>{
    if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
      this.PFOA=res[0];
      this.PFOS=res[1];
      this.PFNA=res[2];    
    }
      })
  //end Perfluorinated_chemicals_
  
  //start Pharmaceuticals
  
  this._apiservice.sendData(this.url+"change_value_fetch_Pharmaceuticals",this.data).subscribe(res=>{
    if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
      this.Atenolol=res[0];
      this.Carbamazepine=res[1];
      this.Estrone=res[2];    
      this.Meprobamat=res[3];    
      this.Trimethoprim=res[4];    
    }
   
      })
    }
}

