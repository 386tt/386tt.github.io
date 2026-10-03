/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
    title: "我的第一篇博客",
    date: "2026.10",
    category: "milestone",
    subtitle: "个人博客",
    description: "我建立了自己的博客网站。",
    highlights: [
        "完成网站搭建",
        "配置了自己的页面内容",
    ],
    tags: ["Blog", "Astro"],
    icon: "material-symbols:edit-note-rounded",
	},
	{
		title: "NCM Music Unlock",
		date: "2026.07",
		category: "project",
		subtitle: "个人开源项目",
		location: "China",
		description:
			"借鉴开发了一款在浏览器中解锁加密音乐文件的开源工具，支持网易云音乐 NCM 与 QQ 音乐 QMC 格式，并尽可能保留音频的完整元信息。",
		highlights: [
			"支持 .ncm、.qmc*、.mflac 和 .mgg 等多种加密音乐格式",
			"实现浏览器拖拽解锁与 Node.js 命令行批量处理，文件无需上传",
			"写入 MP3 ID3v2.4 和 FLAC Vorbis Comment 元信息，并支持封面与在线 metadata 补全",
		],
		tags: ["JavaScript", "Web", "Audio", "Open Source"],
		links: [
			{
				label: "GitHub Repository",
				url: "https://github.com/386tt/ncm-music-unlock",
				icon: "fa6-brands:github",
			},
		],
		icon: "material-symbols:music-note-rounded",
		featured: true,
	},
];

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
