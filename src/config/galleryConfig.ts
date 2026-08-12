import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		// === 旅行碎片 ===
		{
			id: "travel",
			name: "旅行碎片",
			description: "一起走过的路，一起看过的风景。",
			location: "我们的足迹",
			date: "2024-07-14",
			tags: ["旅行", "合照"],
		},
		// === 日常合照 ===
		{
			id: "daily",
			name: "日常合照",
			description: "平凡日子里最珍贵的瞬间。",
			location: "日常",
			date: "2024-07-14",
			tags: ["日常", "合照"],
		},
		// === 节日留念 ===
		{
			id: "festivals",
			name: "节日留念",
			description: "每个节日都有你，就是最好的礼物。",
			location: "节日",
			date: "2024-07-14",
			tags: ["节日", "纪念"],
		},
	],

	// 瀑布流最小列宽(px)
	columnWidth: 240,
};
