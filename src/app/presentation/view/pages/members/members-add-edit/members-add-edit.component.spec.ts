import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersAddEditComponent } from './members-add-edit.component';

describe('MembersAddEditComponent', () => {
  let component: MembersAddEditComponent;
  let fixture: ComponentFixture<MembersAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
