// src/data/stays/units/index.ts

// TODO: see whether this can all be dynamically built based on the files present in the "units"folder, rather than having to manually import each unit and add it to the "units" object.
import JasmineSound from "./JasmineSound";
import OliveGrove from "./OliveGrove";
import SunsetSuite from "./SunsetSuite";

export const units = {
  JasmineSound,
  OliveGrove,
  SunsetSuite,
};

export type UnitKey = keyof typeof units;
