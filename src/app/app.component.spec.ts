import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  test('should exist', () => {
    expect(component).toBeDefined();
  });
});