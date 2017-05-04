import {AboutComponent} from './about';
import {TestBed, async} from '@angular/core/testing';

describe('header component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render \'Tetrahedron\'', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const header = fixture.nativeElement;
    expect(header.querySelector('a').textContent.trim()).toBe('Tetrahedron');
  });
});
