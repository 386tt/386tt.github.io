/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "tx-air-2025",
		name: "TX air 2025",
		brand: "TX",
		category: "desk",
		status: "active",
		specs: "TX air 2025",
		description:
			"主要用于日常学习、开发和处理各种工作任务的主力电脑。",
		icon: "material-symbols:laptop-mac-rounded",
		featured: true,
		year: "2025",
	},
	{
		id: "iphone-17-pro",
		name: "iPhone 17 Pro",
		brand: "Apple",
		category: "mobile",
		status: "active",
		specs: "Pro / 256GB",
		description:
			"日常使用的主力手机，用于通讯、拍照、娱乐和移动办公。",
		icon: "material-symbols:phone-iphone",
		featured: true,
		year: "2025",
	},
	{
		id: "airpods-pro",
		name: "AirPods Pro",
		brand: "Apple",
		category: "audio",
		status: "active",
		specs: "Active Noise Cancellation / Wireless",
		description:
			"日常通勤、听音乐和视频使用的无线耳机，支持主动降噪。",
		icon: "material-symbols:headphones-rounded",
		year: "2025",
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
