import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用本地音乐列表（R2 云存储）
	mode: "local",

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

	// 本地音乐配置（R2 云存储）
	local: {
		playlist: [
			{
				name: "特别的人",
				artist: "方大同",
				url: "https://pub-838229f870e842f1aa8952ccfeaedb9d.r2.dev/%E9%9F%B3%E4%B9%90/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%89%B9%E5%88%AB%E7%9A%84%E4%BA%BA%20.mp3",
				cover: "/images/cover.jpg",
			},
			{
				name: "123我爱你",
				artist: "新乐尘符",
				url: "https://pub-838229f870e842f1aa8952ccfeaedb9d.r2.dev/%E9%9F%B3%E4%B9%90/%E6%96%B0%E4%B9%90%E5%B0%98%E7%AC%A6%20-%20123%E6%88%91%E7%88%B1%E4%BD%A0.mp3",
				cover: "/images/cover.jpg",
			},
			{
				name: "小幸运",
				artist: "田馥甄",
				url: "https://pub-838229f870e842f1aa8952ccfeaedb9d.r2.dev/%E9%9F%B3%E4%B9%90/%E7%94%B0%E9%A6%A5%E7%94%84%20-%20%E5%B0%8F%E5%B9%B8%E8%BF%90.mp3",
				cover: "/images/cover.jpg",
			},
			{
				name: "山楂树の恋",
				artist: "程佳佳",
				url: "https://pub-838229f870e842f1aa8952ccfeaedb9d.r2.dev/%E9%9F%B3%E4%B9%90/%E7%A8%8B%E4%BD%B3%E4%BD%B3%20-%20%E5%B1%B1%E6%A5%82%E6%A0%91%E3%81%AE%E6%81%8B.mp3",
				cover: "/images/cover.jpg",
			},
			{
				name: "有点甜",
				artist: "汪苏泷、BY2",
				url: "https://pub-838229f870e842f1aa8952ccfeaedb9d.r2.dev/%E9%9F%B3%E4%B9%90/%E6%B1%AA%E8%8B%8F%E6%B3%B7%E3%80%81BY2%20-%20%E6%9C%89%E7%82%B9%E7%94%9C.mp3",
				cover: "/images/cover.jpg",
			},
			{
				name: "世间美好与你环环相扣",
				artist: "柏松",
				url: "https://pub-838229f870e842f1aa8952ccfeaedb9d.r2.dev/%E9%9F%B3%E4%B9%90/%E6%9F%8F%E6%9D%BE%20-%20%E4%B8%96%E9%97%B4%E7%BE%8E%E5%A5%BD%E4%B8%8E%E4%BD%A0%E7%8E%AF%E7%8E%AF%E7%9B%B8%E6%89%A3.mp3",
				cover: "/images/cover.jpg",
			},
			{
				name: "爱如潮水",
				artist: "张信哲",
				url: "https://pub-838229f870e842f1aa8952ccfeaedb9d.r2.dev/%E9%9F%B3%E4%B9%90/%E5%BC%A0%E4%BF%A1%E5%93%B2%20-%20%E7%88%B1%E5%A6%82%E6%BD%AE%E6%B0%B4.mp3",
				cover: "/images/cover.jpg",
			},
			{
				name: "目及皆是你",
				artist: "小蓝背心",
				url: "https://pub-838229f870e842f1aa8952ccfeaedb9d.r2.dev/%E9%9F%B3%E4%B9%90/%E5%B0%8F%E8%93%9D%E8%83%8C%E5%BF%83%20-%20%E7%9B%AE%E5%8F%8A%E7%9A%86%E6%98%AF%E4%BD%A0.mp3",
				cover: "/images/cover.jpg",
			},
		],
	},
};