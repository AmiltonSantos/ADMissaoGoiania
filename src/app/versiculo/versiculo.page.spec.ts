import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VersiculoPage } from './versiculo.page';

describe('VersiculoPage', () => {
  let component: VersiculoPage;
  let fixture: ComponentFixture<VersiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VersiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
