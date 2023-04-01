/**
 * 该处提供一些 JavaScript 原生函数，以供参考
 */
export const func = async () => {
  // 控制台信息打印, 该信息会同时出现在 "游戏后台日志" 以及 "前端Console控制台" 中
  console.log("控制台消息");

  // 同理也可使用其他类型信息打印
  console.info("常规信息");
  // 控制台中显示对应"黄色警告信息"
  console.warn("警告信息");
  // 控制台中显示对应"红色异常信息"
  console.error("异常信息");

  // 获取 0 ~ 1 的随机数
  const randomNumber1 = Math.random();
  console.log(randomNumber1);

  // 获取 7 ~ 15 的随机整数
  const randomNumber2 = Math.floor(Math.random() * 8) + 7;
  console.log(randomNumber2);
};
