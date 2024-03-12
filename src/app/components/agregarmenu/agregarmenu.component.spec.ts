import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarmenuComponent } from './agregarmenu.component';

describe('AgregarmenuComponent', () => {
  let component: AgregarmenuComponent;
  let fixture: ComponentFixture<AgregarmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
