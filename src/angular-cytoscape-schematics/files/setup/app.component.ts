import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CytoscapeDemoService } from './cytoscape-demo/service/cytoscape-demo.service';
import { combineLatest } from 'rxjs';
import * as cytoscape from 'cytoscape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild("cy") cytoElem: ElementRef;
  cy: cytoscape.Core;

  constructor(private service: CytoscapeDemoService) {

  }
  ngAfterViewInit(): void {
    combineLatest([
      this.service.listElements(),
      this.service.listStyles(),
      this.service.loadLayoutOptions()
    ]).subscribe(
      value => {
        console.log(value)
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
