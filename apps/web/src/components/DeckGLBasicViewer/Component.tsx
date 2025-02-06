import DeckGL, { GeoJsonLayer } from "deck.gl";
import { DeckGLBasicViewerProps } from "./types";
import { BASE_MAP_STYLE, INITIAL_VIEW_STATE } from "../../consts";
import StaticMap from "react-map-gl";

export default function DeckGLBasicViewer(props: DeckGLBasicViewerProps) {
  const { data, ...rest } = props;

  const layers = [
    new GeoJsonLayer({
      id: "geojson-layer",
      data,
      pickable: true,
      stroked: false,
      filled: true,
      extruded: true,
      lineWidthScale: 20,
      lineWidthMinPixels: 2,
      getFillColor: [160, 160, 180, 200],
      getLineColor: [255, 255, 255],
      getRadius: 100,
      getLineWidth: 1,
      getElevation: 30,
    }),
  ];

  return (
    <DeckGL
      {...rest}
      initialViewState={INITIAL_VIEW_STATE}
      layers={layers}
      controller>
      <StaticMap
        mapStyle={BASE_MAP_STYLE}
        initialViewState={INITIAL_VIEW_STATE}
        mapboxAccessToken="MAPBOX_ACCESS_TOKEN=pk.eyJ1Ijoicm95ZnV3ZWkiLCJhIjoiY202aHpwZ21oMDM3MzJpcHRrMTZkMHFxYyJ9.ftFNCgN6d4jbGlgOR00cDQ"
      />
    </DeckGL>
  );
}
