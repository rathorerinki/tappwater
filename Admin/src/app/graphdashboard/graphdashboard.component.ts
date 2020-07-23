import { Component, OnInit, KeyValueDiffers } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-graphdashboard',
  templateUrl: './graphdashboard.component.html',
  styleUrls: ['./graphdashboard.component.scss']
})
export class GraphdashboardComponent implements OnInit {
  next_: boolean;
  differ: any;


  constructor(private router: Router,public translate: TranslateService,public _apiservice:ApiService,private differs: KeyValueDiffers) { 
      
  }
  
ngOnInit(){
  this.display();
  
}
ngDoCheck() {

}
  next(){
    this.router.navigate(['/maindashboard']);
    }
    back(){
      this.router.navigate(['/icons']);
 
    }

  display(){
     
      console.log("value",sessionStorage.getItem('selected_language'))
      // console.log(this._apiservice.take_language());
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(sessionStorage.getItem('selected_language'));    
    }
}

