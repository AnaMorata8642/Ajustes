import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialCompraComponent } from './inicial-compra.component';

describe('InicialCompraComponent', () => {
  let component: InicialCompraComponent;
  let fixture: ComponentFixture<InicialCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicialCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicialCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
