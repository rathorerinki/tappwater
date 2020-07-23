import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { RouterModule, } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { CommonModule ,LocationStrategy, HashLocationStrategy} from '@angular/common';
import { MatTableExporterModule } from 'mat-table-exporter';
import { ChartsModule } from 'ng2-charts';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ExcelService } from './services/excel.service';

// import { CommonModule } from '@angular/common';

import {
                                            MatAutocompleteModule,
                                            MatBadgeModule,
                                            MatBottomSheetModule,
                                            MatButtonModule,
                                            MatButtonToggleModule,
                                            MatCardModule,
                                            MatCheckboxModule,
                                            MatChipsModule,
                                            MatDatepickerModule,
                                            MatDialogModule,
                                            MatDividerModule,
                                            MatExpansionModule,
                                            MatGridListModule,
                                            MatIconModule,
                                            MatInputModule,
                                            MatListModule,
                                            MatMenuModule,
                                            MatNativeDateModule,
                                            MatPaginatorModule,
                                            MatProgressBarModule,
                                            MatProgressSpinnerModule,
                                            MatRadioModule,
                                            MatRippleModule,
                                            MatSelectModule,
                                            MatSidenavModule,
                                            MatSliderModule,
                                            MatSlideToggleModule,
                                            MatSnackBarModule,
                                            MatSortModule,
                                            MatStepperModule,
                                            MatTableModule,
                                            MatTabsModule,
                                            MatToolbarModule,
                                            MatTooltipModule,
                                            MatTreeModule,
                                            
                                          } from '@angular/material';
import { LoginComponent } from './login/login.component';
// import {MatExpansionModule} from '@angular/material/expansion';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserModule} from '@angular/platform-browser';
import { Component1Component } from './lazymodule/component1/component1.component';
import { Component2Component } from './lazymodule/component2/component2.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// import { YComponent } from './table-list/y/y.component';


@NgModule({
  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    MatTableExporterModule,ChartsModule,
  ],
  declarations: [Component1Component, Component2Component,],
  // entryComponents:[YComponent,],

})

export class DemoMaterialModule {}
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    HttpModule,
    MatExpansionModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,  
    MatButtonModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    AngularFontAwesomeModule,
    DemoMaterialModule,
    MatFormFieldModule,
    MatTableExporterModule,MatIconModule,MatMenuModule, HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  // exports: [MatExpansionModule],
  // entryComponents:[ContributorComponent,UpgradeComponent,],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    // YComponent,
  ],
  providers: [ApiService,{provide: LocationStrategy, useClass: HashLocationStrategy},ExcelService],
  bootstrap: [AppComponent],
  // entryComponents:[YComponent],

})
export class AppModule { }
