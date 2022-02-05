import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IMember } from 'src/app/domain/interfaces/entities/IMember';
import { IResult } from 'src/app/domain/interfaces/entities/IResult';

import { MembersService } from './../../../../data/services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  result$: Observable<IMember[]>;
  displayedColumns = ['_id', 'name'];
  result: IResult<IMember[]>;

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
