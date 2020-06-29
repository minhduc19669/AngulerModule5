import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookupdateComponent } from './bookupdate.component';

describe('BookupdateComponent', () => {
  let component: BookupdateComponent;
  let fixture: ComponentFixture<BookupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
