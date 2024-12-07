import Link from "next/link";
import { BgColorsOutlined, ExperimentOutlined, ThunderboltOutlined, ToolOutlined } from "@ant-design/icons";

// export const GITHUB_LINK = "https://github.com/Dr-T/img-prompt";
// export const DISCORD_LINK = "https://discord.gg/PZTQfJ4GjX";
// export const DISCORD_BADGE_SRC = "https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&label=Discord&logo=discord&style=for-the-badge";

export const MENU_ITEMS = [
  {
    label: <Link href="/">IMGPrompt</Link>,
    key: "/",
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
      <a href="https://lobechat.tx88.eu.org/" target="_blank" rel="noopener noreferrer">
        免费AI会话
      </a>
    ),
    key: "LearnData",
    icon: <ThunderboltOutlined />,
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
];
