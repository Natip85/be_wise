import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { ILecturers } from 'src/app/shared/interfaces/lecturersType';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent  {

  lecturers: Array<ILecturers> = [];

  constructor(private api: ApiService, activatedRoute: ActivatedRoute){

    let lecturerObservable:Observable<Array<ILecturers>>

    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        lecturerObservable = this.api.getAllLecturersBySearchTerm(params.searchTerm);
      else
     lecturerObservable = api.getLecturers()

      lecturerObservable.subscribe((serverlecturers)=>{

    this.lecturers = serverlecturers

   })
  })
  }

}
