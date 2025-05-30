import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeaterComponent } from './repeater.component';

describe('RepeaterComponent', () => {
  let component: RepeaterComponent;
  let fixture: ComponentFixture<RepeaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
