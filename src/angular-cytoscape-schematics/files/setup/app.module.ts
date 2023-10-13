import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CytoscapeDemoTopologyComponent } from './cytoscape-demo/cytoscape-demo-topology/cytoscape-demo-topology.component';
import { CytoscapeDemoWorkflowComponent } from './cytoscape-demo/cytoscape-demo-workflow/cytoscape-demo-workflow.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CytoscapeDemoTopologyComponent,
    CytoscapeDemoWorkflowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
