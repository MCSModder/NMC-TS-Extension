export const main = async (runner: Runner, env: Env) => {
  runner.RunJS("test", "test");
  const { StoryManager } = runner;
  const { 旁白 } = StoryManager;
  旁白("聊天测试");
  旁白`聊天测试${123123}${123123}`;
};
