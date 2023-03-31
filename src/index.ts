const { createOption } = NMC.Utils;
export const main = async (runner: Runner, env: Env) => {
  const { StoryManager, ShowOption } = runner;
  ShowOption(...createOption("选项1", "选项2"));
  //等价
  ShowOption("1:选项1", "2:选项2");
  runner.RunJS("test", "test");
  const { 旁白 } = StoryManager;
  旁白("聊天测试");
  旁白`聊天测试${123123}${123123}`;
};
