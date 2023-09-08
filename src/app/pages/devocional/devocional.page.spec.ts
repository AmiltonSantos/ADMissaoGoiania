import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevocionalPage } from './devocional.page';

describe('DevocionalPage', () => {
  let component: DevocionalPage;
  let fixture: ComponentFixture<DevocionalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DevocionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
