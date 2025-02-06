import { MapViewState } from "deck.gl";

const ION_ASSET_ID = 43978;
export const ION_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NjEwMjA4Ni00YmVkLTQyMjgtYjRmZS1lY2M3ZWFiMmFmNTYiLCJpZCI6MjYxMzMsImlhdCI6MTY3NTM2ODY4NX0.chGkGL6DkDNv5wYJQDMzWIvi9iDoVa27dgng_5ARDmo";
export const TILESET_URL = `https://assets.ion.cesium.com/${ION_ASSET_ID}/tileset.json`;

export const BASE_MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
export const COUNTRIES =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson";
export const AIR_PORTS =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";

export const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoicm95ZnV3ZWkiLCJhIjoiY202aHpwZ21oMDM3MzJpcHRrMTZkMHFxYyJ9.ftFNCgN6d4jbGlgOR00cDQ";

/* export const INITIAL_VIEW_STATE: MapViewState = {
  latitude: 51.47,
  longitude: 0.45,
  zoom: 4,
  bearing: 0,
  pitch: 30,
  minZoom: 3,
}; */

export const INITIAL_VIEW_STATE: MapViewState = {
  latitude: 40,
  longitude: -75,
  pitch: 45,
  maxPitch: 60,
  bearing: 0,
  minZoom: 3,
  maxZoom: 30,
  zoom: 17,
  // zoom: 3,
};
