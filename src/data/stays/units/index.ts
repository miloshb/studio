// src/data/stays/units/index.ts

// TODO: see whether this can all be dynamically built based on the files present in the "units"folder, rather than having to manually import each unit and add it to the "units" object.
import jasmineSound from "./JasmineSound";
import courtyardStudio from "./CourtyardStudio";
import gardenStudio from "./GardenStudio";
import gardenApartment from "./GardenApartment";
import sunriseSuite from "./SunriseSuite";
import gardenSuite from "./GardenSuite";
import gardenResidence from "./GardenResidence";
import horizonResidence from "./HorizonResidence";

export const units = {
  gardenResidence,
  horizonResidence,

  sunriseSuite,
  gardenSuite,

  gardenApartment,

  courtyardStudio,
  gardenStudio,

  jasmineSound,
};

export type UnitKey = keyof typeof units;
