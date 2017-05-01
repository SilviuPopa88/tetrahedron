import {CentralComponent} from './central';
import {TestBed, async} from '@angular/core/testing';

describe('central component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CentralComponent
      ]
    });
    TestBed.compileComponents();
  }));

  //it('should render \'Allo, \'Allo!', () => {
  //  const fixture = TestBed.createComponent(CentralComponent);
  //  fixture.detectChanges();
  //  const title = fixture.nativeElement;
  //  expect(title.querySelector('h1').textContent.trim()).toBe('\'Allo, \'Allo!');
  //});
});
