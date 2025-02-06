import React from "react";
import { DeckGL3DTileViewerProps } from "./types";
import { DeckGL, MapViewState, Tile3DLayer } from "deck.gl";
import StaticMap from "react-map-gl";
import {
  TILESET_URL,
  ION_TOKEN,
  INITIAL_VIEW_STATE,
  MAPBOX_ACCESS_TOKEN,
} from "../../consts";
import { Tileset3D } from "@loaders.gl/tiles";
import { CesiumIonLoader } from "@loaders.gl/3d-tiles";
// import { DrawPolygonMode, EditableGeoJsonLayer } from "nebula.gl";

export default function DeckGLTile3DViewer({
  mapStyle = "mapbox://styles/mapbox/dark-v9",
}: DeckGL3DTileViewerProps) {
  const [initialViewState, setInitialViewState] =
    React.useState<MapViewState>(INITIAL_VIEW_STATE);

  const onTilesetLoad = (tileset: Tileset3D) => {
    console.log("Tileset loaded: ", tileset);
    // Recenter view to cover the new tileset
    const { cartographicCenter } = tileset;
    if (cartographicCenter) {
      setInitialViewState({
        ...INITIAL_VIEW_STATE,
        // longitude: tileset.boundingVolume.center[0],
        longitude: cartographicCenter[0] ?? INITIAL_VIEW_STATE.longitude,
        latitude: cartographicCenter[1] ?? INITIAL_VIEW_STATE.latitude,
        // zoom,
      });
      // updateAttributions?.(credits ?? credits.attributions);
    }
  };

  const tile3DLayer = new Tile3DLayer({
    id: "tile-3d-layer",
    pointSize: 1,
    data: TILESET_URL,
    // loader: Tiles3DLoader,
    // @ts-expect-error
    loader: CesiumIonLoader,
    loadOptions: { "cesium-ion": { accessToken: ION_TOKEN } },
    onTilesetLoad,
  });

  // setLayers([tile3DLayer]);
  /* ------- */
  // const [features, setFeatures] = React.useState({
  //   type: "FeatureCollection",
  //   features: [],
  // });
  // const [mode, setMode] = React.useState(() => DrawPolygonMode);
  // const [selectedFeatureIndexes] = React.useState([]);

  // // @ts-ignore
  // const editableLayer = new EditableGeoJsonLayer({
  //   // id: "geojson-layer",
  //   data: features,
  //   // mode,
  //   selectedFeatureIndexes,

  //   onEdit: ({ updatedData }: any) => {
  //     setFeatures(updatedData);
  //   },
  // });

  const [layers, setLayers] = React.useState<any[]>([tile3DLayer]);

  // React.useEffect(() => {});

  return (
    // @ts-ignore
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={layers}>
      <StaticMap mapStyle={mapStyle} mapboxAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  );
}
