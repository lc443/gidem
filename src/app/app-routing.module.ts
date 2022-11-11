import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateComponent } from './components/date/date.component';
import { HomeComponent } from './components/home/home.component';
import { HookupComponent } from './components/hookup/hookup.component';
import { SystemComponent } from './components/system/system.component';
import { TextComponent } from './components/text/text.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'system', component: SystemComponent },
  { path: 'date', component: DateComponent },
  { path: 'hookup', component: HookupComponent },
  { path: 'text', component: TextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
