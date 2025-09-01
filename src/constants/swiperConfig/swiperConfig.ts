import {
	Navigation,
	Scrollbar,
	A11y,
	Pagination,
	Autoplay,
} from "swiper/modules";
import { HeroSlide } from "@/components/Slider/SwiperSlides/HeroSlide";
import kitchen_swiper from "/public/contentImages/mainSwiper/kitchen_swiper.jpeg";
import MainSwiper from "@/components/Slider/SwiperSlides/MainSwiper";
import avatar from "/public/logo/reviews.png";
import golden_home from "/public/contentImages/manufacturersLogos/golden_home.svg";
import pcc from "/public/contentImages/manufacturersLogos/pcc.svg";
import { ReviewSlide } from "@/components/Slider/SwiperSlides/ReviewSlide";
import { ManufacturesSlide } from "@/components/Slider/SwiperSlides/ManufacturesSlide";

export const swiperConfig = {
	hero: {
		swiperSlide: HeroSlide,
		settings: {
			modules: [Navigation, Scrollbar, A11y, Pagination, Autoplay],
			slidesPerView: 1,
			loop: true,
			navigation: { prevEl: ".arrow-left", nextEl: ".arrow-right" },
			autoplay: {
				delay: 3000, // Delay between transitions (in milliseconds)
				disableOnInteraction: false,
			},
		},
		width: 1440,
		content: [
			/* {
				id: "hero1",
				heroImage: "/contentImages/mainHero/main/desk1.jpg",
				heroImageTab: "/contentImages/mainHero/main/tab1.jpg",
				heroImageMob: "/contentImages/mainHero/main/mob1.jpg",
			}, */
			{
				id: "hero2",
				heroImage: "/contentImages/mainHero/main/desk2.jpg",
				heroImageTab: "/contentImages/mainHero/main/tab2.jpg",
				heroImageMob: "/contentImages/mainHero/main/mob2.jpg",
			},
			{
				id: "hero3",
				heroImage: "/contentImages/mainHero/main/desk3.jpg",
				heroImageTab: "/contentImages/mainHero/main/tab3.jpg",
				heroImageMob: "/contentImages/mainHero/main/mob3.jpg",
			},
			{
				id: "hero4",
				heroImage: "/contentImages/mainHero/main/desk4.jpg",
				heroImageTab: "/contentImages/mainHero/main/tab4.jpg",
				heroImageMob: "/contentImages/mainHero/main/mob4.jpg",
			},
		],
		buttons: true,
	},

	main_swiper: {
		swiperSlide: MainSwiper,
		settings: {
			modules: [Navigation, A11y],
			spaceBetween: 10,
			// slidesPerView: 2.3,
			loop: true,
			freeMode: true, // Enable freeMode for free-flow behavior
			// freeModeSticky: true, // Enable freeModeSticky for sticky effect during drag
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 1.5,
				},
			},
		},
		width: 1440,

		content: [
			{ id: 1, image: kitchen_swiper, height: 640, width: 953 },
			{ id: 2, image: kitchen_swiper, height: 640, width: 953 },
			{ id: 3, image: kitchen_swiper, height: 640, width: 953 },
			{ id: 4, image: kitchen_swiper, height: 640, width: 953 },
		],
		buttons: false,
	},
	reviews: {
		swiperSlide: ReviewSlide,
		settings: {
			modules: [Navigation, Scrollbar, A11y],
			spaceBetween: 0,
			slidesPerView: 1,
			loop: true,
			freeMode: true,
			scrollbar: { draggable: true },
		},
		width: 1000,
		content: [
			{
				id: 1,
				image: avatar,
				service: "Countertop Installation1",
				date: "2 Sep 2023",
				title: "The best service that i had ever",

				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eius quia laboriosam enim suscipit obcaecati sed tenetur! Voluptas quisquam nobis officiis doloremque suscipit, eaque hic ipsam dolores alias neque cum ex! Aperiam, tempora ratione soluta ullam sequi obcaecati? Ipsa modi, illum rerum quod libero omnis repellat architecto nostrum, nesciunt natus itaque voluptatum tempore odio dolores. Accusantium voluptatum, pariatur expedita laudantium adipisci quisquam nulla autem magni commodi exercitationem ea inventore eius illum amet quam, saepe voluptatibus fuga laboriosam! Sunt quaerat voluptate ad vitae accusamus placeat sed aspernatur aut magni. Delectus quasi dolorem magni sed beatae ipsa quae dolorum nesciunt nihil ratione",
				name: "Laura Smith",
			},
			{
				id: 1,
				image: avatar,
				service: "Countertop Installation2",
				date: "2 Sep 2023",
				title: "The best service that i had ever",

				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eius quia laboriosam enim suscipit obcaecati sed tenetur! Voluptas quisquam nobis officiis doloremque suscipit, eaque hic ipsam dolores alias neque cum ex! Aperiam, tempora ratione soluta ullam sequi obcaecati? Ipsa modi, illum rerum quod libero omnis repellat architecto nostrum, nesciunt natus itaque voluptatum tempore odio dolores. Accusantium voluptatum, pariatur expedita laudantium adipisci quisquam nulla autem magni commodi exercitationem ea inventore eius illum amet quam, saepe voluptatibus fuga laboriosam! Sunt quaerat voluptate ad vitae accusamus placeat sed aspernatur aut magni. Delectus quasi dolorem magni sed beatae ipsa quae dolorum nesciunt nihil ratione",
				name: "Laura Smith",
			},
			{
				id: 1,
				image: avatar,
				service: "Countertop Installation3",
				date: "2 Sep 2023",
				title: "The best service that i had ever",

				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eius quia laboriosam enim suscipit obcaecati sed tenetur! Voluptas quisquam nobis officiis doloremque suscipit, eaque hic ipsam dolores alias neque cum ex! Aperiam, tempora ratione soluta ullam sequi obcaecati? Ipsa modi, illum rerum quod libero omnis repellat architecto nostrum, nesciunt natus itaque voluptatum tempore odio dolores. Accusantium voluptatum, pariatur expedita laudantium adipisci quisquam nulla autem magni commodi exercitationem ea inventore eius illum amet quam, saepe voluptatibus fuga laboriosam! Sunt quaerat voluptate ad vitae accusamus placeat sed aspernatur aut magni. Delectus quasi dolorem magni sed beatae ipsa quae dolorum nesciunt nihil ratione",
				name: "Laura Smith",
			},
			{
				id: 1,
				image: avatar,
				service: "Countertop Installation4",
				date: "2 Sep 2023",
				title: "The best service that i had ever",

				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eius quia laboriosam enim suscipit obcaecati sed tenetur! Voluptas quisquam nobis officiis doloremque suscipit, eaque hic ipsam dolores alias neque cum ex! Aperiam, tempora ratione soluta ullam sequi obcaecati? Ipsa modi, illum rerum quod libero omnis repellat architecto nostrum, nesciunt natus itaque voluptatum tempore odio dolores. Accusantium voluptatum, pariatur expedita laudantium adipisci quisquam nulla autem magni commodi exercitationem ea inventore eius illum amet quam, saepe voluptatibus fuga laboriosam! Sunt quaerat voluptate ad vitae accusamus placeat sed aspernatur aut magni. Delectus quasi dolorem magni sed beatae ipsa quae dolorum nesciunt nihil ratione",
				name: "Laura Smith",
			},
		],
	},
	manufacturers: {
		swiperSlide: ManufacturesSlide,
		settings: {
			modules: [Navigation, Scrollbar, A11y],
			spaceBetween: 0,
			slidesPerView: 1.6,
			loop: true,
			freeMode: true,
			scrollbar: { draggable: true },
		},
		width: 1000,
		content: [
			{ id: 3, height: 103, width: 114, image: golden_home },
			{ id: 5, height: 88, width: 166, image: pcc },
			{ id: 8, height: 103, width: 114, image: golden_home },
			{ id: 10, height: 88, width: 166, image: pcc },
			{ id: 13, height: 103, width: 114, image: golden_home },
		],
	},
};
