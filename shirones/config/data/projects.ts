/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "ncm-music-unlock",
		title: "NCM Music Unlock",
		summary:
			"Browser and Node.js tools for unlocking NCM and QQ Music encrypted audio files while preserving metadata and album artwork.",
		category: "tools",
		phase: "shipped",
		technologies: ["JavaScript", "Web Audio", "Node.js"],
		icon: "material-symbols:music-note-rounded",
		featured: true,
		repository: "https://github.com/386tt/ncm-music-unlock",
		year: "2026.07",
	},
	{
		key: "youtube-video-downloader",
		title: "YouTube Video Downloader",
		summary:
			"A local Flask and yt-dlp downloader for YouTube videos, with high-quality audio and video downloads, format selection, and live progress tracking.",
		category: "tools",
		phase: "shipped",
		technologies: ["Python", "Flask", "yt-dlp", "FFmpeg"],
		icon: "material-symbols:download-rounded",
		featured: true,
		repository: "https://github.com/386tt/youtube-video-downloader",
		year: "2026",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
