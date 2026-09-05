import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 情侣纪念站专用
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	const links: NavBarLink[] = [];

	// 🏠 首页
	links.push({
		name: "首页",
		url: "/",
		icon: "material-symbols:home",
	});

	// 💌 书信集
	links.push({
		name: "书信集",
		url: "/archive/?category=书信集",
		icon: "material-symbols:mail",
	});

	// 📜 纪事录
	links.push({
		name: "纪事录",
		url: "/archive/?category=纪事录",
		icon: "material-symbols:auto-stories",
	});

	// 🫀 情绪随笔
	links.push({
		name: "情绪随笔",
		url: "/archive/?category=情绪随笔",
		icon: "material-symbols:favorite",
	});

	// ✍️ 碎碎念
	links.push({
		name: "碎碎念",
		url: "/archive/?category=碎碎念",
		icon: "material-symbols:edit",
	});

	// 🖼 回忆相册
	links.push({
		name: "回忆相册",
		url: "/gallery/",
		icon: "material-symbols:photo-library",
	});

	// ⏳ 时光轴
	links.push({
		name: "时光轴",
		url: "/timeline/",
		icon: "material-symbols:timeline",
	});

	// 💫 心愿清单
	links.push({
		name: "心愿清单",
		url: "/wishlist/",
		icon: "material-symbols:star",
	});

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

// ============================================================================
// 链接预设（保留兼容性）
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: "首页",
		url: "/",
		icon: "material-symbols:home",
	},
	About: {
		name: "关于我们",
		url: "/about/",
		icon: "material-symbols:person",
	},
	Gallery: {
		name: "回忆相册",
		url: "/gallery/",
		icon: "material-symbols:photo-library",
		pageKey: "gallery",
	},
	Guestbook: {
		name: "留言",
		url: "/guestbook/",
		icon: "material-symbols:chat",
		pageKey: "guestbook",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
