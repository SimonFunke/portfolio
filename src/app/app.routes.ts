import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InternComponent } from './intern/intern.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import path from 'path';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressComponent } from './impress/impress.component';
import { PrivacyComponent } from './privacy/privacy.component';


export const routes: Routes = [
    {path : '', component : LandingPageComponent},
    {path : 'impress', component: ImpressComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path : 'intern', component: InternComponent,  children : [
        {path : '', component : AboutComponent},
        {path : 'about', component : AboutComponent},
        {path : 'projects', component : PortfolioComponent},
        {path : 'skills', component : SkillsComponent},
        {path : 'contact', component : ContactComponent},
        {path : '**', component : AboutComponent},
    ]},
    {path : '**', component : LandingPageComponent}
     
];
