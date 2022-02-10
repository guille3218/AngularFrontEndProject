import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateClientComponent } from './dialog-update-client.component';

describe('DialogUpdateClientComponent', () => {
  let component: DialogUpdateClientComponent;
  let fixture: ComponentFixture<DialogUpdateClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
