import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfUserComponent } from './interf-user.component';

describe('InterfUserComponent', () => {
  let component: InterfUserComponent;
  let fixture: ComponentFixture<InterfUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
