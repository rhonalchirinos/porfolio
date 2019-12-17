import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySelfComponent } from './my-self.component';

describe('MySelfComponent', () => {
  let component: MySelfComponent;
  let fixture: ComponentFixture<MySelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
