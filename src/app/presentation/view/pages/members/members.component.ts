import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Member } from 'src/app/domain/interfaces/entities/member';
import { Result } from 'src/app/domain/interfaces/entities/result';

import { MembersService } from './../../../../data/services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  result$: Observable<Member[]>;
  displayedColumns = ['_id', 'name'];
  result: Result<Member[]>;

  constructor(
    private membersService: MembersService,
    public dialog: MatDialog
  ) {
    this.result$ = this.membersService.getAll()
    .pipe(
      catchError(error => {
        this.onError("Erro ao carregar os Membros");
        return of ([])
      })
    );
  }

  ngOnInit(): void { }

  onError(errorMessage: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

}
