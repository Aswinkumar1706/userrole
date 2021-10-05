import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submenu6Component } from './submenu6.component';

describe('Submenu6Component', () => {
  let component: Submenu6Component;
  let fixture: ComponentFixture<Submenu6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Submenu6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Submenu6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
