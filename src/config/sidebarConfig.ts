import type { SidebarLayoutConfig } from "../types/sidebarConfig";

/**
 * 侧边栏布局配置 - 三栏弹性布局
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	// 是否启用侧边栏功能
	enable: true,

	// 侧边栏位置：双侧边栏
	position: "both",

	// 平板端显示右侧边栏（包含公告、音乐等重要模块）
	tabletSidebar: "right",

	// 文章详情页隐藏侧边栏
	hideSidebarOnPostPage: false,

	// 文章详情页保持双侧栏
	showBothSidebarsOnPostPage: true,

	// ========== 左侧边栏：仅双人头像卡片 ==========
	leftComponents: [
		{
			type: "profile",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
	],

	// ========== 右侧边栏：语录 + 公告 + 音乐 ==========
	rightComponents: [
		{
			// 随机语录组件
			type: "randomQuote",
			enable: true,
			position: "top",
			showOnPostPage: false,
		},
		{
			// 公告组件
			type: "announcement",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			// 音乐播放器
			type: "music",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
		},
		{
			// 文章详情页目录
			type: "sidebarToc",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			hideOnNonPostPage: true,
		},
	],

	// ========== 移动端底部：堆叠顺序 ==========
	mobileBottomComponents: [
		{
			// 双人头像
			type: "profile",
			enable: true,
			showOnPostPage: true,
		},
		{
			// 随机语录
			type: "randomQuote",
			enable: true,
			showOnPostPage: false,
		},
		{
			// 公告
			type: "announcement",
			enable: true,
			showOnPostPage: true,
		},
		{
			// 音乐播放器
			type: "music",
			enable: true,
			showOnPostPage: true,
		},
	],
};
