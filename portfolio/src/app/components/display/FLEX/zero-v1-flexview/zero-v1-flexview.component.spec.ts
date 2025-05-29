import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroV1FlexviewComponent } from './zero-v1-flexview.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ZeroV1FlexviewComponent', () => {
  let component: ZeroV1FlexviewComponent;
  let fixture: ComponentFixture<ZeroV1FlexviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeroV1FlexviewComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeroV1FlexviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the save button', () => {
    const selectElement = fixture.debugElement.query(By.css('#save-button'));
    expect(selectElement).toBeTruthy();
  });
  // ! type="button" prevents default form button behavior. Missing this causes a console warning and other possible errors
  it('should have a save button with type of button', () => {
    const buttonDebugElement: DebugElement = fixture.debugElement.query(By.css('#save-button'));
    expect(buttonDebugElement.attributes['type']).toBe('button')
  });


});
