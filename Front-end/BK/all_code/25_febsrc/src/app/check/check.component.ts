import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';

// import * as $ from 'jquery';
declare var $: any;
export interface data {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  
  data:any={};
  full_data:any=[];
  displayedColumns: string[] = ['Substance','unit','Before','Limit_range','After' ];


  dataSource:any;
  dataSource_general:any;
  free_Chlorine:any={};
  Chloramine: any ={};
  Total_Chlorine:any={};
  // pH: any={};
  Calcium:any={};
  // Microplastics:any={};
  Nitrates:any={};
  Bacteria_or_Viruses:any={};

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
  newArray:any={};
  push_main_array:any=[];
  value:any={};
  dataSource_minerals: Object;
  dataSource_chemical_parameter: Object;
  dataSource_water_safety: Object;
  tables:any=[]
  data_check:any=[];
  zone: any;
  pageTitle: string;
  results:any=[];

  constructor(public dialog: MatDialog,private translate: TranslateService, public title: Title,private router:Router,private apiservices:ApiService,private route:ActivatedRoute) {
   
  this.route.params.subscribe(params => {
      this.data['basic_details_id'] = params['id'];
      this.data['id'] = params['id'];
      this.data['postcode'] = params['postcode'];
     
});

}

openConfirmationDialog(component){

let heading,heading2,p,p1,p3;
console.log(component);
if(component=="Free Chlorine" || component=="Total Chlorine" ||component=="Chloramine"){

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

if(component=="Bacterias"){
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

if(component=="Copper"){
  heading='Copper';
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
function1(l,lang_data){
  console.log("pageTitle",lang_data)
  sessionStorage.removeItem("pageTitle")
  sessionStorage.setItem("pageTitle",lang_data)
}

display(){

  this.apiservices.postdata("select_details",this.data).subscribe((res)=>{   
    console.log(res)
    this.data['utlity_enter']=res['utlity_enter'];
    this.data['city']=res['city'];
    this.data['country']=res['country'];



 })

  this.dataSource = new MatTableDataSource();

  const Water_safety=this.apiservices.postdata("water_safety_view_priority",this.data)
  const general = this.apiservices.postdata("general_data_view_priority",this.data);
  const pathogens = this.apiservices.postdata("pathogens_data_view_priority",this.data);
  const chemical_parameter = this.apiservices.postdata("Chemical_parameter_data_view_priority",this.data);
  const Minerals = this.apiservices.postdata("minerals_data_view_priority",this.data);
  const metals = this.apiservices.postdata("metals_data_view_priority",this.data);
  const Chlorine_bi_products = this.apiservices.postdata("chlorine_bi_products_data_view_priority",this.data);
  const HAAs = this.apiservices.postdata("HAAs_data_view_priority",this.data);
  const Pesticides = this.apiservices.postdata("pesticides_data_view_priority",this.data);
  const Herbicides=this.apiservices.postdata("herbicides_data_view_priority",this.data)
  const Perfluorinated_chemicals_ = this.apiservices.postdata("perfluorinated_chemicals_data_view_priority",this.data);
  const other = this.apiservices.postdata("other_data_view_priority",this.data);
  const Pharmaceuticals = this.apiservices.postdata("pharmaceuticals_data_view_priority",this.data);

  const requestArray = [];

  requestArray.push(Water_safety,general,pathogens,chemical_parameter,Minerals,metals,Chlorine_bi_products,HAAs,Pesticides,Herbicides,Perfluorinated_chemicals_,other,Pharmaceuticals
    );

forkJoin(requestArray).subscribe(results => {
  console.log("here",results);
  this.results=results

  if(!(results[0] && results[0].constructor === Array && Object.keys(results[0]).length === 0)){

    for(let j=0;j<this.results[0].length;j++){
      console.log(this.results[0][j]);
          this.results[0][j]['Filtering']= (parseFloat(this.results[0][j]['Filtering'])).toString()
      }
    this.tables.push({table:"Water safety",data:this.results[0]})
  }
  if(!(results[1] && results[1].constructor === Array && Object.keys(results[1]).length === 0)){
    for(let j=0;j<this.results[1].length;j++){
      // console.log(this.results[0][j]);
          this.results[1][j]['Filtering']= (parseFloat(this.results[1][j]['Filtering'])).toString()
      }
    this.tables.push({table:"General",data:results[1]})
  }
  if(!(results[2] && results[2].constructor === Array && Object.keys(results[2]).length === 0)){ 
    for(let j=0;j<this.results[2].length;j++){
      // console.log(this.results[0][j]);
          this.results[2][j]['Filtering']= (parseFloat(this.results[2][j]['Filtering'])).toString()
      } 
    this.tables.push({table:"Pathogens",data:results[2]})
  }
  if(!(results[3] && results[3].constructor === Array && Object.keys(results[3]).length === 0)){  
    for(let j=0;j<this.results[3].length;j++){
      // console.log(this.results[0][j]);
          this.results[3][j]['Filtering']= (parseFloat(this.results[3][j]['Filtering'])).toString()
      } 
    this.tables.push({table:"Chemical parameter",data:results[3]})

  }
  if(!(results[4] && results[4].constructor === Array && Object.keys(results[4]).length === 0)){  
    for(let j=0;j<this.results[4].length;j++){
      // console.log(this.results[0][j]);
          this.results[4][j]['Filtering']= (parseFloat(this.results[4][j]['Filtering'])).toString()
      } 
    this.tables.push({table:"Minerals",data:results[4]})

  }
  if(!(results[5] && results[5].constructor === Array && Object.keys(results[5]).length === 0)){  
    for(let j=0;j<this.results[5].length;j++){
          this.results[5][j]['Filtering']= (parseFloat(this.results[5][j]['Filtering'])).toString()
      } 
    this.tables.push({table:"Metals",data:results[5]})

  }
  if(!(results[6] && results[6].constructor === Array && Object.keys(results[6]).length === 0)){  
    for(let j=0;j<this.results[6].length;j++){
      this.results[6][j]['Filtering']= (parseFloat(this.results[6][j]['Filtering'])).toString()
  } 
    this.tables.push({table:"Chlorine bi products",data:results[6]})

  }
  if(!(results[7] && results[7].constructor === Array && Object.keys(results[7]).length === 0)){  
    for(let j=0;j<this.results[7].length;j++){
      this.results[7][j]['Filtering']= (parseFloat(this.results[7][j]['Filtering'])).toString()
  } 
    this.tables.push({table:"HAAs",data:results[7]})

  }
  if(!(results[8] && results[8].constructor === Array && Object.keys(results[8]).length === 0)){  
    for(let j=0;j<this.results[8].length;j++){
      this.results[8][j]['Filtering']= (parseFloat(this.results[8][j]['Filtering'])).toString()
  } 
    this.tables.push({table:"Pesticides",data:results[8]})

  }
  if(!(results[9] && results[9].constructor === Array && Object.keys(results[9]).length === 0)){  
    for(let j=0;j<this.results[9].length;j++){
      this.results[9][j]['Filtering']= (parseFloat(this.results[9][j]['Filtering'])).toString()
  } 
    this.tables.push({table:"Herbicides",data:results[9]})

  }
  if(!(results[10] && results[10].constructor === Array && Object.keys(results[10]).length === 0)){ 
    for(let j=0;j<this.results[10].length;j++){
      this.results[10][j]['Filtering']= (parseFloat(this.results[10][j]['Filtering'])).toString()
  }  
    this.tables.push({table:"Perfluorinated chemicals",data:results[10]})

  }
  if(!(results[11] && results[11].constructor === Array && Object.keys(results[11]).length === 0)){  
    for(let j=0;j<this.results[11].length;j++){
      this.results[11][j]['Filtering']= (parseFloat(this.results[11][j]['Filtering'])).toString()
  }  
    this.tables.push({table:"Other",data:results[11]})

  }
  if(!(results[12] && results[12].constructor === Array && Object.keys(results[12]).length === 0)){
    for(let j=0;j<this.results[12].length;j++){
      this.results[12][j]['Filtering']= (parseFloat(this.results[12][j]['Filtering'])).toString()
  }    
    this.tables.push({table:"Pharmaceuticals",data:results[12]})

  }
  

  // console.log("tables",this.tables)
});
/*


  this.apiservices.postdata("water_safety_view_priority",this.data).subscribe((res)=>{

    this.dataSource_water_safety=(res);
    if(!(res && res.constructor === Array && Object.keys(res).length === 0)){      
  
          this.dataSource_water_safety=(res); 
          this.tables.push({table:"Water safety",data:this.dataSource_water_safety})
          // console.log("this.data_check12222",this.tables[0].data)
          for(let i=0;i<this.tables.length;i++){
            
            for(let j=0;j<this.tables[i].data.length;j++){

              this.tables[i].data[j].Filtering= (parseFloat(this.tables[i].data[j].Filtering)).toString()

            }
          }
    }

      })


    this.apiservices.postdata("general_data_view_priority",this.data).subscribe((res)=>{
      this.dataSource_general=this.dataSource.data.concat(res)
      if(!(res && res.constructor === Array && Object.keys(res).length === 0)){    
        
        this.dataSource_general=(res);
        return this.tables.push({table:"General",data:this.dataSource_general})      
     }
        })


    this.apiservices.postdata("minerals_data_view_priority",this.data).subscribe((res)=>{
      this.dataSource_minerals=res;
      console.log("res",res[1]);

      if(!(res && res.constructor === Array && Object.keys(res).length === 0)){      
        this.dataSource_minerals=(res);
        // this.data_check.push(this.dataSource_minerals)

        return this.tables.push({table:"Minerals",data:this.dataSource_minerals})      
     }

        })

      this.apiservices.postdata("Chemical_parameter_data_view_priority",this.data).subscribe((res)=>{
        this.dataSource_chemical_parameter=res;     
        if(!(res && res.constructor === Array && Object.keys(res).length === 0)){      
          this.dataSource_chemical_parameter=(res);
 

          return this.tables.push({table:"Chemical parameter",data:this.dataSource_chemical_parameter})      
       }
      
         })

       

            this.apiservices.postdata("chlorine_bi_products_data_view_priority",this.data).subscribe(res=>{
              console.log("Chlorine_bi_products_view",res)

              if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
                

                return this.tables.push({table:"Chlorine bi products",data:res})  
              }
          })

          this.apiservices.postdata("pesticides_data_view_priority",this.data).subscribe(res=>{
            console.log("pesticides_data_view",res)


            if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 

              this.dataSource_general=(res); 
              return this.tables.push({table:"Pesticides",data:res})  
            }
          })

                    
         
          this.apiservices.postdata("HAAs_data_view_priority",this.data).subscribe(res=>{
            console.log("HAAs_data_view",res)
            if(!(res && res.constructor === Array && Object.keys(res).length === 0)){           
              return this.tables.push({table:"HAAs",data:res}) 
          }
           
          })

        this.apiservices.postdata("herbicides_data_view_priority",this.data).subscribe(res=>{
          console.log("herbicides_data_view",res)

          if(!(res && res.constructor === Array && Object.keys(res).length === 0)){  
      
            return this.tables.push({table:"Herbicides",data:res})  
        }
          
        })

          this.apiservices.postdata("perfluorinated_chemicals_data_view_priority",this.data).subscribe(res=>{
            console.log("perfluorinated_chemicals_data_view",res)
            if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
              return this.tables.push({table:"Perfluorinated chemicals",data:res})
            }
            
          })


          this.apiservices.postdata("pharmaceuticals_data_view_priority",this.data).subscribe(res=>{
            console.log("pharmaceuticals_data_view",res && Object.keys(res).length === 0)      
       

            if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
              return this.tables.push({table:"Pharmaceuticals",data:res})
 
          }     
          })

          this.apiservices.postdata("metals_data_view_priority",this.data).subscribe(res=>{
            console.log("metals_data_view",res)
            if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
              return this.tables.push({table:"Metals",data:res})

            }
                   
          })
  


  

          this.apiservices.postdata("other_data_view_priority",this.data).subscribe(res=>{
            console.log("other_data_view",res)

      
            if(!(res && res.constructor === Array && Object.keys(res).length === 0)){ 
              return this.tables.push({table:"Other",data:res})
 
            }
           
          })
  

          this.apiservices.postdata("pathogens_data_view_priority",this.data).subscribe(res=>{
            console.log("pathogens_data",res)
            // let value=[];
          
           console.log("testing a length",res && res.constructor === Array)
            if(!(res && res.constructor === Array && Object.keys(res).length === 0)){               
              return this.tables.push({table:"Pathogens",data:res})          
          }
  
   
  
          
        
        
       
       })
       */

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
    setInterval(()=>
    {
      // alert("here")
      $("#table").addClass("table");
  
  }, 100);

  this.display();
  }

  setTheTitle(): void {
    this.title.setTitle(this.pageTitle);
    
  }

  // ngOnInit() {



  // }
  check(){

    this.router.navigate(['/Report',this.data['basic_details_id'],this.data['postcode']] )

  }

  isNumber(val) { 

    if(val==null ||val==NaN ||val==' '){
      // console.log("nan")
      this.zone='None'
      return this.zone
      
    }
    else if(val!=null&& val!=NaN && val!=' '){
      this.zone=parseFloat(val);
      if(this.zone >=1){
      return this.zone
    }
    else{
      this.zone='Low priority'
    }
    }
   
  }
  


}
