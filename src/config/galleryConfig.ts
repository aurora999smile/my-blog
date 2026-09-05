import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		// === 双影同栖 ===
		{
			id: "couple-together",
			name: "双影同栖",
			description: "镜头定格，并肩相伴的时刻",
			tags: ["双影同栖"],
		},
		// === 婷影拾光 ===
		{
			id: "ting-photos",
			name: "婷影拾光",
			description: "收集你的每一帧模样",
			tags: ["婷影拾光"],
		},
		// === 斐叙风物 ===
		{
			id: "pei-scenery",
			name: "斐叙风物",
			description: "属于我的细碎瞬间",
			tags: ["斐叙风物"],
		},
		// === 人间食味 ===
		{
			id: "food",
			name: "人间食味",
			description: "三餐烟火，与你共尝",
			tags: ["人间食味"],
		},
		// === 闲趣时光 ===
		{
			id: "leisure",
			name: "闲趣时光",
			description: "细碎玩乐，岁岁欢愉",
			tags: ["闲趣时光"],
		},
		// === 山野远行 ===
		{
			id: "travel-nature",
			name: "山野远行",
			description: "奔赴风景，一路同行",
			tags: ["山野远行"],
		},
		// === 絮语存档 ===
		{
			id: "messages",
			name: "絮语存档",
			description: "文字往来，句句心动",
			tags: ["絮语存档"],
		},
		// === 锦礼寄意 ===
		{
			id: "gifts",
			name: "锦礼寄意",
			description: "每份惊喜，皆是满心偏爱",
			tags: ["锦礼寄意"],
		},
	],

	// 瀑布流最小列宽(px)
	columnWidth: 240,
};
