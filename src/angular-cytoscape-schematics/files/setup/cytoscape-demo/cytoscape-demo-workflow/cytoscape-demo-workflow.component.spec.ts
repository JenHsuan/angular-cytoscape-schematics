import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CytoscapeDemoWorkflowComponent } from './cytoscape-demo-workflow.component';

describe('CytoscapeDemoWorkflowComponent', () => {
  let component: CytoscapeDemoWorkflowComponent;
  let fixture: ComponentFixture<CytoscapeDemoWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CytoscapeDemoWorkflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CytoscapeDemoWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
