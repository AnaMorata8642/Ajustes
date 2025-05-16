import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVert2Component } from './menu-vert2.component';

describe('MenuVert2Component', () => {
  let component: MenuVert2Component;
  let fixture: ComponentFixture<MenuVert2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuVert2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuVert2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
