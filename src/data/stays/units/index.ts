// src/data/stays/units/index.ts

// TODO: see whether this can all be dynamically built based on the files present in the "units"folder, rather than having to manually import each unit and add it to the "units" object.
import JasmineSound from "./JasmineSound";
import SunSeaCourtyardStudio from "./CourtyardStudio";
import SunSeaGardenStudio from "./GardenStudio";
import GardenApt from "./GardenApt";
import SunSeaSunriseSuite from "./SunriseSuite";
import SunSeaGardenSuite from "./GardenSuite";
import SunSeaGardenResidence from "./GardenResidence";
import SunSeaHorizonResidence from "./HorizonResidence";

export const units = {
  SunSeaGardenResidence,
  SunSeaHorizonResidence,

  SunSeaSunriseSuite,
  SunSeaGardenSuite,

  GardenApt,

  SunSeaCourtyardStudio,
  SunSeaGardenStudio,

  JasmineSound,
};

export type UnitKey = keyof typeof units;
