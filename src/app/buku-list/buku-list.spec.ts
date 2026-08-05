import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuList } from './buku-list';

describe('BukuList', () => {
  let component: BukuList;
  let fixture: ComponentFixture<BukuList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BukuList],
    }).compileComponents();

    fixture = TestBed.createComponent(BukuList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
