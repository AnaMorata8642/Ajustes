import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoClienteComponent } from './visualizacao-cliente.component';

describe('VisualizacaoClienteComponent', () => {
  let component: VisualizacaoClienteComponent;
  let fixture: ComponentFixture<VisualizacaoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizacaoClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizacaoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
