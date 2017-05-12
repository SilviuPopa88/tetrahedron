import {BlogComponent} from './blog';
import {TestBed, async} from '@angular/core/testing';

describe('header component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlogComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render \'Tetrahedron\'', () => {
    const fixture = TestBed.createComponent(BlogComponent);
    fixture.detectChanges();
    const header = fixture.nativeElement;
    expect(header.querySelector('a').textContent.trim()).toBe('Tetrahedron');
  });
});
