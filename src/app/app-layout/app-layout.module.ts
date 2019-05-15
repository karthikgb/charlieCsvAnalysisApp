import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './app-layout.routing';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatTableModule,
  MatSortModule,
  MatExpansionModule,
  MatIconModule
} from '@angular/material';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageDataComponent } from './manage-data/manage-data.component';
import { AnalyzeDataComponent } from './analyze-data/analyze-data.component';
import { SystemStatusComponent } from './System-Status/system-status.component';
import { SettingsComponent } from './settings/settings.component';
import { SplashPageComponent } from './splashPage/splashPage.component';
import { MatDividerModule } from '@angular/material/divider';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { CommonService } from './common-service';
import { HttpClientModule } from '@angular/common/http';
import { PapaParseModule } from 'ngx-papaparse';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ChartComponent } from './analyze-data/chart/chart.component';
import { AnomalyComponent } from './analyze-data/anomaly/anomaly.component';
import { CauseComponent } from './analyze-data/cause/cause.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    AmChartsModule,
    HttpClientModule,
    PapaParseModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule
  ],
  declarations: [
    DashboardComponent,
    ManageDataComponent,
    AnalyzeDataComponent,
    SystemStatusComponent,
    SettingsComponent,
    SplashPageComponent,
    CauseComponent,
    AnomalyComponent,
    ChartComponent
  ],
  providers: [CommonService]
})

export class AppLayoutModule { }
