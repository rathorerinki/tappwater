import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule,} from '@angular/material/menu';
import { Router } from '@angular/router';
declare var $: any;
import {TranslateService} from '@ngx-translate/core';

import {ApiService} from '../../api.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  child: any
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  internal_dropdown:boolean=false;
  payment_dropdown: boolean;

  constructor(public translate: TranslateService,private router: Router,private _apiservice: ApiService,) {
    this.display();
  }
  ngOnInit() {
   
  }

  display(){

    const browserLang = this.translate.getBrowserLang();
      this.translate.use(sessionStorage.getItem('selected_language'));
  }


  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  };
  internal()
  {
    if(this.internal_dropdown==true){
      this.internal_dropdown=false;
    }
    else{
      this.internal_dropdown=true;
      this.payment_dropdown=false
    }
  }

  payment(){
    if(this.payment_dropdown==true){
      this.payment_dropdown=false
    }
    else{
      this.payment_dropdown=true;
      this.internal_dropdown=false
    }
  }

  // users(){

  // }
  customers(){
    if(this.payment_dropdown==true || this.internal_dropdown==true){
      this.payment_dropdown=false;
      this.internal_dropdown=false
    }    
  }
}
