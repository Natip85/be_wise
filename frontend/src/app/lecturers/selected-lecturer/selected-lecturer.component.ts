import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { ILecturers } from 'src/app/shared/interfaces/lecturersType';

@Component({
  selector: 'app-selected-lecturer',
  templateUrl: './selected-lecturer.component.html',
  styleUrls: ['./selected-lecturer.component.css']
})
export class SelectedLecturerComponent {

  lecturer: ILecturers | null = null;

  constructor(
        private api: ApiService,
        private activeRoute: ActivatedRoute,
        private router: Router
    ) { }

  ngOnInit(): void {
        this.activeRoute.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id') as string;
                return this.api.getOneLecturer(id);
            })
        ).subscribe({
            next: (data: ILecturers) => {
                this.lecturer = data;
                // const title = data.title || '';
                // const description = data.description || '';
                // const status = data.status || 'PLANNED';
                // this.editProjectForm.get('title')?.setValue(title);
                // this.editProjectForm.get('description')?.setValue(description);
                // this.editProjectForm.get('status')?.setValue(status);
                // console.log(this.lecturer);

            },
            error: (err) => console.log(err)
        })
    }

}
