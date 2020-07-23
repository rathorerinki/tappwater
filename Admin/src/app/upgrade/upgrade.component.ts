import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ApiService } from '../../app/api.service';

export interface PeriodicElement {
id: number;
email: string;
postcode: string;

}



@Component({
selector: 'app-upgrade',
templateUrl: './upgrade.component.html',
styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {
url:any="http://18.191.230.23:3000/";
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

displayedColumns: string[] = ['id', 'postcode','country', 'email','date',"action"];
dataSource:any;
data: any={};
constructor(public _apiService:ApiService) { }

ngOnInit() {
this.show();
this.dataSource.paginator = this.paginator;

}

show(){
this.dataSource = new MatTableDataSource();
this._apiService.getData(this.url+"getdata_email").subscribe(
res => { 
console.log("testing",res)
this.dataSource.data=res;
console.log(this.dataSource.data)
console.log(this.dataSource)
return this.dataSource;				 	

},
err => console.error(err),
);
} 


delete(_id){
this.data['_id']=_id;
    this._apiService.sendData(this.url+"delete_email",this.data).subscribe(
        res => { 
        console.log("testing",res)	 	
        this.show();
        },
        err => console.error(err),
        );
    } 

        applyFilter(event: Event) {
            const filterValue = (event.target as HTMLInputElement).value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        
}


