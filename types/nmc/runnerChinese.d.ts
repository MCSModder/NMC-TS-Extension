import { EFightBuffType, EJuLingZhen, StoryManager, Result } from "./common";
import { NMC指令角色 } from "./Npc";
import { NMC指令战斗 } from "./Fight";
import { NMC指令对话 } from "./Fungus";
import { NMC指令洞府 } from "./DongFu";
import { NMC指令工具 } from "./Utils";
/**
 * 运行时指令调用对象方法扩展 - NextMoreCommand 扩展
 */
export interface NMC指令
  extends NMC指令角色,
    NMC指令战斗,
    NMC指令对话,
    NMC指令洞府,
    NMC指令工具 {}
