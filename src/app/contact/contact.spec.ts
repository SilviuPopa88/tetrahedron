import {ContactComponent} from './contact';
import {TestBed, async} from '@angular/core/testing';

describe('header component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render \'Tetrahedron\'', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const header = fixture.nativeElement;
    expect(header.querySelector('a').textContent.trim()).toBe('Tetrahedron');
  });
});
