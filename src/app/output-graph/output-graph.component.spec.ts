import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { OutputGraphComponent } from './output-graph.component';

describe('OutputGraphComponent', () => {
  let component: OutputGraphComponent;
  let fixture: ComponentFixture<OutputGraphComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [OutputGraphComponent]
    });
    fixture = TestBed.createComponent(OutputGraphComponent);
    component = fixture.componentInstance;
  }));

  test('should exist', () => {
    expect(component).toBeDefined();
  });
});