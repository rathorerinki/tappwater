import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphdashboardComponent } from './graphdashboard.component';

describe('GraphdashboardComponent', () => {
  let component: GraphdashboardComponent;
  let fixture: ComponentFixture<GraphdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
