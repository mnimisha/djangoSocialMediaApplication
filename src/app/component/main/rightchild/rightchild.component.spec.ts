import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightchildComponent } from './rightchild.component';

describe('RightchildComponent', () => {
  let component: RightchildComponent;
  let fixture: ComponentFixture<RightchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
