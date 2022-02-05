import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { IMember } from 'src/app/domain/interfaces/entities/IMember';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private readonly API = '/assets/mock_json/members.json';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<IMember[]>(this.API)
    .pipe(
      first(),
      tap(result => console.log(result))
    )
  }
}
