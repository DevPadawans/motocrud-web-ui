import { MembersService } from './../../../../data/services/members.service';
import { Member } from './../../../../domain/interfaces/entities/member';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members: Member[];
  displayedColumns = ['_id', 'name'];

  constructor(private membersService: MembersService) {
    this.members = this.membersService.getAll();
  }

  ngOnInit(): void { }

}
