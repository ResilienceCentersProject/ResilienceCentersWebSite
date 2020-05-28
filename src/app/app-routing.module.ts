import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PublicInfoComponent } from './public-info/public-info.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CenterInfoComponent } from './center-info/center-info.component';
import { FoldersComponent } from './folders/folders.component';
import { FilesComponent } from './files/files.component';
import { AuthorizedZoneComponent } from './authorized-zone/authorized-zone.component';
import { LocationComponent } from './location/location.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [ 
  {path:'', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'authorized-zone', component: AuthorizedZoneComponent, canActivate: [AuthGuardService]},
  // {path:'location/:id',component: LocationComponent},
  {path:'center-info/:id',component: CenterInfoComponent},
  {path:'public-info/:id',component: PublicInfoComponent},
  {path: 'folders/:id', component:FoldersComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path:'home-page', component: HomePageComponent},
  // {path:'public-info', component: PublicInfoComponent},
  {path:'team-info', component: TeamInfoComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ContactUsComponent,
                                   HomePageComponent,
                                   PublicInfoComponent,
                                   TeamInfoComponent,
                                   PageNotFoundComponent,
                                   LocationComponent,
                                   CenterInfoComponent,
                                   AuthorizedZoneComponent,
                                   FoldersComponent
                                 ]
