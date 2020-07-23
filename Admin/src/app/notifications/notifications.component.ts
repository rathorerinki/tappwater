import { Component, OnInit,ViewChild, KeyValueDiffers } from '@angular/core';
import {ApiService} from '../api.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
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
  Bacterias:any={};
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
average:any;
  //end other
  Atenolol:any={};
  Carbamazepine:any={};
  Estrone:any={};
  Meprobamat:any={};
  Trimethoprim:any={};
  data_Pharmaceuticals: any=[];
  basic_details_id: any;
  Dichloromethane: any={};
  Lead:any={};
  Manganese:any={};
  inputDisabled: boolean = false;
  loadedCharacter: {};
  averageDataRange:boolean;
  data:any={};
 constructor(private http:HttpClient,private router: Router,public translate: TranslateService,public _apiservice:ApiService,private differs: KeyValueDiffers) { 

 this.basic_details_id=this.router.getCurrentNavigation().extras.state.id._id   
 this.data['country']   =this.router.getCurrentNavigation().extras.state.id.country
//  //console.log("sendData",this.data['country'],"this.router.getCurrentNavigation().extras.state.id...........................",this.router.getCurrentNavigation().extras.state.id)
  }
  
ngOnInit(){
  this.Free_Chlorine['unit']='mg CL2/l';
  this.display();
  
}
ngDoCheck() {

}

    back(){
      this.router.navigate(['/typography']);
 
    }
 
    onKey(event){
 
      
//console.log("event................>",this.averageDataRange);
if(this.averageDataRange !=true){


      if(event.srcElement.name=='Total_Chlorine'){   
          
          //console.log("event",event.srcElement.value);
          (this.Total_Chlorine.Filtering)= ((1-(parseFloat(this.Total_Chlorine.filtering.replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        
          if(event.srcElement.value==''){
                  
            this.Total_Chlorine.Filtering=' '
      
          }
    
        }
    
      if(event.srcElement.name=='Free_Chlorine'){
    
        //console.log("event min",event.srcElement.value);
        //console.log("event max",event.srcElement.value);
        (this.Free_Chlorine.Filtering)= ((1-(parseFloat((this.Free_Chlorine.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Free_Chlorine.Filtering);
        
        if(event.srcElement.value==''){
                
          this.Free_Chlorine.Filtering=' '
    
        }
    
      }
    
     
    
    
      if(event.srcElement.name=='Chloramine'){
    
      
        // //console.log("event",event.srcElement.value);
        (this.Chloramine.Filtering)= ((1-(parseFloat((this.Chloramine.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Free_Chlorine.Filtering);
        
        if(event.srcElement.value==''){
                
          this.Chloramine.Filtering=' '
    
        }
    
      }
    
    
    
      if(event.srcElement.name=='Temperature'){
    
        // //console.log("event",event.srcElement.value);
        (this.Temperature.Filtering)= ((1-(parseFloat((this.Temperature.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Temperature.Filtering);
           
        if(event.srcElement.value==''){
                
          this.Temperature.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Hardness'){
    
        // //console.log("event",event.srcElement.value);
        (this.Hardness.Filtering)= ((1-(parseFloat((this.Hardness.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Hardness.Filtering);
        if(event.srcElement.value==''){
                
          this.Hardness.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Hardness_f'){
    
    
        // //console.log("event",event.srcElement.value);
        (this.Hardness_f.Filtering)= ((1-(parseFloat((this.Hardness_f.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Hardness_f.Filtering);
        if(event.srcElement.value==''){
                
          this.Hardness_f.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='pH'){
    
        // //console.log("event",event.srcElement.value);
        // (this.pH.Filtering)= ((1-(parseFloat((this.pH.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        // //console.log(this.pH.Filtering);

        (this.pH.Filtering)= ((parseFloat((this.pH.filtering).replace("%", " ")))+parseFloat(event.srcElement.value)).toString();
        //console.log(this.pH.Filtering);
        
        if(event.srcElement.value==''){
                
          this.pH.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Turbidity'){
    
        // //console.log("event",event.srcElement.value);
        (this.Turbidity.Filtering)= ((1-(parseFloat((this.Turbidity.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Turbidity.Filtering);
        if(event.srcElement.value==''){
                
          this.Turbidity.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Conductivity'){
    
        // //console.log("event",event.srcElement.value);
        (this.Conductivity.Filtering)= ((1-(parseFloat((this.Conductivity.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Conductivity.Filtering);
        if(event.srcElement.value==''){
                
          this.Conductivity.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Color'){
     
        // //console.log("event",event.srcElement.value);
        (this.Color.Filtering)= ((1-(parseFloat((this.Color.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log("color",this.Color.Filtering);
        if(event.srcElement.value==''){
                
          this.Color.Filtering=' '
    
        }
    
    
      }
    
      if(event.srcElement.name=='Odor'){     
      
        (this.Odor.Filtering)= ((1-(parseFloat((this.Odor.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log("odor",this.Odor.Filtering);
        if(event.srcElement.value==''){
                
          this.Odor.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='TDS'){
        
    
        (this.TDS.Filtering)= ((1-(parseFloat((this.TDS.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.TDS.Filtering);
      
        if(event.srcElement.value==''){
                
          this.Odor.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Microplastics'){
    
      
      
        (this.Microplastics.Filtering)= ((1-(parseFloat((this.Microplastics.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Microplastics.Filtering);
     
        if(event.srcElement.value==''){
                
          this.Microplastics.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='LSI'){
    
    
      
        (this.LSI.Filtering)= ((1-(parseFloat((this.LSI.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.LSI.Filtering);
    
        if(event.srcElement.value==''){
                
          this.LSI.Filtering=' '
    
        }
      }
    
      if(event.srcElement.name=='Bicarbonate'){
    
        (this.Bicarbonate.Filtering)= ((1-(parseFloat((this.Bicarbonate.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Bicarbonate.Filtering);
        if(event.srcElement.value==''){
                
          this.Bicarbonate.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Alkalinity'){
    
    
      
        (this.Alkalinity.Filtering)= ((1-(parseFloat((this.Alkalinity.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Alkalinity.Filtering);
        if(event.srcElement.value==''){
                
          this.Alkalinity.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Oxidation'){
    
        (this.Oxidation.Filtering)= ((1-(parseFloat((this.Oxidation.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Oxidation.Filtering);
        if(event.srcElement.value==''){
                
          this.Oxidation.Filtering=' '
    
        }
      }
    
    
      if(event.srcElement.name=='eColi'){
      
    
      
        (this.eColi.Filtering)= ((1-(parseFloat((this.eColi.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.eColi.Filtering);
        if(event.srcElement.value==''){
                
          this.eColi.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Clostridium'){
    
    
      
        (this.Clostridium.Filtering)= ((1-(parseFloat((this.Clostridium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Clostridium.Filtering);
        if(event.srcElement.value==''){
                
          this.Clostridium.Filtering=' '
    
        }
    
      }
    
      // Bacterias  

      if(event.srcElement.name=='Bacterias'){
    
    
      
        (this.Bacterias.Filtering)= ((1-(parseFloat((this.Bacterias.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Bacterias.Filtering);
        if(event.srcElement.value==''){
                
          this.Bacterias.Filtering=' '
    
        }
    
      }
      if(event.srcElement.name=='Enterococcus'){
    
    
        (this.Enterococcus.Filtering)= ((1-(parseFloat((this.Enterococcus.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Enterococcus.Filtering);
        if(event.srcElement.value==''){
                
          this.Enterococcus.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Microbial_Cysts'){
    
    
      
        (this.Microbial_Cysts.Filtering)= ((1-(parseFloat((this.Microbial_Cysts.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Microbial_Cysts.Filtering);
        if(event.srcElement.value==''){
                
          this.Microbial_Cysts.Filtering=' '
    
        }
    
      }
    
    
      if(event.srcElement.name=='Cyanide_total'){
      
    
    
        (this.Cyanide_total.Filtering)= ((1-(parseFloat((this.Cyanide_total.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Cyanide_total.Filtering);
        if(event.srcElement.value==''){
                
          this.Cyanide_total.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Fluoride'){
     
      
        (this.Fluoride.Filtering)= ((1-(parseFloat((this.Fluoride.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Fluoride.Filtering);
        if(event.srcElement.value==''){
                
          this.Fluoride.Filtering=' '
    
        }
    
      }
    
      
      if(event.srcElement.name=='Mercury'){
    
        (this.Mercury.Filtering)= ((1-(parseFloat((this.Mercury.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Mercury.Filtering);
        if(event.srcElement.value==''){
                
          this.Mercury.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Nitrites'){
    
        (this.Nitrites.Filtering)= ((1-(parseFloat((this.Nitrites.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Nitrites.Filtering);
        if(event.srcElement.value==''){
                
          this.Nitrites.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Nitrates'){
    
        (this.Nitrates.Filtering)= ((1-(parseFloat((this.Nitrates.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Nitrates.Filtering);
        if(event.srcElement.value==''){
                
          this.Nitrates.Filtering=' '
    
        }
    
      }
    
        if(event.srcElement.name=='Magnesium'){
     
          (this.Magnesium.Filtering)= ((1-(parseFloat((this.Magnesium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Magnesium.Filtering);
          if(event.srcElement.value==''){
                
            this.Magnesium.Filtering=' '
      
          }
        }
    
        if(event.srcElement.name=='Calcium'){
        
      
          (this.Calcium.Filtering)= ((1-(parseFloat((this.Calcium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Calcium.Filtering);
          if(event.srcElement.value==''){
                
            this.Calcium.Filtering=' '
      
          }
      
        }
        if(event.srcElement.name=='Potassium'){
     
      
          (this.Potassium.Filtering)= ((1-(parseFloat((this.Potassium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log("Potassium",this.Potassium.Filtering);
          if(event.srcElement.value==''){
                
            this.Potassium.Filtering=' '
      
          }
      
        }
    
        if(event.srcElement.name=='Chloride'){
       
          (this.Chloride.Filtering)= ((1-(parseFloat((this.Chloride.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Chloride.Filtering);
          if(event.srcElement.value==''){
                
            this.Chloride.Filtering=' '
      
          }
      
        }
     
        if(event.srcElement.name=='Aluminium'){
         
          (this.Aluminium.Filtering)= ((1-(parseFloat((this.Aluminium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Aluminium.Filtering);
          if(event.srcElement.value==''){
                
            this.Chloride.Filtering=' '
      
          }
      
        }
        if(event.srcElement.name=='Antimony'){
       
          (this.Antimony.Filtering)= ((1-(parseFloat((this.Antimony.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Antimony.Filtering);
          if(event.srcElement.value==''){
                
            this.Antimony.Filtering=' '
      
          }
      
        }
        if(event.srcElement.name=='Arsenic'){
       
          (this.Arsenic.Filtering)= ((1-(parseFloat((this.Arsenic.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Arsenic.Filtering);
          if(event.srcElement.value==''){
                
            this.Arsenic.Filtering=' '
      
          }
      
        }
        if(event.srcElement.name=='Barium'){
      
          (this.Barium.Filtering)= ((1-(parseFloat((this.Barium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Barium.Filtering);
          if(event.srcElement.value==''){
                
            this.Barium.Filtering=' '
      
          }
      
        }
        if(event.srcElement.name=='Cadmium'){
       
          (this.Cadmium.Filtering)= ((1-(parseFloat((this.Cadmium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Cadmium.Filtering);
          if(event.srcElement.value==''){
                
            this.Cadmium.Filtering=' '
      
          }
      
        }
        if(event.srcElement.name=='Chromium'){
     
          (this.Chromium.Filtering)= ((1-(parseFloat((this.Chromium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Chromium.Filtering);
          if(event.srcElement.value==''){
                
            this.Chromium.Filtering=' '
      
          }
      
        }
        if(event.srcElement.name=='Copper'){
    
          (this.Copper.Filtering)= ((1-(parseFloat((this.Copper.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Copper.Filtering);
    
          if(event.srcElement.value==''){
                
            this.Copper.Filtering=' '
      
          }
      
        }
    
    
        if(event.srcElement.name=='Lead'){
    
          (this.Lead.Filtering)= ((1-(parseFloat((this.Lead.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Lead.Filtering);
    
          if(event.srcElement.value==''){
                
            this.Lead.Filtering=' '
      
          }
      
        }
    
    
        if(event.srcElement.name=='Manganese'){
    
          (this.Manganese.Filtering)= ((1-(parseFloat((this.Manganese.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Manganese.Filtering);
    
          if(event.srcElement.value==''){
                
            this.Manganese.Filtering=' '
      
          }
      
        }
        if(event.srcElement.name=='Iron'){
    
          (this.Iron.Filtering)= ((1-(parseFloat((this.Iron.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Iron.Filtering);
          if(event.srcElement.value==''){
                
            this.Iron.Filtering=' '
      
          }
      
        }
        if(event.srcElement.name=='Nickel'){
      
          (this.Nickel.Filtering)= ((1-(parseFloat((this.Nickel.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Nickel.Filtering);
          if(event.srcElement.value==''){
                
            this.Nickel.Filtering=' '
      
          }
      
        }
        if(event.srcElement.name=='Selenium'){
    
          (this.Selenium.Filtering)= ((1-(parseFloat((this.Selenium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Selenium.Filtering);
          if(event.srcElement.value==''){
                
            this.Selenium.Filtering=' '
      
          }
      
        }
        if(event.srcElement.name=='Sodium'){
    
          (this.Sodium.Filtering)= ((1-(parseFloat((this.Sodium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Sodium.Filtering);
          if(event.srcElement.value==''){
                
            this.Sodium.Filtering=' '
      
          }
      
        }
        if(event.srcElement.name=='Zinc'){
      
          (this.Zinc.Filtering)= ((1-(parseFloat((this.Zinc.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
          //console.log(this.Zinc.Filtering);
           if(event.srcElement.value==''){
                
            this.Zinc.Filtering=' '
      
          }
      
        }
    
    
      if(event.srcElement.name=='Total_Trichloroethylene'){
      
        (this.Total_Trichloroethylene.Filtering)= ((1-(parseFloat((this.Total_Trichloroethylene.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Total_Trichloroethylene.Filtering);
        if(event.srcElement.value==''){
                
          this.Total_Trichloroethylene.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Trichloroethylene'){
    
        (this.Trichloroethylene.Filtering)= ((1-(parseFloat((this.Trichloroethylene.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Trichloroethylene.Filtering);
        if(event.srcElement.value==''){
                
          this.Trichloroethylene.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='Tetrachloroethylene'){
    
    
        (this.Tetrachloroethylene.Filtering)= ((1-(parseFloat((this.Tetrachloroethylene.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Tetrachloroethylene.Filtering);
    
        if(event.srcElement.value==''){
                
          this.Tetrachloroethylene.Filtering=' '
    
        }
    
      }
      if(event.srcElement.name=='Total_Trihalomethanes'){
    
      
        (this.Total_Trihalomethanes.Filtering)= ((1-(parseFloat((this.Total_Trihalomethanes.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Total_Trihalomethanes.Filtering);
      
        if(event.srcElement.value==''){
                
          this.Total_Trihalomethanes.Filtering=' '
    
        }
      }
      // Dichloromethane
      if(event.srcElement.name=='Dichloromethane'){
    
        (this.Dichloromethane.Filtering)= ((1-(parseFloat((this.Dichloromethane.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Dichloromethane.Filtering);
        if(event.srcElement.value==''){
                
          this.Dichloromethane.Filtering=' '
    
        }
    
      }
    
    
    
      if(event.srcElement.name=='Total_haloacetic_acids'){
    
        (this.Total_haloacetic_acids.Filtering)= ((1-(parseFloat((this.Total_haloacetic_acids.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Total_haloacetic_acids.Filtering);
        if(event.srcElement.value==''){
                
          this.Total_haloacetic_acids.Filtering=' '
    
        }
    
      }
    
    
      if(event.srcElement.name=='Chlordane'){
    
        (this.Chlordane.Filtering)= ((1-(parseFloat((this.Chlordane.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Chlordane.Filtering);
        if(event.srcElement.value==''){
                
          this.Chlordane.Filtering=' '
    
        }
    
      }
      if(event.srcElement.name=='Heptachlor'){
    
        (this.Heptachlor.Filtering)= ((1-(parseFloat((this.Heptachlor.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Heptachlor.Filtering);
        if(event.srcElement.value==''){
                
          this.Heptachlor.Filtering=' '
    
        }
    
      }
      if(event.srcElement.name=='Lindane'){
    
        (this.Lindane.Filtering)= ((1-(parseFloat((this.Lindane.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Lindane.Filtering);
        if(event.srcElement.value==''){
                
          this.Lindane.Filtering=' '
    
        }
    
      }
      if(event.srcElement.name=='Total_pesticides'){
     
        (this.Total_pesticides.Filtering)= ((1-(parseFloat((this.Total_pesticides.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Total_pesticides.Filtering);
        if(event.srcElement.value==''){
                
          this.Total_pesticides.Filtering=' '
    
        }
    
      }
    
      if(event.srcElement.name=='D_2_4'){
     
        (this.D_2_4.Filtering)= ((1-(parseFloat((this.D_2_4.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.D_2_4.Filtering);
        if(event.srcElement.value==''){
                
          this.D_2_4.Filtering=' '
    
        }
    console.log("in D_2_4",this.D_2_4.Filtering,"event.srcElement.value",event.srcElement.value)
      }
    
      if(event.srcElement.name=='Atrazine'){
     
        (this.Atrazine.Filtering)= ((1-(parseFloat((this.Atrazine.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Atrazine.Filtering);
        if(event.srcElement.value==''){
                
          this.Atrazine.Filtering=' '
    
        }
    
      }
      if(event.srcElement.name=='Total_Herbicides'){
     
        (this.Total_Herbicides.Filtering)= ((1-(parseFloat((this.Total_Herbicides.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Total_Herbicides.Filtering);
        if(event.srcElement.value==''){
                
          this.Total_Herbicides.Filtering=' '
    
        }
    
      }
    
    
    
    if(event.srcElement.name=='PFOA'){
    
    
      (this.PFOA.Filtering)= ((1-(parseFloat((this.PFOA.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
      //console.log(this.PFOA.Filtering);
      if(event.srcElement.value==''){
                
        this.PFOA.Filtering=' '
    
      }
    
    }
    
    if(event.srcElement.name=='PFOS'){
    
      (this.PFOS.Filtering)= ((1-(parseFloat((this.PFOS.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
      //console.log(this.PFOS.Filtering);
      if(event.srcElement.value==''){
                
        this.PFOS.Filtering=' '
    
      }
    
    }
    
    if(event.srcElement.name=='PFNA'){
    
      (this.PFNA.Filtering)= ((1-(parseFloat((this.PFNA.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
      //console.log(this.PFNA.Filtering);
      if(event.srcElement.value==''){
                
        this.PFNA.Filtering=' '
    
      }
    
    }
    
    
    
    
    
      if(event.srcElement.name=='Ammonia'){
      
        (this.Ammonia.Filtering)= ((1-(parseFloat((this.Ammonia.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Ammonia.Filtering);
        if(event.srcElement.value==''){
                
          this.Ammonia.Filtering=' '
      
        }
      
      }
      if(event.srcElement.name=='Asbestos'){
    
        (this.Asbestos.Filtering)= ((1-(parseFloat((this.Asbestos.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Asbestos.Filtering);
        if(event.srcElement.value==''){
                
          this.Asbestos.Filtering=' '
      
        }
      
      }
    
      if(event.srcElement.name=='Perchlorate'){
      
        (this.Perchlorate.Filtering)= ((1-(parseFloat((this.Perchlorate.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Perchlorate.Filtering);
        if(event.srcElement.value==''){
                
          this.Perchlorate.Filtering=' '
      
        }
      
      }
    
      if(event.srcElement.name=='Polonium'){
    
    
        (this.Polonium.Filtering)= ((1-(parseFloat((this.Polonium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Polonium.Filtering);
        if(event.srcElement.value==''){
                
          this.Polonium.Filtering=' '
      
        }
      
      }
    
      if(event.srcElement.name=='Radium'){
    
    
        (this.Radium.Filtering)= ((1-(parseFloat((this.Radium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Radium.Filtering);
        if(event.srcElement.value==''){
                
          this.Radium.Filtering=' '
      
        }
      
      }
    
      if(event.srcElement.name=='Silver'){
    
      
        (this.Silver.Filtering)= ((1-(parseFloat((this.Silver.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Silver.Filtering);
        if(event.srcElement.value==''){
                
          this.Silver.Filtering=' '
      
        }
      
      }
    
      if(event.srcElement.name=='Sulfate'){
       
        (this.Sulfate.Filtering)= ((1-(parseFloat((this.Sulfate.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Sulfate.Filtering);
        if(event.srcElement.value==''){
                
          this.Sulfate.Filtering=' '
      
        }
      }
    
      if(event.srcElement.name=='Uranium'){
      
        (this.Uranium.Filtering)= ((1-(parseFloat((this.Uranium.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Uranium.Filtering);
        if(event.srcElement.value==''){                
          this.Uranium.Filtering=' '      
        }
      
      }    
    
      if(event.srcElement.name=='Atenolol'){
      
        (this.Atenolol.Filtering)= ((1-(parseFloat((this.Atenolol.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Atenolol.Filtering);
        if(event.srcElement.value==''){
                
          this.Atenolol.Filtering=' '
      
        }
      
      }
    
      
      if(event.srcElement.name=='Carbamazepine'){
    
      
        (this.Carbamazepine.Filtering)= ((1-(parseFloat((this.Carbamazepine.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Carbamazepine.Filtering);
        if(event.srcElement.value==''){
                
          this.Carbamazepine.Filtering=' '
      
        }
      }
      if(event.srcElement.name=='Estrone'){
    
        (this.Estrone.Filtering)= ((1-(parseFloat((this.Estrone.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Estrone.Filtering);
        if(event.srcElement.value==''){
                
          this.Estrone.Filtering=' '
      
        }
      }
    
      if(event.srcElement.name=='Meprobamat'){
      
        (this.Meprobamat.Filtering)= ((1-(parseFloat((this.Meprobamat.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Meprobamat.Filtering);
        if(event.srcElement.value==''){
                
          this.Meprobamat.Filtering=' '
      
        }
      }
    
      if(event.srcElement.name=='Trimethoprim'){
     
        (this.Trimethoprim.Filtering)= ((1-(parseFloat((this.Trimethoprim.filtering).replace("%", " "))/100))*parseFloat(event.srcElement.value)).toString();
        //console.log(this.Trimethoprim.Filtering);
        if(event.srcElement.value==''){
                
          this.Trimethoprim.Filtering=' '
      
        }
      
      }
    }
    else if(this.averageDataRange ==true){ 
      if(event.srcElement.name=='Free_Chlorine_minimum' ||event.srcElement.name=='Free_Chlorine_maximum' ){ 

      let a=(isNaN(this.Free_Chlorine.minimum)?0:this.Free_Chlorine.minimum)*(100-parseFloat((this.Free_Chlorine.filtering).replace("%", " ")))/100

      let b=(isNaN(this.Free_Chlorine.maximum)?0:this.Free_Chlorine.maximum)*(100-parseFloat((this.Free_Chlorine.filtering).replace("%", " ")))/100

      this.Free_Chlorine.Filtering= a.toString()+" - "+b.toString()
      
      }
      if(event.srcElement.name=='Total_Chlorine_minimum' ||event.srcElement.name=='Total_Chlorine_maximum'){

        let a=(isNaN(this.Total_Chlorine.minimum)?0:this.Total_Chlorine.minimum)*(100-parseFloat((this.Total_Chlorine.filtering).replace("%", " ")))/100

        let b=(isNaN(this.Total_Chlorine.maximum)?0:this.Total_Chlorine.maximum)*(100-parseFloat((this.Total_Chlorine.filtering).replace("%", " ")))/100

        this.Total_Chlorine.Filtering=a.toString()+" - "+b.toString()
      }
      if(event.srcElement.name=='Chloramine_minimum' ||event.srcElement.name=='Chloramine_maximum'){

        let a=(isNaN(this.Chloramine.minimum)?0:this.Chloramine.minimum)*(100-parseFloat((this.Chloramine.filtering).replace("%", " ")))/100

        let b=(isNaN(this.Chloramine.maximum)?0:this.Chloramine.maximum)*(100-parseFloat((this.Chloramine.filtering).replace("%", " ")))/100
        this.Chloramine.Filtering=a.toString()+" - "+b.toString()
      }
      if(event.srcElement.name=='Temperature_minimum' ||event.srcElement.name=='Temperature_maximum'){
        let a=(isNaN(this.Temperature.minimum)?0:this.Temperature.minimum)*(100-parseFloat((this.Temperature.filtering).replace("%", " ")))/100

        let b=(isNaN(this.Temperature.maximum)?0:this.Temperature.maximum)*(100-parseFloat((this.Temperature.filtering).replace("%", " ")))/100
        this.Temperature.Filtering=a.toString()+" - "+b.toString()
      }
      if(event.srcElement.name=='Hardness_minimum' ||event.srcElement.name=='Hardness_maximum'){

        let a=(isNaN(this.Hardness.minimum)?0:this.Hardness.minimum)*(100-parseFloat((this.Hardness.filtering).replace("%", " ")))/100

        let b=(isNaN(this.Hardness.maximum)?0:this.Hardness.maximum)*(100-parseFloat((this.Hardness.filtering).replace("%", " ")))/100

        this.Hardness.Filtering=a.toString()+" - "+b.toString()
      }
      if(event.srcElement.name=='Hardness_f_minimum' ||event.srcElement.name=='Hardness_f_maximum'){

        let a=(isNaN(this.Hardness_f.minimum)?0:this.Hardness_f.minimum)*(100-parseFloat((this.Hardness_f.filtering).replace("%", " ")))/100

        let b=(isNaN(this.Hardness_f.maximum)?0:this.Hardness_f.maximum)*(100-parseFloat((this.Hardness_f.filtering).replace("%", " ")))/100

        this.Hardness_f.Filtering=a.toString()+" - "+b.toString()
      }
      if(event.srcElement.name=='pH_minimum' ||event.srcElement.name=='pH_maximum'){
        let a=(isNaN(this.pH.minimum)?0:this.pH.minimum)

        let b=(isNaN(this.pH.maximum)?0:this.pH.maximum)

        this.pH.Filtering=a.toString()+" - "+b.toString()
      }
      if(event.srcElement.name=='Turbidity_minimum' ||event.srcElement.name=='Turbidity_maximum'){
        let a=(isNaN(this.Turbidity.minimum)?0:this.Turbidity.minimum)*(100-parseFloat((this.Turbidity.filtering).replace("%", " ")))/100

        let b=(isNaN(this.Turbidity.maximum)?0:this.Turbidity.maximum)*(100-parseFloat((this.Turbidity.filtering).replace("%", " ")))/100

        this.Turbidity.Filtering=a.toString()+" - "+b.toString()
      }
      if(event.srcElement.name=='Conductivity_minimum' ||event.srcElement.name=='Conductivity_maximum'){

        let a=(isNaN(this.Conductivity.minimum)?0:this.Conductivity.minimum)*(100-parseFloat((this.Conductivity.filtering).replace("%", " ")))/100

        let b=(isNaN(this.Conductivity.maximum)?0:this.Conductivity.maximum)*(100-parseFloat((this.Conductivity.filtering).replace("%", " ")))/100
        this.Conductivity.Filtering=a.toString()+" - "+b.toString()
      }
      if(event.srcElement.name=='Color_minimum' ||event.srcElement.name=='Color_maximum'){
        let a=(isNaN(this.Color.minimum)?0:this.Color.minimum)*(100-parseFloat((this.Color.filtering).replace("%", " ")))/100

        let b=(isNaN(this.Color.maximum)?0:this.Color.maximum)*(100-parseFloat((this.Color.filtering).replace("%", " ")))/100

        this.Color.Filtering=a.toString()+" - "+b.toString()
      }
      if(event.srcElement.name=='Odor_minimum' ||event.srcElement.name=='Odor_maximum'){

        let a=(isNaN(this.Odor.minimum)?0:this.Odor.minimum)*(100-parseFloat((this.Odor.filtering).replace("%", " ")))/100

        let b=(isNaN(this.Odor.maximum)?0:this.Odor.maximum)*(100-parseFloat((this.Odor.filtering).replace("%", " ")))/100

        this.Odor.Filtering=a.toString()+" - "+b.toString()
      }
      if(event.srcElement.name=='TDS_minimum' ||event.srcElement.name=='TDS_maximum'){
        let a=(isNaN(this.TDS.minimum)?0:this.TDS.minimum)*(100-parseFloat((this.TDS.filtering).replace("%", " ")))/100

        let b=(isNaN(this.TDS.maximum)?0:this.TDS.maximum)*(100-parseFloat((this.TDS.filtering).replace("%", " ")))/100

        this.TDS.Filtering=a.toString()+" - "+b.toString()
      }
      if(event.srcElement.name=='Microplastics_minimum' ||event.srcElement.name=='Microplastics_maximum'){
        let a=(isNaN(this.Microplastics.minimum)?0:this.Microplastics.minimum)*(100-parseFloat((this.Microplastics.filtering).replace("%", " ")))/100

        let b=(isNaN(this.Microplastics.maximum)?0:this.Microplastics.maximum)*(100-parseFloat((this.Microplastics.filtering).replace("%", " ")))/100

        this.Microplastics.Filtering=a.toString()+" - "+b.toString()
        // this.Microplastics.Filtering=0
      }
      if(event.srcElement.name=='LSI_minimum' ||event.srcElement.name=='LSI_maximum' ){ 
        let a=(isNaN(this.LSI.minimum)?0:this.LSI.minimum)*(100-parseFloat((this.LSI.filtering).replace("%", " ")))/100

        let b=(isNaN(this.LSI.maximum)?0:this.LSI.maximum)*(100-parseFloat((this.LSI.filtering).replace("%", " ")))/100
 
        this.LSI.Filtering=a.toString()+" - "+b.toString()
        }
        if(event.srcElement.name=='Bicarbonate_minimum' ||event.srcElement.name=='Bicarbonate_maximum'){
          let a=(isNaN(this.Bicarbonate.minimum)?0:this.Bicarbonate.minimum)*(100-parseFloat((this.Bicarbonate.filtering).replace("%", " ")))/100

          let b=(isNaN(this.Bicarbonate.maximum)?0:this.Bicarbonate.maximum)*(100-parseFloat((this.Bicarbonate.filtering).replace("%", " ")))/100
          this.Bicarbonate.Filtering=a.toString()+" - "+b.toString()
        }
        if(event.srcElement.name=='Alkalinity_minimum' ||event.srcElement.name=='Alkalinity_maximum'){
          let a=(isNaN(this.Alkalinity.minimum)?0:this.Alkalinity.minimum)*(100-parseFloat((this.Alkalinity.filtering).replace("%", " ")))/100

          let b=(isNaN(this.Alkalinity.maximum)?0:this.Alkalinity.maximum)*(100-parseFloat((this.Alkalinity.filtering).replace("%", " ")))/100
          this.Alkalinity.Filtering=a.toString()+" - "+b.toString()
        }
        if(event.srcElement.name=='Oxidation_minimum' ||event.srcElement.name=='Oxidation_maximum'){
          let a=(isNaN(this.Oxidation.minimum)?0:this.Oxidation.minimum)*(100-parseFloat((this.Oxidation.filtering).replace("%", " ")))/100

          let b=(isNaN(this.Oxidation.maximum)?0:this.Oxidation.maximum)*(100-parseFloat((this.Oxidation.filtering).replace("%", " ")))/100
          this.Oxidation.Filtering=a.toString()+" - "+b.toString()
        }
        if(event.srcElement.name=='eColi_minimum' ||event.srcElement.name=='eColi_maximum'){
          let a=(isNaN(this.eColi.minimum)?0:this.eColi.minimum)*(100-parseFloat((this.eColi.filtering).replace("%", " ")))/100

          let b=(isNaN(this.eColi.maximum)?0:this.eColi.maximum)*(100-parseFloat((this.eColi.filtering).replace("%", " ")))/100
          this.eColi.Filtering=a.toString()+" - "+b.toString()
        }
        if(event.srcElement.name=='Clostridium_minimum' ||event.srcElement.name=='Clostridium_maximum'){

          let a=(isNaN(this.Clostridium.minimum)?0:this.Clostridium.minimum)*(100-parseFloat((this.Clostridium.filtering).replace("%", " ")))/100
          let b=(isNaN(this.Clostridium.maximum)?0:this.Clostridium.maximum)*(100-parseFloat((this.Clostridium.filtering).replace("%", " ")))/100
          this.Clostridium.Filtering=a.toString()+" - "+b.toString()
        }
        if(event.srcElement.name=='Bacterias_minimum' ||event.srcElement.name=='Bacterias_maximum'){

          
          let a=(isNaN(this.Bacterias.minimum)?0:this.Bacterias.minimum)*(100-parseFloat((this.Bacterias.filtering).replace("%", " ")))/100
          let b=(isNaN(this.Bacterias.maximum)?0:this.Bacterias.maximum)*(100-parseFloat((this.Bacterias.filtering).replace("%", " ")))/100

          this.Bacterias.Filtering=a.toString()+" - "+b.toString()
        }
        if(event.srcElement.name=='Enterococcus_minimum' ||event.srcElement.name=='Enterococcus_maximum'){

          
          let a=(isNaN(this.Enterococcus.minimum)?0:this.Enterococcus.minimum)*(100-parseFloat((this.Enterococcus.filtering).replace("%", " ")))/100
          let b=(isNaN(this.Enterococcus.maximum)?0:this.Enterococcus.maximum)*(100-parseFloat((this.Enterococcus.filtering).replace("%", " ")))/100
          this.Enterococcus.Filtering=a.toString()+" - "+b.toString()
        }
        if(event.srcElement.name=='Microbial_Cysts_minimum' ||event.srcElement.name=='Microbial_Cysts_maximum'){

          let a=(isNaN(this.Microbial_Cysts.minimum)?0:this.Microbial_Cysts.minimum)*(100-parseFloat((this.Microbial_Cysts.filtering).replace("%", " ")))/100
          let b=(isNaN(this.Microbial_Cysts.maximum)?0:this.Microbial_Cysts.maximum)*(100-parseFloat((this.Microbial_Cysts.filtering).replace("%", " ")))/100
          this.Microbial_Cysts.Filtering=a.toString()+" - "+b.toString()
        }
        if(event.srcElement.name=='Cyanide_total_minimum' ||event.srcElement.name=='Cyanide_total_maximum'){
          
          let a=(isNaN(this.Cyanide_total.minimum)?0:this.Cyanide_total.minimum)*(100-parseFloat((this.Cyanide_total.filtering).replace("%", " ")))/100
          let b=(isNaN(this.Cyanide_total.maximum)?0:this.Cyanide_total.maximum)*(100-parseFloat((this.Cyanide_total.filtering).replace("%", " ")))/100
          this.Cyanide_total.Filtering=a.toString()+" - "+b.toString()
        }
        if(event.srcElement.name=='Fluoride_minimum' ||event.srcElement.name=='Fluoride_maximum'){

          
          let a=(isNaN(this.Fluoride.minimum)?0:this.Fluoride.minimum)*(100-parseFloat((this.Fluoride.filtering).replace("%", " ")))/100
          let b=(isNaN(this.Fluoride.maximum)?0:this.Fluoride.maximum)*(100-parseFloat((this.Fluoride.filtering).replace("%", " ")))/100
          this.Fluoride.Filtering=a.toString()+" - "+b.toString()
        }
        if(event.srcElement.name=='Mercury_minimum' ||event.srcElement.name=='Mercury_maximum'){
          
          let a=(isNaN(this.Mercury.minimum)?0:this.Mercury.minimum)*(100-parseFloat((this.Mercury.filtering).replace("%", " ")))/100
        let b=(isNaN(this.Mercury.maximum)?0:this.Mercury.maximum)*(100-parseFloat((this.Mercury.filtering).replace("%", " ")))/100
          this.Mercury.Filtering=a.toString()+" - "+b.toString()
        }
        if(event.srcElement.name=='Nitrites_minimum' ||event.srcElement.name=='Nitrites_maximum'){
          let a=(isNaN(this.Nitrites.minimum)?0:this.Nitrites.minimum)*(100-parseFloat((this.Nitrites.filtering).replace("%", " ")))/100
        let b=(isNaN(this.Nitrites.maximum)?0:this.Nitrites.maximum)*(100-parseFloat((this.Nitrites.filtering).replace("%", " ")))/100
          this.Nitrites.Filtering=a.toString()+" - "+b.toString()
        }
        if(event.srcElement.name=='Nitrates_minimum' ||event.srcElement.name=='Nitrates_maximum'){
          
          let a=(isNaN(this.Nitrates.minimum)?0:this.Nitrates.minimum)*(100-parseFloat((this.Nitrates.filtering).replace("%", " ")))/100
        let b=(isNaN(this.Nitrates.maximum)?0:this.Nitrates.maximum)*(100-parseFloat((this.Nitrates.filtering).replace("%", " ")))/100
          this.Nitrates.Filtering=a.toString()+" - "+b.toString()
        }
        
        if(event.srcElement.name=='Magnesium_minimum' ||event.srcElement.name=='Magnesium_maximum' ){ 

          let a=(isNaN(this.Magnesium.minimum)?0:this.Magnesium.minimum)*(100-parseFloat((this.Magnesium.filtering).replace("%", " ")))/100
          let b=(isNaN(this.Magnesium.maximum)?0:this.Magnesium.maximum)*(100-parseFloat((this.Magnesium.filtering).replace("%", " ")))/100
          
          this.Magnesium.Filtering=a.toString()+" - "+b.toString()
          }

          if(event.srcElement.name=='Calcium_minimum' ||event.srcElement.name=='Calcium_maximum'){

            let a=(isNaN(this.Calcium.minimum)?0:this.Calcium.minimum)*(100-parseFloat((this.Calcium.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Calcium.maximum)?0:this.Calcium.maximum)*(100-parseFloat((this.Calcium.filtering).replace("%", " ")))/100
          
            this.Calcium.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Potassium_minimum' ||event.srcElement.name=='Potassium_maximum'){
            let a=(isNaN(this.Potassium.minimum)?0:this.Potassium.minimum)*(100-parseFloat((this.Potassium.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Potassium.maximum)?0:this.Potassium.maximum)*(100-parseFloat((this.Potassium.filtering).replace("%", " ")))/100
          
            this.Potassium.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Chloride_minimum' ||event.srcElement.name=='Chloride_maximum'){

            let a=(isNaN(this.Chloride.minimum)?0:this.Chloride.minimum)*(100-parseFloat((this.Chloride.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Chloride.maximum)?0:this.Chloride.maximum)*(100-parseFloat((this.Chloride.filtering).replace("%", " ")))/100
            this.Chloride.Filtering=a.toString()+" - "+b.toString()
          }
        //start

          if(event.srcElement.name=='Aluminium_minimum' ||event.srcElement.name=='Aluminium_maximum'){
            
            let a=(isNaN(this.Aluminium.minimum)?0:this.Aluminium.minimum)*(100-parseFloat((this.Aluminium.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Aluminium.maximum)?0:this.Aluminium.maximum)*(100-parseFloat((this.Aluminium.filtering).replace("%", " ")))/100
            this.Aluminium.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Antimony_minimum' ||event.srcElement.name=='Antimony_maximum'){
            
            let a=(isNaN(this.Antimony.minimum)?0:this.Antimony.minimum)*(100-parseFloat((this.Antimony.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Antimony.maximum)?0:this.Antimony.maximum)*(100-parseFloat((this.Antimony.filtering).replace("%", " ")))/100
            this.Antimony.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Arsenic_minimum' ||event.srcElement.name=='Arsenic_maximum'){
            
            let a=(isNaN(this.Arsenic.minimum)?0:this.Arsenic.minimum)*(100-parseFloat((this.Arsenic.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Arsenic.maximum)?0:this.Arsenic.maximum)*(100-parseFloat((this.Arsenic.filtering).replace("%", " ")))/100
            this.Arsenic.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Barium_minimum' ||event.srcElement.name=='Barium_maximum'){
            let a=(isNaN(this.Barium.minimum)?0:this.Barium.minimum)*(100-parseFloat((this.Barium.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Barium.maximum)?0:this.Barium.maximum)*(100-parseFloat((this.Barium.filtering).replace("%", " ")))/100
            this.Barium.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Cadmium_minimum' ||event.srcElement.name=='Cadmium_maximum'){
            let a=(isNaN(this.Cadmium.minimum)?0:this.Cadmium.minimum)*(100-parseFloat((this.Cadmium.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Cadmium.maximum)?0:this.Cadmium.maximum)*(100-parseFloat((this.Cadmium.filtering).replace("%", " ")))/100
            this.Cadmium.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Chromium_minimum' ||event.srcElement.name=='Chromium_maximum'){

            let a=(isNaN(this.Chromium.minimum)?0:this.Chromium.minimum)*(100-parseFloat((this.Chromium.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Chromium.maximum)?0:this.Chromium.maximum)*(100-parseFloat((this.Chromium.filtering).replace("%", " ")))/100
            this.Chromium.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Copper_minimum' ||event.srcElement.name=='Copper_maximum'){
            let a=(isNaN(this.Copper.minimum)?0:this.Copper.minimum)*(100-parseFloat((this.Copper.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Copper.maximum)?0:this.Copper.maximum)*(100-parseFloat((this.Copper.filtering).replace("%", " ")))/100
            this.Copper.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Lead_minimum' ||event.srcElement.name=='Lead_maximum'){
            let a=(isNaN(this.Lead.minimum)?0:this.Lead.minimum)*(100-parseFloat((this.Lead.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Lead.maximum)?0:this.Lead.maximum)*(100-parseFloat((this.Lead.filtering).replace("%", " ")))/100
            this.Lead.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Manganese_minimum' ||event.srcElement.name=='Manganese_maximum'){
            let a=(isNaN(this.Manganese.minimum)?0:this.Manganese.minimum)*(100-parseFloat((this.Manganese.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Manganese.maximum)?0:this.Manganese.maximum)*(100-parseFloat((this.Manganese.filtering).replace("%", " ")))/100
            this.Manganese.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Chloride_minimum' ||event.srcElement.name=='Chloride_maximum'){
            let a=(isNaN(this.Chloride.minimum)?0:this.Chloride.minimum)*(100-parseFloat((this.Chloride.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Chloride.maximum)?0:this.Chloride.maximum)*(100-parseFloat((this.Chloride.filtering).replace("%", " ")))/100
            this.Chloride.Filtering=a.toString()+" - "+b.toString()
          }
          //end
                    
          if(event.srcElement.name=='Iron_minimum' ||event.srcElement.name=='Iron_maximum'){
            let a=(isNaN(this.Iron.minimum)?0:this.Iron.minimum)*(100-parseFloat((this.Iron.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Iron.maximum)?0:this.Iron.maximum)*(100-parseFloat((this.Iron.filtering).replace("%", " ")))/100
            this.Iron.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Nickel_minimum' ||event.srcElement.name=='Nickel_maximum'){
            let a=(isNaN(this.Nickel.minimum)?0:this.Nickel.minimum)*(100-parseFloat((this.Nickel.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Nickel.maximum)?0:this.Nickel.maximum)*(100-parseFloat((this.Nickel.filtering).replace("%", " ")))/100
            this.Nickel.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Selenium_minimum' ||event.srcElement.name=='Selenium_maximum'){

            let a=(isNaN(this.Selenium.minimum)?0:this.Selenium.minimum)*(100-parseFloat((this.Selenium.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Selenium.maximum)?0:this.Selenium.maximum)*(100-parseFloat((this.Selenium.filtering).replace("%", " ")))/100
            this.Selenium.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Sodium_minimum' ||event.srcElement.name=='Sodium_maximum'){
            let a=(isNaN(this.Sodium.minimum)?0:this.Sodium.minimum)*(100-parseFloat((this.Sodium.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Sodium.maximum)?0:this.Sodium.maximum)*(100-parseFloat((this.Sodium.filtering).replace("%", " ")))/100
            this.Sodium.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Zinc_minimum' ||event.srcElement.name=='Zinc_maximum'){
            let a=(isNaN(this.Hardness_f.minimum)?0:this.Hardness_f.minimum)*(100-parseFloat((this.Hardness_f.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Hardness_f.maximum)?0:this.Hardness_f.maximum)*(100-parseFloat((this.Hardness_f.filtering).replace("%", " ")))/100
            this.Hardness_f.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Total_Trichloroethylene_minimum' ||event.srcElement.name=='Total_Trichloroethylene_maximum'){
            let a=(isNaN(this.Total_Trichloroethylene.minimum)?0:this.Total_Trichloroethylene.minimum)*(100-parseFloat((this.Total_Trichloroethylene.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Total_Trichloroethylene.maximum)?0:this.Total_Trichloroethylene.maximum)*(100-parseFloat((this.Total_Trichloroethylene.filtering).replace("%", " ")))/100
            this.Total_Trichloroethylene.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Trichloroethylene_minimum' ||event.srcElement.name=='Trichloroethylene_maximum'){

            let a=(isNaN(this.Trichloroethylene.minimum)?0:this.Trichloroethylene.minimum)*(100-parseFloat((this.Trichloroethylene.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Trichloroethylene.maximum)?0:this.Trichloroethylene.maximum)*(100-parseFloat((this.Trichloroethylene.filtering).replace("%", " ")))/100

            this.Trichloroethylene.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Tetrachloroethylene_minimum' ||event.srcElement.name=='Tetrachloroethylene_maximum'){
            
            let a=(isNaN(this.Tetrachloroethylene.minimum)?0:this.Tetrachloroethylene.minimum)*(100-parseFloat((this.Tetrachloroethylene.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Tetrachloroethylene.maximum)?0:this.Trichloroethylene.maximum)*(100-parseFloat((this.Tetrachloroethylene.filtering).replace("%", " ")))/100
            this.Tetrachloroethylene.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Total_Trihalomethanes_minimum' ||event.srcElement.name=='Total_Trihalomethanes_maximum'){
            
            
            let a=(isNaN(this.Total_Trihalomethanes.minimum)?0:this.Total_Trihalomethanes.minimum)*(100-parseFloat((this.Total_Trihalomethanes.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Total_Trihalomethanes.maximum)?0:this.Total_Trihalomethanes.maximum)*(100-parseFloat((this.Total_Trihalomethanes.filtering).replace("%", " ")))/100
            this.Total_Trihalomethanes.Filtering=a.toString()+" - "+b.toString()
          }



          if(event.srcElement.name=='Dichloromethane_minimum' ||event.srcElement.name=='Dichloromethane_maximum'){
            let a=(isNaN(this.Dichloromethane.minimum)?0:this.Dichloromethane.minimum)*(100-parseFloat((this.Dichloromethane.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Dichloromethane.maximum)?0:this.Dichloromethane.maximum)*(100-parseFloat((this.Dichloromethane.filtering).replace("%", " ")))/100
            this.Dichloromethane.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Total_haloacetic_acids_minimum' ||event.srcElement.name=='Total_haloacetic_acids_maximum'){
            let a=(isNaN(this.Total_haloacetic_acids.minimum)?0:this.Total_haloacetic_acids.minimum)*(100-parseFloat((this.Total_haloacetic_acids.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Total_haloacetic_acids.maximum)?0:this.Total_haloacetic_acids.maximum)*(100-parseFloat((this.Total_haloacetic_acids.filtering).replace("%", " ")))/100
            this.Total_haloacetic_acids.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Chlordane_minimum' ||event.srcElement.name=='Chlordane_maximum'){
            let a=(isNaN(this.Chlordane.minimum)?0:this.Chlordane.minimum)*(100-parseFloat((this.Chlordane.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Chlordane.maximum)?0:this.Chlordane.maximum)*(100-parseFloat((this.Chlordane.filtering).replace("%", " ")))/100
            this.Chlordane.Filtering=a.toString()+" - "+b.toString()
          }
          if(event.srcElement.name=='Heptachlor_minimum' ||event.srcElement.name=='Heptachlor_maximum' ){  
            let a=(isNaN(this.Heptachlor.minimum)?0:this.Heptachlor.minimum)*(100-parseFloat((this.Heptachlor.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Heptachlor.maximum)?0:this.Heptachlor.maximum)*(100-parseFloat((this.Heptachlor.filtering).replace("%", " ")))/100
            this.Heptachlor.Filtering=a.toString()+" - "+b.toString()
            }

            if(event.srcElement.name=='Lindane_minimum' ||event.srcElement.name=='Lindane_maximum'){
              let a=(isNaN(this.Lindane.minimum)?0:this.Lindane.minimum)*(100-parseFloat((this.Lindane.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Lindane.maximum)?0:this.Lindane.maximum)*(100-parseFloat((this.Lindane.filtering).replace("%", " ")))/100
              this.Lindane.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='Total_pesticides_minimum' ||event.srcElement.name=='Total_pesticides_maximum'){
              let a=(isNaN(this.Total_pesticides.minimum)?0:this.Total_pesticides.minimum)*(100-parseFloat((this.Total_pesticides.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Total_pesticides.maximum)?0:this.Total_pesticides.maximum)*(100-parseFloat((this.Total_pesticides.filtering).replace("%", " ")))/100
              this.Total_pesticides.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='D_2_4_minimum' ||event.srcElement.name=='D_2_4_maximum'){
              let a=(isNaN(this.D_2_4.minimum)?0:this.D_2_4.minimum)*(100-parseFloat((this.D_2_4.filtering).replace("%", " ")))/100
            let b=(isNaN(this.D_2_4.maximum)?0:this.D_2_4.maximum)*(100-parseFloat((this.D_2_4.filtering).replace("%", " ")))/100
              this.D_2_4.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='Atrazine_minimum' ||event.srcElement.name=='Atrazine_maximum'){
              let a=(isNaN(this.Atrazine.minimum)?0:this.Atrazine.minimum)*(100-parseFloat((this.Atrazine.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Atrazine.maximum)?0:this.Atrazine.maximum)*(100-parseFloat((this.Atrazine.filtering).replace("%", " ")))/100
              this.Atrazine.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='Total_Herbicides_minimum' ||event.srcElement.name=='Total_Herbicides_maximum'){
              let a=(isNaN(this.Total_Herbicides.minimum)?0:this.Total_Herbicides.minimum)*(100-parseFloat((this.Total_Herbicides.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Total_Herbicides.maximum)?0:this.Total_Herbicides.maximum)*(100-parseFloat((this.Total_Herbicides.filtering).replace("%", " ")))/100
              this.Total_Herbicides.Filtering=a.toString()+" - "+b.toString()
            }


            if(event.srcElement.name=='PFOA_minimum' ||event.srcElement.name=='PFOA_maximum'){
              let a=(isNaN(this.PFOA.minimum)?0:this.PFOA.minimum)*(100-parseFloat((this.PFOA.filtering).replace("%", " ")))/100
            let b=(isNaN(this.PFOA.maximum)?0:this.PFOA.maximum)*(100-parseFloat((this.PFOA.filtering).replace("%", " ")))/100
              this.PFOA.Filtering=a.toString()+" - "+b.toString()  
            
            }

            if(event.srcElement.name=='PFOS_minimum' ||event.srcElement.name=='PFOS_maximum'){
              let a=(isNaN(this.PFOS.minimum)?0:this.PFOS.minimum)*(100-parseFloat((this.PFOS.filtering).replace("%", " ")))/100
            let b=(isNaN(this.PFOS.maximum)?0:this.PFOS.maximum)*(100-parseFloat((this.PFOS.filtering).replace("%", " ")))/100
              this.PFOS.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='PFNA_minimum' ||event.srcElement.name=='PFNA_maximum'){
              let a=(isNaN(this.PFNA.minimum)?0:this.PFNA.minimum)*(100-parseFloat((this.PFNA.filtering).replace("%", " ")))/100
            let b=(isNaN(this.PFNA.maximum)?0:this.PFNA.maximum)*(100-parseFloat((this.PFNA.filtering).replace("%", " ")))/100
              this.PFNA.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='Ammonia_minimum' ||event.srcElement.name=='Ammonia_maximum'){
              let a=(isNaN(this.Ammonia.minimum)?0:this.Ammonia.minimum)*(100-parseFloat((this.Ammonia.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Ammonia.maximum)?0:this.Ammonia.maximum)*(100-parseFloat((this.Ammonia.filtering).replace("%", " ")))/100
              this.Ammonia.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='Asbestos_minimum' ||event.srcElement.name=='Asbestos_maximum'){
              let a=(isNaN(this.Asbestos.minimum)?0:this.Asbestos.minimum)*(100-parseFloat((this.Asbestos.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Asbestos.maximum)?0:this.Asbestos.maximum)*(100-parseFloat((this.Asbestos.filtering).replace("%", " ")))/100
              this.Asbestos.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='Perchlorate_minimum' ||event.srcElement.name=='Perchlorate_maximum'){
              let a=(isNaN(this.Perchlorate.minimum)?0:this.Perchlorate.minimum)*(100-parseFloat((this.Perchlorate.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Perchlorate.maximum)?0:this.Perchlorate.maximum)*(100-parseFloat((this.Perchlorate.filtering).replace("%", " ")))/100
              this.Perchlorate.Filtering=a.toString()+" - "+b.toString()
            }

            if(event.srcElement.name=='Polonium_minimum' ||event.srcElement.name=='Polonium_maximum'){
              let a=(isNaN(this.Polonium.minimum)?0:this.Polonium.minimum)*(100-parseFloat((this.Polonium.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Polonium.maximum)?0:this.Polonium.maximum)*(100-parseFloat((this.Polonium.filtering).replace("%", " ")))/100
              this.Polonium.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='Radium_minimum' ||event.srcElement.name=='Radium_maximum'){
              let a=(isNaN(this.Radium.minimum)?0:this.Radium.minimum)*(100-parseFloat((this.Radium.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Radium.maximum)?0:this.Radium.maximum)*(100-parseFloat((this.Radium.filtering).replace("%", " ")))/100
              this.Radium.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='Silver_minimum' ||event.srcElement.name=='Silver_maximum'){
              let a=(isNaN(this.Silver.minimum)?0:this.Silver.minimum)*(100-parseFloat((this.Silver.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Silver.maximum)?0:this.Silver.maximum)*(100-parseFloat((this.Silver.filtering).replace("%", " ")))/100
              this.Silver.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='Sulfate_minimum' ||event.srcElement.name=='Sulfate_maximum'){
              let a=(isNaN(this.Sulfate.minimum)?0:this.Sulfate.minimum)*(100-parseFloat((this.Sulfate.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Sulfate.maximum)?0:this.Sulfate.maximum)*(100-parseFloat((this.Sulfate.filtering).replace("%", " ")))/100
              this.Sulfate.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='Uranium_minimum' ||event.srcElement.name=='Uranium_maximum'){
              let a=(isNaN(this.Uranium.minimum)?0:this.Uranium.minimum)*(100-parseFloat((this.Uranium.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Uranium.maximum)?0:this.Uranium.maximum)*(100-parseFloat((this.Uranium.filtering).replace("%", " ")))/100
              this.Uranium.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='Atenolol_minimum' ||event.srcElement.name=='Atenolol_maximum'){
              let a=(isNaN(this.Atenolol.minimum)?0:this.Atenolol.minimum)*(100-parseFloat((this.Atenolol.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Atenolol.maximum)?0:this.Atenolol.maximum)*(100-parseFloat((this.Atenolol.filtering).replace("%", " ")))/100
              this.Atenolol.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='Carbamazepine_minimum' ||event.srcElement.name=='Carbamazepine_maximum'){
              let a=(isNaN(this.Carbamazepine.minimum)?0:this.Carbamazepine.minimum)*(100-parseFloat((this.Carbamazepine.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Carbamazepine.maximum)?0:this.Carbamazepine.maximum)*(100-parseFloat((this.Carbamazepine.filtering).replace("%", " ")))/100
              this.Carbamazepine.Filtering=a.toString()+" - "+b.toString()
            }

            if(event.srcElement.name=='Estrone_minimum' ||event.srcElement.name=='Estrone_maximum'){
              let a=(isNaN(this.Estrone.minimum)?0:this.Estrone.minimum)*(100-parseFloat((this.Estrone.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Estrone.maximum)?0:this.Estrone.maximum)*(100-parseFloat((this.Estrone.filtering).replace("%", " ")))/100
              this.Estrone.Filtering=a.toString()+" - "+b.toString()
            }
            if(event.srcElement.name=='Meprobamat_minimum' ||event.srcElement.name=='Meprobamat_maximum'){
              let a=(isNaN(this.Meprobamat.minimum)?0:this.Meprobamat.minimum)*(100-parseFloat((this.Meprobamat.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Meprobamat.maximum)?0:this.Meprobamat.maximum)*(100-parseFloat((this.Meprobamat.filtering).replace("%", " ")))/100
              this.Meprobamat.Filtering=a.toString()+" - "+b.toString()
            }

            if(event.srcElement.name=='Trimethoprim_minimum' ||event.srcElement.name=='Trimethoprim_maximum'){
              let a=(isNaN(this.Trimethoprim.minimum)?0:this.Trimethoprim.minimum)*(100-parseFloat((this.Trimethoprim.filtering).replace("%", " ")))/100
            let b=(isNaN(this.Trimethoprim.maximum)?0:this.Trimethoprim.maximum)*(100-parseFloat((this.Trimethoprim.filtering).replace("%", " ")))/100
              this.Trimethoprim.Filtering=a.toString()+" - "+b.toString()
            }

    } 
   }
 

 alertfuncction(value){
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
  // return false;
  const Water_safety = this.http.post(this.url+"water_safety_datas",this.data_water_safety)
  const general = this.http.post(this.url+"general_datas",this.data_general);
  const pathogens = this.http.post(this.url+"pathogens_datas",this.data_pathogens);
  const chemical_parameter = this.http.post(this.url+"chemical_parameter_datas",this.data_chemical_parameter);
  const Minerals = this.http.post(this.url+"minerals_datas",this.data_minerals);
  const metals = this.http.post(this.url+"metals_datas",this.data_metals);
  const Chlorine_bi_products = this.http.post(this.url+"chlorine_bi_products_datas",this.data_Chlorine_bi_products);
  const HAAs = this.http.post(this.url+"HAAs_datas",this.data_HAAs);
  const Pesticides = this.http.post(this.url+"pesticides_datas",this.data_Pesticides);
  const Herbicides=this.http.post(this.url+"herbicides_datas",this.data_Herbicides)
  const Perfluorinated_chemicals_ = this.http.post(this.url+"perfluorinated_chemicals_datas",this.data_other);
  const other = this.http.post(this.url+"other_datas",this.data_Perfluorinated_chemicals);
  const Pharmaceuticals = this.http.post(this.url+"pharmaceuticals_datas",this.data_Pharmaceuticals);

  const requestArray = [];

  requestArray.push(Water_safety,  
    general,pathogens,chemical_parameter,Minerals,metals,Chlorine_bi_products,HAAs,Pesticides,Herbicides,Perfluorinated_chemicals_,other,Pharmaceuticals
    );

  forkJoin(requestArray).subscribe(results => {
    // //console.log("here",results);
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
    alert("Insert successfully")
  });
}

Water_safety(){ 

  // //console.log("this.basic_details_id;",this.basic_details_id)
  this.Total_Chlorine['basic_details_id']=this.basic_details_id;
  this.Free_Chlorine['basic_details_id']=this.basic_details_id;
  this.Chloramine['basic_details_id']=this.basic_details_id;

  this.Total_Chlorine['Substance']="Total Chlorine";
  this.Free_Chlorine['Substance']="Free Chlorine";
  this.Chloramine['Substance']="Chloramine";

  

  this.Total_Chlorine['id']=localStorage.getItem('admin');
  this.Free_Chlorine['id']=localStorage.getItem('admin');
  this.Chloramine['id']=localStorage.getItem('admin');

 
  this.data_water_safety.push(this.Free_Chlorine)
  this.data_water_safety.push(this.Total_Chlorine)
  this.data_water_safety.push(this.Chloramine)
// //console.log("data_water_safety",this.data_water_safety)

 }


 general(){


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



  // Substance


  
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



  this.Temperature['id']=localStorage.getItem('admin');
  this.Hardness['id']=localStorage.getItem('admin');
  this.Hardness_f['id']=localStorage.getItem('admin');
  this.pH['id']=localStorage.getItem('admin');
  this.Turbidity['id']=localStorage.getItem('admin');
  this.Conductivity['id']=localStorage.getItem('admin'); 
   this.Color['id']=localStorage.getItem('admin');
  this.Odor['id']=localStorage.getItem('admin');
  this.TDS['id']=localStorage.getItem('admin'); 
   this.Microplastics['id']=localStorage.getItem('admin');
  this.LSI['id']=localStorage.getItem('admin');
  this.Bicarbonate['id']=localStorage.getItem('admin');
  this.Alkalinity['id']=localStorage.getItem('admin');
  this.Oxidation['id']=localStorage.getItem('admin');


  this.data_general.push(this.Temperature,this.Hardness,this.Hardness_f,this.pH,this.Turbidity,this.Conductivity,this.Color,this.Odor,this.TDS,this.Microplastics,this.LSI,this.Bicarbonate,this.Alkalinity,this.Oxidation)
  // //console.log("...........................data_general..........",this.data_general)

  // //console.log("data_general",this.data_general)
 }

 pathogens(){
  

  this.eColi['basic_details_id']=this.basic_details_id;
  this.Clostridium['basic_details_id']=this.basic_details_id;
  this.Bacterias['basic_details_id']=this.basic_details_id;
  this.Enterococcus['basic_details_id']=this.basic_details_id;
  this.Microbial_Cysts['basic_details_id']=this.basic_details_id;

  // Substance 

  
  this.Clostridium['Substance']="Clostridium";  
  this.Bacterias['Substance']="Bacterias";
  this.eColi['Substance']="eColi";
  this.Enterococcus['Substance']="Enterococcus";
  this.Microbial_Cysts['Substance']="Microbial Cysts";

  // localStorage.getItem('admin')

  
  this.eColi['id']=localStorage.getItem('admin');
  this.Bacterias['id']=localStorage.getItem('admin');
  this.Clostridium['id']=localStorage.getItem('admin');
  this.Enterococcus['id']=localStorage.getItem('admin');
  this.Microbial_Cysts['id']=localStorage.getItem('admin');
  // //console.log("data_pathogens.................................",this.data_pathogens)
  this.data_pathogens.push(this.Clostridium,this.Bacterias,this.eColi,this.Enterococcus,this.Microbial_Cysts)
// //console.log("this.data_pathogens",this.data_pathogens)
// return false;

 }


 chemical_parameter(){

  // Substance
  this.Cyanide_total['basic_details_id']=this.basic_details_id;
  this.Fluoride['basic_details_id']=this.basic_details_id;
  this.Mercury['basic_details_id']=this.basic_details_id;
  this.Nitrites['basic_details_id']=this.basic_details_id;
  this.Nitrates['basic_details_id']=this.basic_details_id;


  this.Cyanide_total['Substance']="Cyanide total";
  this.Fluoride['Substance']="Fluoride";
  this.Mercury['Substance']="Mercury";
  this.Nitrites['Substance']="Nitrites";
  this.Nitrates['Substance']="Nitrates";
  
  // localStorage.getItem('admin')


  this.Cyanide_total['id']=localStorage.getItem('admin');
  this.Fluoride['id']=localStorage.getItem('admin');
  this.Mercury['id']=localStorage.getItem('admin');
  this.Nitrites['id']=localStorage.getItem('admin');
  this.Nitrates['id']=localStorage.getItem('admin');

  this.data_chemical_parameter.push(this.Cyanide_total,this.Fluoride,this.Mercury,this.Nitrites,this.Nitrates)
  //console.log("data_chemical_parameter",this.data_chemical_parameter)


 }

 Minerals(){ 

  this.Magnesium['basic_details_id']=this.basic_details_id;
  this.Calcium['basic_details_id']=this.basic_details_id;
  this.Potassium['basic_details_id']=this.basic_details_id;
  this.Chloride['basic_details_id']=this.basic_details_id;
  // Substance



  this.Magnesium['Substance']="Magnesium";
  this.Calcium['Substance']="Calcium";
  this.Potassium['Substance']="Potassium";
  this.Chloride['Substance']="Chloride";


  // localStorage.getItem('admin')

  this.Magnesium['id']=localStorage.getItem('admin');
  this.Calcium['id']=localStorage.getItem('admin');
  this.Potassium['id']=localStorage.getItem('admin');
  this.Chloride['id']=localStorage.getItem('admin');

  this.data_minerals.push(this.Magnesium,this.Calcium,this.Potassium,this.Chloride)
  // this.alertfuncction(Minerals)
  console.log("data_minerals.............",this.data_minerals)


 }

 metals(){

  this.Aluminium['basic_details_id']=this.basic_details_id;
  this.Antimony['basic_details_id']=this.basic_details_id;
  this.Arsenic['basic_details_id']=this.basic_details_id;
  this.Barium['basic_details_id']=this.basic_details_id;
  this.Cadmium['basic_details_id']=this.basic_details_id;
  this.Chromium['basic_details_id']=this.basic_details_id;
  this.Copper['basic_details_id']=this.basic_details_id;
  this.Lead['basic_details_id']=this.basic_details_id;
  this.Manganese['basic_details_id']=this.basic_details_id;
  this.Iron['basic_details_id']=this.basic_details_id;
  this.Nickel['basic_details_id']=this.basic_details_id;
  this.Selenium['basic_details_id']=this.basic_details_id;
  this.Sodium['basic_details_id']=this.basic_details_id;
  this.Zinc['basic_details_id']=this.basic_details_id;

// Substance

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

//localStorage.getItem('admin')
console.log("this.Manganese.......................",this.Manganese)
// return false;
this.Aluminium['id']=localStorage.getItem('admin');
this.Antimony['id']=localStorage.getItem('admin');
this.Arsenic['id']=localStorage.getItem('admin');
this.Barium['id']=localStorage.getItem('admin');
this.Cadmium['id']=localStorage.getItem('admin');
this.Chromium['id']=localStorage.getItem('admin');
this.Copper['id']=localStorage.getItem('admin');
this.Iron['id']=localStorage.getItem('admin');
this.Lead['id']=localStorage.getItem('admin');
this.Manganese['id']=localStorage.getItem('admin');
this.Nickel['id']=localStorage.getItem('admin');
this.Selenium['id']=localStorage.getItem('admin');
this.Sodium['id']=localStorage.getItem('admin');
this.Zinc['id']=localStorage.getItem('admin');


  this.data_metals.push(this.Aluminium,this.Antimony,this.Arsenic,this.Barium,this.Cadmium,this.Chromium,this.Copper,this.Iron,this.Lead,this.Manganese,this.Nickel,this.Selenium,this.Sodium,this.Zinc)
  console.log("data_metals.................",this.data_metals)


 }




 Chlorine_bi_products(){
  


  this.Total_Trichloroethylene['basic_details_id']=this.basic_details_id; 
  this.Trichloroethylene['basic_details_id']=this.basic_details_id;
  this.Tetrachloroethylene['basic_details_id']=this.basic_details_id;
  this.Total_Trihalomethanes['basic_details_id']=this.basic_details_id;
  this.Dichloromethane['basic_details_id']=this.basic_details_id;
  // Substance


  this.Total_Trichloroethylene['Substance']="Total Trichloroethylene"; 
  this.Trichloroethylene['Substance']="Trichloroethylene";
  this.Tetrachloroethylene['Substance']="Tetrachloroethylene";
  this.Total_Trihalomethanes['Substance']="Total Trihalomethanes";
  this.Dichloromethane['Substance']="Dichloromethane";


  // localStorage.getItem('admin')


  
  this.Total_Trichloroethylene['id']=localStorage.getItem('admin'); 
  this.Trichloroethylene['id']=localStorage.getItem('admin');
  this.Tetrachloroethylene['id']=localStorage.getItem('admin');
  this.Total_Trihalomethanes['id']=localStorage.getItem('admin');
  this.Dichloromethane['id']=localStorage.getItem('admin');

  this.data_Chlorine_bi_products.push(this.Total_Trichloroethylene,this.Trichloroethylene,this.Tetrachloroethylene,this.Total_Trihalomethanes,this.Dichloromethane)
  // //console.log("data_Chlorine_bi_products",this.data_Chlorine_bi_products)

 }

 HAAs(){


  this.Total_haloacetic_acids['basic_details_id']=this.basic_details_id; 

  
// Substance

this.Total_haloacetic_acids['Substance']="Total haloacetic acids";
this.Total_haloacetic_acids['id']=localStorage.getItem('admin'); 


  this.data_HAAs.push(this.Total_haloacetic_acids)
  // //console.log("data_HAAs",this.data_HAAs)

 }


 Pesticides(){


  this.Chlordane['basic_details_id']=this.basic_details_id; 
  this.Heptachlor['basic_details_id']=this.basic_details_id;
  this.Lindane['basic_details_id']=this.basic_details_id;
  this.Total_pesticides['basic_details_id']=this.basic_details_id;

  // Substance

  
  this.Chlordane['Substance']="Chlordane"; 
  this.Heptachlor['Substance']="Heptachlor";
  this.Lindane['Substance']="Lindane";
  this.Total_pesticides['Substance']="Total pesticides";

  // localStorage.getItem('admin')


  this.Chlordane['id']=localStorage.getItem('admin'); 
  this.Heptachlor['id']=localStorage.getItem('admin');
  this.Lindane['id']=localStorage.getItem('admin');
  this.Total_pesticides['id']=localStorage.getItem('admin');

  this.data_Pesticides.push(this.Chlordane,this.Heptachlor,this.Lindane,this.Total_pesticides)
  //console.log("data_Pesticides",this.data_Pesticides)


 }

 Herbicides(){


  this.D_2_4['basic_details_id']=this.basic_details_id; 
  this.Atrazine['basic_details_id']=this.basic_details_id;
  this.Total_Herbicides['basic_details_id']=this.basic_details_id;

//  Substance

  this.D_2_4['Substance']="2,4 -D"; 
  this.Atrazine['Substance']="Atrazine";
  this.Total_Herbicides['Substance']="Total Herbicides";

  // localStorage.getItem('admin')

  this.D_2_4['id']=localStorage.getItem('admin'); 
  this.Atrazine['id']=localStorage.getItem('admin');
  this.Total_Herbicides['id']=localStorage.getItem('admin');

  this.data_Herbicides.push(this.D_2_4,this.Atrazine,this.Total_Herbicides)
  // //console.log("data_Herbicides",this.data_Herbicides)


 }



Perfluorinated_chemicals_(){

  this.PFOA['basic_details_id']=this.basic_details_id; 
  this.PFOS['basic_details_id']=this.basic_details_id;
  this.PFNA['basic_details_id']=this.basic_details_id;
 
  // Substance


  this.PFOA['Substance']="PFOA"; 
  this.PFOS['Substance']="PFOS";
  this.PFNA['Substance']="PFNA";


//localStorage.getItem('admin')

this.PFOA['id']=localStorage.getItem('admin'); 
this.PFOS['id']=localStorage.getItem('admin');
this.PFNA['id']=localStorage.getItem('admin');
this.data_other.push(this.PFOA,this.PFOS,this.PFNA)

//console.log("data_other",this.data_other)


 }




 

 other(){  
  
    this.Ammonia['basic_details_id']=this.basic_details_id; 
    this.Asbestos['basic_details_id']=this.basic_details_id;
    this.Perchlorate['basic_details_id']=this.basic_details_id;
    this.Polonium['basic_details_id']=this.basic_details_id;
    this.Radium['basic_details_id']=this.basic_details_id;
    this.Silver['basic_details_id']=this.basic_details_id;
    this.Sulfate['basic_details_id']=this.basic_details_id;
    this.Uranium['basic_details_id']=this.basic_details_id;

    // Substance
  
    this.Ammonia['Substance']="Ammonia"; 
    this.Asbestos['Substance']="Asbestos";
    this.Perchlorate['Substance']="Perchlorate";
    this.Polonium['Substance']="Polonium";
    this.Radium['Substance']="Radium";
    this.Silver['Substance']="Silver";
    this.Sulfate['Substance']="Sulfate";
    this.Uranium['Substance']="Uranium";

    // localStorage.getItem('admin')

    this.Ammonia['id']=localStorage.getItem('admin'); 
    this.Asbestos['id']=localStorage.getItem('admin');
    this.Perchlorate['id']=localStorage.getItem('admin');
    this.Polonium['id']=localStorage.getItem('admin');
    this.Radium['id']=localStorage.getItem('admin');
    this.Silver['id']=localStorage.getItem('admin');
    this.Sulfate['id']=localStorage.getItem('admin');
    this.Uranium['id']=localStorage.getItem('admin');

    this.data_Perfluorinated_chemicals.push(this.Ammonia,this.Asbestos,this.Perchlorate,this.Polonium,this.Radium,this.Silver,this.Sulfate,this.Uranium)

// //console.log("data_Perfluorinated_chemicals",this.data_Perfluorinated_chemicals)
  
   }

   Pharmaceuticals(){

    this.Atenolol['basic_details_id']=this.basic_details_id; 
    this.Carbamazepine['basic_details_id']=this.basic_details_id;
    this.Estrone['basic_details_id']=this.basic_details_id;
    this.Meprobamat['basic_details_id']=this.basic_details_id;
    this.Trimethoprim['basic_details_id']=this.basic_details_id;
   
  //  Substance
  
  this.Atenolol['Substance']="Atenolol"; 
  this.Carbamazepine['Substance']="Carbamazepine";
  this.Estrone['Substance']="Estrone";
  this.Meprobamat['Substance']="Meprobamat";
  this.Trimethoprim['Substance']="Trimethoprim";

    // localStorage.getItem('admin')

    this.Atenolol['id']=localStorage.getItem('admin'); 
    this.Carbamazepine['id']=localStorage.getItem('admin');
    this.Estrone['id']=localStorage.getItem('admin');
    this.Meprobamat['id']=localStorage.getItem('admin');
    this.Trimethoprim['id']=localStorage.getItem('admin');
    this.data_Pharmaceuticals.push(this.Atenolol,this.Carbamazepine,this.Estrone,this.Meprobamat,this.Trimethoprim) 
    // //console.log("data_Pharmaceuticals",this.data_Pharmaceuticals)
  
   }



    display(){ 

      this._apiservice.postDataid(this.url+'select_details',this.basic_details_id).subscribe(res=>{     
        let response=res;
        this.averageDataRange=res['averageDataRange']
        // //console.log("response_1233",this.averageDataRange)

        })
            
      
 
      this._apiservice.sendData(this.url+"change_value_fetch",this.data).subscribe(res=>{
      // //console.log("res water safety ",res)
      // //console.log("res...............1",res)

      this.Free_Chlorine.update_id=res[0]._id;
      this.Free_Chlorine.Unit=res[0].Unit;
      this.Free_Chlorine.Priority=res[0].Priority;
      this.Free_Chlorine.filtering=res[0].Filtering;
      this.Free_Chlorine.Max=res[0].Max;
      this.Free_Chlorine.Recommended=res[0].Recommended;

      this.Total_Chlorine.update_id=res[1]._id;
      this.Total_Chlorine.Unit=res[1].Unit;
      this.Total_Chlorine.Priority=res[1].Priority;
      this.Total_Chlorine.filtering=res[1].Filtering;
      this.Total_Chlorine.Max=res[1].Max;
      this.Total_Chlorine.Recommended=res[1].Recommended;

      this.Chloramine.update_id=res[2]._id;
      this.Chloramine.Unit=res[2].Unit;
      this.Chloramine.Priority=res[2].Priority;
      this.Chloramine.filtering=res[2].Filtering;
      this.Chloramine.Max=res[2].Max;
      this.Chloramine.Recommended=res[2].Recommended;

      })
  
      //end watersafety
      //start general
  
      this._apiservice.sendData(this.url+"change_value_fetch_general",this.data).subscribe(res=>{  

        // //console.log("...........................general..........",res)
      this.Temperature.update_id=res[0]._id;
      this.Temperature.Unit=res[0].Unit;
      this.Temperature.Priority=res[0].Priority;
      this.Temperature.filtering=res[0].Filtering;
      this.Temperature.Max=res[0].Max;
      this.Temperature.Recommended=res[0].Recommended;


      this.Hardness.update_id=res[1]._id;
      this.Hardness.Unit=res[1].Unit;
      this.Hardness.Priority=res[1].Priority;
      this.Hardness.filtering=res[1].Filtering;
      this.Hardness.Max=res[1].Max;
      this.Hardness.Recommended=res[1].Recommended;


      this.Hardness_f.update_id=res[2]._id;
      this.Hardness_f.Unit=res[2].Unit;
      this.Hardness_f.Priority=res[2].Priority;
      this.Hardness_f.filtering=res[2].Filtering;
      this.Hardness_f.Max=res[2].Max;
      this.Hardness_f.Recommended=res[2].Recommended;


      this.pH.update_id=res[3]._id;
      this.pH.Unit=res[3].Unit;
      this.pH.Priority=res[3].Priority;
      this.pH.filtering=res[3].Filtering;
      this.pH.Max=res[3].Max;
      this.pH.Recommended=res[3].Recommended;

      this.Turbidity.update_id=res[4]._id;
      this.Turbidity.Unit=res[4].Unit;
      this.Turbidity.Priority=res[4].Priority;
      this.Turbidity.filtering=res[4].Filtering;
      this.Turbidity.Max=res[4].Max;
      this.Turbidity.Recommended=res[4].Recommended;
      
      this.Conductivity.update_id=res[5]._id;
      this.Conductivity.Unit=res[5].Unit;
      this.Conductivity.Priority=res[5].Priority;
      this.Conductivity.filtering=res[5].Filtering;
      this.Conductivity.Max=res[5].Max;
      this.Conductivity.Recommended=res[5].Recommended;

      this.Color.update_id=res[6]._id;
      this.Color.Unit=res[6].Unit;
      this.Color.Priority=res[6].Priority;
      this.Color.filtering=res[6].Filtering;
      this.Color.Max=res[6].Max;
      this.Color.Recommended=res[6].Recommended;
      
      this.Odor.update_id=res[7]._id;
      this.Odor.Unit=res[7].Unit;
      this.Odor.Priority=res[7].Priority;
      this.Odor.filtering=res[7].Filtering;
      this.Odor.Max=res[7].Max;
      this.Odor.Recommended=res[7].Recommended;

      this.TDS.update_id=res[8]._id;
      this.TDS.Unit=res[8].Unit;
      this.TDS.Priority=res[8].Priority;
      this.TDS.filtering=res[8].Filtering;
      this.TDS.Max=res[8].Max;
      this.TDS.Recommended=res[8].Recommended;

      this.Microplastics.update_id=res[9]._id;
      this.Microplastics.Unit=res[9].Unit;
      this.Microplastics.Priority=res[9].Priority;
      this.Microplastics.filtering=res[9].Filtering;
      this.Microplastics.Max=res[9].Max;
      this.Microplastics.Recommended=res[9].Recommended;

      this.LSI.update_id=res[10]._id;
      this.LSI.Unit=res[10].Unit;
      this.LSI.Priority=res[10].Priority;
      this.LSI.filtering=res[10].Filtering;
      this.LSI.Max=res[10].Max;
      this.LSI.Recommended=res[10].Recommended;
        
      this.Bicarbonate.update_id=res[11]._id;
      this.Bicarbonate.Unit=res[11].Unit;
      this.Bicarbonate.Priority=res[11].Priority;
      this.Bicarbonate.filtering=res[11].Filtering;
      this.Bicarbonate.Max=res[11].Max;
      this.Bicarbonate.Recommended=res[11].Recommended;
  

      this.Alkalinity.update_id=res[12]._id;
      this.Alkalinity.Unit=res[12].Unit;
      this.Alkalinity.Priority=res[12].Priority;
      this.Alkalinity.filtering=res[12].Filtering;
      this.Alkalinity.Max=res[12].Max;
      this.Alkalinity.Recommended=res[12].Recommended;


      this.Oxidation.update_id=res[13]._id;
      this.Oxidation.Unit=res[13].Unit;
      this.Oxidation.Priority=res[13].Priority;
      this.Oxidation.filtering=res[13].Filtering;
      this.Oxidation.Max=res[13].Max;
      this.Oxidation.Recommended=res[13].Recommended;

    
        })
  
  
  //end general
  
  //start pathogens
  
        this._apiservice.sendData(this.url+"change_value_fetch_pathogens",this.data).subscribe(res=>{
          // //console.log("change_value_fetch_pathogens",res)    
          this.Clostridium.update_id=res[0]._id;
          this.Clostridium.Unit=res[0].Unit;
          this.Clostridium.Priority=res[0].Priority;
          this.Clostridium.filtering=res[0].Filtering;
          this.Clostridium.Max=res[0].Max;
          this.Clostridium.Recommended=res[0].Recommended;

          this.Bacterias.update_id=res[1]._id;
          this.Bacterias.Unit=res[1].Unit;
          this.Bacterias.Priority=res[1].Priority;
          this.Bacterias.filtering=res[1].Filtering;
          this.Bacterias.Max=res[1].Max;
          this.Bacterias.Recommended=res[1].Recommended;

          this.eColi.update_id=res[2]._id;
          this.eColi.Unit=res[2].Unit;
          this.eColi.Priority=res[2].Priority;
          this.eColi.filtering=res[2].Filtering;
          this.eColi.Max=res[2].Max;
          this.eColi.Recommended=res[2].Recommended;
    
          this.Enterococcus.update_id=res[3]._id;
          this.Enterococcus.Unit=res[3].Unit;
          this.Enterococcus.Priority=res[3].Priority;
          this.Enterococcus.filtering=res[3].Filtering;
          this.Enterococcus.Max=res[3].Max;
          this.Enterococcus.Recommended=res[3].Recommended;
    
          this.Microbial_Cysts.update_id=res[4]._id;
          this.Microbial_Cysts.Unit=res[4].Unit;
          this.Microbial_Cysts.Priority=res[4].Priority;
          this.Microbial_Cysts.filtering=res[4].Filtering;
          this.Microbial_Cysts.Max=res[4].Max;
          this.Microbial_Cysts.Recommended=res[4].Recommended;

  
          })
    //end pathogens
  
    //start chemical parameter
    this._apiservice.sendData(this.url+"change_value_fetch_chemical_parameter",this.data).subscribe(res=>{
      // //console.log("change_value_fetch_chemical_parameter",res);  
      this.Cyanide_total.update_id=res[0]._id;
      this.Cyanide_total.Unit=res[0].Unit;
      this.Cyanide_total.Priority=res[0].Priority;
      this.Cyanide_total.filtering=res[0].Filtering;
      this.Cyanide_total.Max=res[0].Max;
      this.Cyanide_total.Recommended=res[0].Recommended;

      this.Fluoride.update_id=res[1]._id;
      this.Fluoride.Unit=res[1].Unit;
      this.Fluoride.Priority=res[1].Priority;
      this.Fluoride.filtering=res[1].Filtering;
      this.Fluoride.Max=res[1].Max;
      this.Fluoride.Recommended=res[1].Recommended;

      this.Mercury.update_id=res[2]._id;
      this.Mercury.Unit=res[2].Unit;
      this.Mercury.Priority=res[2].Priority;
      this.Mercury.filtering=res[2].Filtering;
      this.Mercury.Max=res[2].Max;
      this.Mercury.Recommended=res[2].Recommended;

      this.Nitrites.update_id=res[3]._id;
      this.Nitrites.Unit=res[3].Unit;
      this.Nitrites.Priority=res[3].Priority;
      this.Nitrites.filtering=res[3].Filtering;
      this.Nitrites.Max=res[3].Max;
      this.Nitrites.Recommended=res[3].Recommended;

      this.Nitrates.update_id=res[4]._id;
      this.Nitrates.Unit=res[4].Unit;
      this.Nitrates.Priority=res[4].Priority;
      this.Nitrates.filtering=res[4].Filtering;
      this.Nitrates.Max=res[4].Max;
      this.Nitrates.Recommended=res[4].Recommended;
  

      })
      //end chemical parameter
  
  
      // start Minerals
      this._apiservice.sendData(this.url+"change_value_fetch_minerals",this.data).subscribe(res=>{
        // //console.log("res",res);

        this.Magnesium.update_id=res[0]._id;
        this.Magnesium.Unit=res[0].Unit;
        this.Magnesium.Priority=res[0].Priority;
        this.Magnesium.filtering=res[0].Filtering;
        this.Magnesium.Max=res[0].Max;
        this.Magnesium.Recommended=res[0].Recommended;



        this.Calcium.update_id=res[1]._id;
        this.Calcium.Unit=res[1].Unit;
        this.Calcium.Priority=res[1].Priority;
        this.Calcium.filtering=res[1].Filtering;
        this.Calcium.Max=res[1].Max;
        this.Calcium.Recommended=res[1].Recommended;
  

        this.Potassium.update_id=res[2]._id;
        this.Potassium.Unit=res[2].Unit;
        this.Potassium.Priority=res[2].Priority;
        this.Potassium.filtering=res[2].Filtering;
        this.Potassium.Max=res[2].Max;
        this.Potassium.Recommended=res[2].Recommended;


        this.Chloride.update_id=res[3]._id;
        this.Chloride.Unit=res[3].Unit;
        this.Chloride.Priority=res[3].Priority;
        this.Chloride.filtering=res[3].Filtering;
        this.Chloride.Max=res[3].Max;
        this.Chloride.Recommended=res[3].Recommended;   
         
        })
  
        //end Minerals
  
  //start metals
  this._apiservice.sendData(this.url+"change_value_fetch_metals",this.data).subscribe(res=>{

    this.Aluminium.update_id=res[0]._id;
    this.Aluminium.Substance=res[0].Substance
    this.Aluminium.Unit=res[0].Unit;
    this.Aluminium.Priority=res[0].Priority;
    this.Aluminium.filtering=res[0].Filtering;
    this.Aluminium.Max=res[0].Max;
    this.Aluminium.Recommended=res[0].Recommended;
    
    this.Antimony.update_id=res[1]._id;
    this.Antimony.Substance=res[1].Substance
    this.Antimony.Unit=res[1].Unit;
    this.Antimony.Priority=res[1].Priority;
    this.Antimony.filtering=res[1].Filtering;
    this.Antimony.Max=res[1].Max;
    this.Antimony.Recommended=res[1].Recommended;

    this.Arsenic.update_id=res[2]._id;
    this.Arsenic.Substance=res[2].Substance
    this.Arsenic.Unit=res[2].Unit;
    this.Arsenic.Priority=res[2].Priority;
    this.Arsenic.filtering=res[2].Filtering;
    this.Arsenic.Max=res[2].Max;
    this.Arsenic.Recommended=res[2].Recommended;

    this.Barium.update_id=res[3]._id;
    this.Barium.Substance=res[3].Substance
    this.Barium.Unit=res[3].Unit;
    this.Barium.Priority=res[3].Priority;
    this.Barium.filtering=res[3].Filtering;
    this.Barium.Max=res[3].Max;
    this.Barium.Recommended=res[3].Recommended;

    this.Cadmium.update_id=res[4]._id;
    this.Cadmium.Substance=res[4].Substance
    this.Cadmium.Unit=res[4].Unit;
    this.Cadmium.Priority=res[4].Priority;
    this.Cadmium.filtering=res[4].Filtering;
    this.Cadmium.Max=res[4].Max;
    this.Cadmium.Recommended=res[4].Recommended;

    this.Chromium.update_id=res[5]._id;
    this.Chromium.Substance=res[5].Substance
    this.Chromium.Unit=res[5].Unit;
    this.Chromium.Priority=res[5].Priority;
    this.Chromium.filtering=res[5].Filtering;
    this.Chromium.Max=res[5].Max;
    this.Chromium.Recommended=res[5].Recommended;

    this.Copper.update_id=res[6]._id;
    this.Copper.Substance=res[6].Substance
    this.Copper.Unit=res[6].Unit;
    this.Copper.Priority=res[6].Priority;
    this.Copper.filtering=res[6].Filtering;
    this.Copper.Max=res[6].Max;
    this.Copper.Recommended=res[6].Recommended;


    this.Iron.update_id=res[7]._id;
    this.Iron.Substance=res[7].Substance
    this.Iron.Unit=res[7].Unit;
    this.Iron.Priority=res[7].Priority;
    this.Iron.filtering=res[7].Filtering;
    this.Iron.Max=res[7].Max;
    this.Iron.Recommended=res[7].Recommended;

    this.Lead.update_id=res[8]._id;
    this.Lead.Substance=res[8].Substance
    this.Lead.Unit=res[8].Unit;
    this.Lead.Priority=res[8].Priority;
    this.Lead.filtering=res[8].Filtering;
    this.Lead.Max=res[8].Max;
    this.Lead.Recommended=res[8].Recommended;

    this.Manganese.update_id=res[9]._id;
    this.Manganese.Substance=res[9].Substance
    this.Manganese.Unit=res[9].Unit;
    this.Manganese.Priority=res[9].Priority;
    this.Manganese.filtering=res[9].Filtering;
    this.Manganese.Max=res[9].Max;
    this.Manganese.Recommended=res[9].Recommended;
    

    this.Nickel.update_id=res[10]._id;
    this.Nickel.Substance=res[10].Substance
    this.Nickel.Unit=res[10].Unit;
    this.Nickel.Priority=res[10].Priority;
    this.Nickel.filtering=res[10].Filtering;
    this.Nickel.Max=res[10].Max;
    this.Nickel.Recommended=res[10].Recommended;

    this.Selenium.update_id=res[11]._id;
    this.Selenium.Substance=res[11].Substance
    this.Selenium.Unit=res[11].Unit;
    this.Selenium.Priority=res[11].Priority;
    this.Selenium.filtering=res[11].Filtering;
    this.Selenium.Max=res[11].Max;
    this.Selenium.Recommended=res[11].Recommended;

    this.Sodium.update_id=res[12]._id;
    this.Sodium.Substance=res[12].Substance
    this.Sodium.Unit=res[12].Unit;
    this.Sodium.Priority=res[12].Priority;
    this.Sodium.filtering=res[12].Filtering;
    this.Sodium.Max=res[12].Max;
    this.Sodium.Recommended=res[12].Recommended;
      
    this.Zinc.update_id=res[13]._id;
    this.Zinc.Substance=res[13].Substance
    this.Zinc.Unit=res[13].Unit;
    this.Zinc.Priority=res[13].Priority;
    this.Zinc.filtering=res[13].Filtering;
    this.Zinc.Max=res[13].Max;
    this.Zinc.Recommended=res[13].Recommended;

    console.log("res.....................",res)




    
 
    })

    //end metals

  
  
  // start Chlorine_bi_products
  this._apiservice.sendData(this.url+"change_value_fetch_Chlorine_bi_products",this.data).subscribe(res=>{

    // //console.log("res Total_Trihalomethanes",res)

   this.Total_Trichloroethylene.update_id=res[0]._id;
    this.Total_Trichloroethylene.Unit=res[0].Unit;
    this.Total_Trichloroethylene.Priority=res[0].Priority;
    this.Total_Trichloroethylene.filtering=res[0].Filtering;
    this.Total_Trichloroethylene.Max=res[0].Max;
    this.Total_Trichloroethylene.Recommended=res[0].Recommended;

    this.Trichloroethylene.update_id=res[1]._id;
    this.Trichloroethylene.Unit=res[1].Unit;
    this.Trichloroethylene.Priority=res[1].Priority;
    this.Trichloroethylene.filtering=res[1].Filtering;
    this.Trichloroethylene.Max=res[1].Max;
    this.Trichloroethylene.Recommended=res[1].Recommended;
    
    this.Tetrachloroethylene.update_id=res[2]._id;
    this.Tetrachloroethylene.Unit=res[2].Unit;
    this.Tetrachloroethylene.Priority=res[2].Priority;
    this.Tetrachloroethylene.filtering=res[2].Filtering;
    this.Tetrachloroethylene.Max=res[2].Max;
    this.Tetrachloroethylene.Recommended=res[2].Recommended;

    this.Total_Trihalomethanes.update_id=res[3]._id;
    this.Total_Trihalomethanes.Unit=res[3].Unit;
    this.Total_Trihalomethanes.Priority=res[3].Priority;
    this.Total_Trihalomethanes.filtering=res[3].Filtering;
    this.Total_Trihalomethanes.Max=res[3].Max;
    this.Total_Trihalomethanes.Recommended=res[3].Recommended;

    this.Dichloromethane.update_id=res[4]._id;
    this.Dichloromethane.Unit=res[4].Unit;
    this.Dichloromethane.Priority=res[4].Priority;
    this.Dichloromethane.filtering=res[4].Filtering;
    this.Dichloromethane.Max=res[4].Max;
    this.Dichloromethane.Recommended=res[4].Recommended;   
     
    })
  // end Chlorine_bi_products
  
  //start HAAs
  
  this._apiservice.sendData(this.url+"change_value_fetch_HAAs",this.data).subscribe(res=>{

  this.Total_haloacetic_acids.update_id=res[0]._id;
  this.Total_haloacetic_acids.Unit=res[0].Unit;
  this.Total_haloacetic_acids.Priority=res[0].Priority;
  this.Total_haloacetic_acids.filtering=res[0].Filtering;
  this.Total_haloacetic_acids.Max=res[0].Max;
  this.Total_haloacetic_acids.Recommended=res[0].Recommended;
    })
  
  //end HAAs
  //start Pesticides
  this._apiservice.sendData(this.url+"change_value_fetch_Pesticides",this.data).subscribe(res=>{
    // //console.log("res",res)

    this.Chlordane.update_id=res[0]._id;
    this.Chlordane.Unit=res[0].Unit;
    this.Chlordane.Priority=res[0].Priority;
    this.Chlordane.filtering=res[0].Filtering;
    this.Chlordane.Max=res[0].Max;
    this.Chlordane.Recommended=res[0].Recommended;

    this.Heptachlor.update_id=res[1]._id;
    this.Heptachlor.Unit=res[1].Unit;
    this.Heptachlor.Priority=res[1].Priority;
    this.Heptachlor.filtering=res[1].Filtering;
    this.Heptachlor.Max=res[1].Max;
    this.Heptachlor.Recommended=res[1].Recommended;

    this.Lindane.update_id=res[2]._id;
    this.Lindane.Unit=res[2].Unit;
    this.Lindane.Priority=res[2].Priority;
    this.Lindane.filtering=res[2].Filtering;
    this.Lindane.Max=res[2].Max;
    this.Lindane.Recommended=res[2].Recommended;

    this.Total_pesticides.update_id=res[3]._id;
    this.Total_pesticides.Unit=res[3].Unit;
    this.Total_pesticides.Priority=res[3].Priority;
    this.Total_pesticides.filtering=res[3].Filtering;
    this.Total_pesticides.Max=res[3].Max;
    this.Total_pesticides.Recommended=res[3].Recommended;

    this.Total_pesticides.update_id=res[4]._id;
    this.Total_pesticides.Unit=res[4].Unit;
    this.Total_pesticides.Priority=res[4].Priority;
    this.Total_pesticides.filtering=res[4].Filtering;
    this.Total_pesticides.Max=res[4].Max;
    this.Total_pesticides.Recommended=res[4].Recommended;
    
       
      })
  
  //end Pesticides
  
  
  //satrt Herbicides
  this._apiservice.sendData(this.url+"change_value_fetch_Herbicides",this.data).subscribe(res=>{
    // //console.log("res",res)

    this.D_2_4.update_id=res[0]._id;
    this.D_2_4.Unit=res[0].Unit;
    this.D_2_4.Priority=res[0].Priority;
    this.D_2_4.filtering=res[0].Filtering;
    this.D_2_4.Max=res[0].Max;
    this.D_2_4.Recommended=res[0].Recommended;


    this.Atrazine.update_id=res[1]._id;
    this.Atrazine.Unit=res[1].Unit;
    this.Atrazine.Priority=res[1].Priority;
    this.Atrazine.filtering=res[1].Filtering;
    this.Atrazine.Max=res[1].Max;
    this.Atrazine.Recommended=res[1].Recommended;

    this.Total_Herbicides.update_id=res[2]._id;
    this.Total_Herbicides.Unit=res[2].Unit;
    this.Total_Herbicides.Priority=res[2].Priority;
    this.Total_Herbicides.filtering=res[2].Filtering;
    this.Total_Herbicides.Max=res[2].Max;
    this.Total_Herbicides.Recommended=res[2].Recommended;
      })
  //end Herbicides
  
  
  //satrt other
  this._apiservice.sendData(this.url+"change_value_fetch_other",this.data).subscribe(res=>{
    // //console.log("res",res)

 

    this.Ammonia.update_id=res[0]._id;
      this.Ammonia.Unit=res[0].Unit;
      this.Ammonia.Priority=res[0].Priority;
      this.Ammonia.filtering=res[0].Filtering;
      this.Ammonia.Max=res[0].Max;
      this.Ammonia.Recommended=res[0].Recommended;

      this.Asbestos.update_id=res[1]._id;
      this.Asbestos.Unit=res[1].Unit;
      this.Asbestos.Priority=res[1].Priority;
      this.Asbestos.filtering=res[1].Filtering;
      this.Asbestos.Max=res[1].Max;
      this.Asbestos.Recommended=res[1].Recommended;

      this.Perchlorate.update_id=res[2]._id;
      this.Perchlorate.Unit=res[2].Unit;
      this.Perchlorate.Priority=res[2].Priority;
      this.Perchlorate.filtering=res[2].Filtering;
      this.Perchlorate.Max=res[2].Max;
      this.Perchlorate.Recommended=res[2].Recommended;

      this.Polonium.update_id=res[3]._id;
      this.Polonium.Unit=res[3].Unit;
      this.Polonium.Priority=res[3].Priority;
      this.Polonium.filtering=res[3].Filtering;
      this.Polonium.Max=res[3].Max;
      this.Polonium.Recommended=res[3].Recommended;

      this.Radium.update_id=res[4]._id;
      this.Radium.Unit=res[4].Unit;
      this.Radium.Priority=res[4].Priority;
      this.Radium.filtering=res[4].Filtering;
      this.Radium.Max=res[4].Max;
      this.Radium.Recommended=res[4].Recommended;

      this.Silver.update_id=res[5]._id;
      this.Silver.Unit=res[5].Unit;
      this.Silver.Priority=res[5].Priority;
      this.Silver.filtering=res[5].Filtering;
      this.Silver.Max=res[5].Max;
      this.Silver.Recommended=res[5].Recommended;

      this.Sulfate.update_id=res[6]._id;
      this.Sulfate.Unit=res[6].Unit;
      this.Sulfate.Priority=res[6].Priority;
      this.Sulfate.filtering=res[6].Filtering;
      this.Sulfate.Max=res[6].Max;
      this.Sulfate.Recommended=res[6].Recommended;
      
      this.Uranium.update_id=res[7]._id;
      this.Uranium.Unit=res[7].Unit;
      this.Uranium.Priority=res[7].Priority;
      this.Uranium.filtering=res[7].Filtering;
      this.Uranium.Max=res[7].Max;
      this.Uranium.Recommended=res[7].Recommended;

    
       
      })
  //end other
  
  
  //satrt Perfluorinated_chemicals_
  this._apiservice.sendData(this.url+"change_value_fetch_Perfluorinated_chemicals_",this.data).subscribe(res=>{
    // //console.log("res",res)
      
    this.PFOA.update_id=res[0]._id;
    this.PFOA.Unit=res[0].Unit;
    this.PFOA.Priority=res[0].Priority;
    this.PFOA.filtering=res[0].Filtering;
    this.PFOA.Max=res[0].Max;
    this.PFOA.Recommended=res[0].Recommended;

    this.PFOS.update_id=res[1]._id;
    this.PFOS.Unit=res[1].Unit;
    this.PFOS.Priority=res[1].Priority;
    this.PFOS.filtering=res[1].Filtering;
    this.PFOS.Max=res[1].Max;
    this.PFOS.Recommended=res[1].Recommended;

    this.PFNA.update_id=res[2]._id;
    this.PFNA.Unit=res[2].Unit;
    this.PFNA.Priority=res[2].Priority;
    this.PFNA.filtering=res[2].Filtering;
    this.PFNA.Max=res[2].Max;
    this.PFNA.Recommended=res[2].Recommended;


    


        
     
      })
  //end Perfluorinated_chemicals_
  
  //start Pharmaceuticals
  
  this._apiservice.sendData(this.url+"change_value_fetch_Pharmaceuticals",this.data).subscribe(res=>{
    // //console.log("res",res)
  
    this.Atenolol.update_id=res[0]._id;
      this.Atenolol.Unit=res[0].Unit;
      this.Atenolol.Priority=res[0].Priority;
      this.Atenolol.filtering=res[0].Filtering;
      this.Atenolol.Max=res[0].Max;
      this.Atenolol.Recommended=res[0].Recommended;

      this.Carbamazepine.update_id=res[1]._id;
      this.Carbamazepine.Unit=res[1].Unit;
      this.Carbamazepine.Priority=res[1].Priority;
      this.Carbamazepine.filtering=res[1].Filtering;
      this.Carbamazepine.Max=res[1].Max;
      this.Carbamazepine.Recommended=res[1].Recommended;

      this.Estrone.update_id=res[2]._id;
      this.Estrone.Unit=res[2].Unit;
      this.Estrone.Priority=res[2].Priority;
      this.Estrone.filtering=res[2].Filtering;
      this.Estrone.Max=res[2].Max;
      this.Estrone.Recommended=res[2].Recommended;

      this.Meprobamat.update_id=res[3]._id;
      this.Meprobamat.Unit=res[3].Unit;
      this.Meprobamat.Priority=res[3].Priority;
      this.Meprobamat.filtering=res[3].Filtering;
      this.Meprobamat.Max=res[3].Max;
      this.Meprobamat.Recommended=res[3].Recommended;

      this.Trimethoprim.update_id=res[4]._id;
      this.Trimethoprim.Unit=res[4].Unit;
      this.Trimethoprim.Priority=res[4].Priority;
      this.Trimethoprim.filtering=res[4].Filtering;
      this.Trimethoprim.Max=res[4].Max;
      this.Trimethoprim.Recommended=res[4].Recommended;
   
      })
      //end Pharmaceuticals
  // 
        // //console.log("value",sessionStorage.getItem('selected_language'))
        // //console.log(this._apiservice.take_language());
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(sessionStorage.getItem('selected_language'));    
      }
}
