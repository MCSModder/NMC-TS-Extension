export { Relation, Death, TipIcon } from "./runner-base";

import { BaseEnv } from "./env-base";
import { BaseRunner } from "./runner-base";
import { NMCRunner } from "./runner-nmc";
declare global {
  interface Runner extends BaseRunner, NMCRunner {}
  interface Env extends BaseEnv {}
}
export interface Runner extends BaseRunner, NMCRunner {}
export interface Env extends BaseEnv {}
