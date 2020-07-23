import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Router ,ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { forkJoin } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface data {
  Before: string;
  Substance: string;
  Limit_range: number;
  After: string;
}

export interface DialogData {
  heading: string;
  p: string;
}
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


  data:any={};
  full_data:any=[];
  displayedColumns: string[] = ['Substance','Before','Limit_range','After' ];
  dataSource:any;
  Chloramine: any ={};
  pH: any={};
  Calcium:any={};
  Microplastics:any={};
  Nitrates:any={};
  Bacteria_or_Viruses:any={};
  safe_water: boolean;
  dataSource_water_safety: Object;
  data_all: any=[];
  hold_array:any={};
  Chlorine_value: any;
  Chlorine_value_before_filtering: any;
  Hardness_value_before_filtering: any;
  Chlorine: any;
  Hardness: any;
  show_chlorie: boolean;
  pageTitle: string;
  table_hide: string;
  constructor(
        private router:Router,
        private apiservices:ApiService,
        private route:ActivatedRoute,
        private translate: TranslateService,
        public title: Title,
        public dialog: MatDialog
 ) {

    this.route.params.subscribe(params => {
          this.data['basic_details_id'] = params['id'];
          this.data['postcode'] = params['postcode'];
          this.data['id'] = params['id'];
        
    });


   }

  ngOnInit(): void {

    this.translate.addLangs(['English', 'Spanish']);
    console.log(sessionStorage.getItem("pageTitle")=='Spanish' || sessionStorage.getItem("pageTitle")=='English')

    if(sessionStorage.getItem("pageTitle")=='Spanish' || sessionStorage.getItem("pageTitle")=='English'){

      let lang=sessionStorage.getItem("pageTitle");
      this.translate.use(lang);  
      console.log("1");
    }
    else{
      this.translate.addLangs(['English', 'Spanish']);
      this.translate.setDefaultLang('English');
  
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'English');
  
      console.log("2");
    }

    this.display();
  }


  openConfirmationDialog(component){

    let heading,heading2,p,p1,p3;
    console.log(component);
    if(component=="Free Chlorine" || component=="Total Chlorine" ||component=="Chloramine" ||component=='Chlorine'){
    
      heading='Chlorine (Cl)';
      heading2='TAPP filters remove 95% of chlorine.'
      p1="Chlorine is added to tap water to kill bacteria and viruses and keep it safe for drinking. The amount of chlorine added depends on the local quality of the water, climate (temperature), maximum distance to the tap and other variables."
      p="A side effect of chlorine is unfortunately that the tap water may taste and smell poorly. To ensure the tap water is safe to drink the recommended free chlorine is 0.5mg/L at each household tap. The maximum allowable chlorine levels (Maximum Allowable Level = MAL) in drinking water is 4 parts per million (4ppm) and pose no known or expected health risk. This includes an adequate margin of safety. However, bi-products from chlorine such as VOCs and THMs may cause health issues long term. TAPP Filters remove 95% of chlorine and close to 100% of chlorine by-products.";
    
      p3= "Note: Sometimes Chloramine is added instead. TAPP is equally efficient in removing chloramine.";
    
    
    this.opendialog(heading,heading2,p1,p,p3)
    }
    
    
    
    if(component=="Microplastics"){
      heading='Microplastics';
      heading2='TAPP filters removes 100% of microplastics.';
      p1='Microplastics are the result of plastic waste in different kind of sources.';
      p='When plastic waste enters waterways, it does not degrade as natural materials do. Instead, exposure to the suns rays, reaction to oxygen, and degradation from physical elements such as waves and sand cause plastic debris to break down into tiny pieces. The smallest microplastics identified in public reports is 2.6 micron. The precise effect of microplastics on human health is difficult to determine for a variety of reasons. There are many different types of plastics, as well as different chemical additives that may or may not be present. WHO claims the health risk of microplastics is low but better to be safe than sorry. TAPP 2 removes all microplastics larger than than 2-microns.';
      p3='';
    this.opendialog(heading,heading2,p1,p,p3);
    }
    
    if(component=="Bicarbonate"){
      heading='Bicarbonate (HCO3-)';
      heading2='Bicarbonate does not need to be filtered.';
      p1='Bicarbonate is the result of Carbon dioxide (CO2) dissolution in water. Bicarbonate is an acid buffer; it regulates the pH of your body.';
      p='However, high concentration of Bicarbonate may pull calcium from water. The Recommended range is 30 to 400 mg/L. Bicarbonate is the principal alkaline constituent in almost all water supplies. Mineral water in particulate often contains high concentration of Bicarbonate.';
      p3='';
    this.opendialog(heading,heading2,p1,p,p3);
    }
    
    if(component=="Bacterias" ||component=="Bacterias/virus"){
      heading='Bacteria & Viruses';
      heading2='TAPP filters reduces Bacteria and Viruses but does not remove all.';
      p1='Natural water represents an adequate environment for bacteria and viruses to grow';
      p='Bacteria and viruses exist naturally in water. Generally the chlorine in tap water will kill all bacteria and viruses which is why filtering of these substances is not necessary for public water in Europe and North America. Viruses are the smallest form of microorganisms capable of causing disease, particularly those of a fecal origin infectious to humans by waterborne transmission; bacteria are typically single-celled microorganisms that can also cause health problems in humans, animals or plants, despite many form is ability to aid in water pollution control.';
      p3='';
    this.opendialog(heading,heading2,p1,p,p3);
    }
    
    if(component=="Fluoride"){
      heading='Fluoride (F-)Fluoride (F-)';
      heading2='TAPP filters reduce up to 80% of Fluoride.';
      p1='Fluoride is the result of water passage through rocks. At its normal rate, Fluoride reduces teeth cavities.';
      p='Fluoride comes from fluorine, which is a common, natural, and abundant element. Excessive exposure to fluoride has been linked to a number of health issues such as bone disease and parathyroid gland damage. The MAL is estimated to be 4 mg/L.';
      p3='';
    this.opendialog(heading,heading2,p1,p,p3);
    }
    
    if(component=="Nitrates"){
      heading='Nitrate (NO32-)';
      heading2='TAPP filters reduce 70-90% of Nitrate.';
      p1='Nitrate is one of the most important compounds for plants. It is a rich source of Nitrogen, which is essential for plant growth.';
      p='Nitrate has no known harm effect on the human body unless it’s extremely high amounts. However, excessive Nitrate in water can cause Methemoglobinemia, or \”blue baby\” disease (Lack of oxygen). The Maximum Accepted Level (MAL) is estimated to be 10 mg/L. Nitrate originates primarily from fertilizers, septic systems, and manure storage or spreading operations.';
      p3='';
    this.opendialog(heading,heading2,p1,p,p3);
    }
    
    if(component=="Calcium" ||component=="Magnesium"){
      heading='Calcium (Ca2+) & Magnesium (Mg2+)';
      heading2='These essential minerals should not be filtered.';
      p1='Calcium and magnesium exist naturally in water. They are essential minerals for all living beings.';
      p='Calcium not only helps in bones and teeth strengthening, but also decreases heart conditions. Magnesium on the other hand, is essential for membrane function, protein construction and muscle contraction. No evidence is available to document harm to human health from hard drinking water. Perhaps only, a high magnesium content (hundreds of mg/l) coupled with a high Sulphate content may cause diarrhea. The Recommended Daily Intakes (RDI) for Calcium and Magnesium are 1000 mg and 400 mg.';
      p3='';
    this.opendialog(heading,heading2,p1,p,p3);
    }
    
    if(component=="Chloride"){
      heading='Chloride (Cl-)';
      heading2='Chloride does not need to be filtered.';
      p1='Chloride is a natural mineral that helps maintain proper blood volume, blood pressure, and pH of body fluids.';
      p='However, excessive Chloride in water may cause salty taste. The Maximum Acceptable Level (MAL) is 250 mg/L. Chloride is a natural component of tap water without any negative health aspects. Chloride is part of the chlorification process of drinking water from harmful bacteria and viruses.';
    this.opendialog(heading,heading2,p1,p,p3);
    }
    
    if(component=="Arsenic"){
      heading='Copper';
      heading2='TAPP 2 filters reduce 95% of Lead.';
      p1='Heavy metals such as Lead, Copper and Arsenic exist naturally in nature. The benefits of these metals are not really accentuated.';
      p='Most of the point sources of heavy metal pollutants are industrial wastewater from mining, metal processing, tanneries, pharmaceuticals, pesticides, organic chemicals, rubber and plastics, lumber and wood products. Bioaccumulation of these metals can cause serious health problems related to central nervous function, the cardiovascular and gastrointestinal (GI) systems, lungs, kidneys, liver, endocrine glands, and bones. Therefore these are often listed among the most common tap water contaminants even though they are unusual in Europe.';
      p3='The maximum values of Heavy Metals should be less than a couple of ug/L. TAPP 2 is specifically tested for removal of heavy metals including lead.';
    this.opendialog(heading,heading2,p1,p,p3);
    }
    
    if(component=="Copper" || component=="Heavy Metals"){
      heading='Heavy Metals';
      heading2='TAPP 2 filters reduce 95% of Lead.';
      p1='Heavy metals such as Lead, Copper and Arsenic exist naturally in nature. The benefits of these metals are not really accentuated.';
      p='Most of the point sources of heavy metal pollutants are industrial wastewater from mining, metal processing, tanneries, pharmaceuticals, pesticides, organic chemicals, rubber and plastics, lumber and wood products. Bioaccumulation of these metals can cause serious health problems related to central nervous function, the cardiovascular and gastrointestinal (GI) systems, lungs, kidneys, liver, endocrine glands, and bones. Therefore these are often listed among the most common tap water contaminants even though they are unusual in Europe.';
      p3='The maximum values of Heavy Metals should be less than a couple of ug/L. TAPP 2 is specifically tested for removal of heavy metals including lead.';
    this.opendialog(heading,heading2,p1,p,p3);
    }
    
    if(component=="Lead"){
      heading='Lead';
      heading2='TAPP 2 filters reduce 95% of Lead.';
      p1='Heavy metals such as Lead, Copper and Arsenic exist naturally in nature. The benefits of these metals are not really accentuated.';
      p='Most of the point sources of heavy metal pollutants are industrial wastewater from mining, metal processing, tanneries, pharmaceuticals, pesticides, organic chemicals, rubber and plastics, lumber and wood products. Bioaccumulation of these metals can cause serious health problems related to central nervous function, the cardiovascular and gastrointestinal (GI) systems, lungs, kidneys, liver, endocrine glands, and bones. Therefore these are often listed among the most common tap water contaminants even though they are unusual in Europe.';
      p3='The maximum values of Heavy Metals should be less than a couple of ug/L. TAPP 2 is specifically tested for removal of heavy metals including lead.';
    this.opendialog(heading,heading2,p1,p,p3);
    }
    
    
    if(component=="Potassium" ||component=="Sodium"){
      heading='Sodium (Na+) & Potassium (K+)';
      heading2="These essential minerals should not be filtered.";
      p1='Potassium and Sodium occur naturally in all water (groundwater, rainwater, etc). They are the main responsible elements for nerve stimulus fluid levels control and blood pressure regulation. They also prevent cardiovascular disease.';
      p='Sodium and potassium exist in the earth’s crust and are not considered toxic. They are common elements in the natural environment and are often found in food and drinking water. High level of Sodium may increase blood pressure and salty taste. On the other hand, Potassium intoxication by ingestion is rare, because potassium is rapidly excreted in the absence of pre-existing kidney damage. The Recommended Daily Intakes (RDI) for Sodium and Potassium are 2400 mg and 3500 mg.';
      p3='';
    this.opendialog(heading,heading2,p1,p,p3);
    }
    
    
    
    }
    
    opendialog(heading,heading2,p1,p,p3){
      
      const dialogRef = this.dialog.open(DialogComponent, {
        // width: '90%',
        data: {heading: heading,heading2:heading2,p1: p1,p:p,p3:p3}
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }
  setTheTitle(): void {
    this.title.setTitle(this.pageTitle);
    
  }

  function1(l,lang_data){
    console.log("pageTitle",lang_data)
    sessionStorage.removeItem("pageTitle")
    sessionStorage.setItem("pageTitle",lang_data)
  }

    async display(){
    this.dataSource = new MatTableDataSource();   
    await this.details();
   }

   async details(){       
    await this.calculation();  

  }
calculation(){

console.log("data",this.data)
const Water_safety=this.apiservices.postdata("water_safety_view",this.data)
const pathogens=this.apiservices.postdata("pathogens_data_view",this.data)
const general=this.apiservices.postdata("general_data_view",this.data)
const minerals_data_view=this.apiservices.postdata("minerals_data_view",this.data)
const Chemical_parameter_data_view=this.apiservices.postdata("Chemical_parameter_data_view",this.data);
const metals = this.apiservices.postdata("metals_data_view_priority",this.data);
const select_details=this.apiservices.postdata("select_details",this.data)
const requestArray = [];
requestArray.push(Water_safety,general,minerals_data_view,Chemical_parameter_data_view,pathogens,metals,select_details);
  forkJoin(requestArray).subscribe(results => {
    console.log("here",results);
         if(!(results[0] && results[0].constructor === Array && Object.keys(results[0]).length === 0)){   
             for(let i=0;i<Object.keys(results[0]).length;i++){               
               if(results[0][i].Substance=='Free Chlorine'){
                console.log("Max",results[0][i])
                console.log("Recommended",results[0][i].Recommended =='')
                this.Chlorine_value_before_filtering=results[0][i].Zone; 
                 let note;
                if((results[1][i].Max >= results[0][i].Filtering)&&(results[0][i].Filtering > results[0][i].Recommended)) 
                 {
                  console.log("true condition",results[0][i].Max >= results[0][i].Filtering >= results[0][i].Recommended);
                  note="Within legal limit"
                }      
                else if(results[0][i].Filtering < results[0][i].Recommended){
                  note="Below legal limit"
                }
                else if(results[0][i].Filtering >results[0][i].Max){
                  note="Above legal limit"
                }
                if(results[3][i].Filtering==null){
                  note='Not reported'
                }
                this.data_all.push({Substance:'Chlorine', Before:results[0][i].Zone ,After:results[0][i].Filtering,Unit:results[0][i].Unit,max:results[0][i].Max,min:results[0][i].Recommended,note:note})           
               }
               
             }
      }


      if(!(results[1] && results[1].constructor === Array && Object.keys(results[1]).length === 0)){   

            for(let i=0;i<Object.keys(results[1]).length;i++){

              if(results[1][i].Substance=='pH'){
                let note;
                console.log("max undefined..........",results[1][i].Max)
                console.log("recommented undefined...........",results[1][i].Recommended)
                if((results[1][i].Max >= results[1][i].Filtering)&&(results[1][i].Filtering > results[1][i].Recommended)) 
                 {
                  console.log("true condition",results[1][i].Max >= results[1][i].Filtering >= results[1][i].Recommended);
                  note="Within legal limit"
                }      
                else if(results[1][i].Filtering < results[1][i].Recommended){
                  note="Below legal limit"
                }
                else if(results[1][i].Filtering >results[1][i].Max){
                  note="Above legal limit"
                }
                if(results[3][i].Filtering==null){
                  note='Not reported'
                }
              this.dataSource.data=this.data_all.push({Substance:'pH', Before:results[1][i].Zone ,After:results[1][i].Filtering,Unit:results[1][i].Unit,max:results[1][i].Max,min:results[1][i].Recommended ,note:note})              
              }             

            if(results[1][i].Substance=='Microplastics'){
              this.data_all.push({Substance:'Microplastics', Before:results[1][i].Zone ,After:results[1][i].Filtering,Unit:results[1][i].Unit,max:results[1][i].Max,min:results[1][i].Recommended})
            }

            if(results[1][i].Substance=='Hardness'){
              let note;
              console.log("max undefined..........",results[1][i].Max)
              console.log("recommented undefined...........",results[1][i].Recommended)
              if((results[1][i].Max >= results[1][i].Filtering)&&(results[1][i].Filtering > results[1][i].Recommended)) 
               {
                console.log("true condition",results[1][i].Max >= results[1][i].Filtering >= results[1][i].Recommended);
                note="Within legal limit"
              }      
              else if(results[1][i].Filtering < results[1][i].Recommended){
                note="Below legal limit"
              }
              else if(results[1][i].Filtering >results[1][i].Max){
                note="Above legal limit"
              }
              if(results[3][i].Filtering==null){
                note='Not reported'
              }
              this.data_all.push({Substance:'Hardness', Before:results[1][i].Zone ,After:results[1][i].Filtering,Unit:results[1][i].Unit,max:results[1][i].Max,min:results[1][i].Recommended,note:note})
              this.Hardness_value_before_filtering=results[1][i].Zone;
            }
            // Hardness

          }
          
      }



      if(!(results[2] && results[2].constructor === Array && Object.keys(results[2]).length === 0)){ 
          for(let i=0;i<Object.keys(results[2]).length;i++){
            if(results[2][i].Substance=="Calcium"){    
              let note;
              console.log("max undefined..........",results[3][i].Max)
              console.log("recommented undefined...........",results[3][i].Recommended)
              if((results[3][i].Max >= results[3][i].Filtering)&&(results[3][i].Filtering > results[3][i].Recommended)) 
               {
                console.log("true condition",results[3][i].Max >= results[3][i].Filtering >= results[3][i].Recommended);
                note="Within legal limit"
              }      
              else if(results[3][i].Filtering < results[3][i].Recommended){
                note="Below legal limit"
              }
              else if(results[3][i].Filtering >results[3][i].Max){
                note="Above legal limit"
              }
              if(results[3][i].Filtering==null){
                note='Unregulated'
              }
            this.data_all.push({Substance:'Limescale', Before:results[2][i].Zone ,After:results[2][i].Filtering,Unit:results[2][i].Unit,max:results[2][i].Max,min:results[2][i].Recommended,note:note})
            }

          }
      }
        

      if(!(results[3] && results[3].constructor === Array && Object.keys(results[3]).length === 0)){   
        console.log("results[3]",results[3])
          for(let i=0;i<Object.keys(results[3]).length;i++){
            if(results[3][i].Substance=='Nitrates'){
              let note;
              console.log("max undefined..........",results[3][i].Max)
              console.log("recommented undefined...........",results[3][i].Recommended)
              if((results[3][i].Max >= results[3][i].Filtering)&&(results[3][i].Filtering > results[3][i].Recommended)) 
               {
                console.log("true condition",results[3][i].Max >= results[3][i].Filtering >= results[3][i].Recommended);
                note="Within legal limit"
              }      
              else if(results[3][i].Filtering < results[3][i].Recommended){
                note="Below legal limit"
              }
              else if(results[3][i].Filtering >results[3][i].Max){
                note="Above legal limit"
              }
              if(results[3][i].Filtering==null){
                note='Not reported'
              }
              console.log("results[3][i].Filtering",results[3][i].Filtering)

            this.data_all.push({Substance:'Nitrates', Before:results[3][i].Zone ,After:results[3][i].Filtering,Unit:results[3][i].Unit,max:results[3][i].Max,min:results[3][i].Recommended,note:note})                 
            }

          }      
       }

       if(!(results[4] && results[4].constructor === Array && Object.keys(results[4]).length === 0)){ 


        
        let subarray=[];
        let before=[];
        let after_value=[];
        let before_value;
        let after;

        var largest=0;
        var smallest=0;
          this.data_all.push({Substance:'Bacterias/virus', Before:"None reported" ,After:"None reported",Unit:"",max:largest,min:smallest,note:'None reported'}) 

       }

       if(!(results[5] && results[5].constructor === Array && Object.keys(results[5]).length === 0)){ 
        //  heavy metal   
        let subarray=[];
        let before=[];
        let before_value;
        let after;
        let min=[]
        let after_value=[]
        for(let i=0;i<Object.keys(results[5]).length;i++){
           if(results[5][i].Substance=='Lead' ||results[5][i].Substance=='Manganese'||results[5][i].Substance=='Iron'||results[5][i].Substance=='Copper'||results[5][i].Substance=='Barium'||results[5][i].Substance=='Arsenic'){           
                before_value="Below limit";
                after="Safe level";
           }

         if(results[5][i].Substance=='Lead'){
            console.log("results[5][i]",results[5][i].Recommended=='' ,"fsdhfg")
             
              if(results[5][i].Max!=''){
              results[5][i].Max=parseFloat(results[5][i].Max);
              subarray.push(results[5][i].Max); }
              
              if(results[5][i].Recommended!=''){
              min.push(parseFloat(results[5][i].Recommended)); 
              }
          }
          if(results[5][i].Substance=='Manganese'){
            if(results[5][i].Max!=''){
              results[5][i].Max=parseFloat(results[5][i].Max);
              subarray.push(results[5][i].Max); }
              if(results[5][i].Recommended!=''){
              min.push(parseFloat(results[5][i].Recommended)); 
              } 
           }
          if(results[5][i].Substance=='Iron'){
            if(results[5][i].Max!=''){
              results[5][i].Max=parseFloat(results[5][i].Max);
              subarray.push(results[5][i].Max); }
              if(results[5][i].Recommended!=''){
              min.push(parseFloat(results[5][i].Recommended)); 
              }         

          }
          if(results[5][i].Substance=='Copper'){
            if(results[5][i].Max!=''){
              results[5][i].Max=parseFloat(results[5][i].Max);
              subarray.push(results[5][i].Max); }
              if(results[5][i].Recommended!=''){
              min.push(parseFloat(results[5][i].Recommended)); 
              }            
          }
          if(results[5][i].Substance=='Barium'){
            if(results[5][i].Max!=''){
              results[5][i].Max=parseFloat(results[5][i].Max);
              subarray.push(results[5][i].Max); }
              if(results[5][i].Recommended!=''){
              min.push(parseFloat(results[5][i].Recommended)); 
              } 

          }
          if(results[5][i].Substance=='Arsenic'){
            if(results[5][i].Max!=''){
              results[5][i].Max=parseFloat(results[5][i].Max);
              subarray.push(results[5][i].Max); }
              if(results[5][i].Recommended!=''){
              min.push(parseFloat(results[5][i].Recommended)); 
              }
          }

        }  
        console.log(min[0] !=undefined,"Nee")

         var largest=0;
         var smallest=0;
       
        this.data_all.push({Substance:'Heavy Metals', Before:before_value ,After:after,Unit:"",max:largest,min:smallest,note:'Below limit'})        
     }




       if(!(results[6] && results[6].constructor === Array && Object.keys(results[6]).length === 0)){   

        this.data['utlity_enter']=results[6]['utlity_enter'];
        this.data['city']=results[6]['city'];
        this.data['country']=results[6]['country'];
        this.data['description']=results[6]['description'];
        this.data['water']=results[6]['yes'];
        this.data['drinkable']=results[6]['drinkable']

     }
    


     
        this.hold_array.data=this.data_all;
         console.log("this.hold_array.data",this.hold_array.data)
          //  condition  for taste
          for(let i=0;i<this.data_all.length;i++){
          

            if(this.data_all[i].Substance=='Microplastics' ){                    
              // console.log("Microplastics",this.data_all[i])        
                if(this.data_all[i].Before==null||this.data_all[i].Before==undefined ||this.data_all[i].Before==''){
                  this.data_all[i].Before="Unknown";
                  this.data_all[i].note='Unregulated';
                }

                if(this.data_all[i].After==null||this.data_all[i].After==undefined ||this.data_all[i].After==''){
                  this.data_all[i].After;
                }
             }
                if(this.data_all[i].Substance=='Chlorine' ){                    
                    this.Chlorine=parseFloat(this.data_all[i].Before);
                                 
                if(results[0][i].Recommended>=results[0][i].Filtering<=results[0][i].Max){
                  console.log("here",results[0][i].Recommended>=results[0][i].Filtering<=results[0][i].Max)
              }

                }

                if(this.data_all[i].Substance=='Hardness'){
                    this.Hardness=parseFloat(this.data_all[i].Before);
                    // console.log("Hardness",this.data_all[i].Before);
                    
                }

                if(this.data_all[i].Substance=='Limescale'){
                  if(this.data_all[i].After==null){
                    console.log("this.data_all[i].After",this.data_all[i].After)
                  }
                  if(this.data_all[i].Before==null){
                    console.log("this.data_all[i].Before",this.data_all[i].Before)
                  }
                  if(this.data_all[i].Before!=null || this.data_all[i].After==null)
              {

                if(this.data_all[i].Before!=null){
                  this.data_all[i].Before=parseFloat(this.data_all[i].Before); 
                  if(this.data_all[i].Before>180 ){
                    this.data_all[i].Before="Very high";
                  }
                  if(this.data_all[i].Before<=180 && this.data_all[i].Before >=121){
                    this.data_all[i].Before="High";
                  }
                  if(this.data_all[i].Before<=120 && this.data_all[i].Before >=61){
                    this.data_all[i].Before="Medium";
                  }
                  if(this.data_all[i].Before <= 60){
                    this.data_all[i].Before="Low";
                  }
                }


                if(this.data_all[i].After!=null){
                  this.data_all[i].After=parseFloat(this.data_all[i].After);              

                    if(this.data_all[i].After>180){
                      this.data_all[i].After="Very high";
                    }
                    if(this.data_all[i].After<=180 && this.data_all[i].After >=121){
                      this.data_all[i].After="High";
                    }
                    if(this.data_all[i].After<=120 && this.data_all[i].After >=61){
                      this.data_all[i].After="Medium";
                    }
                    if(this.data_all[i].After <= 60){
                      this.data_all[i].After="Low";
                    }
                }
                  }

                    // console.log("i",this.data_all[i].After==NaN)
              }
              if(!(this.data_all[i].Substance=='Heavy Metals' || this.data_all[i].Substance=='Bacterias/virus')){
                this.data_all[i].After=parseFloat(this.data_all[i].After);   
                this.data_all[i].After=(this.data_all[i].After).toString()
                
              }
          }         
          if(this.hold_array.data.length==0){
            this.table_hide="true";
          }
  });

  }
  check(){
    this.router.navigate(["/check",this.data['basic_details_id'],this.data['postcode']]).then(() => {
    window.location.reload();
  });

  }



  
}


