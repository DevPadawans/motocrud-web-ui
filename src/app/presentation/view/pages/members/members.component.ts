import { Member } from './../../../../domain/interfaces/entities/member';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members: Member[];
  displayedColumns = ['name'];

  constructor() {
    this.members = [
      {_id: '1', name: 'Ogro'},
      {_id: '2', name: 'Smile'},
      {_id: '3', name: 'Prod'}
    ];
  }

  ngOnInit(): void {
  }

}
