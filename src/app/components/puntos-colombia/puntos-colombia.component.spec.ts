import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosColombiaComponent } from './puntos-colombia.component';

describe('PuntosColombiaComponent', () => {
  let component: PuntosColombiaComponent;
  let fixture: ComponentFixture<PuntosColombiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosColombiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosColombiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
