import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	avatar: "assets/images/avatar.avif",

	// 名字
	name: "斐",

	// 个人签名
	bio: "以光为笺✨收藏我们岁岁的温柔",

	// 链接配置
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Serenvor",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],

	// 双人卡片 - 另一半信息
	partner: {
		// 头像（暂用同一张，后续替换）
		avatar: "assets/images/avatar.avif",
		// 名字
		name: "婷",
		// 签名
		bio: "",
	},
};
