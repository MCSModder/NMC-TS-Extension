export const main = async (runner: Runner, env: Env) => {
  runner.RunJS("test", "test");
  const { StoryManager } = runner;
  const { 测试 } = StoryManager;
  测试("测试");
  测试`cscscsc${123123}${123123}`;
};
