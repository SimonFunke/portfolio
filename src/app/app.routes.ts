import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InternComponent } from './intern/intern.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
    {path : '', component : LandingPageComponent},
    {path : 'intern', component: InternComponent,  children : [
        {path : 'about', component : AboutComponent}
    ]},
     
];
