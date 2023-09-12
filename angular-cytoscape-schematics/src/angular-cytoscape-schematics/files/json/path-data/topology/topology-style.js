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
        "background-color": "#cecece",
        width: "70px",
        height: "70px",
        shape: CytoscapeDemoNodeType.roundrectangle
      }
    },
    {
      selector: "node[label]",
      style: {
        label: "data(label)",
        "font-size": "24",
        color: "#000",
        "text-valign": "bottom",
        "text-halign": "center"
      },
    },
    {
      selector: "edge",
      style: {
        width: 1.5,
        'line-color': '#cecece',
        'target-arrow-color': 'green'
      }
    },
    {
      selector: "edge[label]",
      style: {
        label: "data(label)",
        "font-size": "12",
        "text-background-color": "white",
        "text-background-opacity": 1,
        "text-background-padding": "2px",
        "text-margin-y": -4,
        "text-margin-x": -4,
        // so the transition is selected when its label/name is selected
        "text-events": "yes"
      },
    },
    {
      selector: ".wan",
      style: {
      }
    },
    {
      selector: ".gateway",
      style: {
      }
    },
    {
      selector: ".device",
      style: {
      }
    },
    {
      selector: ".nac",
      style: {
      }
    }, {
      selector: ".static",
      style: {
        "background-color": "#000",
        shape: CytoscapeDemoNodeType.ellipse
      }
    },
    {
      selector: ".layer1",
      style: {
        width: 1.5,
        'line-color': '#cecece',
        "curve-style": CytoscapeDemoCurveType.taxi,
        "target-arrow-shape": CytoscapeDemoArrowType.none,
        "taxi-direction": CytoscapeDemoTaxiCurveDirectionType.vertical,
        "taxi-turn": '1000px',
        "taxi-turn-min-distance": '1500px',
      }
    },
    {
      selector: ".layer2-1",
      style: {
        width: 1.5,
        'line-color': 'green',
        "curve-style": CytoscapeDemoCurveType.segments,
        "target-arrow-shape": CytoscapeDemoArrowType.none,
        "segmentWeights": "0 1",
        "segmentDistances": "180 180"
      }
    },
    {
      selector: ".layer2-2",
      style: {
        width: 1.5,
        'line-color': 'blue',
        "curve-style": CytoscapeDemoCurveType.segments,
        "target-arrow-shape": CytoscapeDemoArrowType.none,
        "segmentWeights": "0 1",
        "segmentDistances": "120 120"
      }
    },
    {
      selector: ".layer2-3",
      style: {
        width: 1.5,
        'line-color': 'gold',
        "curve-style": CytoscapeDemoCurveType.segments,
        "target-arrow-shape": CytoscapeDemoArrowType.none,
        "segmentWeights": "0 1",
        "segmentDistances": "60 60",
        //"edge-distances": "node-position"
      }
    },
    {
      selector: ".layer2-4",
      style: {
        width: 1.5,
        'line-color': 'orange',
        "curve-style": CytoscapeDemoCurveType.segments,
        "target-arrow-shape": CytoscapeDemoArrowType.none,
        "segmentWeights": "0 1",
        "segmentDistances": "-50 -50"
      }
    },
    {
      selector: ".layer2-5",
      style: {
        width: 1.5,
        'line-color': 'red',
        "curve-style": CytoscapeDemoCurveType.segments,
        "target-arrow-shape": CytoscapeDemoArrowType.none,
        "segmentWeights": "0 1",
        "segmentDistances": "-120 -120"
      }
    },
    {
      selector: ".layer3-1",
      style: {
        width: 1.5,
        'line-color': '#000',
        "curve-style": CytoscapeDemoCurveType.segments,
        "target-arrow-shape": CytoscapeDemoArrowType.none,
        "segmentWeights": "0 1",
        "segmentDistances": "80 80"
      }
    },
    {
      selector: ".layer3-2",
      style: {
        width: 1.5,
        'line-color': '#000',
        "curve-style": CytoscapeDemoCurveType.segments,
        "target-arrow-shape": CytoscapeDemoArrowType.none,
        "segmentWeights": "0 1",
        "segmentDistances": "-80 -80"
      }
    },
    {
      selector: ".static-edge",
      style: {
        width: 1.5,
        'line-color': '#000',
        "target-arrow-shape": CytoscapeDemoArrowType.none,
      }
    }
  ]
}