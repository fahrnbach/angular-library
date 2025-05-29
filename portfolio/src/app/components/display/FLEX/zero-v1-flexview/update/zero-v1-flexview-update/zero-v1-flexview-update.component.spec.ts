import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroV1FlexviewUpdateComponent } from './zero-v1-flexview-update.component';

describe('ZeroV1FlexviewUpdateComponent', () => {
  let component: ZeroV1FlexviewUpdateComponent;
  let fixture: ComponentFixture<ZeroV1FlexviewUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeroV1FlexviewUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeroV1FlexviewUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
