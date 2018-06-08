import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondpageComponent } from './secondpage.component';

describe('SecondpageComponent', () => {
  let component: SecondpageComponent;
  let fixture: ComponentFixture<SecondpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
