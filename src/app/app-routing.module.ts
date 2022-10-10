import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { RentalsComponent } from './rentals/rentals.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: SalesComponent, path: 'sales' },
  { component: RentalsComponent, path: 'rentals' },
  { component: ContactComponent, path: 'contact' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
