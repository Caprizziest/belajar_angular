import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuDetail } from './buku-detail';

describe('BukuDetail', () => {
  let component: BukuDetail;
  let fixture: ComponentFixture<BukuDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BukuDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(BukuDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
