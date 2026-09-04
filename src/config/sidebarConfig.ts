import type { SidebarLayoutConfig } from "../types/sidebarConfig";

/**
 * 侧边栏布局配置 - 三栏弹性布局
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	enable: true,
	position: "both",
	tabletSidebar: "right",
	hideSidebarOnPostPage: false,
	showBothSidebarsOnPostPage: true,

	// ========== 左侧边栏：头像 + 公告 + 分类 ==========
	leftComponents: [
		{
			type: "profile",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "announcement",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "categories",
			enable: true,
			position: "top",
			showOnPostPage: false,
			specificConfig: {
				collapseThreshold: 12,
			},
		},
	],

	// ========== 右侧边栏：语录 + 音乐 ==========
	rightComponents: [
		{
			type: "randomQuote",
			enable: true,
			position: "top",
			showOnPostPage: false,
		},
		{
			type: "music",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
		},
		{
			type: "sidebarToc",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			hideOnNonPostPage: true,
		},
	],

	// ========== 移动端底部 ==========
	mobileBottomComponents: [
		{
			type: "profile",
			enable: true,
			showOnPostPage: true,
		},
		{
			type: "announcement",
			enable: true,
			showOnPostPage: true,
		},
		{
			type: "randomQuote",
			enable: true,
			showOnPostPage: false,
		},
		{
			type: "music",
			enable: true,
			showOnPostPage: true,
		},
	],
};
