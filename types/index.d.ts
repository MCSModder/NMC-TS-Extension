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
declare enum __Puerts_CSharpEnum {}

declare namespace puer {
  function $ref<T>(x?: T): CS.$Ref<T>;

  function $unref<T>(x: CS.$Ref<T>): T;

  function $set<T>(x: CS.$Ref<T>, val: T): void;

  function $promise<T>(x: CS.$Task<T>): Promise<T>;

  function $generic<T extends new (...args: any[]) => any>(
    genericType: T,
    ...genericArguments: (
      | typeof __Puerts_CSharpEnum
      | (new (...args: any[]) => any)
    )[]
  ): T;

  function $genericMethod(
    genericType: new (...args: any[]) => any,
    methodName: string,
    ...genericArguments: (
      | typeof __Puerts_CSharpEnum
      | (new (...args: any[]) => any)
    )[]
  ): (...args: any[]) => any;

  function $typeof(x: new (...args: any[]) => any): CS.System.Type;

  function $extension(c: Function, e: Function): void;

  function on(eventType: string, listener: Function, prepend?: boolean): void;

  function off(eventType: string, listener: Function): void;

  function emit(eventType: string, ...args: any[]): boolean;

  function loadFile(name: string): { content: string; debugpath: string };

  function evalScript(name: string): void;

  function require(name: string): any;
}

import puerts = puer;

// You can add BTCRunner extensions.
export interface Runner extends BaseRunner, NMCRunner {}
// You can add BTCEnv extensions.
export interface Env extends BaseEnv, NMCEnv {}
