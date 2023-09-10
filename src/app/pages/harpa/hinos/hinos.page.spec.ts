import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HinosPage } from './hinos.page';

describe('HinosPage', () => {
  let component: HinosPage;
  let fixture: ComponentFixture<HinosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
