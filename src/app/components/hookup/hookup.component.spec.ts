import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookupComponent } from './hookup.component';

describe('HookupComponent', () => {
  let component: HookupComponent;
  let fixture: ComponentFixture<HookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
