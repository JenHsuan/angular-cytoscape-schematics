import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CytoscapeDemoTopologyComponent } from './cytoscape-demo-topology.component';

describe('CytoscapeDemoTopologyComponent', () => {
  let component: CytoscapeDemoTopologyComponent;
  let fixture: ComponentFixture<CytoscapeDemoTopologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CytoscapeDemoTopologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CytoscapeDemoTopologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
