import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePartComponent } from './update-part.component';

describe('UpdatePartComponent', () => {
  let component: UpdatePartComponent;
  let fixture: ComponentFixture<UpdatePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
