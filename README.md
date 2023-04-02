# NMC-TS-Extension

基于 NMC 提供的 js 代码注入功能，提供的 TypeScript 类型扩展库

## 如何使用 NMC-TS-Extension

本部分主要提供给 Mod 制作者，如果你希望使用 TypeScript 编写剧情，同时希望获得相关的代码提示及辅助功能。可以参考如下指南。

1. 下载项目文件

您可以使用如下 git 指令直接进行项目 clone 

```git
git clone https://github.com/MCSModder/NMC-TS-Extension.git
```

但是还请您注意，如果您直接 clone 项目并进行修改的话，还请尽量避免直接在 main 分支进行修改及上传，建议您创建独立的分支进行代码提交。

当然，您也可以直接下载项目的压缩包，不过该项目不会提供对应的 Releases 包，直接下载源码包即可。

2. 构建项目

该项目是基于 Node 环境构建的，如果您希望获取完整的体验的话，可以参考如下操作进行项目构建。

若您不了解 Node，或者不需要去构建项目，也可以跳过该步骤，依旧能够体验到代码增强效果。

> 使用 npm 进行构建

```sh
npm install
```

> 使用 yarn 进行构建

```sh
yarn
```

3. 编写代码

您可以将项目文件通过 VSCode打开，就可以直接在 src 路径下编写您自己的 TypeScript 代码，具体的使用方式可以参考 Test 中的示例。

项目默认添加了 Next 的原生指令及 NMC 扩展指令的代码提示功能，若您的项目依赖其他 Mod 编写的自定义指令，若该 Mod 有提供对应的 XX.d.ts 文件的话，可以通过修改 types/index.d.ts 文件的导出配置，在里面添加对应 Mod 的导出配置，即可扩展对应的自定义指令提示功能。

- 若您已经构建项目，则在项目编写完成后，可以通过运行如下命令，将 TypeScript 文件编译成压缩后的 JavaScript 文件

> 使用 npm 进行构建

```sh
npm run tsc
```

> 使用 yarn 进行构建

```sh
yarn tsc
```

最终导出的 JavaScript 文件路径如下： dist/src/*.js

- 若您并未构建项目，那么可以通过在 Mod 制作群询问或直接寻求帮助的方式，请教他人如何编译 TypeScript 代码

4. 生成 typedoc 文档

项目内集成了 typedoc 模块，可以使用如下命令生成对应的 typedoc 文档

> 使用 npm 进行构建

```sh
npm run doc
```

> 使用 yarn 进行构建

```sh
yarn doc
```

**注**: 项目文档默认包含所有的 types 类型导出，若您只想导出自己所编写的代码文档，可以参考如下方法修改导出配置

```json
# tsconfig.json --> typedocOptions/entryPoints
"entryPoints": ["src/*.ts"]
```

## 如何提供 TypeScript 类型扩展

本部分主要提供给 Mod 制作者，如果你在自己的 Mod 中添加了自定义指令，并且希望把这个指令提供给其他人用的，同时也希望其他人在使用你所制作的自定义指令时能够有更好的类型推断的话。可以参考如下指南。

1. 创建自己的 XX.d.ts 文件，文件命名建议遵守如下约定

> 继承 IDialogEvent 的自定义指令方法，应当创建名称为 runner-mod名称.d.ts 文件

> 继承 IDialogEnvQuery 的自定义运行时脚本方法，应当创建名称为 env-mod名称.d.ts 文件

2. 在文件内编写相关的类型限定及导出声明

这部分不做过多要求，具体编写方式可以参考 types 文件夹内的其他类型文件的编写。

注: 如非必要，尽量保证最终仅有一个导出对象。避免因为导出内容过多产生其他使用问题。

3. 将您自己制作的 XX.d.ts 文件上传到 types 文件夹内，建议上传时填写相关的 issue 同时尽量避免直接对 main 分支进行修改。
