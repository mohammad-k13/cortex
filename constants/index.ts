export type NavItemInfo = {
	path: string;
	name: string;
};

export const NavItems: NavItemInfo[] = [
	{
		name: "Homo",
		path: "/",
	},
	{
		name: "About Us",
		path: "/about",
	},
	{
		name: "Shop",
		path: "/shop",
	},
	{
		name: "Login",
		path: "/login",
	},
];

type HeroInfo = {
	text: string;
	title: string;
};

type colors = {
	dark: "#734E31" | "#4B3621" | "#3E2723";
	light: "#E0C090" | "#D18F68" | "#FFB74D";
	medium: "#AF6C3E" | "#B77C3C" | "#B87333";
};

type ProductInfo = {
	name: string;
	weight: string;
	color: string;
	description: string;
};

type DarkCoffee = {
	type: "dark";
	sectionColor: "#734E31";
};

type LightCoffee = {
	type: "light";
	sectionColor: "#E0C090";
};

type MediumCoffee = {
	type: "medium";
	sectionColor: "#AF6C3E";
};

export type SectionInfo = {
	id: "section1" | "section2" | "section3";
	hero: HeroInfo;
	ProductInfo: ProductInfo;
} & (DarkCoffee | LightCoffee | MediumCoffee);

export const SectionsInfo: SectionInfo[] = [
	{
		id: "section1",
		type: "dark",
		sectionColor: "#734E31",
		hero: {
			title: "Bold and Intense",
			text: "Try our dark roast for a rich, bold flavor."
		},
		ProductInfo: {
			name: "Lamborghini Dark Roast",
			weight: "500 grams",
			color: "#6D4C41",
			description: "Indulge in the rich and robust flavor of our Lamborghini Dark Roast. Specially crafted for those who crave intensity, this dark roast offers a bold and intense coffee experience. With notes of chocolate and a hint of spice, each sip delivers a powerful caffeine kick that will invigorate your senses."
		}
	},
	{
		id: "section2",
		type: "medium",
		sectionColor: "#AF6C3E",
		hero: {
			title: "Balanced and Smooth",
			text: "Enjoy our medium roast for a smooth taste."
		},
		ProductInfo: {
			name: "Lamborghini Medium Roast",
			weight: "500 grams",
			color: "#8C5E3A",
			description: "Delight in the harmonious balance of flavor and smoothness with our Lamborghini Medium Roast. Carefully roasted to perfection, this medium-bodied coffee offers a delightful combination of richness and smoothness. With subtle hints of caramel and a velvety texture, it provides a satisfying coffee experience that's neither too strong nor too mild."
		}
	},
	{
		id: "section3",
		type: "light",
		sectionColor: "#E0C090",
		hero: {
			title: "Bright and Refreshing",
			text: "Experience the bright flavors of our light roast."
		},
		ProductInfo: {
			name: "Lamborghini Light Roast",
			weight: "500 grams",
			color: "#D6A77A",
			description: "Experience the vibrant and refreshing flavors of our Lamborghini Light Roast. With its bright acidity and lively aroma, this coffee is perfect for those seeking a rejuvenating start to their day. Bursting with citrusy notes and a delicate floral fragrance, each sip of this light-bodied brew promises to awaken your senses and leave you feeling refreshed."
		}
	}
];
