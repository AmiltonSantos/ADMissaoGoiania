import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CongregacoesPage } from './congregacoes.page';

describe('CongregacoesPage', () => {
  let component: CongregacoesPage;
  let fixture: ComponentFixture<CongregacoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CongregacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
