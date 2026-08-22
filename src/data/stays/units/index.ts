// src/data/stays/units/index.ts
import JasmineSound from "./JasmineSound";
import OliveGrove from "./OliveGrove";
import SunsetSuite from "./SunsetSuite";

export const units = {
  JasmineSound,
  OliveGrove,
  SunsetSuite,
};

export type UnitKey = keyof typeof units;
