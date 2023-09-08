import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContribuicaoPage } from './contribuicao.page';

describe('ContribuicaoPage', () => {
  let component: ContribuicaoPage;
  let fixture: ComponentFixture<ContribuicaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContribuicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
