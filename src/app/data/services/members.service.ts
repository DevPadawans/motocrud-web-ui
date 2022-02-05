import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';
import { Member } from 'src/app/domain/interfaces/entities/member';
import { Result } from 'src/app/domain/interfaces/entities/result';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private readonly API = '/assets/mock_json/members.jsonaa';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Member[]>(this.API)
    .pipe(
      first(),
      tap(result => console.log(result))
    )
  }
}
