import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submenu5Component } from './submenu5.component';

describe('Submenu5Component', () => {
  let component: Submenu5Component;
  let fixture: ComponentFixture<Submenu5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Submenu5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Submenu5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
