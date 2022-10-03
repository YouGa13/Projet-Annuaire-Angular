import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosPersonneComponent } from './infos-personne.component';

describe('InfosPersonneComponent', () => {
  let component: InfosPersonneComponent;
  let fixture: ComponentFixture<InfosPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosPersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
