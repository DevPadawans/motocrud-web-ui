import { MembersService } from './../../../../data/services/members.service';
import { Member } from './../../../../domain/interfaces/entities/member';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from 'src/app/domain/interfaces/entities/result';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members$: Observable<Result<Member[]>>;
  displayedColumns = ['_id', 'name'];

  constructor(
    private membersService: MembersService
  ) {
    this.members$ = this.membersService.getAll();
  }

  ngOnInit(): void { }

}
