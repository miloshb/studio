// src/data/stays/units/index.ts

// TODO: see whether this can all be dynamically built based on the files present in the "units"folder, rather than having to manually import each unit and add it to the "units" object.
import JasmineSound from "./JasmineSound";
import CourtyardStudio from "./CourtyardStudio";
import GardenStudio from "./GardenStudio";
import GardenApt from "./GardenApt";
import SunriseSuite from "./SunriseSuite";
import GardenSuite from "./GardenSuite";
import GardenResidence from "./GardenResidence";
import HorizonResidence from "./HorizonResidence";

export const units = {
  GardenResidence,
  HorizonResidence,

  SunriseSuite,
  GardenSuite,

  GardenApt,

  CourtyardStudio,
  GardenStudio,

  JasmineSound,
};

export type UnitKey = keyof typeof units;
