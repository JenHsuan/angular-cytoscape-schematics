import { Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest } from 'rxjs';
import * as cytoscape from 'cytoscape';
import { CytoscapeDemoWorkflowService } from './service/cytoscape-demo-workflow.service';

@Component({
  selector: 'app-cytoscape-demo-workflow',
  templateUrl: './cytoscape-demo-workflow.component.html',
  styleUrls: ['./cytoscape-demo-workflow.component.scss']
})
export class CytoscapeDemoWorkflowComponent {
  @ViewChild("cy") cytoElem: ElementRef;
  cy: cytoscape.Core;

  constructor(private service: CytoscapeDemoWorkflowService) {
  }
  ngAfterViewInit(): void {
    combineLatest([
      this.service.listElements(),
      this.service.listStyles(),
      this.service.loadLayoutOptions()
    ]).subscribe(
      value => {
        this.initCharts(value[0], value[1].style, value[2].data)
      }
    );
  }

  protected initCharts(elements: cytoscape.ElementDefinition[], style: cytoscape.Stylesheet[], option?: cytoscape.LayoutOptions | undefined) {
    this.cy = (cytoscape as any).default({
      container: this.cytoElem.nativeElement,
      layout:option,
      style: style,
      elements: elements
    })
  }
}
