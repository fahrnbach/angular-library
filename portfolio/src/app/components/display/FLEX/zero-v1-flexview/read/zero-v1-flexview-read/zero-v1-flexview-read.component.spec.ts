import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroV1FlexviewReadComponent } from './zero-v1-flexview-read.component';

describe('ZeroV1FlexviewReadComponent', () => {
  let component: ZeroV1FlexviewReadComponent;
  let fixture: ComponentFixture<ZeroV1FlexviewReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeroV1FlexviewReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeroV1FlexviewReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
