import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDialogComponent } from './select-dialog.component';

describe('SelectDialogComponent', () => {
  let component: SelectDialogComponent;
  let fixture: ComponentFixture<SelectDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectDialogComponent]
    });
    fixture = TestBed.createComponent(SelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
