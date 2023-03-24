import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfillioComponent } from './portfillio.component';

describe('PortfillioComponent', () => {
  let component: PortfillioComponent;
  let fixture: ComponentFixture<PortfillioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfillioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfillioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
