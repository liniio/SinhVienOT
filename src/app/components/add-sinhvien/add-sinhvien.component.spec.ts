import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSinhvienComponent } from './add-sinhvien.component';

describe('AddSinhvienComponent', () => {
  let component: AddSinhvienComponent;
  let fixture: ComponentFixture<AddSinhvienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSinhvienComponent]
    });
    fixture = TestBed.createComponent(AddSinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
