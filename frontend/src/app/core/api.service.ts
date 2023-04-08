import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, LECTURERS_BY_SEARCH_URL, LECTURERS_URL} from '../shared/constants/urls'
import { ILecturers } from '../shared/interfaces/lecturersType';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GET<DynamicType>(endpoint: string): Observable<DynamicType> {
        return this.http.get<DynamicType>(
            `${BASE_URL}${endpoint}`
        )
    }

    POST<DynamicType>(endpoint: string, data: DynamicType): Observable<DynamicType> {
        return this.http.post<DynamicType>(
             `${BASE_URL}${endpoint}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }

     getLecturers(): Observable<Array<ILecturers>> {
        return this.GET<Array<ILecturers>>(LECTURERS_URL);
    }

    addLecturer(lecturer: ILecturers): Observable<ILecturers> {
        return this.POST<ILecturers>(LECTURERS_URL, lecturer);
    }

      getOneLecturer(id: string): Observable<ILecturers> {
        return this.GET<ILecturers>(`${LECTURERS_URL}/${id}`);
    }

    getAllLecturersBySearchTerm(searchTerm: string){
    return this.http.get<Array<ILecturers>>(LECTURERS_BY_SEARCH_URL + searchTerm);
      console.log('test')
  }


}
