import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LecturersComponent } from './lecturers/lecturers/lecturers.component';
import { ProfileCardComponent } from './lecturers/profile-card/profile-card.component';
import { SelectedLecturerComponent } from './lecturers/selected-lecturer/selected-lecturer.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'lecturers', component: LecturersComponent},
  {path: 'selectedLecturer/:id', component: SelectedLecturerComponent},
  {path: 'search/:searchTerm', component: LecturersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
