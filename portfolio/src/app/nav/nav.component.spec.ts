import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { By } from '@angular/platform-browser';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const maxLinkChars = 13
  it(`link names should be shorter than ${maxLinkChars} characters`, () => {
    const linkElements = fixture.debugElement.queryAll(By.css('.nav-link'));
    linkElements.forEach(element => {
      let linkLength = element.nativeElement.textContent.length
      expect(linkLength).toBeLessThan(maxLinkChars)
    });
  });
});
