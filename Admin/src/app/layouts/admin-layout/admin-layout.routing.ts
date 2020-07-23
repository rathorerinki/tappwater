import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';
// import { ContributorComponent } from '../../contributor/contributor.component';
import { GraphdashboardComponent } from '../../graphdashboard/graphdashboard.component';
import { KpisComponent } from '../../kpis/kpis.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile/:id',   component: UserProfileComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'country',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'maindashboard',  component: GraphdashboardComponent },
    { path: 'KPIs',        component: KpisComponent },
    { path: 'users',        component: UpgradeComponent }
];
