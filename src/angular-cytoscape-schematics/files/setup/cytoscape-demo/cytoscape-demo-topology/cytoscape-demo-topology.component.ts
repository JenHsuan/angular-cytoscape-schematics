import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest } from 'rxjs';
import * as cytoscape from 'cytoscape';
import { CytoscapeDemoTopologyService } from './service/cytoscape-demo-topology.service';

@Component({
  selector: 'app-cytoscape-demo-topology',
  templateUrl: './cytoscape-demo-topology.component.html',
  styleUrls: ['./cytoscape-demo-topology.component.scss']
})
export class CytoscapeDemoTopologyComponent {
  @ViewChild("cy") cytoElem: ElementRef;
  cy: cytoscape.Core;

  constructor(private service: CytoscapeDemoTopologyService) {
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
