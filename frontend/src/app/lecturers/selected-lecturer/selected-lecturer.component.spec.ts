import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedLecturerComponent } from './selected-lecturer.component';

describe('SelectedLecturerComponent', () => {
  let component: SelectedLecturerComponent;
  let fixture: ComponentFixture<SelectedLecturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedLecturerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
