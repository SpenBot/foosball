import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtlesGridComponent } from './turtles-grid.component';

describe('TurtlesGridComponent', () => {
  let component: TurtlesGridComponent;
  let fixture: ComponentFixture<TurtlesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurtlesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurtlesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
