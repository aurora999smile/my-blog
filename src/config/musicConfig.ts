import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用在线歌单（Meting API）
	mode: "meting",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		// 主 API（i-meto.com 已失效，改用 injahow.cn）
		api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
		// 音乐平台
		server: "netease",
		// 类型：playlist=歌单
		type: "playlist",
		// 歌单 ID
		id: "17964613223",
		// 认证 token（可选）
		auth: "",
		// 备用 API
		fallbackApis: [
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		],
	},

	// 本地音乐配置（当前未使用）
	local: {
		playlist: [],
	},
};
