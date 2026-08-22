// src/data/stays/units/index.ts
import jasminesound from "./JasmineSound";
import olivegrove from "./OliveGrove";
import sunsetsuite from "./SunsetSuite";

export const units = {
  jasminesound,
  olivegrove,
  sunsetsuite,
};

export type UnitKey = keyof typeof units;
