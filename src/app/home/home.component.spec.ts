import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  }));

  test('should exist', () => {
    expect(component).toBeDefined();
  });

  /*it('should have <div> with "WELCOME TO THE USA POPULATION DATA APP"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h1_label = 'WELCOME TO THE USA POPULATION DATA APP';
    const p = bannerElement.querySelector('h1')!;
    expect(p.textContent).toEqual(h1_label);
  });
  */

});
