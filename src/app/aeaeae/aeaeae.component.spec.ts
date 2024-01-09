import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeaeaeComponent } from './aeaeae.component';

describe('AeaeaeComponent', () => {
  let component: AeaeaeComponent;
  let fixture: ComponentFixture<AeaeaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeaeaeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeaeaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
