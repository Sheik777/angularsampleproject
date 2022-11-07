import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheikComponent } from './sheik.component';

describe('SheikComponent', () => {
  let component: SheikComponent;
  let fixture: ComponentFixture<SheikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
