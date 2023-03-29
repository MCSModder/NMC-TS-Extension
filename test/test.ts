import { Runner, Env } from "../types";

/**
 * 测试方法
 *
 * @param runner 运行指令
 * @param env 运行时脚本环境
 */
export const test = async (runner: Runner, env: Env) => {
  runner.SetInt("key", 23);
  const key = env.GetInt("key");
  console.log(key);
  runner.AddRelation(2, 3);
  runner.运行JS("index", "func");

  // 写法1
  env.GetInt("测试").then((result) => {
    console.log(result);
  });

  // 写法2
  const result = await env.GetInt("测试");
  console.log(result);
};
