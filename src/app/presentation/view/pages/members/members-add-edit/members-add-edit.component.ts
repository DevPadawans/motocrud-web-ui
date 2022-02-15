import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-add-edit',
  templateUrl: './members-add-edit.component.html',
  styleUrls: ['./members-add-edit.component.scss']
})
export class MembersAddEditComponent implements OnInit {
  title: string = "Adicionar";
  constructor() { }

  ngOnInit(): void {
  }

}
