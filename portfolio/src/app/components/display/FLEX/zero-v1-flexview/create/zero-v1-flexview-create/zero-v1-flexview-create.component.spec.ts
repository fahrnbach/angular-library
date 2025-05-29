import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroV1FlexviewCreateComponent } from './zero-v1-flexview-create.component';

describe('ZeroV1FlexviewCreateComponent', () => {
  let component: ZeroV1FlexviewCreateComponent;
  let fixture: ComponentFixture<ZeroV1FlexviewCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeroV1FlexviewCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeroV1FlexviewCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
