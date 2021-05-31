import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatchildComponent } from './chatchild.component';

describe('ChatchildComponent', () => {
  let component: ChatchildComponent;
  let fixture: ComponentFixture<ChatchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
