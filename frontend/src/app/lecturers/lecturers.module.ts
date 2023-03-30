import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturersComponent } from './lecturers/lecturers.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SelectedLecturerComponent } from './selected-lecturer/selected-lecturer.component';
import { SearchModule } from '../search/search.module';



@NgModule({
  declarations: [
    LecturersComponent,
    ProfileCardComponent,
    SelectedLecturerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SearchModule
  ],
  exports: [
    LecturersComponent,
    ProfileCardComponent
  ]
})
export class LecturersModule { }
