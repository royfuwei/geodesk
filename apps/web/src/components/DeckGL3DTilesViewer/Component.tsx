"use client";
import { CesiumIonLoader } from "@loaders.gl/3d-tiles";
import {
  INITIAL_VIEW_STATE,
  ION_TOKEN,
  MAPBOX_ACCESS_TOKEN,
  TILESET_URL,
} from "../../consts";
import DeckGL, { MapViewState, Tile3DLayer } from "deck.gl";
import { DeckGL3DTilesViewerProps } from "./types";
import React, { useState } from "react";
import { Tileset3D } from "@loaders.gl/tiles";
import StaticMap from "react-map-gl";
// import { DrawPolygonMode, EditableGeoJsonLayer } from "nebula.gl";

export default function DeckGL3DTilesViewer({
  mapStyle = "mapbox://styles/mapbox/dark-v9",
  updateAttributions,
}: DeckGL3DTilesViewerProps) {
  const [initialViewState, setInitialViewState] =
    useState<MapViewState>(INITIAL_VIEW_STATE);

  const onTilesetLoad = (tileset: Tileset3D) => {
    console.log("Tileset loaded: ", tileset);
    // Recenter view to cover the new tileset
    const { cartographicCenter, credits } = tileset;
    if (cartographicCenter) {
      setInitialViewState({
        ...INITIAL_VIEW_STATE,
        // longitude: tileset.boundingVolume.center[0],
        longitude: cartographicCenter[0] ?? INITIAL_VIEW_STATE.longitude,
        latitude: cartographicCenter[1] ?? INITIAL_VIEW_STATE.latitude,
        // zoom,
      });

      updateAttributions?.(credits ?? credits.attributions);
    }
  };

  /* // @ts-ignore
  // const selectionLayer = new SelectionLayer();
  const [features, setFeatures] = useState({
    type: "FeatureCollection",
    features: [],
  });
  const [mode, setMode] = useState(() => DrawPolygonMode);
  const [selectedFeatureIndexes] = useState([]);
  // @ts-ignore
  const editableLayer = new EditableGeoJsonLayer({
    // id: "geojson-layer",
    data: features,
    mode,
    selectedFeatureIndexes,

    onEdit: ({ updatedData }: any) => {
      setFeatures(updatedData);
    },
  }); */

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

  const layers: any[] = [
    //
    // editableLayer,
    tile3DLayer,
  ];

  return (
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={layers}>
      <StaticMap
        mapStyle={mapStyle}
        initialViewState={initialViewState}
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      />
    </DeckGL>
  );
}
