import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';
import { Member } from 'src/app/domain/interfaces/entities/member';
import { Result } from 'src/app/domain/interfaces/entities/result';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private readonly API = '/assets/mock_json/members.json';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Result<Member[]>>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(result => console.log(result))
    )
  }
}
