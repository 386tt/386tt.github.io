import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "@/utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "https://avatars.githubusercontent.com/u/146756593?v=4", // 远程 URL 直接使用；本地路径相对 /src（以 / 开头则相对 /public）
	name: "386tt",
	bio: "一个菜的不行的SDUer",
	links: [
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/id/ayaka386tt/",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/386tt",
		},
	],
});
