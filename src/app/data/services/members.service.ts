import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'src/app/domain/interfaces/entities/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Member[] {
    return [
      { _id: '1', name: 'Ogro' },
      { _id: '2', name: 'Smile' },
      { _id: '3', name: 'Prod' }
    ];
  }
}
