import { Component, OnInit, Inject, ViewChild } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.scss']
})
export class YComponent implements OnInit {
@ViewChild(MatPaginator, {static: true} as any) paginator: MatPaginator;
  
  constructor(public dialogRef: MatDialogRef<YComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.data['paginator'] = this.paginator;
    console.log(this.data)
    

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
