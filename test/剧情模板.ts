import type { Runner, Env } from "../types";

/**
 * 示例剧情 A
 *
 * 参照示例编写相关剧情即可
 * 推荐一个剧情对应一个TypeScript 文件(或者其中的一个方法也可)
 *
 * runner 与 env 对象的使用可以参考 Next 文档中的 Lua 部分内容讲解
 *
 * @param runner 引用 runner 对象
 * @param env 应用 env 对象
 */
export const funcA = async (runner: Runner, env: Env) => {
  // 添加对话角色信息
  runner.SetChar("旁白", 0);
  runner.SetChar("主角", 0);

  // 也可以直接导出相关方法，进行简易操作
  const { SetChar } = runner;
  SetChar("倪大傻", 609);

  // 添加角色对话
  runner.Say("旁白", "有一天，主角和倪大傻碰面了");

  // 直接导出当前对话管理器，进行简易对话操作
  const { 主角, 倪大傻 } = runner.StoryManager;
  主角("嗨~大傻");

  // 或者直接使用如下方式进行对话操作
  倪大傻`兄弟，几日不见，近来可好?`;

  // 同样的，其他方法也可以直接导出进行简易操作
  const { Say } = runner;

  Say("主角", "进来手头有点紧呀,兄弟能不能借我点灵石?");
  Say("倪大傻", "真的么？你还有手头紧的时候？");
  Say("主角", "不信的话，你看我还剩多少灵石了...");

  // 调用 env 中的方法时，因为是通过异步调用获取对应的数据，因此需要进行额外的操作

  // 方式一，通过回调写法进行获取 (不推荐新手使用)
  env.GetMoney().then((money) => {
    // 控制台打印 money 数据
    console.log(money);
    // 通过该方式进行数据获取，后续的所有代码都需要写在对应的括号内，否则会导致其他问题

    // 后续剧情...
  });

  /*
   * 如果直接在这里获取 money 数据，是获取不到的，这也会导致一些其他问题
   * console.log(money);
   */

  // 方式二，通过 await 关键字获取
  const money = await env.GetMoney();
  // 这时可以正常获取数据，await 标记之后的方法会等待数据返回后才继续执行
  console.log(money);
  // 方法二比较简洁，而且利于理解，但容易忘记添加对应的 async 和 await 关键字，新手在使用时要多加注意

  // 后续剧情...

  // 对于变量数据，可以使用 反引号 的方式进行便捷添加
  Say("主角", `你看，我就剩${money}个灵石了。`);
  Say("倪大傻", "哇！兄弟你也太惨了吧，你看这些灵石，你需要多少？尽管拿");

  // 显示对应的对话选项
  const { ShowOption } = runner;
  ShowOption("1:拿一点灵石救急", "2:拿一半灵石", "3:都拿走");

  // 此处获取对话选项的值，也是需要进行异步处理
  const option = await env.optionID();

  // 获取到对应值后，可以使用 switch 进行便捷判断
  switch (option) {
    case 1:
      Say("主角", "我就只拿一点就好");
      Say("倪大傻", "好兄弟，以后灵石不够了再来找我");
      // 记得添加对应的 break 方法，以免剧情错乱
      break;
    case 2:
      Say("主角", "既然如此，那我就拿一半好了");
      Say("倪大傻", "没事，再多拿点也没事");
      break;
    case 3:
      Say("主角", "机会难得，我就不客气了");
      Say("倪大傻", "你这...");
      break;
    // switch 方法最好添加有相应的 default 处理
    default:
      break;
  }

  // 后续剧情模板尚未编写完成
};
