import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submenu4Component } from './submenu4.component';

describe('Submenu4Component', () => {
  let component: Submenu4Component;
  let fixture: ComponentFixture<Submenu4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Submenu4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Submenu4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
