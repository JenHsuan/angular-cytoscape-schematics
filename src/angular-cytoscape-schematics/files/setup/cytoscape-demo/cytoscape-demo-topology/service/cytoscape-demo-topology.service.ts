import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as cytoscape from 'cytoscape';
import { CytoscapeDemoElement, CytoscapeDemoElementStyle, CytoscapeDemoOptions } from '../../service/cytoscape-demo.domain';
import styleData from '../../../../assets/path-data/topology/topology-style.js';

@Injectable({
  providedIn: 'root'
})
export class CytoscapeDemoTopologyService {

  constructor(protected http: HttpClient) { }
  listElements(): Observable<cytoscape.ElementDefinition[]> {
    return this.http.get<CytoscapeDemoElement>('assets/path-data/topology/topology-element.json').pipe(
      map(data => data.nodes)
    );
  }

  listStyles(): Observable<CytoscapeDemoElementStyle> {
    return of(styleData);
  }

  loadLayoutOptions(): Observable<CytoscapeDemoOptions> {
    return this.http.get<CytoscapeDemoOptions>('assets/path-data/topology/topology-layout.json');
  }
}

