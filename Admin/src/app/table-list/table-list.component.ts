import { Component, OnInit,ViewChild, KeyValueDiffers, ɵConsole, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { YComponent } from './y/y.component';
import {ExcelService} from '../services/excel.service';
import * as XLSX from 'xlsx'; 
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';
import * as $ from 'jquery';




export interface data {
  Id: number;
  City:any;
  Autonomous:any;
  Country:any;
  Post_code:any;
  Date:any;
  Water:any;
}


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})


export class TableListComponent implements OnInit {

fileName= 'ExcelSheet.xlsx';  
customers:any;
// url:any;
url:any="http://18.191.230.23:3000/";
res_ere:any;
term:any;
dataSource:any;
_show:boolean;
export_data:any=[];
hide_show_pop:boolean=false;
@ViewChild(MatPaginator, {static: true} as any) paginator: MatPaginator;

 @ViewChild('excel_table', {static: true} as any) excel_table:ElementRef;  
 

displayedColumns: string[] = ['id', 'City', 'Province','Autonomous', 'Country','Date','Submitted date','Water','view'];

  all_data: any;
  data_export: any;


  constructor(private excelService:ExcelService,public dialog: MatDialog,private router: Router,public translate: TranslateService,public _apiService:ApiService,private differs: KeyValueDiffers) {
   this.show();
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator; 
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(sessionStorage.getItem('selected_language')); 
  }
  openDialog(cities): void {
    console.log(cities)
    let dialogRef = this.dialog.open(YComponent, {
      
      width: '60%',
      data:  cities,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  show(){
  	this.dataSource = new MatTableDataSource();
		this._apiService.getData(this.url+"select").subscribe(
				 res => { 
           this.dataSource.data= res;
           console.log("res",res)
				 	return this.dataSource;			 	
				 	
				 },
			    	err => console.error(err),
		   );
  } 
  export(id){

    this.hide_show_pop=true;
    this._apiService.postDataid(this.url+"export_all_data",id).subscribe(
      res => { 
        this.res_ere=res; 
        this.hide_show_pop=false;
        this.excelService.exportAsExcelFile(this.res_ere, 'Repots');
          return false;
           }
         );


  }

  export1(){    
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(document.getElementById('excel_table'));
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');


    
  }
  resolve(){
  console.log("export_data",this.export_data)
  this.excelService.exportAsExcelFile(this.export_data, 'sample');

  }
delete(id){
    if(confirm("Are you sure?") ==true){
      this._apiService.postDataid(this.url+"delete",id).subscribe(
        res => { 
        this.show();
        }

      )
    }
  }

            
 view(cid){

    this.router.navigate(['/user-profile'],{ state: { id: cid } });

 }
add(){
  this.router.navigate(['/typography']);
}
applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
