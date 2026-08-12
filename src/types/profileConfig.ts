export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
		showName?: boolean;
	}[];
	// 双人卡片配置（可选）
	partner?: {
		avatar?: string;
		name: string;
		bio?: string;
	};
};
