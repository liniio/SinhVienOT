import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhvienDetailsComponent } from './sinhvien-details.component';

describe('SinhvienDetailsComponent', () => {
  let component: SinhvienDetailsComponent;
  let fixture: ComponentFixture<SinhvienDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinhvienDetailsComponent]
    });
    fixture = TestBed.createComponent(SinhvienDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
