import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'', redirectTo: 'portfolio', pathMatch:'full'},
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
