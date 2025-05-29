import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroV1FlexviewDeleteComponent } from './zero-v1-flexview-delete.component';

describe('ZeroV1FlexviewDeleteComponent', () => {
  let component: ZeroV1FlexviewDeleteComponent;
  let fixture: ComponentFixture<ZeroV1FlexviewDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeroV1FlexviewDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeroV1FlexviewDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
