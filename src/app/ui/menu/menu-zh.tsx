import { BgColorsOutlined, ExperimentOutlined, ThunderboltOutlined, ToolOutlined } from "@ant-design/icons";

export const MENU_ITEMS = [
  {
    label: (
      <a href="https://prompt.newzone.top/guide/" target="_blank" rel="noopener noreferrer">
        使用指南
      </a>
    ),
    key: "guide",
    icon: <BgColorsOutlined />,
  },
  {
    label: (
      <a href="https://prompt.tx88.eu.org/" target="_blank" rel="noopener noreferrer">
        ChatGPT 提示词
      </a>
    ),
    key: "aishort",
    icon: <ExperimentOutlined />,
  },
  {
    label: (
      <a href="https://tools.newzone.top/subtitle-translator" target="_blank" rel="noopener noreferrer">
        文本处理工具
      </a>
    ),
    key: "Tools",
    icon: <ToolOutlined />,
  },
  {
    label: (
      <a href="https://lobechat.tx88.eu.org/" target="_blank" rel="noopener noreferrer">
        免费AI会话
      </a>
    ),
    key: "LearnData",
    icon: <ThunderboltOutlined />,
  },
];
