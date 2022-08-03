import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTutorialComponent } from './read-tutorial.component';

describe('ReadTutorialComponent', () => {
  let component: ReadTutorialComponent;
  let fixture: ComponentFixture<ReadTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
