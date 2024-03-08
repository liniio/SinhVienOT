import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhvienListComponent } from './sinhvien-list.component';

describe('SinhvienListComponent', () => {
  let component: SinhvienListComponent;
  let fixture: ComponentFixture<SinhvienListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinhvienListComponent]
    });
    fixture = TestBed.createComponent(SinhvienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
