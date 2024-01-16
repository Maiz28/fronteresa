import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapedidoComponent } from './tablapedido.component';

describe('TablapedidoComponent', () => {
  let component: TablapedidoComponent;
  let fixture: ComponentFixture<TablapedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablapedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablapedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
