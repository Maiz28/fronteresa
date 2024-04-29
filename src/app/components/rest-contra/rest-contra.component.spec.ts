import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestContraComponent } from './rest-contra.component';

describe('RestContraComponent', () => {
  let component: RestContraComponent;
  let fixture: ComponentFixture<RestContraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestContraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
