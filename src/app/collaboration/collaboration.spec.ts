import {CollaborationComponent} from './collaboration';
import {TestBed, async} from '@angular/core/testing';

describe('header component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CollaborationComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render \'Tetrahedron\'', () => {
    const fixture = TestBed.createComponent(CollaborationComponent);
    fixture.detectChanges();
    const header = fixture.nativeElement;
    expect(header.querySelector('a').textContent.trim()).toBe('Tetrahedron');
  });
});
