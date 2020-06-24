import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorizedZoneComponent } from './auth/authorized-zone/authorized-zone.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from "./auth/guard/auth.guard";//guard for firebase-Authentication
import { FilesComponent } from './auth/files/files.component';

//For centers
import { ShomronComponent } from './center-info/shomron/shomron.component';
import { AshkelonComponent } from './center-info/ashkelon/ashkelon.component';
import { AshkelonBeachComponent } from './center-info/ashkelon-beach/ashkelon-beach.component';
import { BenjaminComponent } from './center-info/benjamin/benjamin.component';
import { BedouinSocietyComponent } from './center-info/bedouin-society/bedouin-society.component';
import { EshkolComponent } from './center-info/eshkol/eshkol.component';
import { EtzionComponent } from './center-info/etzion/etzion.component';
import { JudeaComponent } from './center-info/judea/judea.component';
import { NegevFieldsComponent } from './center-info/negev-fields/negev-fields.component';
import { SderotComponent } from './center-info/sderot/sderot.component';
import { ShaarHanegevComponent } from './center-info/shaar-hanegev/shaar-hanegev.component';

//For public-info
import { FromTheNewsComponent } from './public-info/from-the-news/from-the-news.component';
import { InEmergencyComponent } from './public-info/in-emergency/in-emergency.component';
import { InfoForEducationSystemsComponent } from './public-info/info-for-education-systems/info-for-education-systems.component';
import { InfoForParentsInEmergenciesComponent } from './public-info/info-for-parents-in-emergencies/info-for-parents-in-emergencies.component';
import { InRoutineComponent } from './public-info/in-routine/in-routine.component';
import { VolunteersComponent } from './public-info/volunteers/volunteers.component';



const routes: Routes = [ 
  {path:'', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'authorized-zone', component: AuthorizedZoneComponent, canActivate: [AuthGuard]},
  {path:'files/:id',component: FilesComponent, canActivate: [AuthGuard]},//this can be used only by authorized-zone
  {path: 'login', component: LoginComponent},
  {path:'location/:id',component: LocationComponent},

  //For centers
  {path:'shomron',component: ShomronComponent},
  {path:'ashkelon',component: AshkelonComponent},
  {path:'ashkelon-beach',component: AshkelonBeachComponent},
  {path:'bedouin-society',component: BedouinSocietyComponent},
  {path:'benjamin',component: BenjaminComponent},
  {path:'eshkol',component: EshkolComponent},
  {path:'etzion',component: EtzionComponent},
  {path:'judea',component: JudeaComponent},
  {path:'negev-fields',component: NegevFieldsComponent},
  {path:'sderot',component: SderotComponent},
  {path:'shaar-hanegev',component: ShaarHanegevComponent},

  //For public-info
  {path:'fromTheNews',component: FromTheNewsComponent},
  {path:'inEmergency',component: InEmergencyComponent},
  {path:'infoForEducationSystems',component: InfoForEducationSystemsComponent},
  {path:'infoForParentsInEmergencies',component: InfoForParentsInEmergenciesComponent},
  {path:'inRoutine',component: InRoutineComponent},
  {path:'volunteers',component: VolunteersComponent},

  {path:'contact-us', component: ContactUsComponent},
  {path:'home-page', component: HomePageComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [  ContactUsComponent,
                                    HomePageComponent,
                                    PageNotFoundComponent,
                                    LocationComponent,
                                    LoginComponent,
                                    AuthorizedZoneComponent,
                                    FilesComponent,

                                    //For centers
                                    ShomronComponent,
                                    AshkelonComponent,
                                    AshkelonBeachComponent,
                                    BedouinSocietyComponent,
                                    BenjaminComponent,
                                    EshkolComponent,
                                    EtzionComponent,
                                    JudeaComponent,
                                    NegevFieldsComponent,
                                    SderotComponent,
                                    ShaarHanegevComponent,
                                    
                                    //For public-info
                                    FromTheNewsComponent,
                                    InEmergencyComponent,
                                    InfoForEducationSystemsComponent,
                                    InfoForParentsInEmergenciesComponent,
                                    InRoutineComponent,
                                    VolunteersComponent,
                                 ]
