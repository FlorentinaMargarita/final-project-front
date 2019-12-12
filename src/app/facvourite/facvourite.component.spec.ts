import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacvouriteComponent } from './facvourite.component';

describe('FacvouriteComponent', () => {
  let component: FacvouriteComponent;
  let fixture: ComponentFixture<FacvouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacvouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacvouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
