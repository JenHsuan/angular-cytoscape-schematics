import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CytoscapeDemoTopologyComponent } from './cytoscape-demo/cytoscape-demo-topology/cytoscape-demo-topology.component';
import { CytoscapeDemoWorkflowComponent } from './cytoscape-demo/cytoscape-demo-workflow/cytoscape-demo-workflow.component';

const routes: Routes = [
  { path: '', redirectTo: 'topology', pathMatch: 'full' }, //default route
  { path: 'topology', component: CytoscapeDemoTopologyComponent },
  { path: 'workflow', component: CytoscapeDemoWorkflowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
