import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarpaPage } from './harpa.page';

describe('HarpaPage', () => {
  let component: HarpaPage;
  let fixture: ComponentFixture<HarpaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HarpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
