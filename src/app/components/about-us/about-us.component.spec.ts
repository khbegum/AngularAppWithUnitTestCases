import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have blue <p>',()=>{
    const p:HTMLElement=fixture.nativeElement.querySelector('p');
    const bgColor=p.style.backgroundColor;
    expect(bgColor).toBe('blue');
  })
});
