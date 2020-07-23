import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router'; // import Router and NavigationEnd
declare let ga: Function;

@Component({
  selector: 'app-nodata',
  templateUrl: './nodata.component.html',
  styleUrls: ['./nodata.component.css']
})
export class NodataComponent implements OnInit {
  data: any={};
  registerForm: FormGroup;
  submitted = false;
  pageTitle: string;

 

  constructor(private translate: TranslateService, public title: Title,private formBuilder: FormBuilder,private router:Router,private apiservices:ApiService,private route:ActivatedRoute) {
    
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        let value;
        var str=event.urlAfterRedirects;
        var splitted = str.split("/", 2); 
  
        if(splitted[1]=='Nodata'){
          value='Missing postcode';
        console.log("event.urlAfterRedirects true",value)
        ga('set', 'page', value);
        ga('send', 'pageview');
  
  }
      }

    })
    this.route.params.subscribe(params => {
      this.data['postcode'] = params['id'];
      this.data['country'] = params['country'];
     console.log(" this.data['postcode']", this.data['postcode'])
});
   }

   okay(){
    console.log(" this.data['postcode']", this.data.email)

    this.apiservices.postdata("insert_customers",this.data).subscribe((res)=>{
   
      console.log("res",res);
  
  this.router.navigate(['/confirmation'])
        })


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
    this.registerForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],     
  });
  }
  function1(l,lang_data){
    console.log("pageTitle",lang_data)
    sessionStorage.removeItem("pageTitle")
    sessionStorage.setItem("pageTitle",lang_data)
  }
  setTheTitle(): void {
    this.title.setTitle(this.pageTitle);
    
  }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {

        this.submitted = true;
        this.data.email=this.registerForm.value.email;
          if (this.registerForm.invalid) {
          return;
          }
          this.apiservices.postdata("insert_customers",this.data).subscribe((res)=>{      
              console.log("res",res);      
              this.router.navigate(['/confirmation'])
            })

    }

}
