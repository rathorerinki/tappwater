import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { ApiService } from '../api.service';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router'; // import Router and NavigationEnd

// import * as $ from 'jquery';
declare var $: any;
export interface data {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

declare let ga: Function;


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
  tds_value: any;

  constructor(public dialog: MatDialog,private translate: TranslateService, public title: Title,private router:Router,private apiservices:ApiService,private route:ActivatedRoute) {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        
        let value;
        var str=event.urlAfterRedirects;
        var splitted = str.split("/", 2); 
  
        if(splitted[1]=='componentes-de-agua'||splitted[1]=='componentes-de-agua' ||splitted[1]=='check'){
          value='Detailed page of results';
        console.log("event.urlAfterRedirects true",value)
        ga('set', 'page', value);
        ga('send', 'pageview');
  
  }
  
      }
  
    });
  this.route.params.subscribe(params => {
      this.data['basic_details_id'] = params['id'];
      this.data['id'] = params['id'];
      this.data['city']=params['city']
      this.data['postcode'] = params['postcode'];
     
});

}



function1(l,lang_data){
  console.log("pageTitle",lang_data)
  sessionStorage.removeItem("pageTitle")
  sessionStorage.setItem("pageTitle",lang_data)
}

display(){

    this.apiservices.postdata("post_code",this.data).subscribe((res)=>{   
    console.log(res)
    this.data['utlity_enter']=res['data']['utlity_enter'];
    this.data['city']=res['data']['city'][0]['city'];
    this.data['country']=res['data']['country'];
    this.data['province']=res['data']['province'];
    this.data['averageDataRange']=res['data']['averageDataRange']


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
        if(this.data['averageDataRange']==true){            
          this.results[0][j]['Filtering']=(parseFloat(results[0][j].Filtering)).toFixed(2)    

          } 
          else{
          this.results[0][j]['Filtering']= (parseFloat(this.results[0][j]['Filtering'])).toFixed(2)
          this.results[0][j]['Filtering']=Number(this.results[0][j]['Filtering']).toString()

        }
      }
    this.tables.push({table:"Water safety",data:this.results[0]})
  }
  if(!(results[1] && results[1].constructor === Array && Object.keys(results[1]).length === 0)){
    for(let j=0;j<this.results[1].length;j++){
      if(this.data['averageDataRange']==true){  
        if(this.results[1][j]['Substance']=="Microplastics"){
          this.results[1][j]['Filtering']='Z'
        }
            else{      
          this.results[1][j]['Filtering']=results[1][j].Filtering        
        }    
        if(this.results[1][j]['Substance']=="TDS"){
          // this.results[1][j]['Filtering']='Z'
         console.log("this.results[1][j]['Filtering'] "+this.results[1][j]['Filtering'] )
        }
            else{      
          this.results[1][j]['Filtering']=results[1][j].Filtering        
        }                 
        } 


        else{
              if(this.results[1][j]['Substance']=="Microplastics"){
                this.results[1][j]['Filtering']='Z'
              }
              else{ 
               this.results[1][j]['Filtering']= (parseFloat(this.results[1][j]['Filtering'])).toFixed(2)
               this.results[1][j]['Filtering']=Number(this.results[1][j]['Filtering']).toString()
              
              }
             /* if(this.results[1][j]['Substance']=="Conductivity"){
                this.tds_value=(this.results[1][j]['Filtering']) * 0.55;
              }
              if(this.results[1][j]['Substance']=="TDS"){

               if(isNaN(this.results[1][j]['Filtering'])){
                this.results[1][j]['Filtering']=(this.tds_value).toFixed(1)
                this.results[1][j]['Zone']=(this.tds_value).toFixed(1)
                if(results[6]['data']['averageDataRange']==true){

                    if(this.results[1][j].minimum==0 && this.results[1][j].maximum==0){
                      this.results[1][j].Zone=0;
                    }else{
                      this.results[1][j].Zone=this.results[1][j].minimum+" - "+this.results[1][j].maximum;
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
               }

              }
                  else{      
                this.results[1][j]['Filtering']=results[1][j].Filtering        
              }  
              */ 
              }
      }
    this.tables.push({table:"General",data:results[1]})
  }
  if(!(results[2] && results[2].constructor === Array && Object.keys(results[2]).length === 0)){ 
    for(let j=0;j<this.results[2].length;j++){
      // console.log(this.results[0][j]);
      
      if(this.data['averageDataRange']==true){            
        this.results[2][j]['Filtering']=results[2][j].Filtering  
        // this.results[2][j]['Filtering']=Number(this.results[2][j]['Filtering']).toString()

        } 
        else{
          this.results[2][j]['Filtering']= (parseFloat(this.results[2][j]['Filtering'])).toFixed(2)
          this.results[2][j]['Filtering']=Number(this.results[2][j]['Filtering']).toString()
        
        }
      } 
    this.tables.push({table:"Pathogens",data:results[2]})
  }
  if(!(results[3] && results[3].constructor === Array && Object.keys(results[3]).length === 0)){  
    for(let j=0;j<this.results[3].length;j++){
      // console.log(this.results[0][j]);
      if(this.data['averageDataRange']==true){            
        this.results[3][j]['Filtering']=results[3][j].Filtering 
        // this.results[3][j]['Filtering']=Number(this.results[3][j]['Filtering']).toString()

        } 
        else{
          this.results[3][j]['Filtering']= (parseFloat(this.results[3][j]['Filtering'])).toFixed(2)
          this.results[3][j]['Filtering']=Number(this.results[3][j]['Filtering']).toString()
        
        }
      } 
    this.tables.push({table:"Chemical parameter",data:results[3]})

  }
  if(!(results[4] && results[4].constructor === Array && Object.keys(results[4]).length === 0)){  
    for(let j=0;j<this.results[4].length;j++){
      // console.log(this.results[0][j]);
      if(this.data['averageDataRange']==true){            
        this.results[4][j]['Filtering']=results[4][j].Filtering
        // this.results[4][j]['Filtering']=Number(this.results[4][j]['Filtering']).toString()

        } 
        else{
          this.results[4][j]['Filtering']= (parseFloat(this.results[4][j]['Filtering'])).toFixed(2)
          this.results[4][j]['Filtering']=Number(this.results[4][j]['Filtering']).toString()
        
        }
      } 
    this.tables.push({table:"Minerals",data:results[4]})

  }
  if(!(results[5] && results[5].constructor === Array && Object.keys(results[5]).length === 0)){  
    for(let j=0;j<this.results[5].length;j++){
      if(this.data['averageDataRange']==true){            
        this.results[5][j]['Filtering']=results[5][j].Filtering  
        // this.results[5][j]['Filtering']=Number(this.results[5][j]['Filtering']).toString()

        } 
        else{
          this.results[5][j]['Filtering']= (parseFloat(this.results[5][j]['Filtering'])).toFixed(2)
          this.results[5][j]['Filtering']=Number(this.results[5][j]['Filtering']).toString()
          
        }
      } 
    this.tables.push({table:"Metals",data:results[5]})

  }
  if(!(results[6] && results[6].constructor === Array && Object.keys(results[6]).length === 0)){  
    for(let j=0;j<this.results[6].length;j++){
      if(this.data['averageDataRange']==true){            
        this.results[6][j]['Filtering']=results[6][j].Filtering 
        // this.results[6][j]['Filtering']=Number(this.results[6][j]['Filtering']).toString()

        } 
        else{
         this.results[6][j]['Filtering']= (parseFloat(this.results[6][j]['Filtering'])).toFixed(2)
         this.results[6][j]['Filtering']=Number(this.results[6][j]['Filtering']).toString()
        
        }
  } 
    this.tables.push({table:"Chlorine bi products",data:results[6]})

  }
  if(!(results[7] && results[7].constructor === Array && Object.keys(results[7]).length === 0)){  
    for(let j=0;j<this.results[7].length;j++){
      if(this.data['averageDataRange']==true){            
        this.results[7][j]['Filtering']=results[7][j].Filtering   
        // this.results[7][j]['Filtering']=Number(this.results[7][j]['Filtering']).toString()

        } 
        else{
      this.results[7][j]['Filtering']= (parseFloat(this.results[7][j]['Filtering'])).toFixed(2)
      this.results[7][j]['Filtering']=Number(this.results[7][j]['Filtering']).toString()
    
    }
  } 
    this.tables.push({table:"HAAs",data:results[7]})

  }
  if(!(results[8] && results[8].constructor === Array && Object.keys(results[8]).length === 0)){  
    for(let j=0;j<this.results[8].length;j++){
      if(this.data['averageDataRange']==true){            
        this.results[8][j]['Filtering']=results[8][j].Filtering  
      // this.results[8][j]['Filtering']=Number(this.results[8][j]['Filtering']).toString()

        } 
        else{
      this.results[8][j]['Filtering']= (parseFloat(this.results[8][j]['Filtering'])).toFixed(2)
      this.results[8][j]['Filtering']=Number(this.results[8][j]['Filtering']).toString()
    
    }
  } 
    this.tables.push({table:"Pesticides",data:results[8]})

  }
  if(!(results[9] && results[9].constructor === Array && Object.keys(results[9]).length === 0)){  
    for(let j=0;j<this.results[9].length;j++){
      if(this.data['averageDataRange']==true){            
        this.results[9][j]['Filtering']=results[9][j].Filtering  
      // this.results[9][j]['Filtering']=Number(this.results[9][j]['Filtering']).toString()

        } 
        else{
      this.results[9][j]['Filtering']= (parseFloat(this.results[9][j]['Filtering'])).toFixed(2)
      this.results[9][j]['Filtering']=Number(this.results[9][j]['Filtering']).toString()
    
    }
  } 
    this.tables.push({table:"Herbicides",data:results[9]})

  }
  if(!(results[10] && results[10].constructor === Array && Object.keys(results[10]).length === 0)){ 
    for(let j=0;j<this.results[10].length;j++){
      if(this.data['averageDataRange']==true){            
        this.results[10][j]['Filtering']=results[10][j].Filtering 
      // this.results[10][j]['Filtering']=Number(this.results[10][j]['Filtering']).toString()

        } 
        else{
      this.results[10][j]['Filtering']= (parseFloat(this.results[10][j]['Filtering'])).toFixed(2)
      this.results[10][j]['Filtering']=Number(this.results[10][j]['Filtering']).toString()
    
    }
  }  
    this.tables.push({table:"Perfluorinated chemicals",data:results[10]})

  }
  if(!(results[11] && results[11].constructor === Array && Object.keys(results[11]).length === 0)){  
    for(let j=0;j<this.results[11].length;j++){
      if(this.data['averageDataRange']==true){            
        this.results[11][j]['Filtering']=results[11][j].Filtering   
      // this.results[11][j]['Filtering']=Number(this.results[11][j]['Filtering']).toString()

        } 
        else{
      this.results[11][j]['Filtering']= (parseFloat(this.results[11][j]['Filtering'])).toFixed(2)
      this.results[11][j]['Filtering']=Number(this.results[11][j]['Filtering']).toString()
    
    }
  }  
    this.tables.push({table:"Other",data:results[11]})

  }
  if(!(results[12] && results[12].constructor === Array && Object.keys(results[12]).length === 0)){
    for(let j=0;j<this.results[12].length;j++){
      if(this.data['averageDataRange']==true){            
        this.results[12][j]['Filtering']=results[12][j].Filtering
      // this.results[12][j]['Filtering']=Number(this.results[12][j]['Filtering']).toString()

        } 
        else{
      this.results[12][j]['Filtering']= (parseFloat(this.results[12][j]['Filtering'])).toFixed(2)
      this.results[12][j]['Filtering']=Number(this.results[12][j]['Filtering']).toString()
    
    }
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

    this.translate.addLangs(['English', 'Spanish','Italian']);
    console.log(sessionStorage.getItem("pageTitle")=='Spanish' || sessionStorage.getItem("pageTitle")=='English'||sessionStorage.getItem("pageTitle")=='Italian')

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

    this.router.navigate(['/tap-water-quality-report',this.data['basic_details_id'],this.data['postcode']] )

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
