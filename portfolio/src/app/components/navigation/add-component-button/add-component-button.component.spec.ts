import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentButtonComponent } from './add-component-button.component';

describe('AddComponentButtonComponent', () => {
  let component: AddComponentButtonComponent;
  let fixture: ComponentFixture<AddComponentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddComponentButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComponentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
