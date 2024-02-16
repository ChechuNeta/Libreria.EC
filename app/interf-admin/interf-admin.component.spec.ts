import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfAdminComponent } from './interf-admin.component';

describe('InterfAdminComponent', () => {
  let component: InterfAdminComponent;
  let fixture: ComponentFixture<InterfAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
