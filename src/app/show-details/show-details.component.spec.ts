import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsComponent } from './show-details.component';
import { HttpClientModule } from '@angular/common/http';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router';

describe('ShowDetailsComponent', () => {
  let component: ShowDetailsComponent;
  let fixture: ComponentFixture<ShowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,
        HttpClientModule,
        FlexLayoutModule,
        FormsModule,
  
        RouterModule,
        
      ],
      declarations: [ ShowDetailsComponent,
        AppComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
