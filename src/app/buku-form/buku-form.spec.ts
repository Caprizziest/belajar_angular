import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuForm } from './buku-form';

describe('BukuForm', () => {
  let component: BukuForm;
  let fixture: ComponentFixture<BukuForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BukuForm],
    }).compileComponents();

    fixture = TestBed.createComponent(BukuForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
