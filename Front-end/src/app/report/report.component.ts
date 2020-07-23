import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { ApiService } from '../api.service';
import { forkJoin } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router'; // import Router and NavigationEnd

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
declare let ga: Function;

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
  page_router: string;
  average: any;
  lang: string;
  hardness_f: any;
  before: any;
  TDS_min: any;
  TDS_max: any;
  tds_value: any;
  constructor(
        private router:Router,
        private apiservices:ApiService,
        private route:ActivatedRoute,
        private translate: TranslateService,
        public title: Title,
        public dialog: MatDialog
 ) {

  this.router.events.subscribe(event => {

    if (event instanceof NavigationEnd) {
      let value;
      var str=event.urlAfterRedirects
      var splitted = str.split("/", 2); 

      if(splitted[1]=='tap-water-quality-report'||splitted[1]=='calidad-del-agua' ||splitted[1]=='calidad-del-agua'){
        value='Summary page of results';
      console.log("event.urlAfterRedirects true",value)
      ga('set', 'page', value);
      ga('send', 'pageview');

}

    }

  });

    this.route.params.subscribe(params => {
          this.data['basic_details_id'] = params['id'];
          this.data['postcode'] = params['postcode'];
          this.data['id'] = params['id'];
        
    });



   }

  ngOnInit(): void {
    console.log("sessionStorage.getItem",sessionStorage.getItem("pageTitle")) 
    
    if(sessionStorage.getItem("pageTitle")=='Spanish' || sessionStorage.getItem("pageTitle")=='Italian'){
      this.page_router="/componentes-de-agua"
    }
    else{
      this.page_router='/check'
    }
    this.translate.addLangs(['English', 'Spanish','Italian']);
    // console.log(sessionStorage.getItem("pageTitle")=='Spanish' ||  sessionStorage.getItem("pageTitle")=='English' ||sessionStorage.getItem("pageTitle")=='Italian')

    if(sessionStorage.getItem("pageTitle")=='Spanish' || sessionStorage.getItem("pageTitle")=='English' ||sessionStorage.getItem("pageTitle")=='Italian'){
      let lang=sessionStorage.getItem("pageTitle");
      this.lang=lang;
      console.log("his.lang",this.lang)
      this.translate.use(lang);  
  
    }
    else{
      this.translate.addLangs(['English', 'Spanish','Italian']);
      this.translate.setDefaultLang('English');
      this.lang='English'
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'English');
  
      // console.log("2");
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
    // console.log("pageTitle",lang_data)
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
      console.log("data.......................... ",this.data)
      const Water_safety=this.apiservices.postdata("water_safety_view",this.data)
      const pathogens=this.apiservices.postdata("pathogens_data_view",this.data)
      const general=this.apiservices.postdata("general_data_view",this.data)
      const minerals_data_view=this.apiservices.postdata("minerals_data_view",this.data)
      const Chemical_parameter_data_view=this.apiservices.postdata("Chemical_parameter_data_view",this.data);
      const metals = this.apiservices.postdata("metals_data_view_priority",this.data);
      const select_details=this.apiservices.postdata("post_code",this.data)

      console.log(select_details,"select_details")
      const requestArray = [];
      requestArray.push(Water_safety,general,minerals_data_view,Chemical_parameter_data_view,pathogens,metals,select_details);

        forkJoin(requestArray).subscribe(results => {
          this.average=results[6]['data']['averageDataRange'];
          console.log(this.average)
          // console.log("here",results);
              if(!(results[0] && results[0].constructor === Array && Object.keys(results[0]).length === 0)){          
                   

                  for(let i=0;i<Object.keys(results[0]).length;i++){  
                
                    if(results[0][i].Substance=='Free Chlorine'){ 
                      if(results[6]['data']['averageDataRange']!=true){            
                      results[0][i].Filtering=parseFloat(results[0][i].Filtering).toFixed(2)
                    }      

                      if(results[6]['data']['averageDataRange']==true){
                        
                        this.Chlorine_value_before_filtering=(results[0][i].minimum+results[0][i].maximum)/2;
                        if((results[0][i].minimum==0 && results[0][i].maximum==0)||(isNaN(results[0][i].minimum))&&(isNaN(results[0][i].maximum))){
                          results[0][i].Zone=0
                        }
                        else{
                          results[0][i].Zone=results[0][i].minimum+" - "+results[0][i].maximum;

                        }
                        
                      }
                      else  if(results[6]['data']['averageDataRange']!=true){

                        if(results[0][i].Zone==null ||isNaN(results[0][i].Zone)){
                          results[0][i].Zone=0
                          this.Chlorine_value_before_filtering=results[0][i].Zone
                          
                        }
                        else{
                        this.Chlorine_value_before_filtering=results[0][i].Zone; 
                      }
                      console.log("results[0][i].Filtering",results[0][i].Filtering)
                      
                      if(isNaN(results[0][i].Filtering) || results[0][i].Filtering==null){
                        results[0][i].Filtering=0
                      }
                      }
                      let note;

                      if((results[0][i].Max >= (results[0][i].Zone !=null)) && ((results[0][i].Zone !=null) >= results[0][i].Recommended)) 
                      {
                        note="Normal"
                      console.log("this.Chlorine 1",note)

                      }      
                      else if((results[0][i].Zone!=null) < results[0][i].Recommended){
                       
                        note="Below legal limit"
                      }
                      else if((results[0][i].Zone!=null) >results[0][i].Max){
                        note="Above legal limit"
                      }
                      if(results[0][i].Zone==null){
                        note='Normal'
                      console.log("this.Chlorine 2",note)

                      }
                      console.log("note",note)

                      this.Chlorine=this.Chlorine_value_before_filtering;

                      this.data_all.push({Substance:'Chlorine', Before:results[0][i].Zone ,After:results[0][i].Filtering,Unit:results[0][i].Unit,max:results[0][i].Max,min:results[0][i].Recommended,note:note,arange_min:results[0][i].minimum,arange_max:results[0][i].maximum})    
                    }
                    
                    
                  }
            }


            if(!(results[1] && results[1].constructor === Array && Object.keys(results[1]).length === 0)){   

                  for(let i=0;i<Object.keys(results[1]).length;i++){
                    if(results[1][i].Substance=='pH'){

                      if(!results[6]['data']['averageDataRange']==true){            
                      results[1][i].Filtering=parseFloat(results[1][i].Filtering).toFixed(2)                  
                      }   

                      if(results[6]['data']['averageDataRange']==true){
                        if(results[1][i].minimum==0 && results[1][i].maximum==0){
                          results[1][i].Zone=0;
                        }else{
                        results[1][i].Zone=results[1][i].minimum+" - "+results[1][i].maximum;
                        // console.log()
                      }
                      }

                      let note;
                      if((results[1][i].Max >= (results[1][i].Zone !=null))&&((results[1][i].Zone!=null) > results[1][i].Recommended)) 
                      {
                        // console.log("true condition",results[1][i].Max >= results[1][i].Filtering >= results[1][i].Recommended);
                        note="Normal"
                      }      
                      else if((results[1][i].Zone!=null) < results[1][i].Recommended){
                        note="Below legal limit"
                      }
                      else if((results[1][i].Zone !=null) >results[1][i].Max){
                        note="Above legal limit"
                      }
                      if(results[1][i].Zone==null){
                        note='Normal'
                      }
                      
                    this.dataSource.data=this.data_all.push({Substance:'pH', Before:results[1][i].Zone ,After:results[1][i].Filtering,Unit:results[1][i].Unit,max:results[1][i].Max,min:results[1][i].Recommended ,note:note,arange_min:results[1][i].minimum,arange_max:results[1][i].maximum})              
                    }             

                  if(results[1][i].Substance=='Microplastics'){
                    
                    if(!results[6]['data']['averageDataRange']==true){            
                    results[1][i].Filtering=parseFloat(results[1][i].Filtering).toFixed(2)                       
                    } 

                    if(results[6]['data']['averageDataRange']==true){
                    }
                    console.log("results[1][i].Filtering",results[1][i].Filtering)
                    this.data_all.push({Substance:'Microplastics', Before:results[1][i].Zone ,After:'Z',Unit:results[1][i].Unit,max:results[1][i].Max,min:results[1][i].Recommended,note:"Unregulated",arange_min:'',arange_max:''})
                  }

                  if(results[1][i].Substance=='TDS'){
                    this.TDS_min=results[1][i].Recommended
                    this.TDS_max=results[1][i].Max
                  }

                  if(results[1][i].Substance=='Conductivity'){                
            
                    if(!(results[6]['data']['averageDataRange']==true)){         
                      
                      results[1][i].Filtering=parseFloat(results[1][i].Filtering).toFixed(2) ;                      
                      this.tds_value= (results[1][i].Filtering) * 0.55  
                      // console.log("results[1][i].Filtering TDS",this.tds_value)
                      // return false  
                      results[1][i].Filtering=(this.tds_value).toFixed(1) 
                      results[1][i].Zone=  (this.tds_value).toFixed(1) 
                      }   

                      if(results[6]['data']['averageDataRange']==true){
                        if(results[1][i].minimum==0 && results[1][i].maximum==0){
                          results[1][i].Zone=0;
                        }else{
                        results[1][i].Zone=results[1][i].minimum+" - "+results[1][i].maximum;
                      }
                      }

                      let note;
                      if(this.tds_value < 600) 
                      {
                        note="Good"
                      }      
                      else if((this.tds_value >=600) && (this.tds_value <= 899) ){
                        note="Regular"
                      }
                      else if((this.tds_value >=900) && (this.tds_value <= 1199)){
                        note="Poor"
                      }
                      if((this.tds_value >=1200)){
                        note='Above limit'
                      }
                      this.dataSource.data=this.data_all.push({Substance:'TDS Minerals', Before:results[1][i].Zone ,After:results[1][i].Filtering,Unit:'',max:results[1][i].Max,min:results[1][i].Recommended ,note:note,arange_min:results[1][i].minimum,arange_max:results[1][i].maximum}) 
                  }

                  if(results[1][i].Substance=='Hardness'){
                    if(results[6]['data']['averageDataRange']==true){
                      results[1][i].Zone=results[1][i].minimum+" - "+results[1][i].maximum;
                      if(!(results[1][i].minimum==null||isNaN(results[1][i].minimum) ||results[1][i].maximum==null||isNaN(results[1][i].maximum))){
                      this.Hardness=(results[1][i].minimum+results[1][i].maximum)/22;
                    }                      
                    }
                    
                    if(results[6]['data']['averageDataRange']!=true){  
                      console.log("in1")                    
                      if(!(results[1][i].Zone==null|| isNaN(results[1][i].Zone)))
                      {
                        this.Hardness=results[1][i].Zone;
                        console.log("true 1!!........................")

                      }
                      
                    }                       
                                   
                  }                  
                  if(results[1][i].Substance=="Hardness f"){
                    this.hardness_f=results[1][i].Zone
                    if(results[6]['data']['averageDataRange']!=true){
                        if(this.Hardness==null||isNaN(this.Hardness)||this.Hardness==undefined){
                          console.log("true 2!!!!!!!!!!!!!")
                            this.Hardness= this.hardness_f*10 ;
                        }
                  }
                    if(results[6]['data']['averageDataRange']==true){
                        if((this.Hardness==null||isNaN(this.Hardness) ||this.Hardness==undefined)){
                        this.Hardness=(results[1][i].minimum+results[1][i].maximum)/22; //hardness f*10 =hardness
                        console.log(this.Hardness,"this.Hardness")

                      }                      
                    }

                   if(((this.Chlorine >0.5 && this.Hardness > 200))||((this.Chlorine > 0.5 && this.Hardness < 200))|| ((this.Chlorine < 0.5 && this.Hardness > 200))||(this.Chlorine > 0.5 && this.Hardness == 0)||((this.Chlorine == 0 && this.Hardness >= 200)) ){
                    this.before='Bad'

                  }
                  if(((0.4 <= this.Chlorine) && (this.Chlorine  <= 0.5)) && ((100 <= this.Hardness) && (this.Hardness<= 200)) ||((0.4 <= this.Chlorine) && (this.Chlorine  <= 0.5)) && ((0== this.Hardness) )){
                    this.before='Ok'
                    console.log(this.before)

                  }
                  if((0.4 > this.Chlorine && this.Hardness <= 100) || (0.4 > this.Chlorine && (this.Hardness < 200 && this.Hardness > 100))||(0.4 > this.Chlorine && this.Hardness ==0)){
                    this.before='Good'
                    console.log(this.before)

                  }
                    this.data_all.push({Substance:'Taste', Before:this.before ,After:'Good',Unit:'',max:results[1][i].Max,min:results[1][i].Recommended,note:"Unregulated",arange_min:'',arange_max:''})

                  }
                  // Hardness                
                  
                }
                
            }

            if(!(results[2] && results[2].constructor === Array && Object.keys(results[2]).length === 0)){ 
              
              for(let i=0;i<Object.keys(results[2]).length;i++){
                if(results[2][i].Substance=="Calcium"){
                  results[2][i].Filtering=parseFloat(results[2][i].Filtering).toFixed(2)                  

                  if(results[6]['data']['averageDataRange']==true){
                    if(results[2][i].minimum==null||isNaN(results[2][i].minimum)){
                      results[2][i].minimum=0;
                    }
                    if(results[2][i].maximum==null||isNaN(results[2][i].maximum)){
                      results[2][i].maximum=0;
                    }
                    results[2][i].Zone=results[2][i].minimum+" - "+results[2][i].maximum;
                                          
                  }
                 
                  if(isNaN(results[2][i].Zone) || results[2][i].Zone==null){
                    results[2][i].Zone='Low';            
                  }
                                

                if(isNaN(results[2][i].Filtering) || results[2][i].Filtering==null){
                  
                  results[2][i].Filtering='Low';            
                console.log("results[2][i].Filtering.........",results[2][i].Filtering)

                }
                if(!(isNaN(results[2][i].Filtering) || results[2][i].Filtering==null)){

                    if(results[2][i].Filtering>180 ){
                      results[2][i].Filtering="Very high";
                    }
                    if(results[2][i].Filtering<=180 && results[2][i].Filtering >=121){
                      results[2][i].Filtering="High";
                    }
                    if(results[2][i].Filtering<=120 && results[2][i].Filtering >=61){
                      this.data_all[i].Filtering="Medium";
                    }
                    if(results[2][i].Filtering <= 60){
                      results[2][i].Filtering="Low";
                    }
              }

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
                  if(results[3][i].Zone==null){
                    note='Unregulated'
                  }
                console.log("results[2][i].Zone",results[2][i].Zone)
                this.data_all.push({Substance:'Limescale', Before:results[2][i].Zone ,After:results[2][i].Filtering,Unit:results[2][i].Unit,max:results[2][i].Max,min:results[2][i].Recommended,note:'Unregulated',arange_min:results[2][i].minimum,arange_max:results[2][i].maximum})
                }

              }
              
          }
                        
          
            if(!(results[3] && results[3].constructor === Array && Object.keys(results[3]).length === 0)){   
              // console.log("results[3]",results[3])
                for(let i=0;i<Object.keys(results[3]).length;i++){
                  if(results[3][i].Substance=='Nitrates'){
                  if(!results[6]['data']['averageDataRange']==true){            
                      results[3][i].Filtering=parseFloat(results[3][i].Filtering).toFixed(2) 
                                    
                    }                  

                    if(results[6]['data']['averageDataRange']==true){
                      results[3][i].Zone=results[3][i].minimum+" - "+results[3][i].maximum;
                                            
                    }
                    else if(isNaN(results[3][i].Filtering) || results[3][i].Filtering==null){
                      results[3][i].Filtering=0
                    }
                    let note;
                     if((results[3][i].Max >= (results[3][i].Zone !=null))&&((results[3][i].Zone!=null) > results[3][i].Recommended)) 
                    {
                      note="Below legal limit"
                    }      
                    else if((results[3][i].Zone!=null) < results[3][i].Recommended){
                      note="Below legal limit"
                    }
                    else if((results[3][i].Zone!=null) >results[3][i].Max){
                      note="Above legal limit"
                    }
                    if(results[3][i].Zone==null){
                      note='Below legal limit'
                    }

                    this.data_all.push({Substance:'Nitrates', Before:results[3][i].Zone ,After:results[3][i].Filtering,Unit:results[3][i].Unit,max:results[3][i].Max,min:results[3][i].Recommended,note:note,arange_min:results[3][i].minimum,arange_max:results[3][i].maximum})                 
                  }

                }      
            }

            if(!(results[4] && results[4].constructor === Array && Object.keys(results[4]).length === 0)){              

              var largest=0;
              var smallest=0;
              this.data_all.push({Substance:'Bacterias/virus', Before:"None reported" ,After:"None reported",Unit:"",max:largest,min:smallest,note:'Below legal limit',arange_min:'',arange_max:'None reported'}) 

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
              var largest=0;
              var smallest=0;            
              this.data_all.push({Substance:'Heavy Metals', Before:'Detected' ,After:after,Unit:"",max:largest,min:smallest,note:'Below legal limit',arange_min:'',arange_max:'Safe level'})        
          }
          
            if(!(results[6] && results[6].constructor === Array && Object.keys(results[6]).length === 0)){   
              console.log("result------------",results[6]['data'])
              this.data['utlity_enter']=results[6]['data']['utlity_enter'];
              this.data['province']=results[6]['data']['province'];
              this.data['city']=results[6]['data']['city'][0]['city'];
              this.data['country']=results[6]['data']['country'];
              this.data['description']=results[6]['data']['description'];
              this.data['water']=results[6]['data']['yes'];
              this.data['drinkable']=results[6]['data']['drinkable'],
              this.data['blog_link']=results[6]['data']['blog_english'],
              this.data['averageDataRange']=results[6]['data']['averageDataRange']
              this.data['description_local']=results[6]['data']['description_local']
              this.data['blog_english__country']=results[6]['data']['blog_english__country']
              this.data['blog_local_country']=results[6]['data']['blog_local_country']
              this.data['blog_local']=results[6]['data']['blog_local']

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
            console.log(this.hold_array.data)
            // return false;
              for(let i=0;i<this.data_all.length;i++){ 
                if(this.data_all[i].Substance=='Microplastics' ){                      
                    if(this.data_all[i].Before==null||this.data_all[i].Before==undefined ||this.data_all[i].Before=='' ||this.data_all[i].After==null ||isNaN(this.data_all[i].After) ||isNaN(this.data_all[i].Before)){
                      this.data_all[i].Before="Unknown";
                      this.data_all[i].After='0';
                      this.data_all[i].note='Unregulated';
                      this.data_all[i].arange_max="z";
                      console.log("this.data_all[i].After",this.data_all[i].After)
                    }                   
                }
     
                if(this.data_all[i].Substance=='Chlorine' ){  

                  if(this.data_all[i].Before!=undefined) {   
                if(this.data_all[i].Before=='0'){ 
                  this.Chlorine=parseFloat(this.data_all[i].Before);
                } 
                

                 }
                 else if(this.data_all[i].Before==undefined ||isNaN(this.data_all[i].Before)){
                console.log('this.Chlorine 2',this.Chlorine)
                this.Chlorine=0                     

                 }

              }

               // start rule for limescale
                if(this.data_all[i].Substance=='Limescale'){
                  
                  if(this.average){                    
                    if(this.data_all[i].arange_max!=null || this.data_all[i].arange_max!=0)
                  {

                      this.data_all[i].arange_max=parseFloat(this.data_all[i].arange_max)/2; 

                      if(this.data_all[i].arange_max>180 ){
                        this.data_all[i].arange_max="Very high";
                      }
                      if(this.data_all[i].arange_max<=180 && this.data_all[i].arange_max >=121){
                        this.data_all[i].arange_max="High";
                      }
                      if(this.data_all[i].arange_max<=120 && this.data_all[i].arange_max >=61){
                        this.data_all[i].arange_max="Medium";
                      }
                      if(this.data_all[i].arange_max <= 60){
                        this.data_all[i].arange_max="Low";
                      }

                    console.log("here",this.data_all[i].arange_max)

                }

                  }
                  if(this.data_all[i].Before!=null || this.data_all[i].After==null)
                  {
                  if(this.data_all[i].Before!=null||! isNaN(this.data_all[i].Before)){
                    this.data_all[i].Before=parseFloat(this.data_all[i].Before); 
                    if(this.Hardness>=330 ){
                      this.data_all[i].Before="Very high";
                    }
                    if(this.Hardness<=329 && this.Hardness >=150){
                      this.data_all[i].Before="High";
                    }
                    if(this.Hardness<=149 && this.Hardness >=80){
                      this.data_all[i].Before="Medium";
                    }
                    if(this.Hardness <= 79){
                      this.data_all[i].Before="Low";
                    }
                }
              
                if(this.data_all[i].After!=null || !isNaN(this.data_all[i].Before)){

                  this.data_all[i].After="Low";
                }
                }
                
                }
              }                 
              
          }

          else{
            this.table_hide=true;
          }

        });

  }
  check(){
        this.router.navigate([this.page_router,this.data['basic_details_id'],this.data['postcode']]).then(() => {
        window.location.reload();
  });

  }
  opennewtap(){
    console.log("this.data.blog_link",this.data.blog_link,"this.data.blog_local",this.data.blog_local)
    if(sessionStorage.getItem("pageTitle")=='English'){  
    window.open(this.data.blog_link)
  }
  else{
    window.open(this.data.blog_local)
  
  }
 }
open(){
  window.open('https://tappwater.co/en/water-safety-taste-and-limescale/', '_blank')
}

learn(){
  console.log('sessionStorage.getItem("pageTitle")',sessionStorage.getItem("pageTitle"))
  if(sessionStorage.getItem("pageTitle")=='Spanish'){
  window.open('https://tappwater.co/es/tecnologia-filtros-de-agua-para-grifo/')
}
else if(sessionStorage.getItem("pageTitle")=='English'){
  window.open("https://tappwater.co/en/how-does-faucet-water-filters-work/")

}
else{
  window.open("https://tappwater.co/it/come-funzionano-filtri-per-acqua-del-rubinetto/")

}
}
opentappp(url){
  window.open(url)

}

}


