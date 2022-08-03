import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTutorialComponent } from './create-tutorial.component';

describe('CreateComponent', () => {
  let component: CreateTutorialComponent;
  let fixture: ComponentFixture<CreateTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
