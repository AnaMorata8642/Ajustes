import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuContaClienteComponent } from './visu-conta-cliente.component';

describe('VisuContaClienteComponent', () => {
  let component: VisuContaClienteComponent;
  let fixture: ComponentFixture<VisuContaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisuContaClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisuContaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
