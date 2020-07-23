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
  data_all11:any=[];
  hold_array:any={};
  Chlorine_value: any;
  Chlorine_value_before_filtering: any;
  Hardness_value_before_filtering: any;
  Chlorine: any;
  Hardness: any;
  show_chlorie: boolean;
  pageTitle: string;
  // table_hide: string;
  table_hide:boolean=false;
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

    console.log(sessionStorage.getItem("pageTitle"))    
    this.translate.addLangs(['English', 'Spanish','Italian']);
    console.log(sessionStorage.getItem("pageTitle")=='Spanish' ||  sessionStorage.getItem("pageTitle")=='English' ||sessionStorage.getItem("pageTitle")=='Italian')

    if(sessionStorage.getItem("pageTitle")=='Spanish' || sessionStorage.getItem("pageTitle")=='English' ||sessionStorage.getItem("pageTitle")=='Italian'){

      let lang=sessionStorage.getItem("pageTitle");
      this.translate.use(lang);  
      console.log("1");
    }
    else{
      this.translate.addLangs(['English', 'Spanish','Italian']);
      this.translate.setDefaultLang('English');
  
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'English');
  
      console.log("2");
    }

    this.display();
  }
  link(){
      let vari='https://tappwater.co/en/list-of-common-contaminants-substances-in-tap-water'
      alert("https://tappwater.co/en/list-of-common-contaminants-substances-in-tap-water")
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
                      this.Chlorine_value_before_filtering=results[0][i].Zone; 
                      let note;
                      if((results[1][i].Max >= results[0][i].Filtering)&&(results[0][i].Filtering > results[0][i].Recommended)) 
                      {
                        console.log("true condition",results[0][i].Max >= results[0][i].Filtering >= results[0][i].Recommended);
                        note="Normal"
                      }      
                      else if(results[0][i].Filtering < results[0][i].Recommended){
                        note="Below legal limit"
                      }
                      else if(results[0][i].Filtering >results[0][i].Max){
                        note="Above legal limit"
                      }
                      if(results[3][i].Filtering==null){
                        note='Normal'
                      }
                      this.data_all.push({Substance:'Chlorine', Before:results[0][i].Zone ,After:results[0][i].Filtering,Unit:results[0][i].Unit,max:results[0][i].Max,min:results[0][i].Recommended,note:note})           
                    }
                    
                    
                  }
            }


            if(!(results[1] && results[1].constructor === Array && Object.keys(results[1]).length === 0)){   

                  for(let i=0;i<Object.keys(results[1]).length;i++){
                    if(results[1][i].Substance=='pH'){
                      let note;
                      if((results[1][i].Max >= results[1][i].Filtering)&&(results[1][i].Filtering > results[1][i].Recommended)) 
                      {
                        console.log("true condition",results[1][i].Max >= results[1][i].Filtering >= results[1][i].Recommended);
                        note="Normal"
                      }      
                      else if(results[1][i].Filtering < results[1][i].Recommended){
                        note="Below legal limit"
                      }
                      else if(results[1][i].Filtering >results[1][i].Max){
                        note="Above legal limit"
                      }
                      if(results[3][i].Filtering==null){
                        note='Normal'
                      }
                    this.dataSource.data=this.data_all.push({Substance:'pH', Before:results[1][i].Zone ,After:results[1][i].Filtering,Unit:results[1][i].Unit,max:results[1][i].Max,min:results[1][i].Recommended ,note:note})              
                    }             

                  if(results[1][i].Substance=='Microplastics'){
                    this.data_all.push({Substance:'Microplastics', Before:results[1][i].Zone ,After:results[1][i].Filtering,Unit:results[1][i].Unit,max:results[1][i].Max,min:results[1][i].Recommended,note:"Unregulated"})
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
                    this.data_all11.push({Substance:'Hardness', Before:results[1][i].Zone ,After:results[1][i].Filtering,Unit:results[1][i].Unit,max:results[1][i].Max,min:results[1][i].Recommended,note:note})
                    this.Hardness_value_before_filtering=results[1][i].Zone;
                    
                    this.Hardness=this.Hardness_value_before_filtering
                    let before_filtering;
                    if(((this.Chlorine_value_before_filtering > 0.5 && this.Hardness > 200)) || ((this.Chlorine_value_before_filtering > 0.5 && this.Hardness < 100))){
                      before_filtering="Bad"
                    }
                    if(((0.4 < this.Chlorine_value_before_filtering) && (this.Chlorine_value_before_filtering  < 0.6)) && ((100 < this.Hardness) && (this.Hardness< 200)) ||((0.4 == this.Chlorine_value_before_filtering && this.Hardness < 100)||(this.Chlorine_value_before_filtering == 0.5 && this.Hardness < 100))){
                      before_filtering="Ok"
                    }
                    if(0.4 > this.Chlorine_value_before_filtering && this.Hardness < 100){
                      before_filtering="Good"
                    }
                    this.data_all.push({Substance:'Taste', Before:before_filtering ,After:"Good",Unit:"",max:"",min:"",note:''})
      
                  }
                  // Hardness



                  

                }
                
            }


            if(!(results[2] && results[2].constructor === Array && Object.keys(results[2]).length === 0)){ 
              for(let i=0;i<Object.keys(results[2]).length;i++){
                if(results[2][i].Substance=="Calcium"){    
                  let note;
                  if((results[3][i].Max >= results[3][i].Filtering)&&(results[3][i].Filtering > results[3][i].Recommended)) 
                  {
                    note="Unregulated"
                  }      
                  else if(results[3][i].Filtering < results[3][i].Recommended){
                    note="Unregulated"
                  }
                  else if(results[3][i].Filtering >results[3][i].Max){
                    note="Unregulated"
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
                     if((results[3][i].Max >= results[3][i].Filtering)&&(results[3][i].Filtering > results[3][i].Recommended)) 
                    {
                      console.log("true condition",results[3][i].Max >= results[3][i].Filtering >= results[3][i].Recommended);
                      note="Below legal limit"
                    }      
                    else if(results[3][i].Filtering < results[3][i].Recommended){
                      note="Below legal limit"
                    }
                    else if(results[3][i].Filtering >results[3][i].Max){
                      note="Above legal limit"
                    }
                    if(results[3][i].Filtering==null){
                      note='Below legal limit'
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
                this.data_all.push({Substance:'Bacterias/virus', Before:"None reported" ,After:"None reported",Unit:"",max:largest,min:smallest,note:'Below legal limit'}) 

            }

            if(!(results[5] && results[5].constructor === Array && Object.keys(results[5]).length === 0)){ 
           //  heavy metal   
              let subarray=[];
              let before=[];
              let before_value;
              let after;
              let min=[]
              for(let i=0;i<Object.keys(results[5]).length;i++){
                if(results[5][i].Substance=='Lead' ||results[5][i].Substance=='Manganese'||results[5][i].Substance=='Iron'||results[5][i].Substance=='Copper'||results[5][i].Substance=='Barium'||results[5][i].Substance=='Arsenic'){           
                      before_value="Below limit";
                      after="Safe level";
                }    

              } 
              

  
              console.log(min[0] !=undefined,"Nee")
              var largest=0;
              var smallest=0;            
              this.data_all.push({Substance:'Heavy Metals', Before:'Detected' ,After:after,Unit:"",max:largest,min:smallest,note:'Below legal limit'})        
          }
          
            if(!(results[6] && results[6].constructor === Array && Object.keys(results[6]).length === 0)){   

              this.data['utlity_enter']=results[6]['utlity_enter'];
              this.data['city']=results[6]['city'];
              this.data['country']=results[6]['country'];
              this.data['description']=results[6]['description'];
              this.data['water']=results[6]['yes'];
              this.data['drinkable']=results[6]['drinkable'],
              this.data['blog_link']=results[6]['blog_link']

          }


          if(!(results[0] && results[0].constructor === Array && Object.keys(results[0]).length === 0) || !(results[1] && results[1].constructor === Array && Object.keys(results[1]).length === 0) || !(results[2] && results[2].constructor === Array && Object.keys(results[2]).length === 0) ||!(results[3] && results[3].constructor === Array && Object.keys(results[3]).length === 0) ||!(results[4] && results[4].constructor === Array && Object.keys(results[4]).length === 0) ||!(results[5] && results[5].constructor === Array && Object.keys(results[5]).length === 0)){

// start its for limscale and Microplastics
            let temp = this.data_all[1];
            this.data_all[1] = this.data_all[3];
            this.data_all[3] = temp;
            
//end 
//start tast
            let repeat_value=this.data_all[0];
            this.data_all[0]=this.data_all[3]
            this.data_all[3]=this.data_all[2]
            this.data_all[2]=this.data_all[1]
            this.data_all[1]=repeat_value
//end taste
            this.hold_array.data=this.data_all; 
            console.log("temp",this.data_all)

              for(let i=0;i<this.data_all.length;i++){  
                
                //start for microplastic
                if(this.data_all[i].Substance=='Microplastics' ){                      
                    if(this.data_all[i].Before==null||this.data_all[i].Before==undefined ||this.data_all[i].Before==''){
                      this.data_all[i].Before="Unknown";
                      this.data_all[i].note='Unregulated';
                    }

                    if(this.data_all[i].After!=null||this.data_all[i].After!=undefined ||this.data_all[i].After!=''){
                    
                      // this.data_all[i].After=parseFloat(this.data_all[i].After);
                      console.log("not null.......................",typeof this.data_all[i].After ,this.data_all[i].After)
                    }
                }
                //end microplastic

                if(this.data_all[i].Substance=='Chlorine' ){                    
                  this.Chlorine=parseFloat(this.data_all[i].Before);
                               
              if(results[0][i].Recommended>=results[0][i].Filtering<=results[0][i].Max){
                console.log("here",results[0][i].Recommended>=results[0][i].Filtering<=results[0][i].Max)
            }

              }

                // start rule for limescale
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
                  // this.Hardness=this.data_all[i].Before;
                }


                if(this.data_all[i].After!=null){

                  this.data_all[i].After="Low";
                /*  this.data_all[i].After=parseFloat(this.data_all[i].After);   

                    if(this.data_all[i].After>180){
                      this.data_all[i].After="Very high";
                    }
                    if(this.data_all[i].After<=180 && this.data_all[i].After >=121){
                      this.data_all[i].After="High";
                    }
                    if(this.data_all[i].After<=120 && this.data_all[i].After >=61){
                      console.log("this.data_all[i].After",typeof this.data_all[i].After)
                      this.data_all[i].After="Medium";
                      console.log("this.data_all[i].After",typeof this.data_all[i].After,this.data_all[i].After)
                    }
                    if(this.data_all[i].After <= 60){
                      this.data_all[i].After="Low";
                    }
*/

                }

                  }
                
                }
                   // end rule for limescale

                   
              }                  
              
          }

          else{
            this.table_hide=true;
          }

        });

  }
  check(){
    this.router.navigate(["/check",this.data['basic_details_id'],this.data['postcode']]).then(() => {
    window.location.reload();
  });

  }
  opennewtap(){
    // [href]="data.blog_link==null?'#/Report/'+data.id+'/'+data.postcode:data.blog_link"
    if(this.data.blog_link!=null){
      window.open(this.data.blog_link, "_blank");
    }

  }
open(){
  window.open('https://tappwater.co/en/water-safety-taste-and-limescale/', '_blank')
}


  
}


