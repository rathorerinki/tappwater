
import { Input, Component, Output, EventEmitter ,OnInit} from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	data:any={};
	error:boolean=false;
	// url=""
  constructor(private router: Router,public translate: TranslateService,private _apiService: ApiService) { 
	translate.addLangs(['english', 'spanish']);
    translate.setDefaultLang('english');
	this._apiService.language('english');
	sessionStorage.setItem('selected_language','english')   
  }

  ngOnInit() {
  	  }


  submit() {
	  console.log(this.data)
	  
	  this._apiService.sendData("http://18.191.230.23:3000/admin_details",this.data).subscribe((res)=>{

	//   console.log("res",res['data'][0]=='Email and password does not match')
	//   console.log("res",res['data'][0]['_id'])
		if(res['data'][0] !='Email and password does not match'){
			localStorage.setItem('admin',res['data'][0]['_id']);
			console.log("success")
			this.router.navigate(['/table-list']);
		}
		else{
			this.error=true;
		}

	  })



  }
 
  function_(event){
    console.log(event.target.value);
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(event.target.value);
	sessionStorage.setItem('selected_language',event.target.value)
    this._apiService.language(event.target.value);
    console.log("router",this.router.url)
  
}
}
