import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageDataComponent } from './manage-data/manage-data.component';
import { AnalyzeDataComponent } from './analyze-data/analyze-data.component';
import { SystemStatusComponent } from './System-Status/system-status.component';
import { SettingsComponent } from './settings/settings.component';
import { SplashPageComponent } from './splashPage/splashPage.component';
import { ChartComponent } from './analyze-data/chart/chart.component';
import { CauseComponent } from './analyze-data/cause/cause.component';
import { AnomalyComponent } from './analyze-data/anomaly/anomaly.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'manage-data', component: ManageDataComponent },
    {
        path: 'analyze-data', component: AnalyzeDataComponent, children: [
            {
                path: 'chart',
                component: ChartComponent
            },
            {
                path: 'anomaly',
                component: AnomalyComponent
            },
            {
                path: 'cause',
                component: CauseComponent
            }

        ]
    },
    {
        path: 'system-status', component: SystemStatusComponent
    },
    { path: 'settings-data', component: SettingsComponent },
    { path: 'splash', component: SplashPageComponent },
    { path: '', redirectTo: 'splash', pathMatch: 'full' }

];
