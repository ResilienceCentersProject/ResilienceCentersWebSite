import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterByLocationComponent } from './center-by-location/center-by-location.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PublicInfoComponent } from './public-info/public-info.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [ 
  {path:'', redirectTo: '/home-page', pathMatch: 'full'},
  {path:'center-by-location', component: CenterByLocationComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path:'home-page', component: HomePageComponent},
  {path:'public-info', component: PublicInfoComponent},
  {path:'team-info', component: TeamInfoComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
[
  CenterByLocationComponent,
  ContactUsComponent,
  HomePageComponent,
  PublicInfoComponent,
  TeamInfoComponent,
  PageNotFoundComponent
]
