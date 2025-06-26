import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomailHomeComponent } from './automail-home.component';

describe('AutomailHomeComponent', () => {
  let component: AutomailHomeComponent;
  let fixture: ComponentFixture<AutomailHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomailHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
