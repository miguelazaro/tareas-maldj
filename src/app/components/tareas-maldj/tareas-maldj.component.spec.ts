import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasMaldjComponent } from './tareas-maldj.component';

describe('TareasMaldjComponent', () => {
  let component: TareasMaldjComponent;
  let fixture: ComponentFixture<TareasMaldjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasMaldjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasMaldjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
