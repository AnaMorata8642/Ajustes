import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaQComponent } from './meta-q.component';

describe('MetaQComponent', () => {
  let component: MetaQComponent;
  let fixture: ComponentFixture<MetaQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaQComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
