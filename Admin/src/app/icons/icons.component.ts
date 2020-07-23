import { Component, OnInit, ViewChild, KeyValueDiffers } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';
import { forkJoin } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  next_: boolean;
  differ: any;
 
  panelOpenState = false;
  Chloramine: any={};
  

  url:any="http://18.191.230.23:3000/"

  //start water safety
  Free_Chlorine:any={};
  Total_Chlorine:any={};
  // Chloramine: any={};

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
data_Chlorine_bi_products: any=[];

//end Chlorine_bi_products
//Start HAAs


Total_haloacetic_acids:any={};
data_HAAs: any=[];
//end HAAs

//start Pesticides
Chlordane:any={};
Heptachlor:any={};
Lindane:any={};
Total_pesticides:any={};

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
  basic_details_id: any;
  Dichloromethane: any={};
  edit_button:boolean=false;
  Bacteria:any={};
  nameOfArray = [
    'water_safety_data',
  'chlorine_bi_products_data',
  'haas_data',
  'herbicides_data',
  'perfluorinated_chemicals_data',
  'pesticides_data',
  'pharmaceuticals_data',  
  'chemical_parameter_data',
  'general_data',
  'Metals_data',
  'minerals_data',
  'other_data',
  'pathogens_data',
  
];
  data: any={};
  inputDisabled:boolean=true;
  hide_button:boolean=false;
  // done:boolean=false;
  Lead:any={};
  Manganese:any={};
  test_array: any=[];
  all_data_tables: Object;
  averageDataRange: boolean;
  data1222:any={};
  Free_Chlorine_defualt: any;
  Total_Chlorine_defualt: any;
  Chloramine_defualt: any;
  Temperature_default: any;
  Hardness_default: any;
  Hardness_f_default: any;
  pH_default: any;
  Turbidity_default: any;
  Conductivity_default: any;
  Color_default: any;
  Odor_default: any;
  TDS_default: any;
  Microplastics_default: any;
  LSI_default: any;
  Bicarbonate_default: any;
  Alkalinity_default: any;
  Oxidation_default: any;
  Clostridium_default: any;
  Bacteria_default: any;
  eColi_default: any;
  Enterococcus_default: any;
  Microbial_Cysts_default: any;
  Cyanide_total_default: any;
  Fluoride_default: any;
  Mercury_default: any;
  Nitrites_default: any;
  Nitrates_default: any;
  Magnesium_default: any;
  Calcium_default: any;
  Potassium_default: any;
  Chloride_default: any;
  Aluminium_default: any;
  Antimony_default: any;
  Arsenic_defaultArsenic_default: any;
  Barium_default: any;
  Cadmium_default: any;
  Chromium_default: any;
  Copper_default: any;
  Iron_default: any;
  Lead_default: any;
  Manganese_default: any;
  Nickel_default: any;
  Selenium_default: any;
  Sodium_default: any;
  Zinc_default: any;
  Arsenic_default: any;
  Total_Trichloroethylene_default: any;
  Trichloroethylene_default: any;
  Tetrachloroethylene_default: any;
  Total_Trihalomethanes_default: any;
  Dichloromethane_default: any;
  Total_haloacetic_acids_default: any;
  Total_pesticides_default: any;
  Lindane_default: any;
  Heptachlor_default: any;
  Chlordane_default: any;
  D_2_4_default: any;
  Atrazine_default: any;
  Total_Herbicides_default: any;
  PFOA_default: any;
  PFOS_default: any;
  PFNA_default: any;
  Ammonia_default: any;
  Asbestos_default: any;
  Perchlorate_default: any;
  Polonium_default: any;
  Radium_default: any;
  Silver_default: any;
  Sulfate_default: any;
  Uranium_default: any;
  Atenolol_default: any;
  Carbamazepine_default: any;
  Estrone_default: any;
  Meprobamat_default: any;
  Trimethoprim_default: any;
  data_Pharmaceuticals_default: any;
  constructor(private http:HttpClient,private router: Router,public translate: TranslateService,public _apiservice:ApiService,private differs: KeyValueDiffers) { 
    // basic_details_id
    this.basic_details_id=this.router.getCurrentNavigation().extras.state.id
    this.data1222['country']=this.router.getCurrentNavigation().extras.state.country
   console.log("https://ionic.zone/debug/remote-debug-your-app",this.data1222) 
  }
  
ngOnInit(){ 

  this._apiservice.postDataid(this.url+'select_details',this.basic_details_id).subscribe(res=>{     
    let response=res;
    this.averageDataRange=res['averageDataRange']
    console.log("response_1233",this.averageDataRange)

    })
    
  this.display();
  
}
ngDoCheck() {}

done(){
  
  this.router.navigate(['/table-list']);
}
edit(){
  this.edit_button=true;
  this.hide_button=true;
  this.inputDisabled=false;
  this.edit_display();
}


alertfunction(){
  this.Water_safety();
  this.general();
  this.pathogens();
  this.chemical_parameter();
  this.Minerals();
  this.metals();
  this.Chlorine_bi_products();
  this.HAAs();
  this.Pesticides();
  this.Herbicides();
  this.Perfluorinated_chemicals_();
  this.other();
  this.Pharmaceuticals()

  const Water_safety = this.http.post(this.url+"Water_safety_edit",this.data_water_safety)
  const general = this.http.post(this.url+"general_data_edit",this.data_general);
  const pathogens = this.http.post(this.url+"pathogens_data_edit",this.data_pathogens);
  const chemical_parameter = this.http.post(this.url+"chemical_parameter_data_edit",this.data_chemical_parameter);
  const Minerals = this.http.post(this.url+"minerals_data_edit",this.data_minerals);
  const metals = this.http.post(this.url+"metals_data_edit",this.data_metals);
  const Chlorine_bi_products = this.http.post(this.url+"chlorine_bi_products_data_edit",this.data_Chlorine_bi_products);
  const HAAs = this.http.post(this.url+"HAAs_data_edit",this.data_HAAs);
  const Pesticides = this.http.post(this.url+"pesticides_data_edit",this.data_Pesticides);
  // console.log(this.data_Herbicides,"this.data_Herbicides")
  const Herbicides=this.http.post(this.url+"herbicides_data_edit",this.data_Herbicides)  
  const Perfluorinated_chemicals_ = this.http.post(this.url+"perfluorinated_chemicals_data_edit",this.data_other);
  const other = this.http.post(this.url+"other_data_edit",this.data_Perfluorinated_chemicals);
  const Pharmaceuticals = this.http.post(this.url+"pharmaceuticals_data_edit",this.test_array);

  const requestArray = [];

  requestArray.push(Water_safety,  
    general,pathogens,chemical_parameter,Minerals,metals,Chlorine_bi_products,HAAs,Pesticides,Herbicides,Perfluorinated_chemicals_,other,
    Pharmaceuticals
    );

    // console.log("all data...................",this.test_array);
    // return false;
  forkJoin(requestArray).subscribe(results => {
    console.log("here",results);
    alert("Insert successfully");
    this.edit_display()
  });
}


onKey(event,get_class){
 
  if(this.averageDataRange !=true){
  if(event.srcElement.name=='Total_Chlorine'){      
    console.log("event",event.srcElement.value);
    (this.Total_Chlorine.Filtering)= ((1-(parseFloat(this.Total_Chlorine.filtering.replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
  
    if(event.srcElement.value==''){
            
      this.Total_Chlorine.Filtering=' '

    }

    }

  if(event.srcElement.name=='Free_Chlorine'){
console.log("get_class",get_class)
    console.log("event",event.srcElement.value);
    (this.Free_Chlorine.Filtering)= ((1-(parseFloat((this.Free_Chlorine.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Free_Chlorine.Filtering);
    
    if(event.srcElement.value==''){
            
      this.Free_Chlorine.Filtering=' '

    }

  }

 


  if(event.srcElement.name=='Chloramine'){  
    // console.log("event",event.srcElement.value);
    (this.Chloramine.Filtering)= ((1-(parseFloat((this.Chloramine.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Free_Chlorine.Filtering);
    
    if(event.srcElement.value==''){
            
      this.Chloramine.Filtering=' '

    }

  }



  if(event.srcElement.name=='Temperature'){
    // console.log("event",event.srcElement.value);
    (this.Temperature.Filtering)= ((1-(parseFloat((this.Temperature.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Temperature.Filtering);       
    if(event.srcElement.value==''){            
      this.Temperature.Filtering=' '

    }

  }

  if(event.srcElement.name=='Hardness'){

    // console.log("event",event.srcElement.value);
    (this.Hardness.Filtering)= ((1-(parseFloat((this.Hardness.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Hardness.Filtering);
    if(event.srcElement.value==''){            
      this.Hardness.Filtering=' '
    }

  }

  if(event.srcElement.name=='Hardness_f'){


    // console.log("event",event.srcElement.value);
    (this.Hardness_f.Filtering)= ((1-(parseFloat((this.Hardness_f.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Hardness_f.Filtering);
    if(event.srcElement.value==''){
            
      this.Hardness_f.Filtering=' '

    }

  }

  if(event.srcElement.name=='pH'){

    (this.pH.Filtering)= ((parseFloat((this.pH.filtering).replace("%", " ")))+parseFloat(event.srcElement.value)).toFixed(2);
    console.log(this.pH.Filtering);
    if(event.srcElement.value==''){
            
      this.pH.Filtering=' '

    }
  }

  if(event.srcElement.name=='Turbidity'){

    // console.log("event",event.srcElement.value);
    (this.Turbidity.Filtering)= ((1-(parseFloat((this.Turbidity.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Turbidity.Filtering);
    if(event.srcElement.value==''){
            
      this.Turbidity.Filtering=' '

    }

  }

  if(event.srcElement.name=='Conductivity'){

    // console.log("event",event.srcElement.value);
    (this.Conductivity.Filtering)= ((1-(parseFloat((this.Conductivity.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Conductivity.Filtering);
    if(event.srcElement.value==''){
            
      this.Conductivity.Filtering=' '

    }

  }

  if(event.srcElement.name=='Color'){
 
    // console.log("event",event.srcElement.value);
    (this.Color.Filtering)= ((1-(parseFloat((this.Color.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log("color",this.Color.Filtering);
    if(event.srcElement.value==''){
            
      this.Color.Filtering=' '

    }


  }

  if(event.srcElement.name=='Odor'){

 
  
    (this.Odor.Filtering)= ((1-(parseFloat((this.Odor.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log("odor",this.Odor.Filtering);
    if(event.srcElement.value==''){
            
      this.Odor.Filtering=' '

    }

  }

  if(event.srcElement.name=='TDS'){
    

    (this.TDS.Filtering)= ((1-(parseFloat((this.TDS.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.TDS.Filtering);
  
    if(event.srcElement.value==''){
            
      this.Odor.Filtering=' '

    }

  }

  if(event.srcElement.name=='Microplastics'){

  
  
    (this.Microplastics.Filtering)= ((1-(parseFloat((this.Microplastics.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Microplastics.Filtering);
 
    if(event.srcElement.value==''){
            
      this.Microplastics.Filtering=' '

    }

  }

  if(event.srcElement.name=='LSI'){


  
    (this.LSI.Filtering)= ((1-(parseFloat((this.LSI.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.LSI.Filtering);

    if(event.srcElement.value==''){
            
      this.LSI.Filtering=' '

    }
  }

  if(event.srcElement.name=='Bicarbonate'){

    (this.Bicarbonate.Filtering)= ((1-(parseFloat((this.Bicarbonate.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Bicarbonate.Filtering);
    if(event.srcElement.value==''){
            
      this.Bicarbonate.Filtering=' '

    }

  }

  if(event.srcElement.name=='Alkalinity'){


  
    (this.Alkalinity.Filtering)= ((1-(parseFloat((this.Alkalinity.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Alkalinity.Filtering);
    if(event.srcElement.value==''){
            
      this.Alkalinity.Filtering=' '

    }

  }

  if(event.srcElement.name=='Oxidation'){

    (this.Oxidation.Filtering)= ((1-(parseFloat((this.Oxidation.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Oxidation.Filtering);
    if(event.srcElement.value==''){
            
      this.Oxidation.Filtering=' '

    }
  }


  if(event.srcElement.name=='eColi'){
  

  
    (this.eColi.Filtering)= ((1-(parseFloat((this.eColi.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.eColi.Filtering);
    if(event.srcElement.value==''){
            
      this.eColi.Filtering=' '

    }

  }

  if(event.srcElement.name=='Clostridium'){


  
    (this.Clostridium.Filtering)= ((1-(parseFloat((this.Clostridium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Clostridium.Filtering);
    if(event.srcElement.value==''){
            
      this.Clostridium.Filtering=' '

    }

  }

  // Bacteria

  if(event.srcElement.name=='Bacteria'){


  
    (this.Bacteria.Filtering)= ((1-(parseFloat((this.Bacteria.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Bacteria.Filtering);
    if(event.srcElement.value==''){
            
      this.Bacteria.Filtering=' '

    }

  }
  
  if(event.srcElement.name=='Enterococcus'){


    (this.Enterococcus.Filtering)= ((1-(parseFloat((this.Enterococcus.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Enterococcus.Filtering);
    if(event.srcElement.value==''){
            
      this.Enterococcus.Filtering=' '

    }

  }

  if(event.srcElement.name=='Microbial_Cysts'){


  
    (this.Microbial_Cysts.Filtering)= ((1-(parseFloat((this.Microbial_Cysts.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Microbial_Cysts.Filtering);
    if(event.srcElement.value==''){
            
      this.Microbial_Cysts.Filtering=' '

    }

  }


  if(event.srcElement.name=='Cyanide_total'){
  


    (this.Cyanide_total.Filtering)= ((1-(parseFloat((this.Cyanide_total.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Cyanide_total.Filtering);
    if(event.srcElement.value==''){
            
      this.Cyanide_total.Filtering=' '

    }

  }

  if(event.srcElement.name=='Fluoride'){
 
  
    (this.Fluoride.Filtering)= ((1-(parseFloat((this.Fluoride.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Fluoride.Filtering);
    if(event.srcElement.value==''){
            
      this.Fluoride.Filtering=' '

    }

  }

  
  if(event.srcElement.name=='Mercury'){

    (this.Mercury.Filtering)= ((1-(parseFloat((this.Mercury.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Mercury.Filtering);
    if(event.srcElement.value==''){
            
      this.Mercury.Filtering=' '

    }

  }

  if(event.srcElement.name=='Nitrites'){

    (this.Nitrites.Filtering)= ((1-(parseFloat((this.Nitrites.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Nitrites.Filtering);
    if(event.srcElement.value==''){
            
      this.Nitrites.Filtering=' '

    }

  }

  if(event.srcElement.name=='Nitrates'){

    (this.Nitrates.Filtering)= ((1-(parseFloat((this.Nitrates.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Nitrates.Filtering);
    if(event.srcElement.value==''){
            
      this.Nitrates.Filtering=' '

    }

  }

    if(event.srcElement.name=='Magnesium'){
 
      (this.Magnesium.Filtering)= ((1-(parseFloat((this.Magnesium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Magnesium.Filtering);
      if(event.srcElement.value==''){
            
        this.Magnesium.Filtering=' '
  
      }
    }

    if(event.srcElement.name=='Calcium'){
    
  
      (this.Calcium.Filtering)= ((1-(parseFloat((this.Calcium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Calcium.Filtering);
      if(event.srcElement.value==''){
            
        this.Calcium.Filtering=' '
  
      }
  
    }
    if(event.srcElement.name=='Potassium'){
 
  
      (this.Potassium.Filtering)= ((1-(parseFloat((this.Potassium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log("Potassium",this.Potassium.Filtering);
      if(event.srcElement.value==''){
            
        this.Potassium.Filtering=' '
  
      }
  
    }

    if(event.srcElement.name=='Chloride'){
   
      (this.Chloride.Filtering)= ((1-(parseFloat((this.Chloride.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Chloride.Filtering);
      if(event.srcElement.value==''){
            
        this.Chloride.Filtering=' '
  
      }
  
    }
 
    if(event.srcElement.name=='Aluminium'){
     
      (this.Aluminium.Filtering)= ((1-(parseFloat((this.Aluminium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Aluminium.Filtering);
      if(event.srcElement.value==''){
            
        this.Chloride.Filtering=' '
  
      }
  
    }
    if(event.srcElement.name=='Antimony'){
   
      (this.Antimony.Filtering)= ((1-(parseFloat((this.Antimony.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Antimony.Filtering);
      if(event.srcElement.value==''){
            
        this.Antimony.Filtering=' '
  
      }
  
    }
    if(event.srcElement.name=='Arsenic'){
   
      (this.Arsenic.Filtering)= ((1-(parseFloat((this.Arsenic.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Arsenic.Filtering);
      if(event.srcElement.value==''){
            
        this.Arsenic.Filtering=' '
  
      }
  
    }
    if(event.srcElement.name=='Barium'){
  
      (this.Barium.Filtering)= ((1-(parseFloat((this.Barium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Barium.Filtering);
      if(event.srcElement.value==''){
            
        this.Barium.Filtering=' '
  
      }
  
    }
    if(event.srcElement.name=='Cadmium'){
   
      (this.Cadmium.Filtering)= ((1-(parseFloat((this.Cadmium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Cadmium.Filtering);
      if(event.srcElement.value==''){
            
        this.Cadmium.Filtering=' '
  
      }
  
    }
    if(event.srcElement.name=='Chromium'){
 
      (this.Chromium.Filtering)= ((1-(parseFloat((this.Chromium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Chromium.Filtering);
      if(event.srcElement.value==''){
            
        this.Chromium.Filtering=' '
  
      }
  
    }
    if(event.srcElement.name=='Copper'){

      (this.Copper.Filtering)= ((1-(parseFloat((this.Copper.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Copper.Filtering);

      if(event.srcElement.value==''){
            
        this.Copper.Filtering=' '
  
      }
  
    }


    if(event.srcElement.name=='Lead'){

      (this.Lead.Filtering)= ((1-(parseFloat((this.Lead.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Lead.Filtering);

      if(event.srcElement.value==''){
            
        this.Lead.Filtering=' '
  
      }
  
    }


    if(event.srcElement.name=='Manganese'){

      (this.Manganese.Filtering)= ((1-(parseFloat((this.Manganese.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Manganese.Filtering);

      if(event.srcElement.value==''){
            
        this.Manganese.Filtering=' '
  
      }
  
    }
    if(event.srcElement.name=='Iron'){

      (this.Iron.Filtering)= ((1-(parseFloat((this.Iron.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Iron.Filtering);
      if(event.srcElement.value==''){
            
        this.Iron.Filtering=' '
  
      }
  
    }
    if(event.srcElement.name=='Nickel'){
  
      (this.Nickel.Filtering)= ((1-(parseFloat((this.Nickel.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Nickel.Filtering);
      if(event.srcElement.value==''){
            
        this.Nickel.Filtering=' '
  
      }
  
    }
    if(event.srcElement.name=='Selenium'){

      (this.Selenium.Filtering)= ((1-(parseFloat((this.Selenium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Selenium.Filtering);
      if(event.srcElement.value==''){
            
        this.Selenium.Filtering=' '
  
      }
  
    }
    if(event.srcElement.name=='Sodium'){

      (this.Sodium.Filtering)= ((1-(parseFloat((this.Sodium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Sodium.Filtering);
      if(event.srcElement.value==''){
            
        this.Sodium.Filtering=' '
  
      }
  
    }
    if(event.srcElement.name=='Zinc'){
  
      (this.Zinc.Filtering)= ((1-(parseFloat((this.Zinc.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
      console.log(this.Zinc.Filtering);
       if(event.srcElement.value==''){
            
        this.Zinc.Filtering=' '
  
      }
  
    }


  if(event.srcElement.name=='Total_Trichloroethylene'){
  
    (this.Total_Trichloroethylene.Filtering)= ((1-(parseFloat((this.Total_Trichloroethylene.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Total_Trichloroethylene.Filtering);
    if(event.srcElement.value==''){
            
      this.Total_Trichloroethylene.Filtering=' '

    }

  }

  if(event.srcElement.name=='Trichloroethylene'){

    (this.Trichloroethylene.Filtering)= ((1-(parseFloat((this.Trichloroethylene.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Trichloroethylene.Filtering);
    if(event.srcElement.value==''){
            
      this.Trichloroethylene.Filtering=' '

    }

  }

  if(event.srcElement.name=='Tetrachloroethylene'){


    (this.Tetrachloroethylene.Filtering)= ((1-(parseFloat((this.Tetrachloroethylene.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Tetrachloroethylene.Filtering);

    if(event.srcElement.value==''){
            
      this.Tetrachloroethylene.Filtering=' '

    }

  }
  if(event.srcElement.name=='Total_Trihalomethanes'){

  
    (this.Total_Trihalomethanes.Filtering)= ((1-(parseFloat((this.Total_Trihalomethanes.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Total_Trihalomethanes.Filtering);
  
    if(event.srcElement.value==''){
            
      this.Total_Trihalomethanes.Filtering=' '

    }
  }
  // Dichloromethane
  if(event.srcElement.name=='Dichloromethane'){

    (this.Dichloromethane.Filtering)= ((1-(parseFloat((this.Dichloromethane.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Dichloromethane.Filtering);
    if(event.srcElement.value==''){
            
      this.Dichloromethane.Filtering=' '

    }

  }



  if(event.srcElement.name=='Total_haloacetic_acids'){

    (this.Total_haloacetic_acids.Filtering)= ((1-(parseFloat((this.Total_haloacetic_acids.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Total_haloacetic_acids.Filtering);
    if(event.srcElement.value==''){
            
      this.Total_haloacetic_acids.Filtering=' '

    }

  }


  if(event.srcElement.name=='Chlordane'){

    (this.Chlordane.Filtering)= ((1-(parseFloat((this.Chlordane.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Chlordane.Filtering);
    if(event.srcElement.value==''){
            
      this.Chlordane.Filtering=' '

    }

  }
  if(event.srcElement.name=='Heptachlor'){

    (this.Heptachlor.Filtering)= ((1-(parseFloat((this.Heptachlor.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Heptachlor.Filtering);
    if(event.srcElement.value==''){
            
      this.Heptachlor.Filtering=' '

    }

  }
  if(event.srcElement.name=='Lindane'){

    (this.Lindane.Filtering)= ((1-(parseFloat((this.Lindane.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Lindane.Filtering);
    if(event.srcElement.value==''){
            
      this.Lindane.Filtering=' '

    }

  }
  if(event.srcElement.name=='Total_pesticides'){
 
    (this.Total_pesticides.Filtering)= ((1-(parseFloat((this.Total_pesticides.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Total_pesticides.Filtering);
    if(event.srcElement.value==''){
            
      this.Total_pesticides.Filtering=' '

    }

  }

  if(event.srcElement.name=='D_2_4'){
 
    (this.D_2_4.Filtering)= ((1-(parseFloat((this.D_2_4.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.D_2_4.Filtering);
    if(event.srcElement.value==''){
            
      this.D_2_4.Filtering=' '

    }

  }

  if(event.srcElement.name=='Atrazine'){
 
    (this.Atrazine.Filtering)= ((1-(parseFloat((this.Atrazine.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Atrazine.Filtering);
    if(event.srcElement.value==''){
            
      this.Atrazine.Filtering=' '

    }

  }
  if(event.srcElement.name=='Total_Herbicides'){
 
    (this.Total_Herbicides.Filtering)= ((1-(parseFloat((this.Total_Herbicides.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Total_Herbicides.Filtering);
    if(event.srcElement.value==''){
            
      this.Total_Herbicides.Filtering=' '

    }

  }



if(event.srcElement.name=='PFOA'){


  (this.PFOA.Filtering)= ((1-(parseFloat((this.PFOA.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
  console.log(this.PFOA.Filtering);
  if(event.srcElement.value==''){
            
    this.PFOA.Filtering=' '

  }

}

if(event.srcElement.name=='PFOS'){

  (this.PFOS.Filtering)= ((1-(parseFloat((this.PFOS.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
  console.log(this.PFOS.Filtering);
  if(event.srcElement.value==''){
            
    this.PFOS.Filtering=' '

  }

}

if(event.srcElement.name=='PFNA'){

  (this.PFNA.Filtering)= ((1-(parseFloat((this.PFNA.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
  console.log(this.PFNA.Filtering);
  if(event.srcElement.value==''){
            
    this.PFNA.Filtering=' '

  }

}





  if(event.srcElement.name=='Ammonia'){
  
    (this.Ammonia.Filtering)= ((1-(parseFloat((this.Ammonia.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Ammonia.Filtering);
    if(event.srcElement.value==''){
            
      this.Ammonia.Filtering=' '
  
    }
  
  }
  if(event.srcElement.name=='Asbestos'){

    (this.Asbestos.Filtering)= ((1-(parseFloat((this.Asbestos.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Asbestos.Filtering);
    if(event.srcElement.value==''){
            
      this.Asbestos.Filtering=' '
  
    }
  
  }

  if(event.srcElement.name=='Perchlorate'){
  
    (this.Perchlorate.Filtering)= ((1-(parseFloat((this.Perchlorate.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Perchlorate.Filtering);
    if(event.srcElement.value==''){
            
      this.Perchlorate.Filtering=' '
  
    }
  
  }

  if(event.srcElement.name=='Polonium'){


    (this.Polonium.Filtering)= ((1-(parseFloat((this.Polonium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Polonium.Filtering);
    if(event.srcElement.value==''){
            
      this.Polonium.Filtering=' '
  
    }
  
  }

  if(event.srcElement.name=='Radium'){


    (this.Radium.Filtering)= ((1-(parseFloat((this.Radium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Radium.Filtering);
    if(event.srcElement.value==''){
            
      this.Radium.Filtering=' '
  
    }
  
  }

  if(event.srcElement.name=='Silver'){

  
    (this.Silver.Filtering)= ((1-(parseFloat((this.Silver.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Silver.Filtering);
    if(event.srcElement.value==''){
            
      this.Silver.Filtering=' '
  
    }
  
  }

  if(event.srcElement.name=='Sulfate'){
   
    (this.Sulfate.Filtering)= ((1-(parseFloat((this.Sulfate.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Sulfate.Filtering);
    if(event.srcElement.value==''){
            
      this.Sulfate.Filtering=' '
  
    }
  }

  if(event.srcElement.name=='Uranium'){
  
    (this.Uranium.Filtering)= ((1-(parseFloat((this.Uranium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Uranium.Filtering);
    if(event.srcElement.value==''){
            
      this.Uranium.Filtering=' '
  
    }
  
  }

  



  if(event.srcElement.name=='Atenolol'){
  
    (this.Atenolol.Filtering)= ((1-(parseFloat((this.Atenolol.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Atenolol.Filtering);
    if(event.srcElement.value==''){
            
      this.Atenolol.Filtering=' '
  
    }
  
  }

  
  if(event.srcElement.name=='Carbamazepine'){

  
    (this.Carbamazepine.Filtering)= ((1-(parseFloat((this.Carbamazepine.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Carbamazepine.Filtering);
    if(event.srcElement.value==''){
            
      this.Carbamazepine.Filtering=' '
  
    }
  }
  if(event.srcElement.name=='Estrone'){

    (this.Estrone.Filtering)= ((1-(parseFloat((this.Estrone.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Estrone.Filtering);
    if(event.srcElement.value==''){
            
      this.Estrone.Filtering=' '
  
    }
  }

  if(event.srcElement.name=='Meprobamat'){
  
    (this.Meprobamat.Filtering)= ((1-(parseFloat((this.Meprobamat.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Meprobamat.Filtering);
    if(event.srcElement.value==''){
            
      this.Meprobamat.Filtering=' '
  
    }
  }

  if(event.srcElement.name=='Trimethoprim'){
 
    (this.Trimethoprim.Filtering)= ((1-(parseFloat((this.Trimethoprim.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toFixed(5);
    console.log(this.Trimethoprim.Filtering);
    if(event.srcElement.value==''){
            
      this.Trimethoprim.Filtering=' '
  
    }
  
  }
}
else if(this.averageDataRange ==true){ 
  if(event.srcElement.name=='Free_Chlorine_minimum' ||event.srcElement.name=='Free_Chlorine_maximum' ){ 
    let a,b;
   a=(isNaN(this.Free_Chlorine.minimum)?0:this.Free_Chlorine.minimum)*(100-parseFloat((this.Free_Chlorine.filtering).replace("%", " ")))/100
  

   b=(isNaN(this.Free_Chlorine.maximum)?0:this.Free_Chlorine.maximum)*(100-parseFloat((this.Free_Chlorine.filtering).replace("%", " ")))/100
  if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
    a= a.toString();
    b=b.toString();
  }
  else{
  this.Free_Chlorine.Filtering= a.toString()+" - "+b.toString()
  }
  }
  if(event.srcElement.name=='Total_Chlorine_minimum' ||event.srcElement.name=='Total_Chlorine_maximum'){
let a,b;
     a=(isNaN(this.Total_Chlorine.minimum)?0:this.Total_Chlorine.minimum)*(100-parseFloat((this.Total_Chlorine.filtering).replace("%", " ")))/100

    b=(isNaN(this.Total_Chlorine.maximum)?0:this.Total_Chlorine.maximum)*(100-parseFloat((this.Total_Chlorine.filtering).replace("%", " ")))/100
    
    if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
    this.Total_Chlorine.Filtering=a.toString()+" - "+b.toString()
    }
  }
  if(event.srcElement.name=='Chloramine_minimum' ||event.srcElement.name=='Chloramine_maximum'){
let a,b;
     a=(isNaN(this.Chloramine.minimum)?0:this.Chloramine.minimum)*(100-parseFloat((this.Chloramine.filtering).replace("%", " ")))/100

     b=(isNaN(this.Chloramine.maximum)?0:this.Chloramine.maximum)*(100-parseFloat((this.Chloramine.filtering).replace("%", " ")))/100
     if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
    this.Chloramine.Filtering=a.toString()+" - "+b.toString()
    }
  }
  if(event.srcElement.name=='Temperature_minimum' ||event.srcElement.name=='Temperature_maximum'){
    let a,b;
    a=(isNaN(this.Temperature.minimum)?0:this.Temperature.minimum)*(100-parseFloat((this.Temperature.filtering).replace("%", " ")))/100

    b=(isNaN(this.Temperature.maximum)?0:this.Temperature.maximum)*(100-parseFloat((this.Temperature.filtering).replace("%", " ")))/100
    if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
    this.Temperature.Filtering=a.toString()+" - "+b.toString()
    }
  }
  if(event.srcElement.name=='Hardness_minimum' ||event.srcElement.name=='Hardness_maximum'){
let a,b;
    a=(isNaN(this.Hardness.minimum)?0:this.Hardness.minimum)*(100-parseFloat((this.Hardness.filtering).replace("%", " ")))/100

    b=(isNaN(this.Hardness.maximum)?0:this.Hardness.maximum)*(100-parseFloat((this.Hardness.filtering).replace("%", " ")))/100
    if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
    this.Hardness.Filtering=a.toString()+" - "+b.toString()
    }
  }
  if(event.srcElement.name=='Hardness_f_minimum' ||event.srcElement.name=='Hardness_f_maximum'){
let a,b;
     a=(isNaN(this.Hardness_f.minimum)?0:this.Hardness_f.minimum)*(100-parseFloat((this.Hardness_f.filtering).replace("%", " ")))/100

     b=(isNaN(this.Hardness_f.maximum)?0:this.Hardness_f.maximum)*(100-parseFloat((this.Hardness_f.filtering).replace("%", " ")))/100
     if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
    this.Hardness_f.Filtering=a.toString()+" - "+b.toString()
    }
  }
  if(event.srcElement.name=='pH_minimum' ||event.srcElement.name=='pH_maximum'){
    let a,b;
     a=(isNaN(this.pH.minimum)?0:this.pH.minimum)

    b=(isNaN(this.pH.maximum)?0:this.pH.maximum)
    if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
    this.pH.Filtering=a.toString()+" - "+b.toString()
    }
  }
  if(event.srcElement.name=='Turbidity_minimum' ||event.srcElement.name=='Turbidity_maximum'){
    let a,b;
    a=(isNaN(this.Turbidity.minimum)?0:this.Turbidity.minimum)*(100-parseFloat((this.Turbidity.filtering).replace("%", " ")))/100

   b=(isNaN(this.Turbidity.maximum)?0:this.Turbidity.maximum)*(100-parseFloat((this.Turbidity.filtering).replace("%", " ")))/100
   if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
    a= a.toString();
    b=b.toString();
  }
  else{
    this.Turbidity.Filtering=a.toString()+" - "+b.toString()
  }
  }
  if(event.srcElement.name=='Conductivity_minimum' ||event.srcElement.name=='Conductivity_maximum'){
let a,b;
     a=(isNaN(this.Conductivity.minimum)?0:this.Conductivity.minimum)*(100-parseFloat((this.Conductivity.filtering).replace("%", " ")))/100

     b=(isNaN(this.Conductivity.maximum)?0:this.Conductivity.maximum)*(100-parseFloat((this.Conductivity.filtering).replace("%", " ")))/100

     if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
    this.Conductivity.Filtering=a.toString()+" - "+b.toString()
    }
  }
  if(event.srcElement.name=='Color_minimum' ||event.srcElement.name=='Color_maximum'){
    let a,b;
    a=(isNaN(this.Color.minimum)?0:this.Color.minimum)*(100-parseFloat((this.Color.filtering).replace("%", " ")))/100

    b=(isNaN(this.Color.maximum)?0:this.Color.maximum)*(100-parseFloat((this.Color.filtering).replace("%", " ")))/100
    if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
    this.Color.Filtering=a.toString()+" - "+b.toString()
    }
  }
  if(event.srcElement.name=='Odor_minimum' ||event.srcElement.name=='Odor_maximum'){
let a,b;
    a=(isNaN(this.Odor.minimum)?0:this.Odor.minimum)*(100-parseFloat((this.Odor.filtering).replace("%", " ")))/100

    b=(isNaN(this.Odor.maximum)?0:this.Odor.maximum)*(100-parseFloat((this.Odor.filtering).replace("%", " ")))/100
    if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
    this.Odor.Filtering=a.toString()+" - "+b.toString()
    }
  }
  if(event.srcElement.name=='TDS_minimum' ||event.srcElement.name=='TDS_maximum'){

    let a,b;
     a=(isNaN(this.TDS.minimum)?0:this.TDS.minimum)*(100-parseFloat((this.TDS.filtering).replace("%", " ")))/100

    b=(isNaN(this.TDS.maximum)?0:this.TDS.maximum)*(100-parseFloat((this.TDS.filtering).replace("%", " ")))/100
    if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
    this.TDS.Filtering=a.toString()+" - "+b.toString()
    }


  }
  if(event.srcElement.name=='Microplastics_minimum' ||event.srcElement.name=='Microplastics_maximum'){
    let a,b;
    a=(isNaN(this.Microplastics.minimum)?0:this.Microplastics.minimum)*(100-parseFloat((this.Microplastics.filtering).replace("%", " ")))/100

     b=(isNaN(this.Microplastics.maximum)?0:this.Microplastics.maximum)*(100-parseFloat((this.Microplastics.filtering).replace("%", " ")))/100

     if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
    this.Microplastics.Filtering=a.toString()+" - "+b.toString()
    }
    // this.Microplastics.Filtering=0
  }
  if(event.srcElement.name=='LSI_minimum' ||event.srcElement.name=='LSI_maximum' ){ 
    let a,b;
    a=(isNaN(this.LSI.minimum)?0:this.LSI.minimum)*(100-parseFloat((this.LSI.filtering).replace("%", " ")))/100

     b=(isNaN(this.LSI.maximum)?0:this.LSI.maximum)*(100-parseFloat((this.LSI.filtering).replace("%", " ")))/100
    if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
    this.LSI.Filtering=a.toString()+" - "+b.toString()
    }
    }
    if(event.srcElement.name=='Bicarbonate_minimum' ||event.srcElement.name=='Bicarbonate_maximum'){
      let a,b;
      a=(isNaN(this.Bicarbonate.minimum)?0:this.Bicarbonate.minimum)*(100-parseFloat((this.Bicarbonate.filtering).replace("%", " ")))/100

       b=(isNaN(this.Bicarbonate.maximum)?0:this.Bicarbonate.maximum)*(100-parseFloat((this.Bicarbonate.filtering).replace("%", " ")))/100
      if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
        a= a.toString();
        b=b.toString();
      }
      else{
      this.Bicarbonate.Filtering=a.toString()+" - "+b.toString()
      }
    }
    if(event.srcElement.name=='Alkalinity_minimum' ||event.srcElement.name=='Alkalinity_maximum'){
     let a,b;
       a=(isNaN(this.Alkalinity.minimum)?0:this.Alkalinity.minimum)*(100-parseFloat((this.Alkalinity.filtering).replace("%", " ")))/100

      b=(isNaN(this.Alkalinity.maximum)?0:this.Alkalinity.maximum)*(100-parseFloat((this.Alkalinity.filtering).replace("%", " ")))/100
      if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
        a= a.toString();
        b=b.toString();
      }
      else{
      this.Alkalinity.Filtering=a.toString()+" - "+b.toString()
      }
    }
    if(event.srcElement.name=='Oxidation_minimum' ||event.srcElement.name=='Oxidation_maximum'){
      let a,b;
       a=(isNaN(this.Oxidation.minimum)?0:this.Oxidation.minimum)*(100-parseFloat((this.Oxidation.filtering).replace("%", " ")))/100

       b=(isNaN(this.Oxidation.maximum)?0:this.Oxidation.maximum)*(100-parseFloat((this.Oxidation.filtering).replace("%", " ")))/100
      if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
        a= a.toString();
        b=b.toString();
      }
      else{
      this.Oxidation.Filtering=a.toString()+" - "+b.toString()
      }
    }
    if(event.srcElement.name=='eColi_minimum' ||event.srcElement.name=='eColi_maximum'){
      let a,b;
      a=(isNaN(this.eColi.minimum)?0:this.eColi.minimum)*(100-parseFloat((this.eColi.filtering).replace("%", " ")))/100

       b=(isNaN(this.eColi.maximum)?0:this.eColi.maximum)*(100-parseFloat((this.eColi.filtering).replace("%", " ")))/100
       if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
        a= a.toString();
        b=b.toString();
      }
      else{
      this.eColi.Filtering=a.toString()+" - "+b.toString()
      }
    }
    if(event.srcElement.name=='Clostridium_minimum' ||event.srcElement.name=='Clostridium_maximum'){
let a,b;
       a=(isNaN(this.Clostridium.minimum)?0:this.Clostridium.minimum)*(100-parseFloat((this.Clostridium.filtering).replace("%", " ")))/100
       b=(isNaN(this.Clostridium.maximum)?0:this.Clostridium.maximum)*(100-parseFloat((this.Clostridium.filtering).replace("%", " ")))/100
       if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
        a= a.toString();
        b=b.toString();
      }
      else{
      this.Clostridium.Filtering=a.toString()+" - "+b.toString()
      }
    }
    if(event.srcElement.name=='Bacterias_minimum' ||event.srcElement.name=='Bacterias_maximum'){
      let a,b;
       a=(isNaN(this.Bacteria.minimum)?0:this.Bacteria.minimum)*(100-parseFloat((this.Bacteria.filtering).replace("%", " ")))/100
     b=(isNaN(this.Bacteria.maximum)?0:this.Bacteria.maximum)*(100-parseFloat((this.Bacteria.filtering).replace("%", " ")))/100
     if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
      this.Bacteria.Filtering=a.toString()+" - "+b.toString()
    }
    }
    if(event.srcElement.name=='Enterococcus_minimum' ||event.srcElement.name=='Enterococcus_maximum'){
let a,b;
      
       a=(isNaN(this.Enterococcus.minimum)?0:this.Enterococcus.minimum)*(100-parseFloat((this.Enterococcus.filtering).replace("%", " ")))/100
       b=(isNaN(this.Enterococcus.maximum)?0:this.Enterococcus.maximum)*(100-parseFloat((this.Enterococcus.filtering).replace("%", " ")))/100
       if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
        a= a.toString();
        b=b.toString();
      }
      else{
      this.Enterococcus.Filtering=a.toString()+" - "+b.toString()
      }
    }
    if(event.srcElement.name=='Microbial_Cysts_minimum' ||event.srcElement.name=='Microbial_Cysts_maximum'){
    let a,b;
      a=(isNaN(this.Microbial_Cysts.minimum)?0:this.Microbial_Cysts.minimum)*(100-parseFloat((this.Microbial_Cysts.filtering).replace("%", " ")))/100
      b=(isNaN(this.Microbial_Cysts.maximum)?0:this.Microbial_Cysts.maximum)*(100-parseFloat((this.Microbial_Cysts.filtering).replace("%", " ")))/100
      if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
        a= a.toString();
        b=b.toString();
      }
      else{
      this.Microbial_Cysts.Filtering=a.toString()+" - "+b.toString()
      }
    }
    if(event.srcElement.name=='Cyanide_total_minimum' ||event.srcElement.name=='Cyanide_total_maximum'){
      let a,b
      a=(isNaN(this.Cyanide_total.minimum)?0:this.Cyanide_total.minimum)*(100-parseFloat((this.Cyanide_total.filtering).replace("%", " ")))/100
      b=(isNaN(this.Cyanide_total.maximum)?0:this.Cyanide_total.maximum)*(100-parseFloat((this.Cyanide_total.filtering).replace("%", " ")))/100
      if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
        a= a.toString();
        b=b.toString();
      }
      else{
      this.Cyanide_total.Filtering=a.toString()+" - "+b.toString()
      }
    }
    if(event.srcElement.name=='Fluoride_minimum' ||event.srcElement.name=='Fluoride_maximum'){

      let a,b;
      a=(isNaN(this.Fluoride.minimum)?0:this.Fluoride.minimum)*(100-parseFloat((this.Fluoride.filtering).replace("%", " ")))/100
     b=(isNaN(this.Fluoride.maximum)?0:this.Fluoride.maximum)*(100-parseFloat((this.Fluoride.filtering).replace("%", " ")))/100
     if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
      this.Fluoride.Filtering=a.toString()+" - "+b.toString()
    }
    }
    if(event.srcElement.name=='Mercury_minimum' ||event.srcElement.name=='Mercury_maximum'){
      let a,b;
       a=(isNaN(this.Mercury.minimum)?0:this.Mercury.minimum)*(100-parseFloat((this.Mercury.filtering).replace("%", " ")))/100
      b=(isNaN(this.Mercury.maximum)?0:this.Mercury.maximum)*(100-parseFloat((this.Mercury.filtering).replace("%", " ")))/100
      if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
        a= a.toString();
        b=b.toString();
      }
      else{
      this.Mercury.Filtering=a.toString()+" - "+b.toString()

      }
    }
    if(event.srcElement.name=='Nitrites_minimum' ||event.srcElement.name=='Nitrites_maximum'){
      let a,b;
      a=(isNaN(this.Nitrites.minimum)?0:this.Nitrites.minimum)*(100-parseFloat((this.Nitrites.filtering).replace("%", " ")))/100
     b=(isNaN(this.Nitrites.maximum)?0:this.Nitrites.maximum)*(100-parseFloat((this.Nitrites.filtering).replace("%", " ")))/100
     if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
      this.Nitrites.Filtering=a.toString()+" - "+b.toString()
    }
    }
    if(event.srcElement.name=='Nitrates_minimum' ||event.srcElement.name=='Nitrates_maximum'){
      let a,b
       a=(isNaN(this.Nitrates.minimum)?0:this.Nitrates.minimum)*(100-parseFloat((this.Nitrates.filtering).replace("%", " ")))/100
    b=(isNaN(this.Nitrates.maximum)?0:this.Nitrates.maximum)*(100-parseFloat((this.Nitrates.filtering).replace("%", " ")))/100
    if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{  
    this.Nitrates.Filtering=a.toString()+" - "+b.toString()
    }
    }
    
    if(event.srcElement.name=='Magnesium_minimum' ||event.srcElement.name=='Magnesium_maximum' ){ 
let a,b;
      a=(isNaN(this.Magnesium.minimum)?0:this.Magnesium.minimum)*(100-parseFloat((this.Magnesium.filtering).replace("%", " ")))/100
     b=(isNaN(this.Magnesium.maximum)?0:this.Magnesium.maximum)*(100-parseFloat((this.Magnesium.filtering).replace("%", " ")))/100
     if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
      a= a.toString();
      b=b.toString();
    }
    else{
      this.Magnesium.Filtering=a.toString()+" - "+b.toString()
    }
      }

      if(event.srcElement.name=='Calcium_minimum' ||event.srcElement.name=='Calcium_maximum'){
        let a,b;
        a=(isNaN(this.Calcium.minimum)?0:this.Calcium.minimum)*(100-parseFloat((this.Calcium.filtering).replace("%", " ")))/100
         b=(isNaN(this.Calcium.maximum)?0:this.Calcium.maximum)*(100-parseFloat((this.Calcium.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Calcium.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Potassium_minimum' ||event.srcElement.name=='Potassium_maximum'){
       let a,b
        a=(isNaN(this.Potassium.minimum)?0:this.Potassium.minimum)*(100-parseFloat((this.Potassium.filtering).replace("%", " ")))/100
       b=(isNaN(this.Potassium.maximum)?0:this.Potassium.maximum)*(100-parseFloat((this.Potassium.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Potassium.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Chloride_minimum' ||event.srcElement.name=='Chloride_maximum'){
let a,b;
         a=(isNaN(this.Chloride.minimum)?0:this.Chloride.minimum)*(100-parseFloat((this.Chloride.filtering).replace("%", " ")))/100
       b=(isNaN(this.Chloride.maximum)?0:this.Chloride.maximum)*(100-parseFloat((this.Chloride.filtering).replace("%", " ")))/100
       if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
        a= a.toString();
        b=b.toString();
      }
      else{
        this.Chloride.Filtering=a.toString()+" - "+b.toString()
      }
      }
    //start

      if(event.srcElement.name=='Aluminium_minimum' ||event.srcElement.name=='Aluminium_maximum'){
        let a,b;
        a=(isNaN(this.Aluminium.minimum)?0:this.Aluminium.minimum)*(100-parseFloat((this.Aluminium.filtering).replace("%", " ")))/100
        b=(isNaN(this.Aluminium.maximum)?0:this.Aluminium.maximum)*(100-parseFloat((this.Aluminium.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Aluminium.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Antimony_minimum' ||event.srcElement.name=='Antimony_maximum'){
        let a,b
         a=(isNaN(this.Antimony.minimum)?0:this.Antimony.minimum)*(100-parseFloat((this.Antimony.filtering).replace("%", " ")))/100
       b=(isNaN(this.Antimony.maximum)?0:this.Antimony.maximum)*(100-parseFloat((this.Antimony.filtering).replace("%", " ")))/100
       if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
        a= a.toString();
        b=b.toString();
      }
      else{
        this.Antimony.Filtering=a.toString()+" - "+b.toString()
      }
      }
      if(event.srcElement.name=='Arsenic_minimum' ||event.srcElement.name=='Arsenic_maximum'){
        let a,b;
        a=(isNaN(this.Arsenic.minimum)?0:this.Arsenic.minimum)*(100-parseFloat((this.Arsenic.filtering).replace("%", " ")))/100
        b=(isNaN(this.Arsenic.maximum)?0:this.Arsenic.maximum)*(100-parseFloat((this.Arsenic.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Arsenic.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Barium_minimum' ||event.srcElement.name=='Barium_maximum'){
        let a,b;
        a=(isNaN(this.Barium.minimum)?0:this.Barium.minimum)*(100-parseFloat((this.Barium.filtering).replace("%", " ")))/100
        b=(isNaN(this.Barium.maximum)?0:this.Barium.maximum)*(100-parseFloat((this.Barium.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Barium.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Cadmium_minimum' ||event.srcElement.name=='Cadmium_maximum'){
        let a,b;
         a=(isNaN(this.Cadmium.minimum)?0:this.Cadmium.minimum)*(100-parseFloat((this.Cadmium.filtering).replace("%", " ")))/100
        b=(isNaN(this.Cadmium.maximum)?0:this.Cadmium.maximum)*(100-parseFloat((this.Cadmium.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Cadmium.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Chromium_minimum' ||event.srcElement.name=='Chromium_maximum'){
let a,b;
        a=(isNaN(this.Chromium.minimum)?0:this.Chromium.minimum)*(100-parseFloat((this.Chromium.filtering).replace("%", " ")))/100
        b=(isNaN(this.Chromium.maximum)?0:this.Chromium.maximum)*(100-parseFloat((this.Chromium.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Chromium.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Copper_minimum' ||event.srcElement.name=='Copper_maximum'){
        let a,b; 
        a=(isNaN(this.Copper.minimum)?0:this.Copper.minimum)*(100-parseFloat((this.Copper.filtering).replace("%", " ")))/100
        b=(isNaN(this.Copper.maximum)?0:this.Copper.maximum)*(100-parseFloat((this.Copper.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Copper.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Lead_minimum' ||event.srcElement.name=='Lead_maximum'){
        let a,b;
         a=(isNaN(this.Lead.minimum)?0:this.Lead.minimum)*(100-parseFloat((this.Lead.filtering).replace("%", " ")))/100
         b=(isNaN(this.Lead.maximum)?0:this.Lead.maximum)*(100-parseFloat((this.Lead.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
         this.Lead.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Manganese_minimum' ||event.srcElement.name=='Manganese_maximum'){
        let a,b;
        a=(isNaN(this.Manganese.minimum)?0:this.Manganese.minimum)*(100-parseFloat((this.Manganese.filtering).replace("%", " ")))/100
         b=(isNaN(this.Manganese.maximum)?0:this.Manganese.maximum)*(100-parseFloat((this.Manganese.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Manganese.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Chloride_minimum' ||event.srcElement.name=='Chloride_maximum'){
        let a,b 
        a=(isNaN(this.Chloride.minimum)?0:this.Chloride.minimum)*(100-parseFloat((this.Chloride.filtering).replace("%", " ")))/100
         b=(isNaN(this.Chloride.maximum)?0:this.Chloride.maximum)*(100-parseFloat((this.Chloride.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Chloride.Filtering=a.toString()+" - "+b.toString()
        }
      }
      //end
                
      if(event.srcElement.name=='Iron_minimum' ||event.srcElement.name=='Iron_maximum'){
        let a,b;
         a=(isNaN(this.Iron.minimum)?0:this.Iron.minimum)*(100-parseFloat((this.Iron.filtering).replace("%", " ")))/100
         b=(isNaN(this.Iron.maximum)?0:this.Iron.maximum)*(100-parseFloat((this.Iron.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
         this.Iron.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Nickel_minimum' ||event.srcElement.name=='Nickel_maximum'){
        let a,b; 
        a=(isNaN(this.Nickel.minimum)?0:this.Nickel.minimum)*(100-parseFloat((this.Nickel.filtering).replace("%", " ")))/100
         b=(isNaN(this.Nickel.maximum)?0:this.Nickel.maximum)*(100-parseFloat((this.Nickel.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
         this.Nickel.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Selenium_minimum' ||event.srcElement.name=='Selenium_maximum'){
let a,b;
         a=(isNaN(this.Selenium.minimum)?0:this.Selenium.minimum)*(100-parseFloat((this.Selenium.filtering).replace("%", " ")))/100
        b=(isNaN(this.Selenium.maximum)?0:this.Selenium.maximum)*(100-parseFloat((this.Selenium.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Selenium.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Sodium_minimum' ||event.srcElement.name=='Sodium_maximum'){
        let a,b;
         a=(isNaN(this.Sodium.minimum)?0:this.Sodium.minimum)*(100-parseFloat((this.Sodium.filtering).replace("%", " ")))/100
         b=(isNaN(this.Sodium.maximum)?0:this.Sodium.maximum)*(100-parseFloat((this.Sodium.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
         this.Sodium.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Zinc_minimum' ||event.srcElement.name=='Zinc_maximum'){
        let a,b;
         a=(isNaN(this.Hardness_f.minimum)?0:this.Hardness_f.minimum)*(100-parseFloat((this.Hardness_f.filtering).replace("%", " ")))/100
         b=(isNaN(this.Hardness_f.maximum)?0:this.Hardness_f.maximum)*(100-parseFloat((this.Hardness_f.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Hardness_f.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Total_Trichloroethylene_minimum' ||event.srcElement.name=='Total_Trichloroethylene_maximum'){
        let a,b;
        a=(isNaN(this.Total_Trichloroethylene.minimum)?0:this.Total_Trichloroethylene.minimum)*(100-parseFloat((this.Total_Trichloroethylene.filtering).replace("%", " ")))/100
        b=(isNaN(this.Total_Trichloroethylene.maximum)?0:this.Total_Trichloroethylene.maximum)*(100-parseFloat((this.Total_Trichloroethylene.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Total_Trichloroethylene.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Trichloroethylene_minimum' ||event.srcElement.name=='Trichloroethylene_maximum'){

        let a,b
         a=(isNaN(this.Trichloroethylene.minimum)?0:this.Trichloroethylene.minimum)*(100-parseFloat((this.Trichloroethylene.filtering).replace("%", " ")))/100
        b=(isNaN(this.Trichloroethylene.maximum)?0:this.Trichloroethylene.maximum)*(100-parseFloat((this.Trichloroethylene.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Trichloroethylene.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Tetrachloroethylene_minimum' ||event.srcElement.name=='Tetrachloroethylene_maximum'){
        
        let a,b 
        a=(isNaN(this.Tetrachloroethylene.minimum)?0:this.Tetrachloroethylene.minimum)*(100-parseFloat((this.Tetrachloroethylene.filtering).replace("%", " ")))/100
         b=(isNaN(this.Tetrachloroethylene.maximum)?0:this.Trichloroethylene.maximum)*(100-parseFloat((this.Tetrachloroethylene.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
         this.Tetrachloroethylene.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Total_Trihalomethanes_minimum' ||event.srcElement.name=='Total_Trihalomethanes_maximum'){
        let a,b
        
        a=(isNaN(this.Total_Trihalomethanes.minimum)?0:this.Total_Trihalomethanes.minimum)*(100-parseFloat((this.Total_Trihalomethanes.filtering).replace("%", " ")))/100
        b=(isNaN(this.Total_Trihalomethanes.maximum)?0:this.Total_Trihalomethanes.maximum)*(100-parseFloat((this.Total_Trihalomethanes.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Total_Trihalomethanes.Filtering=a.toString()+" - "+b.toString()
        }
      }



      if(event.srcElement.name=='Dichloromethane_minimum' ||event.srcElement.name=='Dichloromethane_maximum'){
        let a,b;
        a=(isNaN(this.Dichloromethane.minimum)?0:this.Dichloromethane.minimum)*(100-parseFloat((this.Dichloromethane.filtering).replace("%", " ")))/100
        b=(isNaN(this.Dichloromethane.maximum)?0:this.Dichloromethane.maximum)*(100-parseFloat((this.Dichloromethane.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Dichloromethane.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Total_haloacetic_acids_minimum' ||event.srcElement.name=='Total_haloacetic_acids_maximum'){
        let a,b;
        a=(isNaN(this.Total_haloacetic_acids.minimum)?0:this.Total_haloacetic_acids.minimum)*(100-parseFloat((this.Total_haloacetic_acids.filtering).replace("%", " ")))/100
       b=(isNaN(this.Total_haloacetic_acids.maximum)?0:this.Total_haloacetic_acids.maximum)*(100-parseFloat((this.Total_haloacetic_acids.filtering).replace("%", " ")))/100
       if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
        a= a.toString();
        b=b.toString();
      }
      else{
        this.Total_haloacetic_acids.Filtering=a.toString()+" - "+b.toString()
      }
      }
      if(event.srcElement.name=='Chlordane_minimum' ||event.srcElement.name=='Chlordane_maximum'){
        let a,b;
        a=(isNaN(this.Chlordane.minimum)?0:this.Chlordane.minimum)*(100-parseFloat((this.Chlordane.filtering).replace("%", " ")))/100
         b=(isNaN(this.Chlordane.maximum)?0:this.Chlordane.maximum)*(100-parseFloat((this.Chlordane.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Chlordane.Filtering=a.toString()+" - "+b.toString()
        }
      }
      if(event.srcElement.name=='Heptachlor_minimum' ||event.srcElement.name=='Heptachlor_maximum' ){  
        let a,b;
        a=(isNaN(this.Heptachlor.minimum)?0:this.Heptachlor.minimum)*(100-parseFloat((this.Heptachlor.filtering).replace("%", " ")))/100
        b=(isNaN(this.Heptachlor.maximum)?0:this.Heptachlor.maximum)*(100-parseFloat((this.Heptachlor.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
        this.Heptachlor.Filtering=a.toString()+" - "+b.toString()
        }
        }

        if(event.srcElement.name=='Lindane_minimum' ||event.srcElement.name=='Lindane_maximum'){
          let a,b;
          a=(isNaN(this.Lindane.minimum)?0:this.Lindane.minimum)*(100-parseFloat((this.Lindane.filtering).replace("%", " ")))/100
         b=(isNaN(this.Lindane.maximum)?0:this.Lindane.maximum)*(100-parseFloat((this.Lindane.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Lindane.Filtering=a.toString()+" - "+b.toString()
        }
        }
        if(event.srcElement.name=='Total_pesticides_minimum' ||event.srcElement.name=='Total_pesticides_maximum'){
          let a,b;
           a=(isNaN(this.Total_pesticides.minimum)?0:this.Total_pesticides.minimum)*(100-parseFloat((this.Total_pesticides.filtering).replace("%", " ")))/100
           b=(isNaN(this.Total_pesticides.maximum)?0:this.Total_pesticides.maximum)*(100-parseFloat((this.Total_pesticides.filtering).replace("%", " ")))/100
           if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
            a= a.toString();
            b=b.toString();
          }
          else{
          this.Total_pesticides.Filtering=a.toString()+" - "+b.toString()
          }
        }
        if(event.srcElement.name=='D_2_4_minimum' ||event.srcElement.name=='D_2_4_maximum'){
          let a,b
          a=(isNaN(this.D_2_4.minimum)?0:this.D_2_4.minimum)*(100-parseFloat((this.D_2_4.filtering).replace("%", " ")))/100
        b=(isNaN(this.D_2_4.maximum)?0:this.D_2_4.maximum)*(100-parseFloat((this.D_2_4.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{  
        this.D_2_4.Filtering=a.toString()+" - "+b.toString()
        }
        }
        if(event.srcElement.name=='Atrazine_minimum' ||event.srcElement.name=='Atrazine_maximum'){
          let a,b;
          a=(isNaN(this.Atrazine.minimum)?0:this.Atrazine.minimum)*(100-parseFloat((this.Atrazine.filtering).replace("%", " ")))/100
        b=(isNaN(this.Atrazine.maximum)?0:this.Atrazine.maximum)*(100-parseFloat((this.Atrazine.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Atrazine.Filtering=a.toString()+" - "+b.toString()
        }
        }
        if(event.srcElement.name=='Total_Herbicides_minimum' ||event.srcElement.name=='Total_Herbicides_maximum'){
          let a,b
          a=(isNaN(this.Total_Herbicides.minimum)?0:this.Total_Herbicides.minimum)*(100-parseFloat((this.Total_Herbicides.filtering).replace("%", " ")))/100
         b=(isNaN(this.Total_Herbicides.maximum)?0:this.Total_Herbicides.maximum)*(100-parseFloat((this.Total_Herbicides.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Total_Herbicides.Filtering=a.toString()+" - "+b.toString()
        }
        }


        if(event.srcElement.name=='PFOA_minimum' ||event.srcElement.name=='PFOA_maximum'){
          let a,b;
           a=(isNaN(this.PFOA.minimum)?0:this.PFOA.minimum)*(100-parseFloat((this.PFOA.filtering).replace("%", " ")))/100
         b=(isNaN(this.PFOA.maximum)?0:this.PFOA.maximum)*(100-parseFloat((this.PFOA.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{ 
         this.PFOA.Filtering=a.toString()+" - "+b.toString()
        }  
        
        }

        if(event.srcElement.name=='PFOS_minimum' ||event.srcElement.name=='PFOS_maximum'){
          let a,b
          a=(isNaN(this.PFOS.minimum)?0:this.PFOS.minimum)*(100-parseFloat((this.PFOS.filtering).replace("%", " ")))/100
          b=(isNaN(this.PFOS.maximum)?0:this.PFOS.maximum)*(100-parseFloat((this.PFOS.filtering).replace("%", " ")))/100
          if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
            a= a.toString();
            b=b.toString();
          }
          else{
          this.PFOS.Filtering=a.toString()+" - "+b.toString()
          }
        }
        if(event.srcElement.name=='PFNA_minimum' ||event.srcElement.name=='PFNA_maximum'){
          let a,b;
          a=(isNaN(this.PFNA.minimum)?0:this.PFNA.minimum)*(100-parseFloat((this.PFNA.filtering).replace("%", " ")))/100
          b=(isNaN(this.PFNA.maximum)?0:this.PFNA.maximum)*(100-parseFloat((this.PFNA.filtering).replace("%", " ")))/100
          if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
            a= a.toString();
            b=b.toString();
          }
          else{
          this.PFNA.Filtering=a.toString()+" - "+b.toString()
          }
        }
        if(event.srcElement.name=='Ammonia_minimum' ||event.srcElement.name=='Ammonia_maximum'){
          let a,b;
           a=(isNaN(this.Ammonia.minimum)?0:this.Ammonia.minimum)*(100-parseFloat((this.Ammonia.filtering).replace("%", " ")))/100
          b=(isNaN(this.Ammonia.maximum)?0:this.Ammonia.maximum)*(100-parseFloat((this.Ammonia.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Ammonia.Filtering=a.toString()+" - "+b.toString()
        }
        }
        if(event.srcElement.name=='Asbestos_minimum' ||event.srcElement.name=='Asbestos_maximum'){
          let a,b;
          a=(isNaN(this.Asbestos.minimum)?0:this.Asbestos.minimum)*(100-parseFloat((this.Asbestos.filtering).replace("%", " ")))/100
         b=(isNaN(this.Asbestos.maximum)?0:this.Asbestos.maximum)*(100-parseFloat((this.Asbestos.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Asbestos.Filtering=a.toString()+" - "+b.toString()
        }
        }
        if(event.srcElement.name=='Perchlorate_minimum' ||event.srcElement.name=='Perchlorate_maximum'){
          let a,b ;
          a=(isNaN(this.Perchlorate.minimum)?0:this.Perchlorate.minimum)*(100-parseFloat((this.Perchlorate.filtering).replace("%", " ")))/100
         b=(isNaN(this.Perchlorate.maximum)?0:this.Perchlorate.maximum)*(100-parseFloat((this.Perchlorate.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Perchlorate.Filtering=a.toString()+" - "+b.toString()
        }
        }

        if(event.srcElement.name=='Polonium_minimum' ||event.srcElement.name=='Polonium_maximum'){
          let a,b;
          a=(isNaN(this.Polonium.minimum)?0:this.Polonium.minimum)*(100-parseFloat((this.Polonium.filtering).replace("%", " ")))/100
        b=(isNaN(this.Polonium.maximum)?0:this.Polonium.maximum)*(100-parseFloat((this.Polonium.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Polonium.Filtering=a.toString()+" - "+b.toString()
        }
        }
        if(event.srcElement.name=='Radium_minimum' ||event.srcElement.name=='Radium_maximum'){
          let a,b;
          a=(isNaN(this.Radium.minimum)?0:this.Radium.minimum)*(100-parseFloat((this.Radium.filtering).replace("%", " ")))/100
        b=(isNaN(this.Radium.maximum)?0:this.Radium.maximum)*(100-parseFloat((this.Radium.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Radium.Filtering=a.toString()+" - "+b.toString()
        }
        }
        if(event.srcElement.name=='Silver_minimum' ||event.srcElement.name=='Silver_maximum'){
          let a,b;
          a=(isNaN(this.Silver.minimum)?0:this.Silver.minimum)*(100-parseFloat((this.Silver.filtering).replace("%", " ")))/100
          b=(isNaN(this.Silver.maximum)?0:this.Silver.maximum)*(100-parseFloat((this.Silver.filtering).replace("%", " ")))/100
          if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
            a= a.toString();
            b=b.toString();
          }
          else{
          this.Silver.Filtering=a.toString()+" - "+b.toString()
          }
        }
        if(event.srcElement.name=='Sulfate_minimum' ||event.srcElement.name=='Sulfate_maximum'){
          let a,b;
          a=(isNaN(this.Sulfate.minimum)?0:this.Sulfate.minimum)*(100-parseFloat((this.Sulfate.filtering).replace("%", " ")))/100
          b=(isNaN(this.Sulfate.maximum)?0:this.Sulfate.maximum)*(100-parseFloat((this.Sulfate.filtering).replace("%", " ")))/100
          if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
            a= a.toString();
            b=b.toString();
          }
          else{
          this.Sulfate.Filtering=a.toString()+" - "+b.toString()
          }
        }
        if(event.srcElement.name=='Uranium_minimum' ||event.srcElement.name=='Uranium_maximum'){
          let a,b;
          a=(isNaN(this.Uranium.minimum)?0:this.Uranium.minimum)*(100-parseFloat((this.Uranium.filtering).replace("%", " ")))/100
         b=(isNaN(this.Uranium.maximum)?0:this.Uranium.maximum)*(100-parseFloat((this.Uranium.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Uranium.Filtering=a.toString()+" - "+b.toString()
        }
        }
        if(event.srcElement.name=='Atenolol_minimum' ||event.srcElement.name=='Atenolol_maximum'){
          let a,b
          a=(isNaN(this.Atenolol.minimum)?0:this.Atenolol.minimum)*(100-parseFloat((this.Atenolol.filtering).replace("%", " ")))/100
          b=(isNaN(this.Atenolol.maximum)?0:this.Atenolol.maximum)*(100-parseFloat((this.Atenolol.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Atenolol.Filtering=a.toString()+" - "+b.toString()
        }
        }
        if(event.srcElement.name=='Carbamazepine_minimum' ||event.srcElement.name=='Carbamazepine_maximum'){
          let a,b;
          a=(isNaN(this.Carbamazepine.minimum)?0:this.Carbamazepine.minimum)*(100-parseFloat((this.Carbamazepine.filtering).replace("%", " ")))/100
         b=(isNaN(this.Carbamazepine.maximum)?0:this.Carbamazepine.maximum)*(100-parseFloat((this.Carbamazepine.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Carbamazepine.Filtering=a.toString()+" - "+b.toString()
        }
        }

        if(event.srcElement.name=='Estrone_minimum' ||event.srcElement.name=='Estrone_maximum'){
          let a,b;
          a=(isNaN(this.Estrone.minimum)?0:this.Estrone.minimum)*(100-parseFloat((this.Estrone.filtering).replace("%", " ")))/100
         b=(isNaN(this.Estrone.maximum)?0:this.Estrone.maximum)*(100-parseFloat((this.Estrone.filtering).replace("%", " ")))/100
         if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Estrone.Filtering=a.toString()+" - "+b.toString()
        }
        }
        if(event.srcElement.name=='Meprobamat_minimum' ||event.srcElement.name=='Meprobamat_maximum'){
          let a,b;
          a=(isNaN(this.Meprobamat.minimum)?0:this.Meprobamat.minimum)*(100-parseFloat((this.Meprobamat.filtering).replace("%", " ")))/100
        b=(isNaN(this.Meprobamat.maximum)?0:this.Meprobamat.maximum)*(100-parseFloat((this.Meprobamat.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Meprobamat.Filtering=a.toString()+" - "+b.toString()
        }
        }

        if(event.srcElement.name=='Trimethoprim_minimum' ||event.srcElement.name=='Trimethoprim_maximum'){
          let a,b;
          a=(isNaN(this.Trimethoprim.minimum)?0:this.Trimethoprim.minimum)*(100-parseFloat((this.Trimethoprim.filtering).replace("%", " ")))/100
        b=(isNaN(this.Trimethoprim.maximum)?0:this.Trimethoprim.maximum)*(100-parseFloat((this.Trimethoprim.filtering).replace("%", " ")))/100
        if(isNaN(a) ||a==0 && isNaN(b) ||b==0){
          a= a.toString();
          b=b.toString();
        }
        else{
          this.Trimethoprim.Filtering=a.toString()+" - "+b.toString()
        }
        }

} 
  }

 Water_safety(){  

  this.Total_Chlorine['basic_details_id']=this.basic_details_id;
  this.Free_Chlorine['basic_details_id']=this.basic_details_id;
  this.Chloramine['basic_details_id']=this.basic_details_id;

  this.data_water_safety.push(this.Free_Chlorine,this.Total_Chlorine,this.Chloramine)
  console.log("this.data_water_safety-------?",this.data_water_safety)


 }

 general(){

  this.Temperature['table']='general_data';
  this.Temperature['basic_details_id']=this.basic_details_id;
  this.Hardness['basic_details_id']=this.basic_details_id;
  this.Hardness_f['basic_details_id']=this.basic_details_id;
  this.pH['basic_details_id']=this.basic_details_id;
  this.Turbidity['basic_details_id']=this.basic_details_id;
  this.Conductivity['basic_details_id']=this.basic_details_id; 
   this.Color['basic_details_id']=this.basic_details_id;
  this.Odor['basic_details_id']=this.basic_details_id;
  this.TDS['basic_details_id']=this.basic_details_id; 
   this.Microplastics['basic_details_id']=this.basic_details_id;
  this.LSI['basic_details_id']=this.basic_details_id;
  this.Bicarbonate['basic_details_id']=this.basic_details_id;
  this.Alkalinity['basic_details_id']=this.basic_details_id;
  this.Oxidation['basic_details_id']=this.basic_details_id;  



this.data_general.push(this.Temperature,this.Hardness,this.Hardness_f,this.pH,this.Turbidity,this.Conductivity, this.Color,this.Odor,this.TDS,this.Microplastics,this.LSI,this.Bicarbonate,this.Alkalinity,this.Oxidation)
console.log("this.data_general.pus",this.data_general)
 }

 pathogens(){
  
  this.eColi['table']='pathogens_data';
  this.eColi['basic_details_id']=this.basic_details_id;
  this.Bacteria['basic_details_id']=this.basic_details_id;
  this.Clostridium['basic_details_id']=this.basic_details_id;
  
  this.Enterococcus['basic_details_id']=this.basic_details_id;
  this.Microbial_Cysts['basic_details_id']=this.basic_details_id; 
 

  this.data_pathogens.push(this.Clostridium,this.Bacteria,this.eColi,this.Enterococcus,this.Microbial_Cysts)

 }


 chemical_parameter(){


  this.Cyanide_total['table']='chemical_parameter_data';
  this.Cyanide_total['basic_details_id']=this.basic_details_id;
  this.Fluoride['basic_details_id']=this.basic_details_id;
  this.Mercury['basic_details_id']=this.basic_details_id;
  this.Nitrites['basic_details_id']=this.basic_details_id;
  this.Nitrates['basic_details_id']=this.basic_details_id;

 

  this.data_chemical_parameter.push(this.Cyanide_total,this.Fluoride,this.Mercury,this.Nitrites,this.Nitrates)


 }

 Minerals(){ 

  this.Magnesium['table']='Minerals_data';
  this.Magnesium['basic_details_id']=this.basic_details_id;
  this.Calcium['basic_details_id']=this.basic_details_id;
  this.Potassium['basic_details_id']=this.basic_details_id;
  this.Chloride['basic_details_id']=this.basic_details_id;

  this.data_minerals.push(this.Magnesium,this.Calcium,this.Potassium,this.Chloride)



 }

 metals(){


  this.Aluminium['table']='Metals_data';

  this.Aluminium['basic_details_id']=this.basic_details_id;
  this.Antimony['basic_details_id']=this.basic_details_id;
  this.Arsenic['basic_details_id']=this.basic_details_id;
  this.Barium['basic_details_id']=this.basic_details_id;
  this.Cadmium['basic_details_id']=this.basic_details_id;
  this.Chromium['basic_details_id']=this.basic_details_id;
  this.Copper['basic_details_id']=this.basic_details_id;
  this.Iron['basic_details_id']=this.basic_details_id;
  this.Lead['basic_details_id']=this.basic_details_id;
  this.Manganese['basic_details_id']=this.basic_details_id
  this.Nickel['basic_details_id']=this.basic_details_id;
  this.Selenium['basic_details_id']=this.basic_details_id;
  this.Sodium['basic_details_id']=this.basic_details_id;
  this.Zinc['basic_details_id']=this.basic_details_id;

  this.data_metals.push(this.Aluminium,this.Antimony,this.Arsenic,this.Barium,this.Cadmium,this.Chromium,this.Copper,this.Iron,this.Lead,this.Manganese,this.Nickel,this.Selenium,this.Sodium,this.Zinc)
console.log("dffffg",this.data_metals)

// return false;

 }
 Chlorine_bi_products(){
  

  this.Total_Trichloroethylene['table']='Chlorine_bi_products_data';
  this.Total_Trichloroethylene['basic_details_id']=this.basic_details_id; 
  this.Trichloroethylene['basic_details_id']=this.basic_details_id;
  this.Tetrachloroethylene['basic_details_id']=this.basic_details_id;
  this.Total_Trihalomethanes['basic_details_id']=this.basic_details_id;
  this.Dichloromethane['basic_details_id']=this.basic_details_id;

  this.data_Chlorine_bi_products.push(this.Total_Trichloroethylene,this.Trichloroethylene,this.Tetrachloroethylene,this.Total_Trihalomethanes,this.Dichloromethane)


 }

 HAAs(){
  this.Total_haloacetic_acids['table']='HAAs_data';

  this.Total_haloacetic_acids['basic_details_id']=this.basic_details_id;  
  // this.Total_haloacetic_acids['Substance']="Total haloacetic acids";


  this.data_HAAs.push(this.Total_haloacetic_acids)

 }


 Pesticides(){


  this.Chlordane['table']='Pesticides_data';

  this.Chlordane['basic_details_id']=this.basic_details_id; 
  this.Heptachlor['basic_details_id']=this.basic_details_id;
  this.Lindane['basic_details_id']=this.basic_details_id;
  this.Total_pesticides['basic_details_id']=this.basic_details_id;


  this.data_Pesticides.push(this.Chlordane,this.Heptachlor,this.Lindane,this.Total_pesticides)


 }

 Herbicides(){


  this.D_2_4['table']='Herbicides_data';

  this.D_2_4['basic_details_id']=this.basic_details_id; 
  this.Atrazine['basic_details_id']=this.basic_details_id;
  this.Total_Herbicides['basic_details_id']=this.basic_details_id;
  this.data_Herbicides.push(this.D_2_4,this.Atrazine,this.Total_Herbicides)
 }



Perfluorinated_chemicals_(){


  this.PFOA['table']='Perfluorinated_chemicals__data';
  this.PFOA['basic_details_id']=this.basic_details_id; 
  this.PFOS['basic_details_id']=this.basic_details_id;
  this.PFNA['basic_details_id']=this.basic_details_id;
 
  this.data_other.push(this.PFOA,this.PFOS,this.PFNA)



 }


 

 other(){
    this.Ammonia['table']='other_data';
  
    this.Ammonia['basic_details_id']=this.basic_details_id; 
    this.Asbestos['basic_details_id']=this.basic_details_id;
    this.Perchlorate['basic_details_id']=this.basic_details_id;
    this.Polonium['basic_details_id']=this.basic_details_id;
    this.Radium['basic_details_id']=this.basic_details_id;
    this.Silver['basic_details_id']=this.basic_details_id;
    this.Sulfate['basic_details_id']=this.basic_details_id;
    this.Uranium['basic_details_id']=this.basic_details_id;
   
  
    this.data_Perfluorinated_chemicals.push(this.Ammonia,this.Asbestos,this.Perchlorate,this.Polonium,this.Radium,this.Silver,this.Sulfate,this.Uranium)

  
   }

   Pharmaceuticals(){


    this.Atenolol['table']='Pharmaceuticals_data';  
    this.Atenolol['basic_details_id']=this.basic_details_id; 
    this.Carbamazepine['basic_details_id']=this.basic_details_id;
    this.Estrone['basic_details_id']=this.basic_details_id;
    this.Meprobamat['basic_details_id']=this.basic_details_id;
    this.Trimethoprim['basic_details_id']=this.basic_details_id;   


   this.test_array.push(this.Atenolol,this.Carbamazepine,this.Estrone,this.Meprobamat,this.Trimethoprim)
   console.log("this.Atenolol,this.Carbamazepine,this.Estrone,this.Meprobamat,this.Trimethoprim",(this.test_array))

  
   }



back(){
this.router.navigate(['/user-profile'],{ state: { id: this.basic_details_id } });

}


edit_display(){
//water safety

this.Free_Chlorine.update_id=this.Free_Chlorine_defualt[0]._id;
this.Free_Chlorine.Substance=this.Free_Chlorine_defualt[0].Substance
this.Free_Chlorine.Unit=this.Free_Chlorine_defualt[0].Unit;
this.Free_Chlorine.Priority=this.Free_Chlorine_defualt[0].Priority;
this.Free_Chlorine.filtering=this.Free_Chlorine_defualt[0].Filtering;
this.Free_Chlorine.Max=this.Free_Chlorine_defualt[0].Max;
this.Free_Chlorine.Recommended=this.Free_Chlorine_defualt[0].Recommended;


this.Total_Chlorine.Substance=this.Total_Chlorine_defualt[0].Substance
this.Total_Chlorine.update_id=this.Total_Chlorine_defualt[0]._id;
this.Total_Chlorine.Unit=this.Total_Chlorine_defualt[0].Unit;
this.Total_Chlorine.Priority=this.Total_Chlorine_defualt[0].Priority;
this.Total_Chlorine.filtering=this.Total_Chlorine_defualt[0].Filtering;
this.Total_Chlorine.Max=this.Total_Chlorine_defualt[0].Max;
this.Total_Chlorine.Recommended=this.Total_Chlorine_defualt[0].Recommended;

this.Chloramine.Substance=this.Chloramine_defualt[0].Substance
this.Chloramine.update_id=this.Chloramine_defualt[0]._id;
this.Chloramine.Unit=this.Chloramine_defualt[0].Unit;
this.Chloramine.Priority=this.Chloramine_defualt[0].Priority;
this.Chloramine.filtering=this.Chloramine_defualt[0].Filtering;
this.Chloramine.Max=this.Chloramine_defualt[0].Max;
this.Chloramine.Recommended=this.Chloramine_defualt[0].Recommended;

//end water safety

//start general

this.Temperature.update_id=this.Temperature_default[0]._id;
this.Temperature.Substance=this.Temperature_default[0].Substance
this.Temperature.Unit=this.Temperature_default[0].Unit;
this.Temperature.Priority=this.Temperature_default[0].Priority;
this.Temperature.filtering=this.Temperature_default[0].Filtering;
this.Temperature.Max=this.Temperature_default[0].Max;
this.Temperature.Recommended=this.Temperature_default[0].Recommended;

this.Hardness.update_id=this.Hardness_default[0]._id;
this.Hardness.Substance=this.Hardness_default[0].Substance
this.Hardness.Unit=this.Hardness_default[0].Unit;
this.Hardness.Priority=this.Hardness_default[0].Priority;
this.Hardness.filtering=this.Hardness_default[0].Filtering;
this.Hardness.Max=this.Hardness_default[0].Max;
this.Hardness.Recommended=this.Hardness_default[0].Recommended;


this.Hardness_f.update_id=this.Hardness_f_default[0]._id;
this.Hardness_f.Substance=this.Hardness_f_default[0].Substance
this.Hardness_f.Unit=this.Hardness_f_default[0].Unit;
this.Hardness_f.Priority=this.Hardness_f_default[0].Priority;
this.Hardness_f.filtering=this.Hardness_f_default[0].Filtering;
this.Hardness_f.Max=this.Hardness_f_default[0].Max;
this.Hardness_f.Recommended=this.Hardness_f_default[0].Recommended;


this.pH.update_id=this.pH_default[0]._id;
this.pH.Substance=this.pH_default[0].Substance
this.pH.Unit=this.pH_default[0].Unit;
this.pH.Priority=this.pH_default[0].Priority;
this.pH.filtering=this.pH_default[0].Filtering;
this.pH.Max=this.pH_default[0].Max;
this.pH.Recommended=this.pH_default[0].Recommended;


this.Turbidity.update_id=this.Turbidity_default[0]._id;
this.Turbidity.Substance=this.Turbidity_default[0].Substance
this.Turbidity.Unit=this.Turbidity_default[0].Unit;
this.Turbidity.Priority=this.Turbidity_default[0].Priority;
this.Turbidity.filtering=this.Turbidity_default[0].Filtering;
this.Turbidity.Max=this.Turbidity_default[0].Max;
this.Turbidity.Recommended=this.Turbidity_default[0].Recommended;


this.Conductivity.update_id=this.Conductivity_default[0]._id;
this.Conductivity.Substance=this.Conductivity_default[0].Substance
this.Conductivity.Unit=this.Conductivity_default[0].Unit;
this.Conductivity.Priority=this.Conductivity_default[0].Priority;
this.Conductivity.filtering=this.Conductivity_default[0].Filtering;
this.Conductivity.Max=this.Conductivity_default[0].Max;
this.Conductivity.Recommended=this.Conductivity_default[0].Recommended;

this.Color.update_id=this.Color_default[0]._id;
this.Color.Substance=this.Color_default[0].Substance
this.Color.Unit=this.Color_default[0].Unit;
this.Color.Priority=this.Color_default[0].Priority;
this.Color.filtering=this.Color_default[0].Filtering;
this.Color.Max=this.Color_default[0].Max;
this.Color.Recommended=this.Color_default[0].Recommended;

this.Odor.update_id=this.Odor_default[0]._id;
this.Odor.Substance=this.Odor_default[0].Substance
this.Odor.Unit=this.Odor_default[0].Unit;
this.Odor.Priority=this.Odor_default[0].Priority;
this.Odor.filtering=this.Odor_default[0].Filtering;
this.Odor.Max=this.Odor_default[0].Max;
this.Odor.Recommended=this.Odor_default[0].Recommended;

this.TDS.update_id=this.TDS_default[0]._id;
this.TDS.Substance=this.TDS_default[0].Substance
this.TDS.Unit=this.TDS_default[0].Unit;
this.TDS.Priority=this.TDS_default[0].Priority;
this.TDS.filtering=this.TDS_default[0].Filtering;
this.TDS.Max=this.TDS_default[0].Max;
this.TDS.Recommended=this.TDS_default[0].Recommended;

this.Microplastics.update_id=this.Microplastics_default[0]._id;
this.Microplastics.Substance=this.Microplastics_default[0].Substance
this.Microplastics.Unit=this.Microplastics_default[0].Unit;
this.Microplastics.Priority=this.Microplastics_default[0].Priority;
this.Microplastics.filtering=this.Microplastics_default[0].Filtering;
this.Microplastics.Max=this.Microplastics_default[0].Max;
this.Microplastics.Recommended=this.Microplastics_default[0].Recommended;

this.LSI.update_id=this.LSI_default[0]._id;
this.LSI.Substance=this.LSI_default[0].Substance
this.LSI.Unit=this.LSI_default[0].Unit;
this.LSI.Priority=this.LSI_default[0].Priority;
this.LSI.filtering=this.LSI_default[0].Filtering;
this.LSI.Max=this.LSI_default[0].Max;
this.LSI.Recommended=this.LSI_default[0].Recommended;

this.Bicarbonate.update_id=this.Bicarbonate_default[0]._id;
this.Bicarbonate.Substance=this.Bicarbonate_default[0].Substance
this.Bicarbonate.Unit=this.Bicarbonate_default[0].Unit;
this.Bicarbonate.Priority=this.Bicarbonate_default[0].Priority;
this.Bicarbonate.filtering=this.Bicarbonate_default[0].Filtering;
this.Bicarbonate.Max=this.Bicarbonate_default[0].Max;
this.Bicarbonate.Recommended=this.Bicarbonate_default[0].Recommended;

this.Alkalinity.update_id=this.Alkalinity_default[0]._id;
this.Alkalinity.Substance=this.Alkalinity_default[0].Substance
this.Alkalinity.Unit=this.Alkalinity_default[0].Unit;
this.Alkalinity.Priority=this.Alkalinity_default[0].Priority;
this.Alkalinity.filtering=this.Alkalinity_default[0].Filtering;
this.Alkalinity.Max=this.Alkalinity_default[0].Max;
this.Alkalinity.Recommended=this.Alkalinity_default[0].Recommended;

this.Oxidation.update_id=this.Oxidation_default[0]._id;
this.Oxidation.Substance=this.Oxidation_default[0].Substance
this.Oxidation.Unit=this.Oxidation_default[0].Unit;
this.Oxidation.Priority=this.Oxidation_default[0].Priority;
this.Oxidation.filtering=this.Oxidation_default[0].Filtering;
this.Oxidation.Max=this.Oxidation_default[0].Max;
this.Oxidation.Recommended=this.Oxidation_default[0].Recommended;
//end general

 //start pathogens
 this.Clostridium.update_id=this.Clostridium_default[0]._id;
 this.Clostridium.Substance=this.Clostridium_default[0].Substance
 this.Clostridium.Unit=this.Clostridium_default[0].Unit;
 this.Clostridium.Priority=this.Clostridium_default[0].Priority;
 this.Clostridium.filtering=this.Clostridium_default[0].Filtering;
 this.Clostridium.Max=this.Clostridium_default[0].Max;
 this.Clostridium.Recommended=this.Clostridium_default[0].Recommended;

 // this.Bacteria.
 this.Bacteria.update_id=this.Bacteria_default[0]._id;
 this.Bacteria.Substance=this.Bacteria_default[0].Substance      
 this.Bacteria.Unit=this.Bacteria_default[0].Unit;
 this.Bacteria.Priority=this.Bacteria_default[0].Priority;
 this.Bacteria.filtering=this.Bacteria_default[0].Filtering;
 this.Bacteria.Max=this.Bacteria_default[0].Max;
 this.Bacteria.Recommended=this.Bacteria_default[0].Recommended;

 this.eColi.update_id=this.eColi_default[0]._id;
 this.eColi.Substance=this.eColi_default[0].Substance      
 this.eColi.Unit=this.eColi_default[0].Unit;
 this.eColi.Priority=this.eColi_default[0].Priority;
 this.eColi.filtering=this.eColi_default[0].Filtering;
 this.eColi.Max=this.eColi_default[0].Max;
 this.eColi.Recommended=this.eColi_default[0].Recommended;

 this.Enterococcus.update_id=this.Enterococcus_default[0]._id;
 this.Enterococcus.Substance=this.Enterococcus_default[0].Substance;      
 this.Enterococcus.Unit=this.Enterococcus_default[0].Unit;
 this.Enterococcus.Priority=this.Enterococcus_default[0].Priority;
 this.Enterococcus.filtering=this.Enterococcus_default[0].Filtering;
 this.Enterococcus.Max=this.Enterococcus_default[0].Max;
 this.Enterococcus.Recommended=this.Enterococcus_default[0].Recommended;

 this.Microbial_Cysts.update_id=this.Microbial_Cysts_default[0]._id;
 this.Microbial_Cysts.Substance=this.Microbial_Cysts_default[0].Substance;
 this.Microbial_Cysts.Unit=this.Microbial_Cysts_default[0].Unit;
 this.Microbial_Cysts.Priority=this.Microbial_Cysts_default[0].Priority;
 this.Microbial_Cysts.filtering=this.Microbial_Cysts_default[0].Filtering;
 this.Microbial_Cysts.Max=this.Microbial_Cysts_default[0].Max;
 this.Microbial_Cysts.Recommended=this.Microbial_Cysts_default[0].Recommended;

//end pathogens

//start chemical parameter

this.Cyanide_total.update_id=this.Cyanide_total_default[0]._id;
this.Cyanide_total.Substance=this.Cyanide_total_default[0].Substance
this.Cyanide_total.Unit=this.Cyanide_total_default[0].Unit;
this.Cyanide_total.Priority=this.Cyanide_total_default[0].Priority;
this.Cyanide_total.filtering=this.Cyanide_total_default[0].Filtering;
this.Cyanide_total.Max=this.Cyanide_total_default[0].Max;
this.Cyanide_total.Recommended=this.Cyanide_total_default[0].Recommended;

this.Fluoride.update_id=this.Fluoride_default[0]._id;
this.Fluoride.Substance=this.Fluoride_default[0].Substance
this.Fluoride.Unit=this.Fluoride_default[0].Unit;
this.Fluoride.Priority=this.Fluoride_default[0].Priority;
this.Fluoride.filtering=this.Fluoride_default[0].Filtering;
this.Fluoride.Max=this.Fluoride_default[0].Max;
this.Fluoride.Recommended=this.Fluoride_default[0].Recommended;

this.Mercury.update_id=this.Mercury_default[0]._id;
this.Mercury.Substance=this.Mercury_default[0].Substance
this.Mercury.Unit=this.Mercury_default[0].Unit;
this.Mercury.Priority=this.Mercury_default[0].Priority;
this.Mercury.filtering=this.Mercury_default[0].Filtering;
this.Mercury.Max=this.Mercury_default[0].Max;
this.Mercury.Recommended=this.Mercury_default[0].Recommended;

this.Nitrites.update_id=this.Nitrites_default[0]._id;
this.Nitrites.Substance=this.Nitrites_default[0].Substance
this.Nitrites.Unit=this.Nitrites_default[0].Unit;
this.Nitrites.Priority=this.Nitrites_default[0].Priority;
this.Nitrites.filtering=this.Nitrites_default[0].Filtering;
this.Nitrites.Max=this.Nitrites_default[0].Max;
this.Nitrites.Recommended=this.Nitrites_default[0].Recommended;

this.Nitrates.update_id=this.Nitrates_default[0]._id;
this.Nitrates.Substance=this.Nitrates_default[0].Substance
this.Nitrates.Unit=this.Nitrates_default[0].Unit;
this.Nitrates.Priority=this.Nitrates_default[0].Priority;
this.Nitrates.filtering=this.Nitrates_default[0].Filtering;
this.Nitrates.Max=this.Nitrates_default[0].Max;
this.Nitrates.Recommended=this.Nitrates_default[0].Recommended;
//end chemical parameter

  // start Minerals
  this.Magnesium.update_id=this.Magnesium_default[0]._id;
  this.Magnesium.Substance=this.Magnesium_default[0].Substance
  this.Magnesium.Unit=this.Magnesium_default[0].Unit;
  this.Magnesium.Priority=this.Magnesium_default[0].Priority;
  this.Magnesium.filtering=this.Magnesium_default[0].Filtering;
  this.Magnesium.Max=this.Magnesium_default[0].Max;
  this.Magnesium.Recommended=this.Magnesium_default[0].Recommended;

  this.Calcium.update_id=this.Calcium_default[0]._id;
  this.Calcium.Substance=this.Calcium_default[0].Substance
  this.Calcium.Unit=this.Calcium_default[0].Unit;
  this.Calcium.Priority=this.Calcium_default[0].Priority;
  this.Calcium.filtering=this.Calcium_default[0].Filtering;
  this.Calcium.Max=this.Calcium_default[0].Max;
  this.Calcium.Recommended=this.Calcium_default[0].Recommended;

  this.Potassium.update_id=this.Potassium_default[0]._id;
  this.Potassium.Substance=this.Potassium_default[0].Substance
  this.Potassium.Unit=this.Potassium_default[0].Unit;
  this.Potassium.Priority=this.Potassium_default[0].Priority;
  this.Potassium.filtering=this.Potassium_default[0].Filtering;
  this.Potassium.Max=this.Potassium_default[0].Max;
  this.Potassium.Recommended=this.Potassium_default[0].Recommended;

  this.Chloride.update_id=this.Chloride_default[0]._id;
  this.Chloride.Substance=this.Chloride_default[0].Substance
  this.Chloride.Unit=this.Chloride_default[0].Unit;
  this.Chloride.Priority=this.Chloride_default[0].Priority;
  this.Chloride.filtering=this.Chloride_default[0].Filtering;
  this.Chloride.Max=this.Chloride_default[0].Max;
  this.Chloride.Recommended=this.Chloride_default[0].Recommended;       
//end minerals

//start metals

this.Aluminium.update_id=this.Aluminium_default[0]._id;
this.Aluminium.Substance=this.Aluminium_default[0].Substance
this.Aluminium.Unit=this.Aluminium_default[0].Unit;
this.Aluminium.Priority=this.Aluminium_default[0].Priority;
this.Aluminium.filtering=this.Aluminium_default[0].Filtering;
this.Aluminium.Max=this.Aluminium_default[0].Max;
this.Aluminium.Recommended=this.Aluminium_default[0].Recommended;

this.Antimony.update_id=this.Antimony_default[0]._id;
this.Antimony.Substance=this.Antimony_default[0].Substance
this.Antimony.Unit=this.Antimony_default[0].Unit;
this.Antimony.Priority=this.Antimony_default[0].Priority;
this.Antimony.filtering=this.Antimony_default[0].Filtering;
this.Antimony.Max=this.Antimony_default[0].Max;
this.Antimony.Recommended=this.Antimony_default[0].Recommended;

this.Arsenic.update_id=this.Arsenic_default[0]._id;
this.Arsenic.Substance=this.Arsenic_default[0].Substance
this.Arsenic.Unit=this.Arsenic_default[0].Unit;
this.Arsenic.Priority=this.Arsenic_default[0].Priority;
this.Arsenic.filtering=this.Arsenic_default[0].Filtering;
this.Arsenic.Max=this.Arsenic_default[0].Max;
this.Arsenic.Recommended=this.Arsenic_default[0].Recommended;

this.Barium.update_id=this.Barium_default[0]._id;
this.Barium.Substance=this.Barium_default[0].Substance
this.Barium.Unit=this.Barium_default[0].Unit;
this.Barium.Priority=this.Barium_default[0].Priority;
this.Barium.filtering=this.Barium_default[0].Filtering;
this.Barium.Max=this.Barium_default[0].Max;
this.Barium.Recommended=this.Barium_default[0].Recommended;

this.Cadmium.update_id=this.Cadmium_default[0]._id;
this.Cadmium.Substance=this.Cadmium_default[0].Substance
this.Cadmium.Unit=this.Cadmium_default[0].Unit;
this.Cadmium.Priority=this.Cadmium_default[0].Priority;
this.Cadmium.filtering=this.Cadmium_default[0].Filtering;
this.Cadmium.Max=this.Cadmium_default[0].Max;
this.Cadmium.Recommended=this.Cadmium_default[0].Recommended;

this.Chromium.update_id=this.Chromium_default[0]._id;
this.Chromium.Substance=this.Chromium_default[0].Substance
this.Chromium.Unit=this.Chromium_default[0].Unit;
this.Chromium.Priority=this.Chromium_default[0].Priority;
this.Chromium.filtering=this.Chromium_default[0].Filtering;
this.Chromium.Max=this.Chromium_default[0].Max;
this.Chromium.Recommended=this.Chromium_default[0].Recommended;

this.Copper.update_id=this.Copper_default[0]._id;
this.Copper.Substance=this.Copper_default[0].Substance
this.Copper.Unit=this.Copper_default[0].Unit;
this.Copper.Priority=this.Copper_default[0].Priority;
this.Copper.filtering=this.Copper_default[0].Filtering;
this.Copper.Max=this.Copper_default[0].Max;
this.Copper.Recommended=this.Copper_default[0].Recommended;


this.Iron.update_id=this.Iron_default[0]._id;
this.Iron.Substance=this.Iron_default[0].Substance
this.Iron.Unit=this.Iron_default[0].Unit;
this.Iron.Priority=this.Iron_default[0].Priority;
this.Iron.filtering=this.Iron_default[0].Filtering;
this.Iron.Max=this.Iron_default[0].Max;
this.Iron.Recommended=this.Iron_default[0].Recommended;

this.Lead.update_id=this.Lead_default[0]._id;
this.Lead.Substance=this.Lead_default[0].Substance
this.Lead.Unit=this.Lead_default[0].Unit;
this.Lead.Priority=this.Lead_default[0].Priority;
this.Lead.filtering=this.Lead_default[0].Filtering;
this.Lead.Max=this.Lead_default[0].Max;
this.Lead.Recommended=this.Lead_default[0].Recommended;

this.Manganese.update_id=this.Manganese_default[0]._id;
this.Manganese.Substance=this.Manganese_default[0].Substance
this.Manganese.Unit=this.Manganese_default[0].Unit;
this.Manganese.Priority=this.Manganese_default[0].Priority;
this.Manganese.filtering=this.Manganese_default[0].Filtering;
this.Manganese.Max=this.Manganese_default[0].Max;
this.Manganese.Recommended=this.Manganese_default[0].Recommended;



this.Nickel.update_id=this.Nickel_default[0]._id;
this.Nickel.Substance=this.Nickel_default[0].Substance
this.Nickel.Unit=this.Nickel_default[0].Unit;
this.Nickel.Priority=this.Nickel_default[0].Priority;
this.Nickel.filtering=this.Nickel_default[0].Filtering;
this.Nickel.Max=this.Nickel_default[0].Max;
this.Nickel.Recommended=this.Nickel_default[0].Recommended;

this.Selenium.update_id=this.Selenium_default[0]._id;
this.Selenium.Substance=this.Selenium_default[0].Substance
this.Selenium.Unit=this.Selenium_default[0].Unit;
this.Selenium.Priority=this.Selenium_default[0].Priority;
this.Selenium.filtering=this.Selenium_default[0].Filtering;
this.Selenium.Max=this.Selenium_default[0].Max;
this.Selenium.Recommended=this.Selenium_default[0].Recommended;

this.Sodium.update_id=this.Sodium_default[0]._id;
this.Sodium.Substance=this.Sodium_default[0].Substance
this.Sodium.Unit=this.Sodium_default[0].Unit;
this.Sodium.Priority=this.Sodium_default[0].Priority;
this.Sodium.filtering=this.Sodium_default[0].Filtering;
this.Sodium.Max=this.Sodium_default[0].Max;
this.Sodium.Recommended=this.Sodium_default[0].Recommended;

this.Zinc.update_id=this.Zinc_default[0]._id;
this.Zinc.Substance=this.Zinc_default[0].Substance
this.Zinc.Unit=this.Zinc_default[0].Unit;
this.Zinc.Priority=this.Zinc_default[0].Priority;
this.Zinc.filtering=this.Zinc_default[0].Filtering;
this.Zinc.Max=this.Zinc_default[0].Max;
this.Zinc.Recommended=this.Zinc_default[0].Recommended;
//end metals

// start Chlorine_bi_products


this.Total_Trichloroethylene.update_id=this.Total_Trichloroethylene_default[0]._id;
this.Total_Trichloroethylene.Substance=this.Total_Trichloroethylene_default[0].Substance
this.Total_Trichloroethylene.Unit=this.Total_Trichloroethylene_default[0].Unit;
this.Total_Trichloroethylene.Priority=this.Total_Trichloroethylene_default[0].Priority;
this.Total_Trichloroethylene.filtering=this.Total_Trichloroethylene_default[0].Filtering;
this.Total_Trichloroethylene.Max=this.Total_Trichloroethylene_default[0].Max;
this.Total_Trichloroethylene.Recommended=this.Total_Trichloroethylene_default[0].Recommended;

this.Trichloroethylene.update_id=this.Trichloroethylene_default[0]._id;
this.Trichloroethylene.Substance=this.Trichloroethylene_default[0].Substance
this.Trichloroethylene.Unit=this.Trichloroethylene_default[0].Unit;
this.Trichloroethylene.Priority=this.Trichloroethylene_default[0].Priority;
this.Trichloroethylene.filtering=this.Trichloroethylene_default[0].Filtering;
this.Trichloroethylene.Max=this.Trichloroethylene_default[0].Max;
this.Trichloroethylene.Recommended=this.Trichloroethylene_default[0].Recommended;

this.Tetrachloroethylene.update_id=this.Tetrachloroethylene_default[0]._id;
this.Tetrachloroethylene.Substance=this.Tetrachloroethylene_default[0].Substance
this.Tetrachloroethylene.Unit=this.Tetrachloroethylene_default[0].Unit;
this.Tetrachloroethylene.Priority=this.Tetrachloroethylene_default[0].Priority;
this.Tetrachloroethylene.filtering=this.Tetrachloroethylene_default[0].Filtering;
this.Tetrachloroethylene.Max=this.Tetrachloroethylene_default[0].Max;
this.Tetrachloroethylene.Recommended=this.Tetrachloroethylene_default[0].Recommended;

this.Total_Trihalomethanes.update_id=this.Total_Trihalomethanes_default[0]._id;
this.Total_Trihalomethanes.Substance=this.Total_Trihalomethanes_default[0].Substance
this.Total_Trihalomethanes.Unit=this.Total_Trihalomethanes_default[0].Unit;
this.Total_Trihalomethanes.Priority=this.Total_Trihalomethanes_default[0].Priority;
this.Total_Trihalomethanes.filtering=this.Total_Trihalomethanes_default[0].Filtering;
this.Total_Trihalomethanes.Max=this.Total_Trihalomethanes_default[0].Max;
this.Total_Trihalomethanes.Recommended=this.Total_Trihalomethanes_default[0].Recommended;

this.Dichloromethane.update_id=this.Dichloromethane_default[0]._id;
this.Dichloromethane.Substance=this.Dichloromethane_default[0].Substance
this.Dichloromethane.Unit=this.Dichloromethane_default[0].Unit;
this.Dichloromethane.Priority=this.Dichloromethane_default[0].Priority;
this.Dichloromethane.filtering=this.Dichloromethane_default[0].Filtering;
this.Dichloromethane.Max=this.Dichloromethane_default[0].Max;
this.Dichloromethane.Recommended=this.Dichloromethane_default[0].Recommended;   
//end Chlorine_bi_products


//start HAAs

this.Total_haloacetic_acids.update_id=this.Total_haloacetic_acids_default[0]._id;
this.Total_haloacetic_acids.Substance=this.Total_haloacetic_acids_default[0].Substance
this.Total_haloacetic_acids.Unit=this.Total_haloacetic_acids_default[0].Unit;
this.Total_haloacetic_acids.Priority=this.Total_haloacetic_acids_default[0].Priority;
this.Total_haloacetic_acids.filtering=this.Total_haloacetic_acids_default[0].Filtering;
this.Total_haloacetic_acids.Max=this.Total_haloacetic_acids_default[0].Max;
this.Total_haloacetic_acids.Recommended=this.Total_haloacetic_acids_default[0].Recommended;
//end Haas

//start Pesticides

this.Chlordane.update_id=this.Chlordane_default[0]._id;
this.Chlordane.Substance=this.Chlordane_default[0].Substance
this.Chlordane.Unit=this.Chlordane_default[0].Unit;
this.Chlordane.Priority=this.Chlordane_default[0].Priority;
this.Chlordane.filtering=this.Chlordane_default[0].Filtering;
this.Chlordane.Max=this.Chlordane_default[0].Max;
this.Chlordane.Recommended=this.Chlordane_default[0].Recommended;

this.Heptachlor.update_id=this.Heptachlor_default[0]._id;
this.Heptachlor.Substance=this.Heptachlor_default[0].Substance
this.Heptachlor.Unit=this.Heptachlor_default[0].Unit;
this.Heptachlor.Priority=this.Heptachlor_default[0].Priority;
this.Heptachlor.filtering=this.Heptachlor_default[0].Filtering;
this.Heptachlor.Max=this.Heptachlor_default[0].Max;
this.Heptachlor.Recommended=this.Heptachlor_default[0].Recommended;

this.Lindane.update_id=this.Lindane_default[0]._id;
this.Lindane.Substance=this.Lindane_default[0].Substance
this.Lindane.Unit=this.Lindane_default[0].Unit;
this.Lindane.Priority=this.Lindane_default[0].Priority;
this.Lindane.filtering=this.Lindane_default[0].Filtering;
this.Lindane.Max=this.Lindane_default[0].Max;
this.Lindane.Recommended=this.Lindane_default[0].Recommended;

this.Total_pesticides.update_id=this.Total_pesticides_default[0]._id;
this.Total_pesticides.Substance=this.Total_pesticides_default[0].Substance
this.Total_pesticides.Unit=this.Total_pesticides_default[0].Unit;
this.Total_pesticides.Priority=this.Total_pesticides_default[0].Priority;
this.Total_pesticides.filtering=this.Total_pesticides_default[0].Filtering;
this.Total_pesticides.Max=this.Total_pesticides_default[0].Max;
this.Total_pesticides.Recommended=this.Total_pesticides_default[0].Recommended;

//end Pesticides

//satrt Herbicides

this.D_2_4.update_id=this.D_2_4_default[0]._id;
this.D_2_4.Substance=this.D_2_4_default[0].Substance
this.D_2_4.Unit=this.D_2_4_default[0].Unit;
this.D_2_4.Priority=this.D_2_4_default[0].Priority;
this.D_2_4.filtering=this.D_2_4_default[0].Filtering;
this.D_2_4.Max=this.D_2_4_default[0].Max;
this.D_2_4.Recommended=this.D_2_4_default[0].Recommended;

this.Atrazine.update_id=this.Atrazine_default[0]._id;
this.Atrazine.Substance=this.Atrazine_default[0].Substance
this.Atrazine.Unit=this.Atrazine_default[0].Unit;
this.Atrazine.Priority=this.Atrazine_default[0].Priority;
this.Atrazine.filtering=this.Atrazine_default[0].Filtering;
this.Atrazine.Max=this.Atrazine_default[0].Max;
this.Atrazine.Recommended=this.Atrazine_default[0].Recommended;

this.Total_Herbicides.update_id=this.Total_Herbicides_default[0]._id;
this.Total_Herbicides.Substance=this.Total_Herbicides_default[0].Substance
this.Total_Herbicides.Unit=this.Total_Herbicides_default[0].Unit;
this.Total_Herbicides.Priority=this.Total_Herbicides_default[0].Priority;
this.Total_Herbicides.filtering=this.Total_Herbicides_default[0].Filtering;
this.Total_Herbicides.Max=this.Total_Herbicides_default[0].Max;
this.Total_Herbicides.Recommended=this.Total_Herbicides_default[0].Recommended;
//end Herbicides

//satrt other

this.Ammonia.update_id=this.Ammonia_default[0]._id;
this.Ammonia.Substance=this.Ammonia_default[0].Substance
this.Ammonia.Unit=this.Ammonia_default[0].Unit;
this.Ammonia.Priority=this.Ammonia_default[0].Priority;
this.Ammonia.filtering=this.Ammonia_default[0].Filtering;
this.Ammonia.Max=this.Ammonia_default[0].Max;
this.Ammonia.Recommended=this.Ammonia_default[0].Recommended;

this.Asbestos.update_id=this.Asbestos_default[0]._id;
this.Asbestos.Substance=this.Asbestos_default[0].Substance
this.Asbestos.Unit=this.Asbestos_default[0].Unit;
this.Asbestos.Priority=this.Asbestos_default[0].Priority;
this.Asbestos.filtering=this.Asbestos_default[0].Filtering;
this.Asbestos.Max=this.Asbestos_default[0].Max;
this.Asbestos.Recommended=this.Asbestos_default[0].Recommended;

this.Perchlorate.update_id=this.Perchlorate_default[0]._id;
this.Perchlorate.Substance=this.Perchlorate_default[0].Substance
this.Perchlorate.Unit=this.Perchlorate_default[0].Unit;
this.Perchlorate.Priority=this.Perchlorate_default[0].Priority;
this.Perchlorate.filtering=this.Perchlorate_default[0].Filtering;
this.Perchlorate.Max=this.Perchlorate_default[0].Max;
this.Perchlorate.Recommended=this.Perchlorate_default[0].Recommended;

this.Polonium.update_id=this.Polonium_default[0]._id;
this.Polonium.Substance=this.Polonium_default[0].Substance
this.Polonium.Unit=this.Polonium_default[0].Unit;
this.Polonium.Priority=this.Polonium_default[0].Priority;
this.Polonium.filtering=this.Polonium_default[0].Filtering;
this.Polonium.Max=this.Polonium_default[0].Max;
this.Polonium.Recommended=this.Polonium_default[0].Recommended;

this.Radium.update_id=this.Radium_default[0]._id;
this.Radium.Substance=this.Radium_default[0].Substance
this.Radium.Unit=this.Radium_default[0].Unit;
this.Radium.Priority=this.Radium_default[0].Priority;
this.Radium.filtering=this.Radium_default[0].Filtering;
this.Radium.Max=this.Radium_default[0].Max;
this.Radium.Recommended=this.Radium_default[0].Recommended;

this.Silver.update_id=this.Silver_default[0]._id;
this.Silver.Substance=this.Silver_default[0].Substance
this.Silver.Unit=this.Silver_default[0].Unit;
this.Silver.Priority=this.Silver_default[0].Priority;
this.Silver.filtering=this.Silver_default[0].Filtering;
this.Silver.Max=this.Silver_default[0].Max;
this.Silver.Recommended=this.Silver_default[0].Recommended;

this.Sulfate.update_id=this.Sulfate_default[0]._id;
this.Sulfate.Substance=this.Sulfate_default[0].Substance
this.Sulfate.Unit=this.Sulfate_default[0].Unit;
this.Sulfate.Priority=this.Sulfate_default[0].Priority;
this.Sulfate.filtering=this.Sulfate_default[0].Filtering;
this.Sulfate.Max=this.Sulfate_default[0].Max;
this.Sulfate.Recommended=this.Sulfate_default[0].Recommended;

this.Uranium.update_id=this.Uranium_default[0]._id;
this.Uranium.Substance=this.Uranium_default[0].Substance
this.Uranium.Unit=this.Uranium_default[0].Unit;
this.Uranium.Priority=this.Uranium_default[0].Priority;
this.Uranium.filtering=this.Uranium_default[0].Filtering;
this.Uranium.Max=this.Uranium_default[0].Max;
this.Uranium.Recommended=this.Uranium_default[0].Recommended;

// /end other

//satrt Perfluorinated_chemicals_

this.PFOA.update_id=this.PFOA_default[0]._id;
this.PFOA.Substance=this.PFOA_default[0].Substance
this.PFOA.Unit=this.PFOA_default[0].Unit;
this.PFOA.Priority=this.PFOA_default[0].Priority;
this.PFOA.filtering=this.PFOA_default[0].Filtering;
this.PFOA.Max=this.PFOA_default[0].Max;
this.PFOA.Recommended=this.PFOA_default[0].Recommended;

this.PFOS.update_id=this.PFOS_default[0]._id;
this.PFOS.Substance=this.PFOS_default[0].Substance
this.PFOS.Unit=this.PFOS_default[0].Unit;
this.PFOS.Priority=this.PFOS_default[0].Priority;
this.PFOS.filtering=this.PFOS_default[0].Filtering;
this.PFOS.Max=this.PFOS_default[0].Max;
this.PFOS.Recommended=this.PFOS_default[0].Recommended;

this.PFNA.update_id=this.PFNA_default[0]._id;
this.PFNA.Substance=this.PFNA_default[0].Substance
this.PFNA.Unit=this.PFNA_default[0].Unit;
this.PFNA.Priority=this.PFNA_default[0].Priority;
this.PFNA.filtering=this.PFNA_default[0].Filtering;
this.PFNA.Max=this.PFNA_default[0].Max;
this.PFNA.Recommended=this.PFNA_default[0].Recommended;

//end Perfluorinated_chemicals_
//start Pharmaceuticals
this.Atenolol.update_id=this.Atenolol_default[0]._id;
this.Atenolol.Substance=this.Atenolol_default[0].Substance
this.Atenolol.Unit=this.Atenolol_default[0].Unit;
this.Atenolol.Priority=this.Atenolol_default[0].Priority;
this.Atenolol.filtering=this.Atenolol_default[0].Filtering;
this.Atenolol.Max=this.Atenolol_default[0].Max;
this.Atenolol.Recommended=this.Atenolol_default[0].Recommended;

this.Carbamazepine.update_id=this.Carbamazepine_default[0]._id;
this.Carbamazepine.Substance=this.Carbamazepine_default[0].Substance
this.Carbamazepine.Unit=this.Carbamazepine_default[0].Unit;
this.Carbamazepine.Priority=this.Carbamazepine_default[0].Priority;
this.Carbamazepine.filtering=this.Carbamazepine_default[0].Filtering;
this.Carbamazepine.Max=this.Carbamazepine_default[0].Max;
this.Carbamazepine.Recommended=this.Carbamazepine_default[0].Recommended;

this.Estrone.update_id=this.Estrone_default[0]._id;
this.Estrone.Substance=this.Estrone_default[0].Substance
this.Estrone.Unit=this.Estrone_default[0].Unit;
this.Estrone.Priority=this.Estrone_default[0].Priority;
this.Estrone.filtering=this.Estrone_default[0].Filtering;
this.Estrone.Max=this.Estrone_default[0].Max;
this.Estrone.Recommended=this.Estrone_default[0].Recommended;

this.Meprobamat.update_id=this.Meprobamat_default[0]._id;
this.Meprobamat.Substance=this.Meprobamat_default[0].Substance
this.Meprobamat.Unit=this.Meprobamat_default[0].Unit;
this.Meprobamat.Priority=this.Meprobamat_default[0].Priority;
this.Meprobamat.filtering=this.Meprobamat_default[0].Filtering;
this.Meprobamat.Max=this.Meprobamat_default[0].Max;
this.Meprobamat.Recommended=this.Meprobamat_default[0].Recommended;

this.Trimethoprim.update_id=this.Trimethoprim_default[0]._id;
this.Trimethoprim.Substance=this.Trimethoprim_default[0].Substance
this.Trimethoprim.Unit=this.Trimethoprim_default[0].Unit;
this.Trimethoprim.Priority=this.Trimethoprim_default[0].Priority;
this.Trimethoprim.filtering=this.Trimethoprim_default[0].Filtering;
this.Trimethoprim.Max=this.Trimethoprim_default[0].Max;
this.Trimethoprim.Recommended=this.Trimethoprim_default[0].Recommended;
//end

  console.log("value",sessionStorage.getItem('selected_language'))
  // console.log(this._apiservice.take_language());
  const browserLang = this.translate.getBrowserLang();
  this.translate.use(sessionStorage.getItem('selected_language'));    
}



display(){

  this.data['basic_details_id']=this.basic_details_id;
  console.log("data",this.data)
  this._apiservice.sendData(this.url+"data_all_tables",this.data).subscribe(res=>{
  this.all_data_tables=res
  console.log("Rinky......................>",res,Object.keys(res).length); 

    //water safety
  for(let i=0;i<Object.keys(res).length;i++){
      
            if(res[i]['table']=='Water safetys'){
                if(!(res[i]['data'] && res[i]['data'].constructor === Array && Object.keys(res[i]['data']).length === 0)){                   
                  this.Free_Chlorine=res[i]['data'][0];  
                  this.Total_Chlorine=res[i]['data'][1];
                  this.Chloramine=res[i]['data'][2]; 
                  
                  this.Free_Chlorine_defualt=res[i]['data'][0]['default']
                  this.Total_Chlorine_defualt=res[i]['data'][1]['default'];
                  this.Chloramine_defualt=res[i]['data'][2]['default']; 
                }         

            }

            if(res[i]['table']=="Generals"){
              if(!(res[i]['data'] && res[i]['data'].constructor === Array && Object.keys(res[i]['data']).length === 0)){                   
            
                this.Temperature=res[i]['data'][0]
                this.Hardness=res[i]['data'][1]
                this.Hardness_f=res[i]['data'][2]
                this.pH=res[i]['data'][3]
                this.Turbidity=res[i]['data'][4]
                this.Conductivity=res[i]['data'][5]
                this.Color=res[i]['data'][6];
                this.Odor=res[i]['data'][7]
                this.TDS=res[i]['data'][8]
                this.Microplastics=res[i]['data'][9];
                this.LSI=res[i]['data'][10]
                this.Bicarbonate=res[i]['data'][11]
                this.Alkalinity=res[i]['data'][12]
                this.Oxidation=res[i]['data'][13]


                this.Temperature_default=res[i]['data'][0]['default']
                this.Hardness_default=res[i]['data'][1]['default']
                this.Hardness_f_default=res[i]['data'][2]['default']
                this.pH_default=res[i]['data'][3]['default']
                this.Turbidity_default=res[i]['data'][4]['default']
                this.Conductivity_default=res[i]['data'][5]['default']
                this.Color_default=res[i]['data'][6]['default'];
                this.Odor_default=res[i]['data'][7]['default']
                this.TDS_default=res[i]['data'][8]['default']
                this.Microplastics_default=res[i]['data'][9]['default'];
                this.LSI_default=res[i]['data'][10]['default']
                this.Bicarbonate_default=res[i]['data'][11]['default']
                this.Alkalinity_default=res[i]['data'][12]['default']
                this.Oxidation_default=res[i]['data'][13]['default']

                console.log("Temperature/////////////",this.Temperature)
              }         

          }


          if(res[i]['table']=="Pathogens"){
            if(!(res[i]['data'] && res[i]['data'].constructor === Array && Object.keys(res[i]['data']).length === 0)){                   
              this.Clostridium=res[i]['data'][0];
              this.Bacteria=res[i]['data'][1];
              this.eColi=res[i]['data'][2];
              this.Enterococcus=res[i]['data'][3];
              this.Microbial_Cysts=res[i]['data'][4];

              this.Clostridium_default=res[i]['data'][0]['default'];
              this.Bacteria_default=res[i]['data'][1]['default'];
              this.eColi_default=res[i]['data'][2]['default'];
              this.Enterococcus_default=res[i]['data'][3]['default'];
              this.Microbial_Cysts_default=res[i]['data'][4]['default'];
            }         

          }


          if(res[i]['table']=="Chemical parameters"){
          if(!(res[i]['data'] && res[i]['data'].constructor === Array && Object.keys(res[i]['data']).length === 0)){                   
            
            this.Cyanide_total=res[i]['data'][0];
            this.Fluoride=res[i]['data'][1];
            this.Mercury=res[i]['data'][2]
            this.Nitrites=res[i]['data'][3]
            this.Nitrates=res[i]['data'][4]

            
            this.Cyanide_total_default=res[i]['data'][0]['default'];
            this.Fluoride_default=res[i]['data'][1]['default'];
            this.Mercury_default=res[i]['data'][2]['default']
            this.Nitrites_default=res[i]['data'][3]['default']
            this.Nitrates_default=res[i]['data'][4]['default']
          }         

          }

          if(res[i]['table']=="Minerals"){
            if(!(res[i]['data'] && res[i]['data'].constructor === Array && Object.keys(res[i]['data']).length === 0)){                   
              
              // this.Cyanide_total=res[i]['data'][0];
              this.Magnesium=res[i]['data'][0]
              this.Calcium=res[i]['data'][1]
              this.Potassium=res[i]['data'][2]
              this.Chloride=res[i]['data'][3];

              this.Magnesium_default=res[i]['data'][0]['default']
              this.Calcium_default=res[i]['data'][1]['default']
              this.Potassium_default=res[i]['data'][2]['default']
              this.Chloride_default=res[i]['data'][3]['default'];
            }         

          }

          if(res[i]['table']=="Metals"){
          if(!(res[i]['data'] && res[i]['data'].constructor === Array && Object.keys(res[i]['data']).length === 0)){   
            console.log("res[i]['data']",res[i]['data'])

            this.Aluminium=res[i]['data'][0]
            this.Antimony=res[i]['data'][1]
            this.Arsenic=res[i]['data'][2]
            this.Barium=res[i]['data'][3]
            this.Cadmium=res[i]['data'][4]
            this.Lead=res[i]['data'][5]
            this.Manganese=res[i]['data'][6]
            this.Copper=res[i]['data'][7]; 
            this.Iron=res[i]['data'][8];
            this.Zinc=res[i]['data'][9]
            this.Selenium=res[i]['data'][10]
            this.Chromium=res[i]['data'][11]
            this.Nickel=res[i]['data'][12]
            this.Sodium=res[i]['data'][13]

            this.Aluminium_default=res[i]['data'][0]['default']
            this.Antimony_default=res[i]['data'][1]['default']
            this.Arsenic_default=res[i]['data'][2]['default']
            this.Barium_default=res[i]['data'][3]['default']
            this.Cadmium_default=res[i]['data'][4]['default']
            this.Lead_default=res[i]['data'][5]['default']
            this.Manganese_default=res[i]['data'][6]['default']
            this.Copper_default=res[i]['data'][7]['default']
            this.Iron_default=res[i]['data'][8]['default']
            this.Zinc_default=res[i]['data'][9]['default']
            this.Selenium_default=res[i]['data'][10]['default']
            this.Chromium_default=res[i]['data'][11]['default']
            this.Nickel_default=res[i]['data'][12]['default']
            this.Sodium_default=res[i]['data'][13]['default']

          }         

          }

          if(res[i]['table']=="Chlorine bi product"){
          if(!(res[i]['data'] && res[i]['data'].constructor === Array && Object.keys(res[i]['data']).length === 0)){                   

          // this.Cyanide_total=res[i]['data'][0];

          this.Total_Trichloroethylene=res[i]['data'][0]
          this.Trichloroethylene=res[i]['data'][1]
          this.Tetrachloroethylene=res[i]['data'][2]
          this.Total_Trihalomethanes=res[i]['data'][3]
          this.Dichloromethane=res[i]['data'][4]

          
          this.Total_Trichloroethylene_default=res[i]['data'][0]['default']
          console.log("Total_Trichloroethylene_default",this.Total_Trichloroethylene)
          this.Trichloroethylene_default=res[i]['data'][1]['default']
          this.Tetrachloroethylene_default=res[i]['data'][2]['default']
          this.Total_Trihalomethanes_default=res[i]['data'][3]['default']
          this.Dichloromethane_default=res[i]['data'][4]['default']
          }         

          }

          if(res[i]['table']=="Haas"){
          if(!(res[i]['data'] && res[i]['data'].constructor === Array && Object.keys(res[i]['data']).length === 0)){                   
            
            // this.Cyanide_total=res[i]['data'][0];
            this.Total_haloacetic_acids=res[i]['data'][0]
            this.Total_haloacetic_acids_default=res[i]['data'][0]['default']
          }         

          }

          if(res[i]['table']=="Pesticides"){
          if(!(res[i]['data'] && res[i]['data'].constructor === Array && Object.keys(res[i]['data']).length === 0)){                   
          this.Chlordane=res[i]['data'][0]
          this.Heptachlor=res[i]['data'][1]
          this.Lindane=res[i]['data'][2]
          this.Total_pesticides=res[i]['data'][3]


          this.Chlordane_default=res[i]['data'][0]['default']
          this.Heptachlor_default=res[i]['data'][1]['default']
          this.Lindane_default=res[i]['data'][2]['default']
          this.Total_pesticides_default=res[i]['data'][3]['default']
          }         

          }

          if(res[i]['table']=="Herbicides"){
          if(!(res[i]['data'] && res[i]['data'].constructor === Array && Object.keys(res[i]['data']).length === 0)){                   
              this.D_2_4=res[i]['data'][0]
              this.Atrazine=res[i]['data'][1]
              this.Total_Herbicides=res[i]['data'][2]


              this.D_2_4_default=res[i]['data'][0]['default']
              this.Atrazine_default=res[i]['data'][1]['default']
              this.Total_Herbicides_default=res[i]['data'][2]['default']
          }         

          }


          if(res[i]['table']=="Perfluorinated chemicals"){
          if(!(res[i]['data'] && res[i]['data'].constructor === Array && Object.keys(res[i]['data']).length === 0)){                   
            // this.D_2_4=res[i]['data'][0]
            this.PFOA=res[i]['data'][0]
            this.PFOS=res[i]['data'][1]
            this.PFNA=res[i]['data'][2]

            this.PFOA_default=res[i]['data'][0]['default']
            this.PFOS_default=res[i]['data'][1]['default']
            this.PFNA_default=res[i]['data'][2]['default']
          }         

          }

          if(res[i]['table']=="other"){
          if(!(res[i]['data'] && res[i]['data'].constructor === Array && Object.keys(res[i]['data']).length === 0)){                   
          // this.D_2_4=res[i]['data'][0]

          this.Ammonia=res[i]['data'][0]
          this.Asbestos=res[i]['data'][1]
          this.Perchlorate=res[i]['data'][2]
          this.Polonium=res[i]['data'][3]
          this.Radium=res[i]['data'][4]
          this.Silver=res[i]['data'][5]
          this.Sulfate=res[i]['data'][6]
          this.Uranium=res[i]['data'][7]
          
          this.Ammonia_default=res[i]['data'][0]['default']
          this.Asbestos_default=res[i]['data'][1]['default']
          this.Perchlorate_default=res[i]['data'][2]['default']
          this.Polonium_default=res[i]['data'][3]['default']
          this.Radium_default=res[i]['data'][4]['default']
          this.Silver_default=res[i]['data'][5]['default']
          this.Sulfate_default=res[i]['data'][6]['default']
          this.Uranium_default=res[i]['data'][7]['default']
          }         

          }

          if(res[i]['table']=="Pharmaceuticals"){
          if(!(res[i]['data'] && res[i]['data'].constructor === Array && Object.keys(res[i]['data']).length === 0)){                   
                
          this.Atenolol=res[i]['data'][0]
          this.Carbamazepine=res[i]['data'][1]
          this.Estrone=res[i]['data'][2]
          this.Meprobamat=res[i]['data'][3]
          this.Trimethoprim=res[i]['data'][4]
          // this.data_Pharmaceuticals=res[i]['data'][5]

          this.Atenolol_default=res[i]['data'][0]['default']
          this.Carbamazepine_default=res[i]['data'][1]['default']
          this.Estrone_default=res[i]['data'][2]['default']
          this.Meprobamat_default=res[i]['data'][3]['default']
          this.Trimethoprim_default=res[i]['data'][4]['default']
          // this.data_Pharmaceuticals_default=res[i]['data'][5]['default']
          
          }         

          }

    }


      })

  

  console.log("value",sessionStorage.getItem('selected_language'))
  // console.log(this._apiservice.take_language());
  const browserLang = this.translate.getBrowserLang();
  this.translate.use(sessionStorage.getItem('selected_language'));    


//  },50);
}
     
}
