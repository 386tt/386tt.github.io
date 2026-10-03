/**
 * 游戏展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/gamesConfig.ts 控制。
 *
 * 封面支持三种写法：
 * - src/assets 相对路径（如本文件所用，走 Astro 图片管线自动优化为 webp/avif）；
 * - /public 绝对路径（如 "/assets/games/xxx.webp"，原样输出）；
 * - 远程 URL（https://…）。
 *
 * 注：以下为演示条目——评分 / 时长 / 状态是占位数值，请按自己的实际情况调整；
 * 封面取自各游戏官方商店页或官网主视觉。
 */
import type { GameItem } from "@/types/gamesConfig";

export const gamesData: GameItem[] = [
	{
		id: "minecraft",
		name: "Minecraft",
		developer: "Mojang Studios",
		category: "sandbox",
		status: "playing",
		cover: "assets/games/minecraft-hero.jpg",
		icon: "material-symbols:widgets-rounded",
		rating: 5,
		hours: 13,
		platform: "PC",
		year: "2011",
		tags: ["Sandbox", "Survival", "Building"],
		description:
			"A blocky sandbox where you mine, craft and build across procedurally generated worlds. Survive the night, or just keep building — alone or with friends.",
		link: "https://www.minecraft.net/",
	},
	{
		id: "counter-strike-2",
		name: "Counter-Strike 2",
		developer: "Valve",
		category: "action",
		status: "playing",
		cover: "/assets/games/counter-strike-2.jpg",
		icon: "material-symbols:sports-esports-rounded",
		rating: 5,
		hours: 953,
		platform: "PC",
		year: "2023",
		tags: ["FPS", "Competitive", "Steam"],
		description:
			"Valve's competitive tactical first-person shooter, featuring team-based matches, precise gunplay, and strategic round-based combat.",
		link: "https://steamcommunity.com/app/730",
	},
	{
		id: "pubg",
		name: "PUBG: BATTLEGROUNDS",
		developer: "KRAFTON, Inc.",
		category: "action",
		status: "playing",
		cover: "/assets/games/pubg.jpg",
		icon: "material-symbols:sports-esports-rounded",
		platform: "PC",
		year: "2017",
		tags: ["Battle Royale", "FPS", "Steam"],
		description:
			"A competitive battle royale where players fight to survive, gather equipment, and become the last person or team standing.",
		link: "https://store.steampowered.com/app/578080/",
	},
];
