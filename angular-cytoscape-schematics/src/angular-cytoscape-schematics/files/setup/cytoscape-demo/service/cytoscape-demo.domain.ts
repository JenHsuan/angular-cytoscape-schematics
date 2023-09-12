import * as cytoscape from 'cytoscape';

export class CytoscapeDemoElement {
  nodes: cytoscape.ElementDefinition[]
}

export class CytoscapeDemoElementStyle {
  style: cytoscape.Stylesheet[]
}

export class CytoscapeDemoOptions {
  data: cytoscape.LayoutOptions | undefined
}

export enum CytoscapeDemoCurveType {
  haystack = 'haystack',
  straight = 'straight',
  bezier = 'bezier',
  unbundledBezier = 'unbundled-bezier',
  segments = 'segments',
  taxi = 'taxi'
}

export enum CytoscapeDemoArrowType {
  tee = 'tee',
  vee = 'vee',
  triangle = 'triangle',
  triangleTee = 'triangle-tee',
  circleTriangle = 'circle-triangle',
  triangleCross = 'triangle-cross',
  triangleBackcurve = 'triangle-backcurve',
  square = 'square',
  circle = 'circle',
  diamond = 'diamond',
  chevron = 'chevron',
  none = 'none'
}

export enum CytoscapeDemoNodeType {
  rectangle = 'rectangle',
  roundrectangle = 'roundrectangle',
  ellipse = 'ellipse',
  triangle = 'triangle',
  pentagon = 'pentagon',
  hexagon = 'hexagon',
  heptagon = 'heptagon',
  octagon = 'octagon',
  star = 'star',
  barrel = 'barrel',
  diamond = 'diamond',
  vee = 'vee',
  rhomboid = 'rhomboid',
  polygon = 'polygon',
  tag = 'tag',
  roundRectangle = 'round-rectangle',
  roundTriangle = 'round-triangle',
  roundDiamond = 'round-diamond',
  roundPentagon = 'round-pentagon',
  roundHexagon = 'round-hexagon',
  roundHeptagon = 'round-heptagon',
  roundOctagon = 'round-octagon',
  roundTag = 'round-tag',
  cutRectangle =  'cut-rectangle',
  bottomRoundRectangle = 'bottom-round-rectangle',
  concaveHexagon = 'concave-hexagon'
}

export enum CytoscapeDemoTaxiCurveDirectionType {
  auto = 'auto',
  vertical = 'vertical',
  downward = 'downward',
  upward = 'upward',
  horizontal = 'horizontal',
  rightward = 'rightward',
  leftward = 'leftward'
}

export enum CytoscapeDemoEdgeDistancesType {
  intersection = 'intersection',
  nodePosition = 'node-position'
}

export enum CytoscapeDemoKlayDirectionType {
  right = 'RIGHT',
  left = 'LEFT',
  down = 'DOWN',
  up = 'UP'
}

export enum CytoscapeDemoLabelTextHalignType {
  left = 'left',
  center = 'center',
  right = 'right'
}

export enum CytoscapeDemoLabelTextValignType {
  top = 'top',
  center = 'center',
  bottom = 'bottom'
}