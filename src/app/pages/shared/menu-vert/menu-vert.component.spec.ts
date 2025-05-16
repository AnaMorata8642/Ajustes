import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVertComponent } from './menu-vert.component';

describe('MenuVertComponent', () => {
  let component: MenuVertComponent;
  let fixture: ComponentFixture<MenuVertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuVertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuVertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
