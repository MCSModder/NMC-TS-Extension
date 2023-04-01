import { TipIcon } from "../types";

/**
 * 该示例中，并没有手动导入 Runner 和 Env 对象，因为该对象已经在全局声明
 */
export const func = async (runner: Runner, env: Env) => {
  const { SetInt, ShowOption, ShowTip } = runner;
  const { GetInt } = env;

  // 显示自定义提示, 该处可以导入对应的类型进行快捷填写
  ShowTip("提示信息", TipIcon.上箭头);

  // 当然也可以自己直接写对应的类型
  ShowTip("提示信息", 2);

  // 保存数据到存档
  SetInt("key", 23);

  // 从存档中获取对应数据
  const key = await GetInt("key");
  console.log(key);

  // ShowOption 选项高级写法 需要应用 NMC 工具
  const { createOption } = NMC.Utils;
  ShowOption(...createOption("选项A", "选项B"));
  // 上述代码等价于
  ShowOption("1:选项A", "2:选项B");
};
