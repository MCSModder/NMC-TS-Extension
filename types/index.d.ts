export { Relation, Death, TipIcon } from "./runner-base";
export { EJuLingZhen, EFightBuffType } from "./runner-nmc";

import { BaseEnv } from "./env-base";
import { NMCEnv } from "./env-nmc";
import { BaseRunner } from "./runner-base";
import { NMCRunner } from "./runner-nmc";

declare global {
  interface Runner extends BaseRunner, NMCRunner {}
  interface Env extends BaseEnv, NMCEnv {}
}

export interface Runner extends BaseRunner, NMCRunner {}
export interface Env extends BaseEnv, NMCEnv {}
