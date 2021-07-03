import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContatosComponent } from './form-contatos.component';

describe('FormContatosComponent', () => {
  let component: FormContatosComponent;
  let fixture: ComponentFixture<FormContatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
