"use client";
import { DeckGLBasicViewer } from "../../components/DeckGLBasicViewer";
import { COUNTRIES } from "../../consts";

export default function Geo4DPage() {
  return <DeckGLBasicViewer data={COUNTRIES} />;
}
