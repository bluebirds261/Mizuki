// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "OnePlus Ace2",
			image: "/images/device/oneplus ace2-blue.png",
			specs: "冰河蓝 / 12G + 256G",
			description: "第一代骁龙8+, 1.5K HDR10+屏幕, 100W SuperVOOC闪充",
			link: "https://www.oneplus.com/cn/ace-2",
		},
	],
	SAMSUNG: [
		{
			name: "Galaxy Tab S10+",
			image: "/images/device/Samsung Galaxy Tab S10+.png",
			specs: "钛影灰 / 12G + 256G + 256G MicroSD",
			description: "轻薄便携的高性能平板, 适合娱乐和生产力任务",
			link: "https://www.samsung.com.cn/tablets/galaxy-tab-s/galaxy-tab-s10-plus-gray-256gb-sm-x820nzaachn/",
		},
	],
	PC: [
		{
			name: "DIY台式机",
			image: "/images/device/DIY.png",
			specs: " 13600KF / 4070TiSuper / 32G RAM / 2T SSD",
			description: "高性能自组装台式机, 胜任游戏和多任务处理",
			link: "n/a",
		},
	],
	NAS: [
		{
			name: "DIY NAS",
			image: "/images/device/fnos.png",
			specs: " i3-8100 / 8G RAM / 4T+16T HDD ",
			description: "自组HomeServer/NAS, 部署家用存储和多媒体服务, 安全IPV6公网访问",
			link: "n/a",
		},
	],
};
