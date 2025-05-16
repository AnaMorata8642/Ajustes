import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUsComponent } from './cadastro-us.component';

describe('CadastroUsComponent', () => {
  let component: CadastroUsComponent;
  let fixture: ComponentFixture<CadastroUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
