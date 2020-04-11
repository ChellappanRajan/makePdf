import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePdfComponent } from './make-pdf.component';

describe('MakePdfComponent', () => {
  let component: MakePdfComponent;
  let fixture: ComponentFixture<MakePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakePdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
