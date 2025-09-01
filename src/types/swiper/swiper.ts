export type SwiperContent = {
	id: string;
	title: string;
	subTitle?: string;
	imageRight?: string;
	imageBottom?: string;
	descriptionTitle?: string;
	descriptionText?: string;
	buttonHref: string;
	heroImage: string;
	heroImageTab: string;
	heroImageMob: string;
};

interface SwiperSettings {
	modules: any[]; // Replace 'any' with the specific type of modules
	spaceBetween: number;
	slidesPerView: number;
	loop: boolean;
	navigation?: { prevEl: string; nextEl: string };
	scrollbar?: { draggable: boolean };
	freeMode?: boolean;
}

export interface SwiperConfigInterface {
	settings: SwiperSettings;
	style: string;
	content: SwiperContent[];
	buttons: boolean;
}

export type SwiperConfigs = {
	[key: string]: {
		settings: SwiperSettings;
		style: string;
		content: SwiperContent[];
		buttons: boolean;
	};
};
