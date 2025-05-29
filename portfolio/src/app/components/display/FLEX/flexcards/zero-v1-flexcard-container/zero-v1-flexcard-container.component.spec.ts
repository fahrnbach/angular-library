import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroV1FlexcardContainerComponent } from './zero-v1-flexcard-container.component';

describe('ZeroV1FlexcardContainerComponent', () => {
  let component: ZeroV1FlexcardContainerComponent;
  let fixture: ComponentFixture<ZeroV1FlexcardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeroV1FlexcardContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZeroV1FlexcardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
