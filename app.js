const articles = [
  {
    id: "ai-ux-research-framework",
    title: "AI 产品体验研究框架：从能力展示到任务闭环",
    category: "AI + 用户体验",
    date: "2026-05-10",
    author: "UED Research",
    readingTime: "9 分钟",
    featured: true,
    accent: "accent-cyan",
    tags: ["体验框架", "任务流", "评估指标"],
    summary:
      "梳理 AI 产品体验研究的关键维度，帮助团队从模型能力、用户意图、反馈机制和任务完成度四个层面判断体验质量。",
    sections: [
      {
        title: "为什么需要新的体验框架",
        paragraphs: [
          "传统产品体验评估更关注路径效率、信息架构和界面可用性，而 AI 产品的体验问题常常发生在意图理解、输出可信度和人机协作节奏中。用户不是只点击一个按钮，而是在与一个不稳定的能力系统共同完成任务。",
          "因此，UED 在研究 AI 产品时需要把能力边界、用户预期和任务闭环放在同一张图里看。好的 AI 体验不是把能力展示得更炫，而是让用户知道什么时候可以依赖它，什么时候需要介入，以及如何把结果带回真实工作流。"
        ],
        points: [
          "把用户目标拆成意图表达、能力调用、结果判断、后续行动四段。",
          "明确每段中用户需要看到的反馈，避免黑箱式等待。",
          "将成功标准从“生成了内容”改为“用户完成了任务”。"
        ]
      },
      {
        title: "四层体验观察模型",
        paragraphs: [
          "第一层是意图层，关注用户是否能自然表达需求；第二层是能力层，关注系统是否能正确选择工具或模型能力；第三层是信任层，关注输出能否解释、修正和追溯；第四层是闭环层，关注结果是否能进入下一步生产流程。",
          "这四层并不是线性阶段，而是会在一次任务中循环出现。尤其在研究、写作、设计生成等场景里，用户会不断调整目标，系统也需要持续给出可理解的状态反馈。"
        ],
        points: [
          "意图层：输入方式、上下文收集、需求澄清。",
          "能力层：工具选择、生成质量、约束遵守。",
          "信任层：依据展示、版本对比、错误恢复。",
          "闭环层：导出、协作、复用、继续编辑。"
        ]
      },
      {
        title: "落地到设计评审",
        paragraphs: [
          "在设计评审中，可以把每个 AI 功能放进四层模型中检查。比如一个智能报告生成功能，除了看页面是否好看，还要看用户是否知道报告基于哪些数据、能否修改生成方向、能否将结果导入现有汇报链路。",
          "这个框架特别适合早期概念验证。它能帮助团队快速识别“看起来聪明但无法交付价值”的功能，并把设计讨论拉回用户任务本身。"
        ],
        points: [
          "评审问题从界面走查扩展到能力走查。",
          "将异常状态、空状态、低置信度状态纳入主流程。",
          "用任务完成率和返工率补充传统点击效率指标。"
        ]
      }
    ]
  },
  {
    id: "prompt-interface-patterns",
    title: "Prompt 交互模式库：让用户更稳定地表达复杂需求",
    category: "AI + 交互设计",
    date: "2026-05-08",
    author: "Interaction Lab",
    readingTime: "11 分钟",
    featured: true,
    accent: "accent-green",
    tags: ["Prompt", "输入设计", "人机协作"],
    summary:
      "总结适合设计工具、运营工具和知识工具的 Prompt 输入模式，包括模板化、渐进补全、参数面板和多轮澄清。",
    sections: [
      {
        title: "Prompt 不是单纯的输入框",
        paragraphs: [
          "当用户面对一个空白 Prompt 输入框时，真正的难点不是打字，而是不知道系统听得懂什么、需要自己补充什么、生成失败后该如何调整。Prompt 交互设计的重点是降低表达复杂需求的认知成本。",
          "在 UED 的产品语境中，Prompt 更像一个任务配置入口。它应该帮助用户把目标、素材、约束、风格和输出格式组织起来，而不是把所有负担都交给自然语言。"
        ],
        points: [
          "输入框需要提供能力边界提示，而不是只给 placeholder。",
          "复杂任务适合用自然语言加结构化参数共同表达。",
          "系统应把可复用的 Prompt 变成团队资产。"
        ]
      },
      {
        title: "五种高频模式",
        paragraphs: [
          "第一种是任务模板，适合重复性强的生成任务；第二种是渐进补全，适合用户意图明确但表达不完整的任务；第三种是参数面板，适合有明确约束的设计生产；第四种是示例驱动，适合风格迁移；第五种是多轮澄清，适合需求模糊的研究分析。",
          "这些模式可以组合使用。比如一个 AI Banner 生成工具，可以先用任务模板框定目标，再通过参数面板选择比例、风格和品牌约束，最后通过多轮对话修正文案和视觉方向。"
        ],
        points: [
          "任务模板：提高起步速度。",
          "渐进补全：减少遗漏条件。",
          "参数面板：保证可控性。",
          "示例驱动：让风格表达更准确。",
          "多轮澄清：处理不确定需求。"
        ]
      },
      {
        title: "设计注意事项",
        paragraphs: [
          "Prompt 组件不要把所有能力一次性摊开。用户更需要在关键时刻看到刚好足够的建议。过度的模板、标签和推荐语会让输入区变得拥挤，反而削弱自然表达的灵活性。",
          "一个好的 Prompt 交互应该有三种反馈：输入前的启发、输入中的补全、生成后的可编辑建议。这样用户会感觉自己在和系统共同构建结果，而不是提交一次不可控的请求。"
        ],
        points: [
          "避免把 Prompt 样例写成说明书。",
          "在输入区附近保留最近使用和团队精选模板。",
          "生成失败时提供可点击的修正方向。"
        ]
      }
    ]
  },
  {
    id: "ai-visual-evaluation",
    title: "AI 视觉生成结果如何评估：从审美到品牌一致性",
    category: "AI + 视觉设计",
    date: "2026-05-05",
    author: "Visual System",
    readingTime: "8 分钟",
    featured: false,
    accent: "accent-amber",
    tags: ["视觉生成", "品牌", "质量评估"],
    summary:
      "构建视觉生成质量评估表，覆盖构图、信息层级、品牌一致性、可商用性和异常细节检查。",
    sections: [
      {
        title: "视觉生成质量的常见误区",
        paragraphs: [
          "AI 视觉生成很容易在第一眼形成冲击，但高冲击不等于可用。很多结果存在品牌调性偏移、信息层级混乱、局部细节异常或无法进入后续设计生产的问题。",
          "因此评估不能只看“像不像高级图”。UED 更需要判断它是否符合业务信息目标、是否能被编辑、是否能在多尺寸和多渠道中稳定复用。"
        ],
        points: [
          "把可用性放在视觉惊艳之前。",
          "重点检查文字、手部、产品结构和边缘细节。",
          "把品牌色、图形语言和摄影风格纳入评估表。"
        ]
      },
      {
        title: "五维评估表",
        paragraphs: [
          "建议从构图稳定性、信息表达、品牌一致性、技术瑕疵和生产可接续性五个维度评分。每个维度不追求复杂打分，而是用通过、待修正、不可用三档快速判断。",
          "评估表可以嵌入设计评审流程。设计师生成多版方案后，先用表格筛掉明显不可用的结果，再进入人工精修和业务讨论。"
        ],
        points: [
          "构图稳定性：主体是否明确，留白是否合理。",
          "信息表达：是否支持标题、卖点和行动入口。",
          "品牌一致性：是否符合品牌资产和当前活动调性。",
          "技术瑕疵：是否存在明显生成错误。",
          "生产可接续性：是否方便裁切、分层和二次编辑。"
        ]
      },
      {
        title: "团队协作建议",
        paragraphs: [
          "视觉生成的价值不只是替代执行，更在于快速打开方向空间。团队可以沉淀高质量 Prompt、反例库和品牌风格参考，让生成过程逐渐从个人技巧变成组织能力。",
          "在商用场景中，还需要记录素材来源、模型版本和人工修改痕迹，确保后续复盘和风险判断有据可查。"
        ],
        points: [
          "建立品牌风格参考板。",
          "沉淀可复用 Prompt 和不可用反例。",
          "标记每张生成图的用途、限制和修改记录。"
        ]
      }
    ]
  },
  {
    id: "ai-design-system",
    title: "设计系统中的 AI 组件：智能能力如何被产品化",
    category: "AI + 设计系统",
    date: "2026-05-02",
    author: "Design System Team",
    readingTime: "10 分钟",
    featured: true,
    accent: "accent-blue",
    tags: ["设计系统", "组件", "规范"],
    summary:
      "讨论 AI 能力进入设计系统后的组件抽象方式，包括建议条、生成面板、置信度提示和人工接管状态。",
    sections: [
      {
        title: "AI 能力需要组件化",
        paragraphs: [
          "当 AI 功能在多个业务线中出现后，如果每个团队都独立设计输入、生成、加载、纠错和反馈机制，用户会在不同产品中感受到完全不同的智能体验。设计系统需要把高频 AI 行为抽象成稳定组件。",
          "组件化不是把所有 AI 功能做成同一个样子，而是提供一致的交互语法。比如建议如何出现、用户如何采纳、系统如何解释依据、失败时如何恢复。"
        ],
        points: [
          "统一生成中、生成失败、低置信度等状态。",
          "为建议采纳、忽略、编辑提供一致行为。",
          "将 AI 组件和普通表单、弹窗、侧栏协同定义。"
        ]
      },
      {
        title: "核心组件清单",
        paragraphs: [
          "第一批 AI 组件可以从建议条、智能输入框、生成面板、结果对比、引用来源、置信度提示和人工接管入口开始。这些组件覆盖了多数 AI 产品从输入到输出的关键节点。",
          "组件文档中要同时写清视觉规范和能力依赖。比如结果对比组件需要支持版本管理，引用来源组件需要后端返回可追溯证据，不能只停留在 UI 图层。"
        ],
        points: [
          "建议条：轻量提示和一键采纳。",
          "智能输入框：模板、变量和上下文引用。",
          "生成面板：承载多轮生成和结果管理。",
          "置信度提示：帮助用户判断是否需要复核。",
          "人工接管：让用户随时退出自动化。"
        ]
      },
      {
        title: "规范的边界",
        paragraphs: [
          "AI 组件规范需要保留足够弹性，因为不同业务的风险和任务复杂度差异很大。设计系统可以规定基础行为和状态命名，但不应强制所有业务使用同一种信息密度。",
          "更好的方式是建立组件、模式和场景案例三层资料。组件解决一致性，模式解决组合方式，案例帮助业务团队理解如何在真实流程中使用。"
        ],
        points: [
          "组件层：定义基础交互和状态。",
          "模式层：定义多组件组合方案。",
          "案例层：沉淀业务落地样板。"
        ]
      }
    ]
  },
  {
    id: "ai-research-agent",
    title: "研究型 Agent 在 UED 工作流中的应用机会",
    category: "AI + 设计工具",
    date: "2026-04-28",
    author: "Tooling Lab",
    readingTime: "12 分钟",
    featured: false,
    accent: "accent-rose",
    tags: ["Agent", "设计工具", "研究流程"],
    summary:
      "分析研究型 Agent 如何辅助资料收集、竞品拆解、访谈总结和洞察聚类，并指出它不适合替代的环节。",
    sections: [
      {
        title: "适合 Agent 的研究任务",
        paragraphs: [
          "研究型 Agent 适合处理目标明确、步骤可拆解、资料来源相对清晰的任务。例如整理竞品功能矩阵、提取用户访谈主题、扫描行业报告中的趋势信号。",
          "这些任务的共同点是过程耗时但判断标准相对稳定。Agent 可以提高资料处理速度，让研究人员把更多时间放在问题定义和洞察判断上。"
        ],
        points: [
          "资料收集：按主题抓取和归档信息。",
          "竞品拆解：提取功能、流程和表达方式。",
          "访谈总结：聚类痛点、动机和典型表述。",
          "趋势扫描：发现重复出现的新概念。"
        ]
      },
      {
        title: "不适合完全自动化的环节",
        paragraphs: [
          "研究中的关键判断仍需要人来完成。比如判断一个用户痛点是否真正重要、某个竞品策略是否适合自身业务、一个趋势是否已经进入可落地阶段。",
          "Agent 的输出应被视为研究材料，而不是研究结论。设计时需要保留证据来源、置信度和人工标注入口，避免团队直接引用未经复核的总结。"
        ],
        points: [
          "问题定义不能交给 Agent 代劳。",
          "关键洞察需要人工复核证据。",
          "涉及战略判断的内容要保留讨论空间。"
        ]
      },
      {
        title: "产品化建议",
        paragraphs: [
          "研究型 Agent 的界面不应只做成聊天窗口。更适合的形态是任务面板加资料画布：左侧配置目标和来源，中间展示处理过程，右侧沉淀洞察卡片和证据链接。",
          "这样既保留了 Agent 的连续执行能力，也让研究过程可见、可控、可回溯。"
        ],
        points: [
          "把 Agent 行动拆成可暂停、可重试的步骤。",
          "每条结论都应关联原文证据。",
          "支持将洞察卡片导出到团队知识库。"
        ]
      }
    ]
  },
  {
    id: "ai-content-ops",
    title: "AI 内容生成在运营设计中的协同方式",
    category: "AI + 内容生成",
    date: "2026-04-25",
    author: "Content Design",
    readingTime: "7 分钟",
    featured: false,
    accent: "accent-green",
    tags: ["内容生成", "运营设计", "多版本"],
    summary:
      "研究 AI 如何帮助运营团队快速生成多版本文案和视觉方向，同时保持品牌口吻与活动策略一致。",
    sections: [
      {
        title: "从单条生成到批量协同",
        paragraphs: [
          "运营设计中的 AI 价值不在于生成一条文案，而在于根据不同人群、渠道和活动阶段快速产出可比较的多版本方案。设计系统需要支持批量生成、批量评估和批量替换。",
          "这类场景尤其依赖结构化输入。活动目标、用户分层、限制词、品牌口吻和转化目标都应该成为生成参数，而不是散落在一句 Prompt 里。"
        ],
        points: [
          "为渠道、客群和活动阶段建立变量。",
          "支持一次生成多个候选版本。",
          "用对比视图帮助运营快速筛选。"
        ]
      },
      {
        title: "品牌口吻控制",
        paragraphs: [
          "AI 生成文案最常见的问题是语气漂移。品牌口吻需要被整理成可调用的规则，包括句式长度、情绪强度、禁用词、常用表达和不同场景下的语气边界。",
          "如果品牌规则只是写在文档里，模型很难稳定遵守。更有效的方式是把规则做成模板、校验器和示例库，共同作用于生成前后。"
        ],
        points: [
          "维护品牌词典和禁用表达。",
          "将优秀历史文案作为风格示例。",
          "生成后自动提示可能偏离口吻的句子。"
        ]
      },
      {
        title: "评审与上线",
        paragraphs: [
          "运营内容通常时间紧、版本多。AI 工具需要把评审动作前置，比如自动检查敏感词、利益点一致性、活动时间和按钮文案，减少人工来回核对。",
          "最终上线仍需要人确认。尤其涉及价格、权益、承诺和合规表述时，AI 应提供检查清单，而不是直接替人发布。"
        ],
        points: [
          "上线前自动执行基础校验。",
          "高风险内容需要明显标记。",
          "保留人工确认和版本记录。"
        ]
      }
    ]
  },
  {
    id: "ai-data-insight",
    title: "让数据洞察可对话：AI 分析助手的信息设计",
    category: "AI + 数据分析",
    date: "2026-04-21",
    author: "Data Experience",
    readingTime: "9 分钟",
    featured: false,
    accent: "accent-blue",
    tags: ["数据分析", "可视化", "解释性"],
    summary:
      "探讨面向非数据专业用户的 AI 分析助手，如何在对话、图表、解释和追问之间建立清晰的信息层级。",
    sections: [
      {
        title: "数据对话的核心矛盾",
        paragraphs: [
          "用户希望像提问一样获取数据洞察，但数据分析本身依赖口径、时间范围、过滤条件和统计方法。如果系统只给出一句结论，很容易制造误解。",
          "AI 分析助手需要同时处理自然语言和结构化分析。界面应把问题、口径、图表、结论和下一步追问放在同一个可理解的叙事中。"
        ],
        points: [
          "每个回答都展示使用的数据口径。",
          "重要结论需要配套图表或指标卡。",
          "系统主动提供合理追问，而不是结束对话。"
        ]
      },
      {
        title: "推荐信息结构",
        paragraphs: [
          "一个分析回答可以由四层组成：先给直接结论，再给关键证据，然后说明口径和限制，最后提供可继续追问的方向。这样的结构既满足快速阅读，也给严谨用户足够依据。",
          "图表不应被藏在回答后面。对于趋势、对比、构成和异常问题，图表是结论的一部分，应该和文字解释并排出现。"
        ],
        points: [
          "结论层：一句话回答用户问题。",
          "证据层：关键指标和图表。",
          "口径层：数据范围、过滤条件、计算方法。",
          "追问层：下一步可探索的问题。"
        ]
      },
      {
        title: "异常与信任",
        paragraphs: [
          "当数据缺失、口径冲突或模型不确定时，AI 分析助手必须清楚说明。模糊状态下假装自信，是数据产品中最危险的体验问题。",
          "设计上可以通过低置信度提示、口径冲突警告和手动调整入口，让用户知道结果还需要复核。"
        ],
        points: [
          "低置信度回答不使用确定语气。",
          "支持用户切换口径后重新生成。",
          "保留分析链路和数据源链接。"
        ]
      }
    ]
  },
  {
    id: "ai-case-shopping",
    title: "电商场景中的 AI 导购体验：从问答到决策支持",
    category: "AI + 行业案例",
    date: "2026-04-18",
    author: "Scenario Research",
    readingTime: "10 分钟",
    featured: false,
    accent: "accent-amber",
    tags: ["电商", "导购", "决策支持"],
    summary:
      "拆解 AI 导购在电商场景的体验机会，重点关注需求澄清、商品比较、理由解释和风险提示。",
    sections: [
      {
        title: "AI 导购不只是客服升级",
        paragraphs: [
          "传统客服解决的是售前售后问题，AI 导购解决的是选择困难。用户往往不知道如何表达需求，也不知道该比较哪些参数。好的导购体验应该帮助用户形成购买判断。",
          "因此 AI 导购的核心不是回答商品信息，而是把用户的模糊需求转化为可比较的决策维度。"
        ],
        points: [
          "识别用户真实使用场景。",
          "把商品差异转化为决策语言。",
          "解释推荐理由和不推荐理由。"
        ]
      },
      {
        title: "关键体验流程",
        paragraphs: [
          "导购流程可以分为需求澄清、候选生成、对比解释和风险提示四步。每一步都需要界面支持，而不是完全依赖对话文本。",
          "例如商品对比应使用表格和差异高亮，推荐理由应绑定具体商品属性，风险提示应包括价格波动、适配限制或售后条件。"
        ],
        points: [
          "需求澄清使用轻量问题卡。",
          "候选商品支持横向比较。",
          "推荐理由要可追溯到商品参数。",
          "风险提示不能被弱化隐藏。"
        ]
      },
      {
        title: "设计风险",
        paragraphs: [
          "导购类 AI 很容易被用户理解为平台立场，因此推荐结果的透明度非常重要。系统需要区分广告、热卖、个性化匹配和客观适配。",
          "如果推荐理由不透明，用户会把一次错误推荐放大为对平台的不信任。"
        ],
        points: [
          "明确标记商业推荐和算法推荐。",
          "允许用户调整推荐偏好。",
          "展示不确定信息和替代选项。"
        ]
      }
    ]
  },
  {
    id: "ai-frontier-interfaces",
    title: "多模态界面的下一步：语音、图像与操作流融合",
    category: "AI + 前沿趋势",
    date: "2026-04-15",
    author: "Future Interface",
    readingTime: "13 分钟",
    featured: true,
    accent: "accent-rose",
    tags: ["多模态", "趋势", "界面演进"],
    summary:
      "观察多模态 AI 对界面形态的影响，分析语音、图像、文本和操作流融合后设计师需要关注的新问题。",
    sections: [
      {
        title: "界面从输入容器变成协作空间",
        paragraphs: [
          "多模态能力成熟后，用户不再只通过文本发出指令，而会上传截图、圈选区域、直接说话或让系统观察当前操作环境。界面需要承载更多上下文，而不是只承载输入框。",
          "这意味着设计师要重新思考信息收集方式。系统需要知道用户指的是哪个对象、当前处于哪个任务阶段，以及哪些内容可以被 AI 使用。"
        ],
        points: [
          "支持截图、语音、文件和页面上下文共同输入。",
          "明确显示 AI 当前可见和不可见的内容。",
          "让用户能编辑系统理解到的上下文。"
        ]
      },
      {
        title: "操作流中的 AI",
        paragraphs: [
          "AI 不会只停留在聊天窗口里。它会进入表格、画布、代码编辑器、设计工具和业务系统，在用户操作流中实时给出建议或执行任务。",
          "这种形态要求 AI 反馈更轻、更准、更可撤回。用户不希望每一步都被打断，但也需要在关键节点得到帮助。"
        ],
        points: [
          "建议应该贴近当前操作对象。",
          "自动执行必须提供撤回和确认。",
          "长任务需要显示步骤和进度。"
        ]
      },
      {
        title: "新的设计问题",
        paragraphs: [
          "多模态界面最大的挑战是边界感。用户需要清楚知道系统看到了什么、记住了什么、将要做什么，以及这些行为是否会影响真实数据。",
          "未来的 AI 界面设计会更像权限设计、流程设计和信任设计的结合。"
        ],
        points: [
          "设计上下文可见性。",
          "设计记忆与隐私控制。",
          "设计自动操作的确认机制。"
        ]
      }
    ]
  },
  {
    id: "ai-mobile-ux",
    title: "移动端 AI 功能的轻量化设计原则",
    category: "移动端体验",
    date: "2026-04-12",
    author: "Mobile UX",
    readingTime: "8 分钟",
    featured: false,
    accent: "accent-cyan",
    tags: ["移动端", "轻量化", "场景"],
    summary:
      "面向手机端空间有限、任务碎片化的特点，提出 AI 功能入口、反馈和编辑机制的轻量化原则。",
    sections: [
      {
        title: "移动端的 AI 不宜过重",
        paragraphs: [
          "移动端用户更容易处在碎片化场景中，注意力和屏幕空间都有限。如果把桌面端复杂的 AI 面板直接搬到手机上，用户会很快失去耐心。",
          "移动端 AI 设计应优先处理单步明确任务，比如改写一句话、总结一段内容、识别一张图中的关键信息。"
        ],
        points: [
          "入口尽量贴近用户当前内容。",
          "减少长表单和复杂参数。",
          "优先提供一键采纳和轻量编辑。"
        ]
      },
      {
        title: "反馈设计",
        paragraphs: [
          "手机端生成等待更容易让用户焦虑。系统需要提供短任务的即时反馈和长任务的可离开机制。生成中状态应明确告诉用户正在处理什么，而不是只有一个加载动画。",
          "结果展示也需要控制信息密度。可以先展示最有价值的结果，再通过展开提供更多解释和备选版本。"
        ],
        points: [
          "生成中显示任务名称和预计阶段。",
          "长任务支持后台完成提醒。",
          "结果优先展示可直接使用的版本。"
        ]
      },
      {
        title: "编辑与撤回",
        paragraphs: [
          "移动端的误触成本高，AI 又可能自动修改内容，因此撤回和对比非常关键。用户需要能看到修改前后差异，并快速恢复原内容。",
          "设计上可以使用底部操作栏承载采纳、重试、调整和撤回，让用户在单手操作中完成主要动作。"
        ],
        points: [
          "自动修改必须可撤回。",
          "重要内容提供前后对比。",
          "底部操作区保持按钮数量克制。"
        ]
      }
    ]
  },
  {
    id: "ai-enterprise-workflow",
    title: "企业服务中的 AI：权限、审计与协作体验",
    category: "企业服务",
    date: "2026-04-09",
    author: "B2B Experience",
    readingTime: "12 分钟",
    featured: false,
    accent: "accent-blue",
    tags: ["企业服务", "权限", "协作"],
    summary:
      "研究企业服务产品中引入 AI 后的体验要求，尤其是权限边界、审计记录、团队协作和风险控制。",
    sections: [
      {
        title: "企业 AI 的体验关键词是可控",
        paragraphs: [
          "企业用户使用 AI 时，不只关心效率，也关心数据是否安全、操作是否可追溯、结果是否符合组织流程。一个很聪明但不可控的 AI 功能，在企业场景中很难被接受。",
          "因此企业 AI 的体验设计要把权限、审计和协作放在基础层，而不是上线后补充。"
        ],
        points: [
          "AI 能访问哪些数据必须透明。",
          "自动操作需要权限校验和审批。",
          "关键结果需要保留生成记录。"
        ]
      },
      {
        title: "协作体验",
        paragraphs: [
          "企业工作通常由多人共同完成。AI 生成的内容需要支持评论、指派、版本管理和审批状态，而不是只存在于个人对话中。",
          "设计时可以把 AI 输出转化为可协作对象，比如洞察卡、任务草案、报告段落或待确认建议。"
        ],
        points: [
          "让 AI 结果进入团队工作台。",
          "支持多人对同一结果评论和修改。",
          "明确标记 AI 生成、人工编辑和最终确认状态。"
        ]
      },
      {
        title: "审计与风险",
        paragraphs: [
          "当 AI 参与合同、财务、客户数据或运营策略时，审计链路是体验的一部分。用户需要知道谁发起了任务、AI 使用了哪些资料、谁批准了结果。",
          "这些信息不应该隐藏在系统日志中，而应该在需要时能被业务用户理解和调用。"
        ],
        points: [
          "为高风险操作提供审批流。",
          "展示生成依据和操作日志。",
          "支持管理员配置 AI 能力边界。"
        ]
      }
    ]
  },
  {
    id: "ai-ux-metrics",
    title: "AI 功能体验指标：如何衡量用户真的变高效了",
    category: "AI + 用户体验",
    date: "2026-04-05",
    author: "Experience Metrics",
    readingTime: "9 分钟",
    featured: false,
    accent: "accent-green",
    tags: ["体验指标", "效率", "质量"],
    summary:
      "提出 AI 功能的体验指标体系，覆盖任务完成、采纳率、修改成本、信任感和长期复用。",
    sections: [
      {
        title: "不要只看使用次数",
        paragraphs: [
          "AI 功能上线后很容易用调用量、生成次数或点击率来衡量效果。但这些指标只能说明用户试过，不代表用户真的完成了任务，也不代表结果被采用。",
          "更有价值的指标应该回答三个问题：用户是否更快完成任务，结果是否被真实使用，用户是否愿意再次使用。"
        ],
        points: [
          "区分尝试、采纳和复用。",
          "关注生成后修改成本。",
          "把任务完成率作为核心指标。"
        ]
      },
      {
        title: "指标体系",
        paragraphs: [
          "建议从效率、质量、信任和留存四个维度建立指标。效率看时间节省，质量看结果采纳和返工，信任看用户复核和撤回行为，留存看重复使用和模板沉淀。",
          "指标需要结合定性研究。比如采纳率低可能是生成质量差，也可能是用户没有看到合适的采纳入口。"
        ],
        points: [
          "效率：任务时长、步骤减少、等待时间。",
          "质量：采纳率、返工率、人工修正量。",
          "信任：撤回率、查看依据比例、低置信度处理。",
          "留存：重复使用、模板保存、团队分享。"
        ]
      },
      {
        title: "指标落地",
        paragraphs: [
          "埋点设计要贴近任务流程，而不是只记录按钮点击。比如生成结果后，用户是复制、编辑、重新生成、删除还是导出，这些行为都能反映真实体验。",
          "同时，要为设计团队建立指标看板，把 AI 功能的质量问题持续暴露出来，支持后续优化。"
        ],
        points: [
          "按任务链路设计埋点。",
          "记录生成后用户行为。",
          "把指标和用户访谈结合复盘。"
        ]
      }
    ]
  }
];

const categories = ["全部", ...new Set(articles.map((article) => article.category))];
const state = {
  query: "",
  category: "全部",
  sort: "featured"
};

const app = document.querySelector("#app");

function formatDate(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(date));
}

function articleMatches(article) {
  const keyword = state.query.trim().toLowerCase();
  const categoryMatch = state.category === "全部" || article.category === state.category;
  if (!keyword) return categoryMatch;

  const haystack = [
    article.title,
    article.summary,
    article.category,
    article.author,
    ...article.tags,
    ...article.sections.flatMap((section) => [section.title, ...section.paragraphs, ...section.points])
  ]
    .join(" ")
    .toLowerCase();

  return categoryMatch && haystack.includes(keyword);
}

function getFilteredArticles() {
  const filtered = articles.filter(articleMatches);
  return filtered.sort((a, b) => {
    if (state.sort === "newest") return new Date(b.date) - new Date(a.date);
    if (state.sort === "reading") return Number.parseInt(a.readingTime) - Number.parseInt(b.readingTime);
    return Number(b.featured) - Number(a.featured) || new Date(b.date) - new Date(a.date);
  });
}

function renderHome() {
  const featured = articles.filter((article) => article.featured).slice(0, 6);
  const latest = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);

  app.innerHTML = `
    <section class="page">
      <div class="hero">
        <div class="hero-copy">
          <span class="eyebrow"><i class="pulse"></i> UED AI Research Intelligence</span>
          <h1 class="hero-title"><span>UED x AI</span><span>研究库</span></h1>
          <p class="lead">集中展示 AI 时代的设计研究、交互模式、视觉方法、行业案例和工具实践，让团队能更快找到方向、复用洞察、形成下一次设计判断。</p>
          <form class="search-panel" data-hero-search>
            <input id="heroSearch" type="search" placeholder="搜索 Prompt、Agent、多模态、设计系统、行业案例..." autocomplete="off" />
            <button class="primary-btn" type="submit">进入研究库</button>
          </form>
          <div class="hero-stats" aria-label="研究库概览">
            <div class="stat"><strong>${articles.length}</strong><span>篇示例研究</span></div>
            <div class="stat"><strong>${categories.length - 1}</strong><span>个设计分类</span></div>
            <div class="stat"><strong>${new Set(articles.flatMap((article) => article.tags)).size}</strong><span>个研究标签</span></div>
          </div>
        </div>
        <div class="signal-board" aria-label="研究信号看板">
          <div class="signal-header">
            <span>Research Signals</span>
            <span>2026</span>
          </div>
          <div class="signal-stack">
            ${featured
              .slice(0, 4)
              .map(
                (article, index) => `
                  <a class="signal-card" href="#article/${article.id}">
                    <span class="signal-icon">0${index + 1}</span>
                    <span>
                      <strong>${article.category}</strong>
                      <span>${article.title}</span>
                    </span>
                    <span class="signal-meter"><i style="width:${92 - index * 10}%"></i></span>
                  </a>
                `
              )
              .join("")}
          </div>
          <div class="signal-footer">
            <span>Design Knowledge Graph</span>
            <span>Searchable</span>
          </div>
        </div>
      </div>

      <section id="categories">
        <div class="section-head">
          <div>
            <h2>按设计类型进入</h2>
            <p>把 AI 研究拆成团队熟悉的设计议题，方便从问题类型而不是文件夹路径开始查找。</p>
          </div>
        </div>
        <div class="category-strip">
          ${categories
            .filter((category) => category !== "全部")
            .slice(0, 8)
            .map((category) => {
              const count = articles.filter((article) => article.category === category).length;
              return `
                <button class="category-tile" type="button" data-category-link="${category}">
                  <strong>${category}</strong>
                  <span>${count} 篇研究，覆盖方法、案例和设计注意事项。</span>
                </button>
              `;
            })
            .join("")}
        </div>
      </section>

      <section>
        <div class="section-head">
          <div>
            <h2>精选研究</h2>
            <p>优先展示可作为团队共识、评审框架或新项目参考的研究内容。</p>
          </div>
          <a class="chip" href="#library">查看全部</a>
        </div>
        <div class="article-grid">${featured.map(renderArticleCard).join("")}</div>
      </section>

      <section id="library" style="margin-top: 54px;">
        <div class="section-head">
          <div>
            <h2>最新文章</h2>
            <p>持续沉淀 AI 与设计结合的观察、方法和项目经验。</p>
          </div>
        </div>
        <div class="article-grid">${latest.map(renderArticleCard).join("")}</div>
      </section>
    </section>
  `;

  bindHomeEvents();
}

function renderLibrary() {
  const filtered = getFilteredArticles();
  app.innerHTML = `
    <section class="page">
      <div class="section-head">
        <div>
          <h2>研究文章</h2>
          <p>通过关键词、分类和排序快速定位 AI 设计研究。搜索会覆盖标题、摘要、标签和正文内容。</p>
        </div>
      </div>
      <div class="toolbar">
        <label class="library-search">
          <span>⌕</span>
          <input id="librarySearch" type="search" value="${state.query}" placeholder="直接搜索研究主题、方法、场景..." autocomplete="off" />
        </label>
        <select class="sort-select" id="sortSelect" aria-label="排序方式">
          <option value="featured" ${state.sort === "featured" ? "selected" : ""}>推荐优先</option>
          <option value="newest" ${state.sort === "newest" ? "selected" : ""}>最新发布</option>
          <option value="reading" ${state.sort === "reading" ? "selected" : ""}>阅读时长</option>
        </select>
      </div>
      <div class="chips" aria-label="分类筛选">
        ${categories
          .map(
            (category) => `
              <button class="chip ${state.category === category ? "is-active" : ""}" type="button" data-filter-category="${category}">
                ${category}
              </button>
            `
          )
          .join("")}
      </div>
      <div class="article-grid">
        ${
          filtered.length
            ? filtered.map(renderArticleCard).join("")
            : `<div class="empty-state">没有找到匹配的研究文章。换个关键词或分类试试。</div>`
        }
      </div>
    </section>
  `;

  bindLibraryEvents();
}

function renderArticleCard(article) {
  return `
    <a class="article-card ${article.accent}" href="#article/${article.id}">
      <div class="cover" aria-hidden="true"></div>
      <div class="article-body">
        <div class="meta-row">
          <span class="badge">${article.category}</span>
          <span>${formatDate(article.date)}</span>
          <span>${article.readingTime}</span>
        </div>
        <h3>${article.title}</h3>
        <p>${article.summary}</p>
        <div class="tags">
          ${article.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    </a>
  `;
}

function renderArticleDetail(article, activeSectionId = "") {
  const sectionIds = article.sections.map((section, index) => `section-${index + 1}`);
  const related = articles
    .filter((item) => item.id !== article.id && (item.category === article.category || item.tags.some((tag) => article.tags.includes(tag))))
    .slice(0, 3);

  app.innerHTML = `
    <section class="page detail-page">
      <div class="detail-layout">
        <aside class="toc" aria-label="文章目录">
          <div class="toc-header">
            <span>文章结构树</span>
            <strong>${article.sections.length} 个章节</strong>
          </div>
          <nav>
            ${article.sections
              .map(
                (section, index) => `
                  <a href="#article/${article.id}/${sectionIds[index]}" data-toc-link="${sectionIds[index]}">${String(index + 1).padStart(2, "0")} ${section.title}</a>
                `
              )
              .join("")}
          </nav>
        </aside>

        <article class="detail-article ${article.accent}">
          <div class="detail-hero">
            <div class="detail-cover" aria-hidden="true"></div>
          </div>
          <div class="detail-content">
            <a class="back-link" href="#library">← 返回研究文章</a>
            <div class="meta-row">
              <span class="badge">${article.category}</span>
              <span>${formatDate(article.date)}</span>
              <span>${article.author}</span>
              <span>${article.readingTime}</span>
            </div>
            <h1>${article.title}</h1>
            <p class="article-summary">${article.summary}</p>
            <div class="detail-meta">
              ${article.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>

            ${article.sections
              .map(
                (section, index) => `
                  <section class="content-section" id="${sectionIds[index]}" data-section-id="${sectionIds[index]}">
                    <h2>${section.title}</h2>
                    ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
                    <ul>
                      ${section.points.map((point) => `<li>${point}</li>`).join("")}
                    </ul>
                  </section>
                `
              )
              .join("")}

            ${
              related.length
                ? `
                  <section class="related">
                    <h2>相关推荐</h2>
                    <div class="related-list">
                      ${related
                        .map(
                          (item) => `
                            <a class="related-card" href="#article/${item.id}">
                              <strong>${item.title}</strong>
                              <span>${item.category} · ${formatDate(item.date)}</span>
                            </a>
                          `
                        )
                        .join("")}
                    </div>
                  </section>
                `
                : ""
            }
          </div>
        </article>
      </div>
    </section>
  `;

  bindTocObserver();

  if (activeSectionId) {
    const target = document.getElementById(activeSectionId);
    if (target) {
      target.scrollIntoView({ block: "start" });
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    }
  }
}

function bindHomeEvents() {
  const form = document.querySelector("[data-hero-search]");
  const input = document.querySelector("#heroSearch");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    state.query = input.value;
    state.category = "全部";
    location.hash = "#library";
  });

  document.querySelectorAll("[data-category-link]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.categoryLink;
      state.query = "";
      location.hash = "#library";
    });
  });
}

function bindLibraryEvents() {
  const search = document.querySelector("#librarySearch");
  const sort = document.querySelector("#sortSelect");

  search?.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderLibrary();
    document.querySelector("#librarySearch")?.focus();
  });

  sort?.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderLibrary();
  });

  document.querySelectorAll("[data-filter-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.filterCategory;
      renderLibrary();
    });
  });
}

function bindTocObserver() {
  const links = [...document.querySelectorAll("[data-toc-link]")];
  const sections = [...document.querySelectorAll("[data-section-id]")];
  if (!links.length || !sections.length) return;

  const activate = (id) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.tocLink === id);
    });
  };

  activate(sections[0].dataset.sectionId);

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const id = link.dataset.tocLink;
      const target = document.getElementById(id);
      const base = location.hash.match(/^#article\/[^/]+/)?.[0];
      if (base) history.pushState(null, "", `${base}/${id}`);
      target?.scrollIntoView({ block: "start" });
      activate(id);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) activate(visible.target.dataset.sectionId);
    },
    { rootMargin: "-18% 0px -64% 0px", threshold: [0, 0.2, 0.6] }
  );

  sections.forEach((section) => observer.observe(section));
}

function bindGlobalEvents() {
  document.querySelectorAll("[data-focus-search]").forEach((button) => {
    button.addEventListener("click", () => {
      if (location.hash !== "#library") location.hash = "#library";
      window.setTimeout(() => document.querySelector("#librarySearch")?.focus(), 50);
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
    const tag = document.activeElement?.tagName?.toLowerCase();
    if (tag === "input" || tag === "textarea") return;
    event.preventDefault();
    if (location.hash !== "#library") location.hash = "#library";
    window.setTimeout(() => document.querySelector("#librarySearch")?.focus(), 50);
  });
}

function route() {
  const hash = location.hash || "#home";
  if (hash.startsWith("#article/")) {
    const [, id, activeSectionId = ""] = hash.match(/^#article\/([^/]+)\/?(.*)$/) || [];
    const article = articles.find((item) => item.id === id);
    if (article) {
      renderArticleDetail(article, decodeURIComponent(activeSectionId));
      if (!activeSectionId) window.scrollTo({ top: 0 });
      return;
    }
  }

  if (hash === "#library") {
    renderLibrary();
    return;
  }

  if (hash === "#categories") {
    renderHome();
    window.setTimeout(() => document.querySelector("#categories")?.scrollIntoView({ block: "start" }), 0);
    return;
  }

  renderHome();
}

bindGlobalEvents();
window.addEventListener("hashchange", route);
route();
