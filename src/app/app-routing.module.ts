import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSinhvienComponent } from './components/add-sinhvien/add-sinhvien.component';
import { SinhvienDetailsComponent } from './components/sinhvien-details/sinhvien-details.component';
import { SinhvienListComponent } from './components/sinhvien-list/sinhvien-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'sinhvienls', pathMatch: 'full' },
  { path: 'sinhvienls', component: SinhvienListComponent },
  { path: 'sinhvienls/:id', component: SinhvienDetailsComponent },
  { path: 'add', component: AddSinhvienComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
