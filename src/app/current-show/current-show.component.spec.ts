import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentShowComponent } from './current-show.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('CurrentShowComponent', () => {
  let component: CurrentShowComponent;
  let fixture: ComponentFixture<CurrentShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ CurrentShowComponent ],
      // providers: [{TvshowService,useClass: TvshowServiceFake}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
