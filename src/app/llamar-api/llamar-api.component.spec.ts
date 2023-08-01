import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamarAPIComponent } from './llamar-api.component';

describe('LlamarAPIComponent', () => {
  let component: LlamarAPIComponent;
  let fixture: ComponentFixture<LlamarAPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlamarAPIComponent]
    });
    fixture = TestBed.createComponent(LlamarAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
