import {
  CytoscapeDemoNodeType,
  CytoscapeDemoCurveType,
  CytoscapeDemoArrowType,
  CytoscapeDemoTaxiCurveDirectionType
} from '../../../app/cytoscape-demo/service/cytoscape-demo.domain';

export default {
  style: [
    {
      selector: "node",
      style: {
        "background-color": "#43447a",
        shape: CytoscapeDemoNodeType.roundRectangle
      }
    },
    {
      selector: "node[label]",
      style: {
        label: "data(label)",
        "font-size": "20",
        color: "gray",
      },
    },
    {
      selector: "edge",
      style: {
        "curve-style": CytoscapeDemoCurveType.straight,
        width: 1.5,
        'line-color': '#cecece',
        "target-arrow-shape": CytoscapeDemoArrowType.none,
        'target-arrow-color': 'green',
        'control-point-distances': 'data(controlPointDistances)'
      }
    },
    {
      selector: "edge[label]",
      style: {
        label: "data(label)",
        "font-size": "16",
        "color": "#fff",
        "text-background-color": "white",
        "text-background-opacity": 1,
        "text-background-padding": "10px",
        "text-margin-y": 0,
        "text-margin-x": 0,
        // so the transition is selected when its label/name is selected
        "text-events": "yes",
        "text-border-color": "gray",
        "text-border-style": "solid",
        "text-border-width": 0.5,
        "text-border-opacity": 1
      },
    },
    {
      selector: ".start",
      style: {
        "background-color": "blue",
        shape: CytoscapeDemoNodeType.ellipse,
        "text-valign": "top",
        "text-halign": "center"
      }
    },
    {
      selector: ".process1",
      style: {
        "background-color": "white",
        "font-size": "18",
        color: "#000",
        width: "150px",
        height: "80px",
        shape: CytoscapeDemoNodeType.roundRectangle,
        "border-color": "gray",
        "border-width": 0.5,
        "text-valign": "center",
        "text-halign": "center",
        "text-margin-y": 30,
      }
    },
    {
      selector: ".process2",
      style: {
        "background-color": "white",
        "font-size": "18",
        color: "#000",
        width: "150px",
        height: "80px",
        shape: CytoscapeDemoNodeType.roundRectangle,
        "border-color": "gray",
        "border-width": 0.5,
        "text-valign": "center",
        "text-halign": "center",
        "text-margin-y": 30,
      }
    },
    {
      selector: ".process3",
      style: {
        "background-color": "white",
        "font-size": "18",
        color: "#000",
        width: "200px",
        height: "80px",
        shape: CytoscapeDemoNodeType.roundRectangle,
        "border-color": "gray",
        "border-width": 0.5,
        "text-valign": "center",
        "text-halign": "center",
        "text-margin-y": 30,
      }
    },
    {
      selector: ".destination",
      style: {
        "background-color": "red",
        "font-size": "20",
        color: "white",
        width: "80px",
        height: "100px",
        shape: CytoscapeDemoNodeType.roundRectangle,
        "text-valign": "center",
        "text-halign": "center",
        "text-margin-y": 40,
      }
    },
    {
      selector: ".segment1",
      style: {
        "background-color": "blue",
        width: 1.5,
        'line-color': 'blue'
      }
    },
    {
      selector: ".segment1[label]",
      style: {
        label: "data(label)",
        "text-background-color": "blue",
      }
    },
    {
      selector: ".segment2",
      style: {
        "background-color": "blue",
        width: 1.5,
        'line-color': 'red'
      }
    },
    {
      selector: ".segment2[label]",
      style: {
        label: "data(label)",
        "text-background-color": "gray"
      }
    },
  ]
}