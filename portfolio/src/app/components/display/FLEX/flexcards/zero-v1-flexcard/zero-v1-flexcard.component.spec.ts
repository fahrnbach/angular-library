import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroV1FlexcardComponent } from './zero-v1-flexcard.component';

describe('ZeroV1FlexcardComponent', () => {
  let component: ZeroV1FlexcardComponent;
  let fixture: ComponentFixture<ZeroV1FlexcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeroV1FlexcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZeroV1FlexcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
