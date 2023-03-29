import { Env, Runner } from "../types";

export const main = async (runner: Runner, env: Env) => {
  runner.RunJS("test", "test")
}