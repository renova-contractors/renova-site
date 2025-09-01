interface ServiceCard {
	heading: string;
	paragraph: string;
	url?: string;
	price: string;
	image: string;
	alt?: string;
	defaultLink?: string
	category?: string
}

type ServiceCategory = { [key: string]: ServiceCard[] }; // Key is string (category name), value is ServiceCard array

export const ourServicesCardsData: ServiceCategory = {
	all: [
		{
		  heading: "Kitchen Remodel",
		  paragraph:
			"Kitchen remodeling services: design and render your dream kitchen, order all materials, and provide delivery to build your perfect space.",
		  image: "/our_services/Kitchen/Kitchen_Remodel.jpg",
		  alt: "Open-concept kitchen and living area with white cabinets, marble-patterned countertops, and light wood flooring",
		  price: "Price starts at $10,000",
		  defaultLink: "kitchen-remodel",
		  category: "kitchen",
		},
		{
		  heading: "Bathroom Remodel",
		  paragraph:
			"Remodel your bathroom with experts, change your layout, or do a completely new addition; we have the system down for the best results.",
		  image: "/our_services/Bathroom/Bathroom_Remodel.jpg",
		  alt: "Modern bathroom with a black and white bathtub, glass shower, and white vanity with a cushioned chair.",
		  price: "Price starts at $8,000",
		  defaultLink: "bathroom-remodel",
		  category: "bathroom",
		},
		{
		  heading: "Basement Finishing",
		  paragraph:
			"Transform your basement into functional living space with our finishing services.",
		  image: "/our_services/Basement/Basement_Finishing.jpg",
		  alt: "Finished basement with stone columns, wood-like laminate flooring, and recessed ceiling lights.",
		  price: "Price starts at $10,000",
		  defaultLink: "basement-finishing",
		  category: "basement",
		},
		{
		  heading: "Attic Finishing",
		  paragraph: "Transform your attic into usable living space with our finishing services.",
		  image: "/our_services/Attic/Attic_Finishing.jpg",
		  alt: "Cozy finished attic living area with wooden beams, gray sofa, hanging wicker chair, wooden chairs, and a round coffee table.",
		  price: "Price starts at $10,000",
		  defaultLink: "attic-finishing",
		  category: "attic",
		},
		{
		  heading: "Tile Installation",
		  paragraph: "New tile installation, wide variety of tiles available for kitchen backsplash, floors, bathroom floors, shower walls.",
		  image: "/our_services/Tile/tile_installation.jpg",
		  alt: "A man installs a wall using a white tile, demonstrating precision and skill in his craftsmanship.",
		  price: "Price starts at $2,500",
		  defaultLink: "tile-installation",
		  category: "tile",
		},
		{
		  heading: "Countertop Installation",
		  paragraph: "We offer a wide variety of quartz countertops, marble countertops, and granite countertops. Schedule your countertop installation now.",
		  image: "/our_services/Countertops/countertop_installation.jpg",
		  alt: "A contemporary kitchen featuring wooden stools and a sleek white quartz countertop, showcasing modern design elements",
		  price: "Price starts at $2,500",
		  defaultLink: "countertop-installation",
		  category: "countertops",
		},
		{
		  heading: "Kitchen Cabinet Installation",
		  paragraph: "Kitchen cabinets installed by professionals in your kitchen. Pick your perfect kitchen cabinet set, from our inventory.",
		  image: "/our_services/Cabinets/cabinet_installation.jpg",
		  alt: "A man dressed in gloves and a brown shirt is working on the installation of a cabinet",
		  price: "Price starts at $3,000",
		  defaultLink: "cabinet-installation",
		  category: "cabinets",
		},
		/* {
		  heading: "Electrical Installations",
		  paragraph: "Upgrade your home's wiring with our electrical installation service, all electricians are licensed and bonded, worry-free installation.",
		  image: "/our_services/Electrical_Wiring/Electrical_Installation.jpg",
		  alt: "An electricial meticulously assembles connections on a wiring panel, ensuring proper installation and functionality",
		  price: "Price starts at $1,200",
		  defaultLink: "electrical",
		  category: "electrical",
		}, */
		/* {
		  heading: "HVAC Installation",
		  paragraph: "Expert HVAC installation, ensuring optimal comfort and energy efficiency with top-tier service.",
		  image: "/our_services/HVAC/HVAC_Installation.jpg",
		  alt: "A technician servicing an air conditioning unit, demonstrating expertise in HVAC maintenance and repair",
		  price: "Price starts at $4,000",
		  defaultLink: "hvac-installation",
		  category: "hvac",
		}, */
		{
		  heading: "Flooring Installation",
		  paragraph: "Upgrade your home with our flooring installation. Includes various types of flooring, fixtures, and various colors.",
		  image: "/our_services/Flooring/Flooring_Installation.jpg",
		  alt: "A man skillfully uses a hammer to secure a piece of hardwood during a flooring installation project",
		  price: "Price starts at $3,000",
		  defaultLink: "flooring",
		  category: "flooring",
		},
		{
		  heading: "Deck Building",
		  paragraph: "Our expert deck building service transforms your outdoor space into a beautiful, functional area for relaxation and entertainment.",
		  image: "/our_services/Decking/Deck_Building.jpg",
		  alt: "Various tools alongside a prominent yellow object, set against a backdrop of deck building materials.",
		  price: "Price starts at $7,000",
		  defaultLink: "deck-building",
		  category: "deck",
		},
		/* {
		  heading: "Window Installation",
		  paragraph: "Making windows for homes, be it prefab or custom, we can install them within hours. Windows of all dimensions and thicknesses available.",
		  image: "/our_services/Windows/Window_Installation.jpg",
		  alt: "Two men installing a window, focused on their task, with tools and materials visible around them",
		  price: "Price starts at $3,000",
		  defaultLink: "window-installation",
		  category: "windows",
		}, */
		/* {
		  heading: "Door Installation",
		  paragraph: "Install any type of doors, interior and exterior doors. Take advantage of our discounts for multiple door installations in your home.",
		  image: "/our_services/Doors/Door_Installation.jpg",
		  alt: "Worker is in the process of hanging a barn door",
		  price: "Price starts at $1,800",
		  defaultLink: "door-installation",
		  category: "doors",
		}, */
		/* {
		  heading: "Architectural Service",
		  paragraph: "Architectural services for city and project compliances with no delay, complete overview for any project, with all required documentation.",
		  image: "/our_services/Arch&Design/Arch_Service.jpg",
		  alt: "A small bedroom featuring a bed, desk, and television, showcasing efficient use of space in architectural design",
		  price: "Price starts at $3,500",
		  defaultLink: "architectural-service",
		  category: "architecture",
		},
		{
		  heading: "Plumbing",
		  paragraph: "Resolve any plumbing issue with our licensed plumbing service for bathrooms, kitchens, and all plumbing work.",
		  image: "/our_services/Plumbing/Plumbing.jpg",
		  alt: "Plumbing work under a sink with black PVC pipes and a person adjusting metal hoses.",
		  price: "Price starts at $800",
		  defaultLink: "plumbing-services",
		  category: "plumbing",
		}, */
		{
		  heading: "Roofing",
		  paragraph: "Have your roof installed responsibly with our year-round roofing installation service, backed by our warranty.",
		  image: "/our_services/Roofing/Roofing.jpg",
		  alt: "Modern house with light-colored walls and metal roofing, featuring large windows with dark frames and white curtains.",
		  price: "Price starts at $8,000",
		  defaultLink: "roofing",
		  category: "roofing",
		},
		{
		  heading: "Siding",
		  paragraph: "Enhance your home's exterior with durable siding solutions.",
		  image: "/our_services/Siding/Siding.jpg",
		  alt: "House facade with dark gray horizontal and vertical siding, gray shingled roof, and a central window with off-white trim.",
		  price: "Price starts at $7,000",
		  defaultLink: "siding-installation",
		  category: "siding",
		},
		/* {
		  heading: "Excavation Service",
		  paragraph: "Excavation and heavy machinery services by Renova",
		  image: "/our_services/Excavation/Excavation_Service.jpg",
		  alt: "Yellow excavator in a forested area with a person inside the cab, wearing an orange high-visibility shirt and a hard hat",
		  price: "Price starts at $4,000",
		  defaultLink: "excavation-contractors",
		  category: "excavation",
		}, */
		/* `{
		  heading: "Landscaping",
		  paragraph: "We provide landscape services to cater all your backyard and front yard needs.",
		  image: "/our_services/Landscaping/Landscaping.jpg",
		  alt: "Large stone house with a steep dark grey roof, illuminated by warm lights during twilight. Curved driveway and manicured lawn in the foreground.",
		  price: "Price starts at $5,000",
		  defaultLink: "landscaping",
		  category: "landscaping",
		},` */
		/* {
		  heading: "Painting",
		  paragraph: "Refresh and revitalize your indoor space with our professional interior painting services.",
		  image: "/our_services/Painting/Painting.jpg",
		  alt: "A white-gloved hand using a paint roller to apply white paint over a light blue surface.",
		  price: "Price starts at $2,000",
		  defaultLink: "painters",
		  category: "painting",
		}, */
		{
		  heading: "Masonry Services",
		  paragraph: "Expert masonry services, including brick laying, stone masonry, and more.",
		  image: "/our_services/masonry/masonry_services.jpg",
		  alt: "Close-up of a person using a rubber mallet to install interlocking concrete pavers.",
		  price: "Price starts at $5,000",
		  defaultLink: "masonry-contractors",
		  category: "masonry",
		},
	],
	tile: [
		{
			heading: "Tile Installation",
			paragraph:
				"New tile installation, wide variety of tiles available for kitchen backsplash, floors, bathroom floors, shower walls.",

			image: "/our_services/Tile/tile_installation.jpg",
			alt: "A man installs a wall using a white tile, demonstrating precision and skill in his craftsmanship.",
			price: "Price starts at $2,500",
		},
		{
			heading: "Floor Tile",
			paragraph:
				"Explore our catalogue to see what floor tile will look best in your home, easy floor tile installation with us",
			image: "/our_services/Tile/floor_tile.jpg",
			alt: "The image features a stylish white herringbone floor paired with a warm fireplace, enhancing the room's ambiance.",
			price: "Price starts at $2,500",
		},
		{
			heading: "Bathroom Tile",
			paragraph:
				"Bathroom tile available for installation in all colors and shapes, can be purchased at a discount, bathroom glows with new tile install.",
			image: "/our_services/Tile/bathroom_tile.jpg",
			alt: "A luxurious bathroom featuring a gold faucet and an elegant marble countertop, showcasing modern design elements.",
			price: "Price starts at $2,500",
		},
		{
			heading: "Shower Tile",
			paragraph:
				"Shower tile installation of any shape and size, change your shower with our new tile, shower walls and shower floor changed in one call.",
			image: "/our_services/Tile/shower_tile.jpg",
			alt: "A glass shower door with a neatly hung towel, showcasing a clean and modern bathroom aesthetic",
			price: "Price starts at $2,500",
		},
		{
			heading: "Backsplash Tile",
			paragraph:
				"Kitchen backsplash tile, subway tile, mosaic tile and more, can be purchased with a discount. Backsplash ideas rendered and installed by us.",
			image: "/our_services/Tile/backsplash_tile.jpg",
			alt: "A contemporary kitchen showcasing striking black and white herringbone tiles backsplash, enhancing the overall aesthetic of the space.",
			price: "Price starts at $1,200",
		},
		{
			heading: "Ceramic Tile",
			paragraph:
				"Ceramic tiles are a practical option for kitchen backsplashes and bathroom walls. Ceramic tiles - installed easily in any room.",
			image: "/our_services/Tile/ceramic_tile.jpg",
			alt: "A collection of marble tiles showcasing a variety of colors, highlighting their unique patterns and textures",
			price: "Price starts at $1,200",
		},
		{
			heading: "Porcelain Tile",
			paragraph:
				"Our porcelain tile collection offers both elegance and versatility. We offer sales and installation services for porcelain tiles.",
			image: "/our_services/Tile/porcelain_tile.jpg",
			alt: " A close-up view showcasing various types of porcelain, highlighting their unique colors and intricate patterns",
			price: "Price starts at $2,000",
		},
		{
			heading: "Mosaic Tile",
			paragraph:
				"Mosaic kitchen backsplash, mosaic tile floors - no arguing that mosaic tile looks great anywhere it goes. Install mosaic tiles with us.",
			image: "/our_services/Tile/mosaic_tile.jpg",
			alt: "A kitchen counter displaying a bowl of spinach and a knife, set against a colorful mosaic backsplash",
			price: "Price starts at $1,800",
		},
		{
			heading: "Heated Tile Floor",
			paragraph:
				"Radiant floor heating is a great addition to your home. Upgrade any room by adding a heated tile floor, feel the benefit of heated floors.",
			image: "/our_services/Tile/heated_tile_floor.jpg",
			alt: "Shluter Ditra tile floor heating system",
			price: "Price starts at $3,000",
		},
		{
			heading: "Basement Floor Tile",
			paragraph:
				"Install specialty basement tile, don't just cover it with basement floor paint. Explore basement flooring ideas with a free consultation.",
			image: "/our_services/Tile/basement_floor_tile.jpg",
			alt: "A white and black tiled floor in a basement, featuring a door that leads to another area",
			price: "Price starts at $2,200",
		},
		{
			heading: "Subway Tile",
			paragraph:
				"Discover our wide selection of subway tile for your kitchen backsplash or bathroom. Explore the variety of sizes and colors available.",
			image: "/our_services/Tile/subway_tile.jpg",
			alt: "A modern bathroom featuring a shower head, lush plant, and stylish subway tile accents on the walls",
			price: "Price starts at $1,200",
		},
		{
			heading: "Grout Cleaning",
			paragraph:
				"Cleaning grout is a difficult task, that's why we offer tile and grout cleaning. Our grout cleaner will make your tiles look like new.",
			image: "/our_services/Tile/grout_cleaning.jpg",
			alt: "A steam cleaner cleaning grout joints, ensuring a thorough and hygienic surface",
			price: "Price starts at $500",
		},
		{
			heading: "Fireplace Tile",
			paragraph:
				"Transform your fireplace with our free consultation on fireplace tile ideas and our expert fireplace tile installation services.",
			image: "/our_services/Tile/fireplace_tile.jpg",
			alt: "A stylish tile fireplace with a stone mantle, complemented by a plush couch in a warm and inviting setting",
			price: "Price starts at $2,500",
		},
		{
			heading: "Outdoor Tile",
			paragraph:
				"We offer a wide selection of outdoor tiles for your patio to ensure a perfect fit for your needs. Explore our outdoor patio tile options.",
			image: "/our_services/Tile/outdoor_tile.jpg",
			alt: "An upscale outdoor dining area with a table and chairs, beautifully placed on sleek outdoor tiles",
			price: "Price starts at $2,500",
		},
	],
	countertops: [
		{
			heading: "Countertop Installation",
			paragraph:
				"We offer a wide variety of quartz countertops, marble countertops, and granite countertops. Schedule your countertop installation now.",

			image: "/our_services/Countertops/countertop_installation.jpg",
			alt: "A contemporary kitchen featuring wooden stools and a sleek white quartz countertop, showcasing modern design elements",
			price: "Price starts at $2,500",
		},
		{
			heading: "Quartz Countertops",
			paragraph:
				"Quartz countertops offer a wide range of colors and shades, making them the perfect choice for any kitchen. Discover your countertop.",
			image: "/our_services/Countertops/quartz_countertops.jpg",
			alt: "Close-up image of a quartz countertop displaying a white marble top, emphasizing its refined and sophisticated appearance",
			price: "Price starts at $2,500",
		},
		{
			heading: "Granite Countertops",
			paragraph:
				"Installing granite countertops in your kitchen is quick and easy. Made from natural stone, these durable surfaces add beauty to any kitchen.",
			image: "/our_services/Countertops/granite_countertops.jpg",
			alt: "A white countertop featuring black and white speckled granite, showcasing a modern and elegant design",
			price: "Price starts at $2,500",
		},
		{
			heading: "Laminate Countertops",
			paragraph:
				"Laminate countertops offer an affordable and low-maintenance option with a wide variety of colors and styles to choose from.",
			image: "/our_services/Countertops/laminate_countertops.jpg",
			alt: "A pristine kitchen featuring white cabinets, stainless steel appliances, and a sleek laminate countertop",
			price: "Price starts at $1,200",
		},
		{
			heading: "Soapstone Countertops",
			paragraph:
				"Get a unique soapstone slab for your kitchen. We can help you choose and install your soapstone countertop, pick one from our inventory.",
			image: "/our_services/Countertops/soapstone_countertops.jpg",
			alt: " A kitchen counter made of soapstone featuring a vibrant bowl of assorted fruit atop it",
			price: "Price starts at $2,800",
		},
		{
			heading: "Butcher Block",
			paragraph:
				"Butcher block countertops are popular in kitchens for their timeless elegance, durability, and versatile nature, easy to cut and install.",
			image: "/our_services/Countertops/butcher_block.jpg",
			alt: "A kitchen counter featuring a stove and oven, complemented by a butcher block for food preparation",
			price: "Price starts at $2,000",
		},
		{
			heading: "Concrete Countertop",
			paragraph:
				"Concrete countertops give a modern industrial aesthetic to contemporary kitchens, but their installation process can be difficult.",
			image: "/our_services/Countertops/concrete_countertop.jpg",
			alt: "A concrete kitchen counter featuring a sink and a knife, showcasing a modern and functional culinary workspace",
			price: "Price starts at $3,000",
		},
		{
			heading: "Stainless Steel Countertops",
			paragraph:
				"Stainless steel countertops are a popular choice among professionals due to their ease of cleaning and hygienic properties.",
			image: "/our_services/Countertops/stainless-steel_countertops.jpg",
			alt: "A sleek laptop rests on a stainless steel kitchen counter",
			price: "Price starts at $3,200",
		},
		{
			heading: "Porcelain Countertop",
			paragraph:
				"Porcelain countertops are resistant to scratches, stains, and heat, come in a wide swath of color palettes, fabricated as one seamless piece.",
			image: "/our_services/Countertops/porcelain_countertop.jpg",
			alt: "A sleek laptop rests on a stainless steel kitchen counter",
			price: "Price starts at $3,500",
		},
		{
			heading: "Countertop Repair",
			paragraph:
				"When your countertop has cracks or scratches, we can repair it instead of replacing the entire surface, helping you save money.",
			image: "/our_services/Countertops/countertop_repair.jpg",
			alt: "A person measuring an object on a table, focused on precise measurements for countertop repair",
			price: "Price starts at $800",
		},
	],
	cabinets: [
		{
			heading: "Kitchen Cabinet Installation",
			paragraph:
				"Kitchen cabinets installed by professionals in your kitchen. Pick your perfect kitchen cabinet set, from our inventory.",

			image: "/our_services/Cabinets/cabinet_installation.jpg",
			alt: "A man dressed in gloves and a brown shirt is working on the installation of a cabinet",
			price: "Price starts at $3,000",
		},
		{
			heading: "Kitchen Cabinets",
			paragraph:
				"Melamine, MDF, hardwood, plywood kitchen cabinets, and many more are available for purchase with select cabinets at a discount.",
			image: "/our_services/Cabinets/kitchen_cabinets.jpg",
			alt: " A modern kitchen featuring dark green cabinets paired with elegant white countertops, creating a stylish and inviting atmosphere",
			price: "Price starts at $3,000",
		},
		{
			heading: "Cabinet Design",
			paragraph:
				"Our designer services for creating kitchen and bathroom cabinet designs are complimentary. Visualize your cabinets with ease.",
			image: "/our_services/Cabinets/cabinet_design.jpg",
			alt: "A contemporary kitchen featuring sleek white cabinets and a warm wooden floor, showcasing elegant cabinet design",
			price: "Price starts at $1,500",
		},
		/* {
			heading: "Cabinet Installation",
			paragraph:
				"If you need more storage, we can install cabinets in any room of your house. Cabinet Installation for all your storage needs done right.",
			image: "/our_services/_Cabinet_Installer.jpg",
			price: "Price starts at $2,500",
		}, */
		{
			heading: "Baathroom Vanity",
			paragraph:
				"Bathroom vanities are a great way to add style to your bathroom. Specialty cabinets are available for bathroom vanity and storage needs.",
			image: "/our_services/Cabinets/bathroom_cabinets.jpg",
			alt: "A blue cabinet vanity featuring marble countertops and a white sink, elegantly designed for a stylish bathroom setting",
			price: "Price starts at $2,200",
		},
		{
			heading: "Cabinet Refinishing",
			paragraph:
				"Our cabinet refacing service can save you time and money with professional results. Kitchen cabinet refinishing and more with our help.",
			image: "/our_services/Cabinets/cabinet_refinishing.jpg",
			alt: "A person operates a circular saw, skillfully cutting wood for cabinet refinishing projects in a workshop setting",
			price: "Price starts at $1,500",
		},
		{
			heading: "Built-in Cabinets",
			paragraph:
				"Built-in cabinets provide a seamless and timeless look to any room, creating a sense of cohesiveness, and helping to declutter your space.",
			image: "/our_services/Cabinets/built-in-cabinets.jpg",
			alt: "A modern kitchen featuring a spacious island, built-in cabinets, and a sliding door leading to an outdoor area",
			price: "Price starts at $4,000",
		},
		{
			heading: "Cabinet Door Replacement",
			paragraph:
				"Freshen up your kitchen cabinets by replacing the cabinet doors with a wide variety of options that won't break the bank.",
			image: "/our_services/Cabinets/cabinet_door_replacement.jpg",
			alt: "A kitchen featuring green cabinets, wooden floors, and a newly replaced door, creating a fresh and inviting atmosphere",
			price: "Price starts at $1,800",
		},
		{
			heading: "Cabinet Repair",
			paragraph:
				"We specialize in repairing kitchen cabinets as well as any other cabinets in your home that require fixing.",
			image: "/our_services/Cabinets/cabinet_repair.jpg",
			alt: "A man using a drill to repair and open a cabinet door, demonstrating home improvement skills and tools in action.",
			price: "Price starts at $800",
		},
		{
			heading: "Cabinet Painting",
			paragraph:
				"Brighten up your cabinets with our professional cabinet painting service. We use high-quality cabinet paint for all of your cabinets.",
			image: "/our_services/Cabinets/cabinet_painting.jpg",
			alt: "A roll of blue paint for cabinets is positioned on a clean white surface, highlighting its rich hue and quality",
			price: "Price starts at $1,300",
		},
		{
			heading: "Storage Cabinets",
			paragraph:
				"Add storage space and functionality to any room with our cabinet installation and sales service. See storage cabinets we sell and install.",
			image: "/our_services/Cabinets/storage_cabinets.jpg",
			alt: " A white storage cabinet featuring a basket placed on top, showcasing a clean and organized aesthetic",
			price: "Price starts at $2,500",
		},
	],
	flooring: [
		{
			heading: "Flooring Installation",
			paragraph:
				"Upgrade your home with our flooring installation. Includes various types of flooring, fixtures, and various colors.",

			image: "/our_services/Flooring/Flooring_Installation.jpg",
			alt: "A man skillfully uses a hammer to secure a piece of hardwood during a flooring installation project",
			price: "Price starts at $3,000",
		},
		{
			heading: "Hardwood Flooring",
			paragraph:
				"Upgrade your home with our high-quality hardwood flooring. Choose from a variety of styles and finishes to match your décor and enhance the value of your property.",
			image: "/our_services/Flooring/Hardwood_Flooring.jpg",
			alt: "A cozy living room featuring hardwood floors and stylish  furniture, creating a warm and inviting atmosphere",
			price: "Price starts at $5,000",
		},
		{
			heading: "Laminate Flooring",
			paragraph:
				"Our laminate flooring offers durability and a stylish appearance at an affordable price. It’s easy to install and maintain, making it ideal for high-traffic areas.",
			image: "/our_services/Flooring/Laminate_Flooring.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Carpet",
			paragraph:
				"Choose our carpet installation for comfort and style. We offer a wide range of colors and textures to fit any room’s design.",
			image: "/our_services/Flooring/Carpet.jpg",
			alt: "A cozy bedroom featuring a soft blue rug that adds a touch of color and comfort to the beige carpet floor",
			price: "Price starts at $1,500",
		},
		{
			heading: "LVT Flooring",
			paragraph:
				"Select our LVT flooring for a cost-effective solution that doesn’t compromise on style. Ideal for areas that require durability and moisture resistance.",
			image: "/our_services/Flooring/LVT_Flooring.jpg",
			alt: "A contemporary room featuring wooden floors and shelves, showcasing a stylish and modern interior design with LVT flooring.",
			price: "Price starts at $3,000",
		},
	],
	deck: [
		{
			heading: "Deck Building",
			paragraph:
				"Our expert deck building service transforms your outdoor space into a beautiful, functional area for relaxation and entertainment",

			image: "/our_services/Decking/Deck_Building.jpg",
			alt: " various tools alongside a prominent yellow object, set against a backdrop of deck building materials.",
			price: "Price starts at $7,000",
		},
		{
			heading: "Backyard Deck Installation",
			paragraph:
				"Renew your backyard with our year-round deck installation service. Permits, plans, and a lasting warranty are included.",
			image: "/our_services/Decking/Backyard_Deck_Installation.jpg",
			alt: "A wooden deck in a backyard featuring a table and chairs, inviting for outdoor gatherings and relaxation",
			price: "Price starts at $5,000",
		},
		{
			heading: "Trex Deck",
			paragraph:
				"Discover Trex Decking with our installation: Eco-friendly, low-maintenance, & durable in all conditions, with a wide range of colors.",
			image: "/our_services/Decking/Trex_Deck.jpg",
			alt: "Trex deck featuring a table and chairs set beneath a large umbrella, perfect for outdoor dining and relaxation",
			price: "Price starts at $7,000",
		},
		{
			heading: "Composite Deck",
			paragraph:
				"Transform your outdoor space with our low-maintenance, durable composite deck: free consultations & year-round installs.",
			image: "/our_services/Decking/Composite_Deck.jpg",
			alt: " A wicker chair positioned on a composite wooden deck, showcasing a blend of natural and modern outdoor design elements",
			price: "Price starts at $6,500",
		},
		{
			heading: "Custom Deck",
			paragraph:
				"We provide custom deck installation services for your backyard along with free renderings and expert architectural designs for durability.",
			image: "/our_services/Decking/Custom_Deck.jpg",
			alt: "A large green house featuring a custom deck, surrounded by lush greenery and a serene outdoor environment",
			price: "Price starts at $8,000",
		},
		{
			heading: "Pool Deck Construction",
			paragraph:
				"Transform your pool with our deck construction service - warranty, expert consultation, renderings, and safety all in one package.",
			image: "/our_services/Decking/Pool_Deck_Construction.jpg",
			alt: "wooden pool deck featuring a clear blue pool",
			price: "Price starts at $10,000",
		},
		/* {
			heading: "Rooftop Deck Building",
			paragraph:
				"Our designers will assist you in creating rooftop deck ideas to ensure our rooftop deck installation matches your vision.",
			image: "/our_services/_rooftop_deck.webp",
			price: "Price starts at $12,000",
		}, */
		{
			heading: "Deck Repair",
			paragraph:
				"Repair your deck, pool deck, and rooftop deck with our top-notch deck repair service—fast, flexible, and supported by a solid warranty.",
			image: "/our_services/Decking/Deck_Repair.jpg",
			alt: "A hammer laying on a deck, illustrating the process of deck repair and enhancement",
			price: "Price starts at $2,500",
		},
		{
			heading: "Deck Restoration",
			paragraph:
				"Revitalize your deck with our deck restoration service! Expert attention to detail & free consultation for a stunning result.",
			image: "/our_services/Decking/Deck_Restoration.jpg",
			alt: "A man measures a piece of wood with a tape measure, preparing for deck restoration work",
			price: "Price starts at $4,000",
		},
		{
			heading: "Deck Railing Installation",
			paragraph:
				"Deck railing installation: Various deck railing options are available, including cable railings, where style meets safety.",
			image: "/our_services/Decking/Deck_Railing_Installation.jpg",
			alt: "A charming wooden deck complemented by a railing, enhancing the outdoor experience with safety and aesthetic appeal",
			price: "Price starts at $1,800",
		},
		/* {
			heading: "Building Deck Stairs and Steps",
			paragraph:
				"Installation of deck stairs and deck steps is available for any deck, customizing unique stairs and steps is an option with our designers.",
			image: "/our_services/_deck-stairs-construction.jpg",
			price: "Price starts at $3,000",
		}, */
		{
			heading: "Deck Replacement",
			paragraph:
				"Take advantage of our deck replacement service to upgrade your old deck with a stylish, modern replacement with the help of our designer.",
			image: "/our_services/Decking/Deck_Replacement.jpg",
			alt: "A man skillfully using a drill to install a wooden deck as part of a deck replacement project.",
			price: "Price starts at $7,000",
		},
		{
			heading: "Timber Decking",
			paragraph:
				"With our custom timber decking installation service, we can give your backyard a more natural look that will last for years with our warranty.",
			image: "/our_services/Decking/Timber_Decking.jpg",
			alt: "A wooden deck made of timber, featuring a white roof, adjacent to a charming blue house",
			price: "Price starts at $5,500",
		},
	],
	kitchen: [
		{
			heading: "Kitchen Remodel",
			paragraph:
				"Kitchen remodeling services: design and render your dream kitchen, order all materials, and provide delivery to build your perfect space.",

			image: "/our_services/Kitchen/Kitchen_Remodel.jpg",
			alt: "Open-concept kitchen and living area with white cabinets, marble-patterned countertops, and light wood flooring",
			price: "Price starts at $10,000",
		},
		{
			heading: "Kitchen Design",
			paragraph:
				"Create your dream kitchen with our professional designer, who will guide you step by step through the entire process with consultations.",
			image: "/our_services/Kitchen/Kitchen_Design.jpg",
			alt: "A modern kitchen with white cabinetry, a large marble countertop island, and stainless steel appliances, including a range with a matching hood.",
			price: "Price starts at $5,000",
		},
		{
			heading: "Kitchen Tile",
			paragraph:
				"Upgrade your kitchen with elegant kitchen tile installation to complement your ideal cooking space.",
			image: "/our_services/Kitchen/Kitchen_Tile.jpg",
			alt: "Two red apples on a white plate on a light wooden countertop with a white tiled backsplash in the background.",
			price: "Price starts at $2,500",
		},
		{
			heading: "Kitchen Layout",
			paragraph:
				"Optimize your kitchen space with our expert layout planning. We will ensure that it fits all your needs with comfort.",
			image: "/our_services/Kitchen/Kitchen_Layout.jpg",
			alt: "Close-up of a technical drawing of a kitchen layout",
			price: "Price starts at $5,000",
		},
		{
			heading: "Kitchen Cabinets",
			paragraph:
				"Upgrade your kitchen storage with custom cabinet solutions or have us install prefabricated cabinets, installed within days.",
			image: "/our_services/Kitchen/Kitchen_Cabinets.jpg",
			alt: "Forest green kitchen with cabinetry, white marble countertops, an island, and a white tile backsplash",
			price: "Price starts at $4,000",
		},
		{
			heading: "Kitchen Countertops",
			paragraph:
				"Level up your kitchen's aesthetics with our customizable countertops, available for purchase and professional installation.",
			image: "/our_services/Kitchen/Kitchen_Countertops.jpg",
			alt: "Modern kitchen with white and gray countertops, woven basket, stovetop, cutting boards, white bowls, and a built-in black oven.",
			price: "Price starts at $3,500",
		},
		{
			heading: "Kitchen Flooring",
			paragraph:
				"Upgrade your kitchen flooring for durability and style. Tile or hardwood, we've got you covered with free delivery and discounts.",
			image: "/our_services/Kitchen/Kitchen_Flooring.jpg",
			alt: "Modern chevron-patterned light tile kitchen floor leading to a dark reflective built-in unit framed with warm wood.",
			price: "Price starts at $2,000",
		},
		{
			heading: "Kitchen Appliances",
			paragraph:
				"Kitchen appliance installation service: save on delivery costs, free disposal of old appliances, new appliances installed in hours.",
			image: "/our_services/Kitchen/Kitchen_Appliances.jpg",
			alt: "Modern kitchen with a SMEG built-in oven and stand mixer on a grey countertop",
			price: "Price starts at $1,500",
		},
		{
			heading: "Kitchen Lighting",
			paragraph:
				"Illuminate your kitchen with stylish and functional lighting. New kitchen lighting will make your kitchen countertops stand out.",
			image: "/our_services/Kitchen/Kitchen_Lighting.jpg",
			alt: "Hanging wooden pendant light in a kitchen with wooden cabinets, tiled backsplash, and various kitchen items including a plant and mugs on a shelf.",
			price: "Price starts at $2,000",
		},
		{
			heading: "Patio Kitchen",
			paragraph:
				"Create an outdoor kitchen oasis with our patio kitchen installation service.",
			image: "/our_services/Kitchen/Patio_Kitchen.jpg",
			alt: "Outdoor patio kitchen with built-in grill, stainless steel drawers, a countertop with white dishes, gray dining table, and black lattice-back chairs.",
			price: "Price starts at $5,000",
		},
		{
			heading: "Kitchen Plumbing",
			paragraph:
				"Ensure your kitchen's plumbing works flawlessly with our services. Our plumbers will safely install all your kitchen appliances.",
			image: "/our_services/Kitchen/Kitchen_Plumbing.jpg",
			alt: "Close-up of a kitchen sink with a gold faucet and matching drain.",
			price: "Price starts at $1,800",
		},
	],
	bathroom: [
		{
			heading: "Bathroom Remodel",
			paragraph:
				"Remodel your bathroom with experts, change your layout, or do a completely new addition; we have the system down for the best results.",

			image: "/our_services/Bathroom/Bathroom_Remodel.jpg",
			alt: "Modern bathroom with a black and white bathtub, glass shower, and white vanity with a cushioned chair.",
			price: "Price starts at $8,000",
		},
		{
			heading: "Bathroom Layout",
			paragraph:
				"Optimize your bathroom space; don't lose square footage. A change in layout can add more usable square footage to your bathroom.",
			image: "/our_services/Bathroom/Bathroom_Layout.jpg",
			alt: "Close-up of a pink pencil on a technical drawing with a white ruler in the corner",
			price: "Price starts at $4,000",
		},
		{
			heading: "Bathroom Design",
			paragraph:
				"Create a stylish and functional bathroom design with our designers, who will customize it to fit your needs and unique style.",
			image: "/our_services/Bathroom/Bathroom_Design.jpg",
			alt: "Modern bathroom with white marble surfaces and gold-toned fixtures.",
			price: "Price starts at $0",
		},
		{
			heading: "Bathroom Cabinetry",
			paragraph:
				"Bathroom cabinet installation provides stylish and reliable storage, with cabinets designed for humid environments.",
			image: "/our_services/Bathroom/Bathroom_Cabinetry.jpg",
			alt: "Modern bathroom with a scenic view, light green walls, white cabinetry, and decorative items on a gray granite countertop",
			price: "Price starts at $2,500",
		},
		{
			heading: "Heated Bathroom Floor",
			paragraph:
				"Experience the ultimate comfort of a heated bathroom floor with installation by licensed electricians.",
			image: "/our_services/Bathroom/Heated_Bathroom_Floor.jpg",
			alt: "Modern bathroom with black tiled heated floor, a light wood floating vanity, white rectangular sink, and a large window with a perforated metal screen",
			price: "Price starts at $3,500",
		},
		{
			heading: "Bathroom Expansion",
			paragraph:
				"Expand your bathroom space to enhance comfort and functionality by adding a walk-in shower or tub, or a modern combination of both.",
			image: "/our_services/Bathroom/Bathroom_Expansion.jpg",
			alt: "Modern grayscale bathroom with bathtub, window, rain shower head, toilet, floating vanity with sink, large mirror, and tropical plant.",
			price: "Price starts at $7,000",
		},
		{
			heading: "Bathroom Shower",
			paragraph:
				"Upgrade your bathroom with a new shower installation. We provide both prefab and custom shower installations.",
			image: "/our_services/Bathroom/Bathroom_Shower.jpg",
			alt: "Modern shower with white brick-pattern tiles and a dark grey shower fixture.",
			price: "Price starts at $3,500",
		},
		{
			heading: "Bathroom Fixtures",
			paragraph:
				"Order and receive new bathroom fixtures hassle-free. Enjoy fast and seamless bathroom fixture installation service with free delivery.",
			image: "/our_services/Bathroom/Bathroom_Fixtures.jpg",
			alt: "Modern bathroom sink with gray stone countertop, white vessel sink, black faucet, and vase with green leaves.",
			price: "Price starts at $1,500",
		},
		{
			heading: "Bathroom Plumbing",
			paragraph:
				"Ensure your bathroom plumbing works perfectly with our bathroom plumbing services; warranty is provided for all plumbing work.",
			image: "/our_services/Plumbing/Bathroom_Plumbing.jpg",
			alt: "Close-up of a chrome bathtub faucet with white handles against a gray paneled wall.",
			price: "Price starts at $2,000",
		},
		{
			heading: "Bathroom Tile",
			paragraph:
				"Bathroom tile installation offers the opportunity to refresh your bathroom without major changes, keeping it simple and elegant.",
			image: "/our_services/Bathroom/Bathroom_Tile.jpg",
			alt: "White tiled sshower wall with a chrome shower handle and hose.",
			price: "Price starts at $2,500",
		},
	],
	roofing: [
		{
			heading: "Roofing",
			paragraph:
				"Have your roof installed responsibly with our year-round roofing installation service, backed by our warranty.",
			image: "/our_services/Roofing/Roofing.jpg",
			alt: "Modern house with light-colored walls and metal roofing, featuring large windows with dark frames and white curtains.",
			price: "Price starts at $8,000",
		},
		{
			heading: "Roof Repair",
			paragraph:
				"Resolve roofing issues promptly with our roof repair services.",
			image: "/our_services/Roofing/Roof_Repair.jpg",
			alt: "Close-up of an orange-gloved hand holding a hammer over a nail on a shingled roof.",
			price: "Price starts at $2,500",
		},
		{
			heading: "Metal Roofing",
			paragraph:
				"Upgrade to durable and fire-resistant metal roofing for long-lasting protection.",
			image: "/our_services/Roofing/Metal_Roofing.jpg",
			alt: "Close-up view of a silver corrugated metal roof against a clear blue sky.",
			price: "Price starts at $10,000",
		},
		{
			heading: "Roof Replacement",
			paragraph:
				"Install a new roof to better your home's exterior and prevent future issues. Our roof replacement service includes free disposal.",
			image: "/our_services/Roofing/Roof_Replacement.jpg",
			alt: "Construction worker in safety gear standing on a roof at a high elevation against a blue sky.",
			price: "Price starts at $8,000",
		},
		{
			heading: "Commercial Roofing",
			paragraph:
				"Protect your commercial property with our reliable commercial roofing installation service, with warranty coverage included.",
			image: "/our_services/Roofing/Commercial_Roofing.jpg",
			alt: "Commercial buildings with corrugated metal roofs and ventilation systems.",
			price: "Price starts at $15,000",
		},
		{
			heading: "Flat Roofing",
			paragraph:
				"Install a flat roof for modern and minimalist aesthetics. Flat roofing services for commercial and residential properties.",
			image: "/our_services/Roofing/Flat_Roofing.jpg",
			alt: "Row of white residential buildings with black downspouts and a flat grey roof in the foreground.",
			price: "Price starts at $12,000",
		},
		{
			heading: "Skylights",
			paragraph:
				"Bring natural light into your home with our skylight installations, which are great for reducing your energy costs.",
			image: "/our_services/Roofing/Skylights.jpg",
			alt: "Modern skylight with a black cone light hanging in the center and green trees visible through the glass panels.",
			price: "Price starts at $3,000",
		},
		{
			heading: "Shingles Roof",
			paragraph:
				"Upgrade to traditional shingles for a classic look and reliable protection, shingle roofing has various options for your home's roof.",
			image: "/our_services/Roofing/Shingles_Roof.jpg",
			alt: "Close-up of a roof with overlapping asphalt shingles in various shades of gray.",
			price: "Price starts at $6,000",
		},
		{
			heading: "Asphalt Roofing",
			paragraph:
				"Consider installing long-lasting and cost-effective asphalt roofing for your home.",
			image: "/our_services/Roofing/Asphalt_Roofing.jpg",
			alt: "Roof with asphalt shingles in light brown and gray, and part of a house wall with a gutter. A green bush is at the bottom left.",
			price: "Price starts at $5,000",
		},
		{
			heading: "Gutter Repair",
			paragraph:
				"Ensure proper drainage with our professional gutter repair services.",
			image: "/our_services/Roofing/Gutter_Repair.jpg",
			alt: "Person repairing a gutter on a house beside a striped awning.",
			price: "Price starts at $1,200",
		},
		{
			heading: "Gutter Cleaning",
			paragraph:
				"Ensure your gutters remain clear and fully functional with our professional gutter cleaning services.",
			image: "/our_services/Roofing/Gutter_Cleaning.jpg",
			alt: "Person using a red-handled scoop to clean debris from a gutter on a rooftop",
			price: "Price starts at $600",
		},
	],
	siding: [
		{
			heading: "Siding",
			paragraph:
				"Enhance your home's exterior with durable siding solutions.",

			image: "/our_services/Siding/Siding.jpg",
			alt: "House facade with dark gray horizontal and vertical siding, gray shingled roof, and a central window with off-white trim.",
			price: "Price starts at $7,000",
		},
		{
			heading: "Siding Repair",
			paragraph:
				"Restore the beauty and integrity of your siding with our repair services.",
			image: "/our_services/Siding/Siding_Repair.jpg",
			alt: "House facade with dark gray horizontal and vertical siding, gray shingled roof, and a central window with off-white trim.",
			price: "Price starts at $3,000",
		},
		{
			heading: "Vinyl Siding",
			paragraph:
				"Upgrade to low-maintenance and versatile vinyl siding for your home.",
			image: "/our_services/Siding/Vinyl_Siding.jpg",
			alt: "Close-up of blue vinyl siding with white corner trim.",
			price: "Price starts at $6,000",
		},
		{
			heading: "Hardie Siding",
			paragraph:
				"Opt for durable and weather-resistant Hardie siding for long-lasting protection.",
			image: "/our_services/Siding/Hardie_Siding.jpg",
			alt: "Corner of a house with beige Hardie siding, white-framed window, white trim, porch column, and a wall-mounted light fixture.",
			price: "Price starts at $8,000",
		},
		{
			heading: "Cedar Siding",
			paragraph:
				"Enhance your home's natural charm with beautiful cedar siding.",
			image: "/our_services/Siding/Cedar_Siding.jpg",
			alt: "House exterior with blue cedar shake siding, white trim, illuminated entrance, and large window",
			price: "Price starts at $10,000",
		},
		{
			heading: "Aluminum Siding",
			paragraph:
				"Choose lightweight and durable aluminum siding for your home's exterior.",
			image: "/our_services/Siding/Aluminum_Siding.jpg",
			alt: "Modern building with vertical aluminum cladding and rectangular openings",
			price: "Price starts at $9,000",
		},
		{
			heading: "Stone Veneer",
			paragraph:
				"Add elegance and texture to your home with stylish stone veneer siding.",
			image: "/our_services/Siding/Stone_Veneer.jpg",
			alt: "Building exterior with a stone veneer and dark wooden entrance panels.",
			price: "Price starts at $11,000",
		},
		{
			heading: "Composite Siding",
			paragraph:
				"Opt for eco-friendly and durable composite siding for your home.",
			image: "/our_services/Siding/Composite_Siding.jpg",
			alt: "Composite siding with a rectangular window, a plant with green and brown leaves, and a bare branched stem.",
			price: "Price starts at $8,500",
		},
	],
	basement: [
		{
			heading: "Basement Finishing",
			paragraph:
				"Transform your basement into functional living space with our finishing services.",
			image: "/our_services/Basement/Basement_Finishing.jpg",
			alt: "Finished basement with stone columns, wood-like laminate flooring, and recessed ceiling lights.",
			price: "Price starts at $10,000",
		},
		{
			heading: "Basement Flooring",
			paragraph:
				"Choose from a variety of flooring options to enhance your basement's comfort and style.",
			image: "/our_services/Basement/Basement_Flooring.jpg",
			alt: "Basement with dark gray tile flooring, stone wall, white wainscoting, wooden bar with granite top, metal bar stools, armchair, and staircase.",

			price: "Price starts at $5,000",
		},
		{
			heading: "Basement Remodel",
			paragraph:
				"Revamp your basement for improved functionality and aesthetics with our remodeling services.",
			image: "/our_services/Basement/Basement_Remodel.jpg",
			alt: "A cozy basement living room with a sofa, coffee table, stone fireplace, flat-screen TV, and built-in shelves.",
			price: "Price starts at $12,000",
		},
		{
			heading: "Basement Entertainment Center",
			paragraph:
				"Create the ultimate entertainment space in your basement with our customized solutions.",
			image: "/our_services/Basement/Entertainment_Center.jpg",
			alt: "Entertainment center with a mounted flat-screen TV, soundbar, and built-in white cabinets and shelves.",
			price: "Price starts at $8,000",
		},
		{
			heading: "Basement Bathroom",
			paragraph:
				"Add convenience and value to your basement with a professionally installed bathroom.",
			image: "/our_services/Basement/Basement_Bathroom.jpg",
			alt: "Modern basement bathroom with a white freestanding bathtub, dark gray tiled walls, a small wooden stool with bottles on it, and a glass shower door.",

			price: "Price starts at $6,000",
		},
		{
			heading: "Basement Waterproofing",
			paragraph:
				"Protect your basement from moisture and water damage with our waterproofing solutions.",
			image: "/our_services/Basement/Basement_Waterproofing.jpg",
			alt: "Corner of a building foundation with black dimpled waterproofing membrane and exposed gray bricks above, surrounded by loose soil.",
			price: "Price starts at $5,500",
		},
		{
			heading: "Basement Insulation",
			paragraph:
				"Ensure year-round comfort and energy efficiency in your basement with proper insulation.",
			image: "/our_services/Basement/Basement_Insulation.jpg",
			alt: "Basement under construction with wall insulation, exposed wooden ceiling beams, and a sliding glass door.",
			price: "Price starts at $4,500",
		},
		{
			heading: "Basement Bar",
			paragraph:
				"Create a stylish and functional bar space in your basement for entertaining guests.",
			image: "/our_services/Basement/Basement_Bar.jpg",
			alt: "Modern basement bar with staircase, bar counter, and liquor shelves.",
			price: "Price starts at $7,000",
		},
		{
			heading: "Basement Windows",
			paragraph:
				"Brighten up your basement and improve ventilation with new windows.",
			image: "/our_services/Basement/Basement_Windows.jpg",
			alt: "Well-lit basement room with a window with white shutters and a checkered valance, next to a built-in bookshelf containing books, photos, and decorative items.",

			price: "Price starts at $3,500",
		},
	],
	attic: [
		{
			heading: "Attic Finishing",
			paragraph:
				"Transform your attic into usable living space with our finishing services.",

			image: "/our_services/Attic/Attic_Finishing.jpg",
			alt: "Cozy finished attic living area with wooden beams, gray sofa, hanging wicker chair, wooden chairs, and a round coffee table.",
			price: "Price starts at $10,000",
		},
		{
			heading: "Attic Ladder",
			paragraph:
				"Gain easy access to your attic with a professionally installed attic ladder.",
			image: "/our_services/Attic/Attic_Ladder2.jpg",
			alt: "Foldable wooden attic ladder extended from a ceiling opening.",
			price: "Price starts at $1,500",
		},
		{
			heading: "Attic Insulation",
			paragraph:
				"Ensure energy efficiency and comfort in your home with proper attic insulation.",
			image: "/our_services/Attic/Attic_Insulation.jpg",
			alt: "A hose blowing loose white insulation into an unfinished attic.",
			price: "Price starts at $3,500",
		},
		{
			heading: "Attic Drywall",
			paragraph:
				"Finish your attic walls with durable and attractive drywall.",
			image: "/our_services/Attic/Attic_Drywall.jpg",
			alt: "Newly drywalled attic with recessed lighting and an unfinished built-in shelf or closet space.",
			price: "Price starts at $4,000",
		},
		{
			heading: "Attic Windows and Skylights",
			paragraph:
				"Brighten up your attic space and improve ventilation with new windows and skylights.",
			image: "/our_services/Attic/Attic_Windows_Skylights.jpg",
			alt: "Two skylights with wooden frames installed in an angled white ceiling of an attic.",

			price: "Price starts at $2,800",
		},
		{
			heading: "Attic Storage Solutions",
			paragraph:
				"Maximize your attic space with customized storage solutions.",
			image: "/our_services/Attic/Attic_Storage.jpg",
			alt: "Built-in attic storage with shoe compartments and drawers, some drawers are open showing clothes inside.",
			price: "Price starts at $3,000",
		},
		{
			heading: "Attic Ventilation",
			paragraph:
				"Ensure proper airflow and ventilation in your attic for improved comfort and energy efficiency.",
			image: "/our_services/Attic/Attic_Ventilation.jpg",
			alt: "Close-up view of an attic's exterior gable with beige siding and a circular white vent.",
			price: "Price starts at $2,500",
		},
		{
			heading: "Attic Lighting",
			paragraph:
				"Illuminate your attic space with effective and energy-efficient lighting solutions.",
			image: "/our_services/Attic/Attic_Lighting.jpg",
			alt: "Interior of an attic with exposed wooden beams, a ceiling fan, a yellow painted section of wall, a window, and a small wall-mounted light.",
			price: "Price starts at $1,800",
		},
		{
			heading: "Attic Heating and Cooling",
			paragraph:
				"Ensure year-round comfort in your attic with effective heating and cooling solutions.",
			image: "/our_services/Attic/Attic_Heating_Cooling.jpg",
			alt: "Interior of an attic with wooden panels and two large, flexible air ducts.",
			price: "Price starts at $4,000",
		},
		{
			heading: "Attic Bathroom Addition",
			paragraph:
				"Add convenience and value to your home with a professionally installed attic bathroom.",
			image: "/our_services/Attic/Attic_Bathroom_Addition.jpg",
			alt: "Small bathroom with pastel green and white decor, featuring a vanity, pedestal sink, toilet, and wall-mounted mirror cabinet.",
			price: "Price starts at $7,000",
		},
	],
	masonry: [
		{
			heading: "Masonry Services",
			paragraph:
				"Expert masonry services, including brick laying, stone masonry, and more.",

			image: "/our_services/masonry/masonry_services.jpg",
			alt: "Close-up of a person using a rubber mallet to install interlocking concrete pavers.",
			price: "Price starts at $5,000",
		},
		{
			heading: "Brick Laying and Repair",
			paragraph:
				"Enhance your property with expert brick laying and repair services.",
			image: "/our_services/masonry/brick_laying.jpg",
			alt: "Close-up of hands laying bricks with a trowel spreading mortar.",
			price: "Price starts at $5,000",
		},
		{
			heading: "Stone Masonry",
			paragraph:
				"Add timeless beauty to your property with our professional stone masonry services.",
			image: "/our_services/masonry/stone_masonry.jpg",
			alt: "Stone masonry wall with assorted stones, building with horizontal siding, and garden area in front.",
			price: "Price starts at $6,000",
		},
		{
			heading: "Seismic Retrofitting",
			paragraph:
				"Ensure the safety and stability of your property with our seismic retrofitting services.",
			image: "/our_services/masonry/seismic_retrofitting.jpg",
			alt: "Construction site interior with a seismic retrofitting system in place.",
			price: "Price starts at $7,000",
		},
		{
			heading: "Chimney Masonry",
			paragraph:
				"Keep your chimney in top condition with our expert chimney masonry services.",
			image: "/our_services/masonry/chimney_masonry.jpg",
			alt: "House with a stone chimney and gray siding.",
			price: "Price starts at $4,500",
		},
		{
			heading: "Concrete Block",
			paragraph:
				"Build durable structures with our professional concrete block services.",
			image: "/our_services/masonry/concrete_block.jpg",
			alt: "Close-up of a rough-textured concrete block wall with visible mortar lines.",
			price: "Price starts at $3,500",
		},
		{
			heading: "Masonry Restoration",
			paragraph:
				"Restore the beauty and integrity of your masonry with our restoration services.",
			image: "/our_services/masonry/masonry_restoration.jpg",
			alt: "Close-up of a brick wall under restoration with a plastic sheet and a brick with three holes on top.",
			price: "Price starts at $6,000",
		},
		{
			heading: "Stone Veneer",
			paragraph:
				"Enhance your property's appearance with stylish and durable stone veneer.",
			image: "/our_services/masonry/stone-veneer.jpg",
			alt: "Close-up of a stone veneer wall with a gray siding above.",
			price: "Price starts at $8,000",
		},
		{
			heading: "Commercial Masonry",
			paragraph:
				"Trust our expertise for all your commercial masonry needs.",
			image: "/our_services/masonry/commercial_masonry.jpg",
			alt: "Corner of a commercial masonry building with red bricks, black light fixtures, and large windows.",
			price: "Price starts at $12,000",
		},
	],
};



/*   export const ourServicesCardsData = {
	tile: [
		{
			heading: "Tile Installation",
			paragraph:
				"New tile installation, wide variety of tiles available for kitchen backsplash, floors, bathroom floors, shower walls.",
			url: "/tile-installation",
			image: "/our_services/_attic_finishing.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Floor Tile",
			paragraph:
				"Explore our catalogue to see what floor tile will look best in your home, easy floor tile installation with us",
			url: "/service/floor-tile",
			image: "/our_services/_floor_tile.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Bathroom Tile",
			paragraph:
				"Bathroom tile available for installation in all colors and shapes, can be purchased at a discount, bathroom glows with new tile install.",
			url: "/service/bathroom-tile",
			image: "/our_services/_bathroom_tile.webp",
			price: "Price starts at $2,500",
		},
		{
			heading: "Shower Tile",
			paragraph:
				"Shower tile installation of any shape and size, change your shower with our new tile, shower walls and shower floor changed in one call.",
			url: "/service/shower-tile",
			image: "/our_services/-shower-tile.webp",
			price: "Price starts at $2,500",
		},
		{
			heading: "Backsplash Tile",
			paragraph:
				"Kitchen backsplash tile, subway tile, mosaic tile and more, can be purchased with a discount. Backsplash ideas rendered and installed by us.",
			url: "/service/backsplash-tile",
			image: "/our_services/_backsplash_tile.jpg",
			price: "Price starts at $1,200",
		},
		{
			heading: "Ceramic Tile",
			paragraph:
				"Ceramic tiles are a practical option for kitchen backsplashes and bathroom walls. Ceramic tiles - installed easily in any room.",
			url: "/service/ceramic-tile",
			image: "/our_services/_ceramic_tile.jpg",
			price: "Price starts at $1,200",
		},
		{
			heading: "Porcelain Tile",
			paragraph:
				"Our porcelain tile collection offers both elegance and versatility. We offer sales and installation services for porcelain tiles.",
			url: "/service/porcelain-tile",
			image: "",
			price: "Price starts at $2,000",
		},
		{
			heading: "Mosaic Tile",
			paragraph:
				"Mosaic kitchen backsplash, mosaic tile floors - no arguing that mosaic tile looks great anywhere it goes. Install mosaic tiles with us.",
			url: "/service/mosaic-tile",
			image: "/our_services/_mosaic_tile.jpg",
			price: "Price starts at $1,800",
		},
		{
			heading: "Tile Floor",
			paragraph:
				"Radiant floor heating is a great addition to your home. Upgrade any room by adding a heated tile floor, feel the benefit of heated floors.",
			url: "/service/heated-tile-floor",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Basement Floor Tile",
			paragraph:
				"Install specialty basement tile, don't just cover it with basement floor paint. Explore basement flooring ideas with a free consultation.",
			url: "/service/basement-floor-tile",
			image: "/our_services/basement_floor_tile.jpg",
			price: "Price starts at $2,200",
		},
		{
			heading: "Subway Tile",
			paragraph:
				"Discover our wide selection of subway tile for your kitchen backsplash or bathroom. Explore the variety of sizes and colors available.",
			url: "/service/subway-tile",
			image: "",
			price: "Price starts at $1,200",
		},
		{
			heading: "Grout Cleaning",
			paragraph:
				"Cleaning grout is a difficult task, that's why we offer tile and grout cleaning. Our grout cleaner will make your tiles look like new.",
			url: "/service/grout-tile-cleaning",
			image: "",
			price: "Price starts at $500",
		},
		{
			heading: "Fireplace Tile",
			paragraph:
				"Transform your fireplace with our free consultation on fireplace tile ideas and our expert fireplace tile installation services.",
			url: "/service/fireplace-tile",
			image: "/our_services/_Fireplace_Tile.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Outdoor Tile",
			paragraph:
				"We offer a wide selection of outdoor tiles for your patio to ensure a perfect fit for your needs. Explore our outdoor patio tile options.",
			url: "/service/outdoor-tile",
			image: "/our_services/_outdoor_tile.webp",
			price: "Price starts at $2,500",
		},
	],
	countertops: [
		{
			heading: "Countertop Installation",
			paragraph:
				"We offer a wide variety of quartz countertops, marble countertops, and granite countertops. Schedule your countertop installation now.",
			url: "/countertop-installation",
			image: "",
			price: "Price starts at $2,500",
		},
		{
			heading: "Quartz Countertops",
			paragraph:
				"Quartz countertops offer a wide range of colors and shades, making them the perfect choice for any kitchen. Discover your countertop.",
			url: "/service/quartz-countertops",
			image: "/our_services/_Quartz_Countertops.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Granite Countertops",
			paragraph:
				"Installing granite countertops in your kitchen is quick and easy. Made from natural stone, these durable surfaces add beauty to any kitchen.",
			url: "/service/granite-countertops",
			image: "",
			price: "Price starts at $2,500",
		},
		{
			heading: "Laminate Countertops",
			paragraph:
				"Laminate countertops offer an affordable and low-maintenance option with a wide variety of colors and styles to choose from.",
			url: "/service/laminate-countertops",
			image: "/our_services/_Laminate_Countertops.jpg",
			price: "Price starts at $1,200",
		},
		{
			heading: "Soapstone Countertops",
			paragraph:
				"Get a unique soapstone slab for your kitchen. We can help you choose and install your soapstone countertop, pick one from our inventory.",
			url: "/service/soapstone-countertops",
			image: "/our_services/_Soapstone_Countertops.jpg",
			price: "Price starts at $2,800",
		},
		{
			heading: "Butcher Block",
			paragraph:
				"Butcher block countertops are popular in kitchens for their timeless elegance, durability, and versatile nature, easy to cut and install.",
			url: "/service/butcher-block",
			image: "/our_services/_butcher_block.jpg",
			price: "Price starts at $2,000",
		},
		{
			heading: "Concrete Countertop",
			paragraph:
				"Concrete countertops give a modern industrial aesthetic to contemporary kitchens, but their installation process can be difficult.",
			url: "/service/concrete-countertops",
			image: "/our_services/_Concrete_Countertops.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Stainless Steel Countertops",
			paragraph:
				"Stainless steel countertops are a popular choice among professionals due to their ease of cleaning and hygienic properties.",
			url: "/service/stainless-steel-countertops",
			image: "/our_services/_Stainless_Steel_Countertops.jpg",
			price: "Price starts at $3,200",
		},
		{
			heading: "Porcelain Countertop",
			paragraph:
				"Porcelain countertops are resistant to scratches, stains, and heat, come in a wide swath of color palettes, fabricated as one seamless piece.",
			url: "/service/porcelain-countertops",
			image: "/our_services/_Porcelain_Countertops.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Countertop Repair",
			paragraph:
				"When your countertop has cracks or scratches, we can repair it instead of replacing the entire surface, helping you save money.",
			url: "/service/countertop-repair",
			image: "/our_services/_Countertop_Repair.jpg",
			price: "Price starts at $800",
		},
	],
	cabinets: [
		{
			heading: "Kitchen Cabinet Installation",
			paragraph:
				"Kitchen cabinets installed by professionals in your kitchen. Pick your perfect kitchen cabinet set, from our inventory.",
			url: "/cabinet-installation",
			image: "/our_services/_Kitchen_cabinets.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Kitchen Cabinets",
			paragraph:
				"Melamine, MDF, hardwood, plywood kitchen cabinets, and many more are available for purchase with select cabinets at a discount.",
			url: "/service/kitchen-cabinets",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Cabinet Design",
			paragraph:
				"Our designer services for creating kitchen and bathroom cabinet designs are complimentary. Visualize your cabinets with ease.",
			url: "/service/cabinet-design",
			image: "/our_services/_Cabinets_Design.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Cabinet Installation",
			paragraph:
				"If you need more storage, we can install cabinets in any room of your house. Cabinet Installation for all your storage needs done right.",
			url: "/service/cabinet-installation",
			image: "/our_services/_Cabinet_Installer.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Bathroom Cabinets",
			paragraph:
				"Bathroom cabinets are a great way to add style to your bathroom. Specialty cabinets are available for bathroom vanity and storage needs.",
			url: "/service/bathroom-cabinets",
			image: "",
			price: "Price starts at $2,200",
		},
		{
			heading: "Cabinet Refinishing",
			paragraph:
				"Our cabinet refacing service can save you time and money with professional results. Kitchen cabinet refinishing and more with our help.",
			url: "/service/cabinet-refinishing",
			image: "/our_services/_Cabinet_Refinishing.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Built-in Cabinets",
			paragraph:
				"Built-in cabinets provide a seamless and timeless look to any room, creating a sense of cohesiveness, and helping to declutter your space.",
			url: "/service/built-in-cabinets",
			image: "/our_services/_Built-In_Cabinets.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Cabinet Door Replacement",
			paragraph:
				"Freshen up your kitchen cabinets by replacing the cabinet doors with a wide variety of options that won't break the bank.",
			url: "/service/cabinet-door-replacement",
			image: "/our_services/_cabinet_door_replacement.webp",
			price: "Price starts at $1,800",
		},
		{
			heading: "Cabinet Repair",
			paragraph:
				"We specialize in repairing kitchen cabinets as well as any other cabinets in your home that require fixing.",
			url: "/service/cabinet-repair",
			image: "/our_services/_Cabinet-Repair.jpg",
			price: "Price starts at $800",
		},
		{
			heading: "Cabinet Painting",
			paragraph:
				"Brighten up your cabinets with our professional cabinet painting service. We use high-quality cabinet paint for all of your cabinets.",
			url: "/service/cabinet-painting",
			image: "/our_services/_Cabinet_Painting.jpg",
			price: "Price starts at $1,300",
		},
		{
			heading: "Storage Cabinets",
			paragraph:
				"Add storage space and functionality to any room with our cabinet installation and sales service. See storage cabinets we sell and install.",
			url: "/service/storage-cabinets",
			image: "",
			price: "Price starts at $2,500",
		},
	],
	electrical: [
		{
			heading: "Electrical Installation",
			paragraph:
				"Upgrade your home's wiring with our electrical installation service, all electricians are licensed and bonded, worry-free installation.",
			url: "/electrical",
			image: "",
			price: "Price starts at $1,200",
		},
		{
			heading: "Electrical Panel",
			paragraph:
				"Installing an electrical panel can help stabilize voltage levels and improve the overall performance of your home's electrical system.",
			url: "/service/electrical-panel",
			image: "/our_services/_Electrical_Panel_Installation.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Knob and Tube",
			paragraph:
				"If your home still has knob and tube wiring, we highly recommend upgrading to a modern electrical system with our licensed electricians.",
			url: "/service/knob-and-tube",
			image: "/our_services/_knob_and_tube.webp",
			price: "Price starts at $2,500",
		},
		{
			heading: "House Rewire",
			paragraph:
				"Upgrade your home's electrical wiring for added safety and energy savings. Our certified electricians will have you saving in days.",
			url: "/service/house-rewire",
			image: "/our_services/_House_Rewire.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Electrical Floor Heating",
			paragraph:
				"Installing electric floor heating in any room adds comfort and helps retain heat in your house.",
			url: "/service/electrical-floor-heating",
			image: "/our_services/_Electric_Floor_Heating.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Lighting Service",
			paragraph:
				"Our lighting service can add any style of interior or exterior lights to your home, including recessed, chandeliers, and outdoor lights.",
			url: "/service/lighting-service",
			image: "/our_services/_Lightning_Service.jpg",
			price: "Price starts at $1,200",
		},
		{
			heading: "Ceiling Fans Installation",
			paragraph:
				"Ceiling fans can be installed by our expert electricians in any room and customized to your specific needs and fit your interior style.",
			url: "/service/ceiling-fans",
			image: "/our_services/_Ceiling_Fans_Installation.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Under Cabinet Lighting",
			paragraph:
				"Make your cabinets stand out with our under-cabinet lighting installation a stylish and functional addition to your cabinets.",
			url: "/service/under-cabinet-lighting",
			image: "",
			price: "Price starts at $800",
		},
		{
			heading: "Landscape lighting",
			paragraph:
				"Landscape lighting installation is essential for the beauty and functionality of your yard, use our designer to determine the best fit.",
			url: "/service/landscape-lighting",
			image: "",
			price: "Price starts at $2,000",
		},
	],
	hvac: [
		{
			heading: "HVAC Installation",
			paragraph:
				"Expert HVAC installation, ensuring optimal comfort and energy efficiency with top-tier service.",
			url: "/hvac-installation",
			image: "/our_services/_Heating_and_Cooling.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "HVAC Repair",
			paragraph:
				"Get 24/7 HVAC repair support with same-day, on-site emergency visits. Experience unparalleled service any time, any day!",
			url: "/service/hvac-repair",
			image: "/our_services/_HVAC_Repair.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "HVAC Cleaning",
			paragraph:
				"Affordable HVAC cleaning with flexible scheduling. See improvements within hours. Sign up for annual service today!",
			url: "/service/hvac-cleaning",
			image: "/our_services/_HVAC_Cleaning.jpg",
			price: "Price starts at $600",
		},
		{
			heading: "Split System Installation",
			paragraph:
				"Expert installation of split systems for optimal home comfort. Free consultation determines your needs before installation.",
			url: "/service/split-installation",
			image: "/our_services/_Mini_Split_Installation.jpg",
			price: "Price starts at $3,000",
		},
	],
	flooring: [
		{
			heading: "Flooring Installation",
			paragraph:
				"Upgrade your home with our flooring installation. Includes various types of flooring, fixtures, and various colors.",
			url: "/flooring",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Hardwood Flooring",
			paragraph:
				"Upgrade your home with our high-quality hardwood flooring. Choose from a variety of styles and finishes to match your décor and enhance the value of your property.",
			url: "/service/hardwood-flooring",
			image: "",
			price: "Price starts at $5,000",
		},
		{
			heading: "Laminate Flooring",
			paragraph:
				"Our laminate flooring offers durability and a stylish appearance at an affordable price. It’s easy to install and maintain, making it ideal for high-traffic areas.",
			url: "/service/laminate-flooring",
			image: "",
			price: "Price starts at $2,500",
		},
		{
			heading: "Carpet",
			paragraph:
				"Choose our carpet installation for comfort and style. We offer a wide range of colors and textures to fit any room’s design.",
			url: "/service/carpet",
			image: "",
			price: "Price starts at $1,500",
		},
		{
			heading: "LVT Flooring",
			paragraph:
				"Select our LVT flooring for a cost-effective solution that doesn’t compromise on style. Ideal for areas that require durability and moisture resistance.",
			url: "/service/lvt-flooring",
			image: "",
			price: "Price starts at $3,000",
		},
	],
	deck: [
		{
			heading: "Deck Building",
			paragraph:
				"Our expert deck building service transforms your outdoor space into a beautiful, functional area for relaxation and entertainment",
			url: "/deck-building",
			image: "",
			price: "Price starts at $7,000",
		},
		{
			heading: "Backyard Deck Installation",
			paragraph:
				"Renew your backyard with our year-round deck installation service. Permits, plans, and a lasting warranty are included.",
			url: "/service/backyard-deck-installation",
			image: "/our_services/_backyard_deck_installation.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Trex Deck",
			paragraph:
				"Discover Trex Decking with our installation: Eco-friendly, low-maintenance, & durable in all conditions, with a wide range of colors.",
			url: "/service/trex-decking",
			image: "",
			price: "Price starts at $7,000",
		},
		{
			heading: "Composite Deck",
			paragraph:
				"Transform your outdoor space with our low-maintenance, durable composite deck: free consultations & year-round installs.",
			url: "/service/composite-deck",
			image: "/our_services/_composite_deck.jpg",
			price: "Price starts at $6,500",
		},
		{
			heading: "Custom Deck",
			paragraph:
				"We provide custom deck installation services for your backyard along with free renderings and expert architectural designs for durability.",
			url: "/service/custom-deck",
			image: "/our_services/_custom_deck.jpg",
			price: "Price starts at $8,000",
		},
		{
			heading: "Pool Deck Construction",
			paragraph:
				"Transform your pool with our deck construction service - warranty, expert consultation, renderings, and safety all in one package.",
			url: "/service/pool-deck-construction",
			image: "/our_services/_pool_deck_construction.webp",
			price: "Price starts at $10,000",
		},
		{
			heading: "Rooftop Deck Building",
			paragraph:
				"Our designers will assist you in creating rooftop deck ideas to ensure our rooftop deck installation matches your vision.",
			url: "/service/rooftop-deck-building",
			image: "/our_services/_rooftop_deck.webp",
			price: "Price starts at $12,000",
		},
		{
			heading: "Deck Repair",
			paragraph:
				"Repair your deck, pool deck, and rooftop deck with our top-notch deck repair service—fast, flexible, and supported by a solid warranty.",
			url: "/service/deck-repair",
			image: "/our_services/_deck_repair_services.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Deck Restoration",
			paragraph:
				"Revitalize your deck with our deck restoration service! Expert attention to detail & free consultation for a stunning result.",
			url: "/service/deck-restoration",
			image: "/our_services/_deck_restoration.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Deck Railing Installation",
			paragraph:
				"Deck railing installation: Various deck railing options are available, including cable railings, where style meets safety.",
			url: "/service/deck-railing",
			image: "/our_services/_deck_railing_installation.jpg",
			price: "Price starts at $1,800",
		},
		{
			heading: "Building Deck Stairs and Steps",
			paragraph:
				"Installation of deck stairs and deck steps is available for any deck, customizing unique stairs and steps is an option with our designers.",
			url: "/service/building-deck-stairs-and-steps",
			image: "/our_services/_deck-stairs-construction.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Deck Replacement",
			paragraph:
				"Take advantage of our deck replacement service to upgrade your old deck with a stylish, modern replacement with the help of our designer.",
			url: "/service/deck-replacement",
			image: "/our_services/_Hardwood_Decking.jpg",
			price: "Price starts at $7,000",
		},
		{
			heading: "Timber Decking",
			paragraph:
				"With our custom timber decking installation service, we can give your backyard a more natural look that will last for years with our warranty.",
			url: "/service/timber-decking",
			image: "/our_services/_timber_decking.jpg",
			price: "Price starts at $5,500",
		},
	],
	windows: [
		{
			heading: "Window Installation",
			paragraph:
				"Making windows for homes, be it prefab or custom, we can install them within hours. Windows of all dimensions and thicknesses available.",
			url: "/window-installation",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Window Replacement",
			paragraph:
				"We can replace your windows within hours for emergency home window replacement, ensuring your security and safety.",
			url: "/service/window-replacement",
			image: "",
			price: "Price starts at $2,500",
		},
		{
			heading: "Egress Window",
			paragraph:
				"Egress window installation is essential for code compliance. Our basement egress windows come with egress window covers for protection.",
			url: "/service/egress-window",
			image: "/our_services/_Egress_Window.jpg",
			price: "Price starts at $2,200",
		},
		{
			heading: "Energy-Efficient Windows",
			paragraph:
				"We offer top-rated energy-efficient windows for installation, saving you money on electricity bills without sacrificing the aesthetic.",
			url: "/service/energy-efficient-windows",
			image: "/our_services/_Energy-Efficient_Windows.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Skylight Installation",
			paragraph:
				"Skylight windows maximize natural light and improve air circulation in every room, installation on any roof.",
			url: "/service/skylight-installation",
			image: "/our_services/_skylight.webp",
			price: "Price starts at $2,800",
		},
		{
			heading: "Commercial Windows",
			paragraph:
				"Commercial windows for business projects, fully covered and insured from purchase to installation. Don't wait for the unexpected.",
			url: "/service/commercial-windows",
			image: "/our_services/_Commercial_Windows.jpg",
			price: "Price starts at $4,000",
		},
	],
	doors: [
		{
			heading: "Door Installation",
			paragraph:
				"Install any type of doors, interior and exterior doors. Take advantage of our discounts for multiple door installations in your home.",
			url: "/door-installation",
			image: "/our_services/_Interior_Doors.jpg",
			price: "Price starts at $1,800",
		},
		{
			heading: "Exterior Doors",
			paragraph:
				"We specialize in the installation of exterior doors, wooden doors, and French doors. Our options include front doors, backyard doors, patio doors, and doors for sheds.",
			url: "/service/exterior-doors",
			image: "/our_services/_Exterior_Doors.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Garage Doors",
			paragraph:
				"Garage door installation with automatic door opener conveniently, purchase with us to get a discount on garage door installation.",
			url: "/service/garage-doors",
			image: "/our_services/_Garage_Doors.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Sliding Doors",
			paragraph:
				"Sliding door installation service for pre-existing or new sliding doors. Add new closet sliding doors or glass sliding doors for patios.",
			url: "/service/sliding-doors",
			image: "",
			price: "Price starts at $2,000",
		},
		{
			heading: "Door Repair",
			paragraph:
				"Door repair service for exterior and interior doors, any door in your house can be fixed: garage door, patio doors, closet doors.",
			url: "/service/door-repair",
			image: "/our_services/_door_repair.jpg",
			price: "Price starts at $800",
		},
		{
			heading: "Door Replacement",
			paragraph:
				"Door replacement service: we replace old doors with new ones and offer free disposal and delivery.",
			url: "/service/door-replacement",
			image: "/our_services/_Door_Replacement.jpg",
			price: "Price starts at $1,800",
		},
		{
			heading: "Entry Door",
			paragraph:
				"Install entry doors of any style and dimensions, and add a safety door for your entry door.",
			url: "/service/entry-door",
			image: "/our_services/_Entry_Door.jpg",
			price: "Price starts at $2,000",
		},
	],
	architecture: [
		{
			heading: "Architectural Service",
			paragraph:
				"Architectural services for city and project compliances with no delay, complete overview for any project, with all required documentation.",
			url: "/architectural-service",
			image: "",
			price: "Price starts at $3,500",
		},
		{
			heading: "Home Design",
			paragraph:
				"Customize your ideal home with our experienced designers, who will assist you in creating the perfect design for your home.",
			url: "/service/home-design",
			image: "/our_services/_Home_Design.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Structural Engineering",
			paragraph:
				"Ensure safety and stability with our precise structural engineering for all projects that require structural changes and permits.",
			url: "/service/structural-engineering",
			image: "/our_services/_Structural_Engineer.jpg",
			price: "Price starts at $4,500",
		},
		{
			heading: "Civil Engineering",
			paragraph:
				"Change landscapes with our innovative civil engineering solutions, innovative tools, and methods used in every project.",
			url: "/service/civil-engineering",
			image: "/our_services/_Civil_Engineering.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Interior Design",
			paragraph:
				"Interior design service offered by our exceptional in-house designer, who will create elegant and functional interior designs for your home.",
			url: "/service/interior-design",
			image: "/our_services/_Interior_Design.jpg",
			price: "Price starts at $0",
		},
		{
			heading: "Landscape Architect",
			paragraph:
				"Craft beautiful and functional outdoor spaces with the help of our expert outdoor architect, who has a keen eye for yards and gardens.",
			url: "/service/landscape-design",
			image: "/our_services/_Landscape_Architect.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "3-D Rendering",
			paragraph:
				"Complimentary 3D renderings for better project visualization with any extensive change in your home through designer consultation.",
			url: "/service/3d-rendering",
			image: "/our_services/_3-D _rendering.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Seismic Retrofitting",
			paragraph:
				"Ensure the safety and stability of your building with our seismic retrofitting service, where we take every precaution for resilience.",
			url: "/service/seismic-retrofitting",
			image: "/our_services/_Seismic_Retrofitting.jpg",
			price: "Price starts at $6,000",
		},
		{
			heading: "Foundation Repair",
			paragraph:
				"Immediate remediation of problematic foundations, stabilizing and restoring your building's integrity with our foundation repair service.",
			url: "/service/foundation-repair",
			image: "/our_services/_Foundation_Repair.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "GeoTech Engineering",
			paragraph:
				"Mitigate construction risks and optimize projects with our geotechnical services, ensuring your project's success from the start.",
			url: "/service/geotech-engineering",
			image: "/our_services/_GeoTech_Engineering.jpg",
			price: "Price starts at $4,500",
		},
	],
	plumbing: [
		{
			heading: "Plumbing",
			paragraph:
				"Resolve any plumbing issue with our licensed plumbing service for bathrooms, kitchens, and all plumbing work.",
			url: "/plumbing-services",
			image: "/our_services/_Plumbing_Company.jpg",
			price: "Price starts at $800",
		},
		{
			heading: "Kitchen Plumbing",
			paragraph:
				"Your kitchen stays dry with our kitchen plumbing service. We provide licensed plumbers to install appliances, sinks, faucets, and pipes.",
			url: "/service/kitchen-plumbing",
			image: "/our_services/_kitchen_plumbing.jpg",
			price: "Price starts at $1,200",
		},
		{
			heading: "Bathroom Plumbing",
			paragraph:
				"Ensure your bathroom plumbing functions perfectly, with no leaks or cracks in old pipes, new pipe installation, and layout changes.",
			url: "/service/bathroom-plumbing",
			image: "/our_services/_bathroom_plumbing.webp",
			price: "Price starts at $1,500",
		},
		{
			heading: "Jacuzzi Installation",
			paragraph:
				"Professional installation of jacuzzis. Our plumbers will have you soaking in a jacuzzi in no time, getting the job done right and fast.",
			url: "/service/jacuzzi-installation",
			image: "/our_services/_Jacuzzi_Installation.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Toilet Installation",
			paragraph:
				"Professional installation of toilets is fast and easy. Purchase with us for free delivery and disposal of your old toilet.",
			url: "/service/toilet-installation",
			image: "",
			price: "Price starts at $800",
		},
		{
			heading: "Home Repiping",
			paragraph:
				"Upgrade your plumbing system with repiping services to ensure that all your pipes are up to code and reliable.",
			url: "/service/home-repiping",
			image: "/our_services/_repiping_specialists.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Drain Cleaning",
			paragraph:
				"Clean drains and clear clogged drains in hours. We will consult with you to prevent the build-up of problems related to clogged drains.",
			url: "/service/drain-cleaning",
			image: "/our_services/_Drain_Cleaning.jpg",
			price: "Price starts at $500",
		},
		{
			heading: "Gas Line Installation",
			paragraph:
				"Professional installation of gas lines is performed by our certified plumbers, ensuring safety and compliance with permits and regulations.",
			url: "/service/gas-line-installation",
			image: "/our_services/_Gas_Line_Repair.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Sewer Line Repair",
			paragraph:
				"Expert sewer line repair services for damaged lines available same day, with emergency response provided immediately for sewer line repair.",
			url: "/service/sewer-line-repair",
			image: "/our_services/_Sewer_Line_Repair.jpg",
			price: "Price starts at $2,500",
		},
	],
	kitchen: [
		{
			heading: "Kitchen Remodel",
			paragraph:
				"Kitchen remodeling services: design and render your dream kitchen, order all materials, and provide delivery to build your perfect space.",
			url: "/kitchen-remodel",
			image: "/our_services/_kitchen_remodel.webp",
			price: "Price starts at $10,000",
		},
		{
			heading: "Kitchen Design",
			paragraph:
				"Create your dream kitchen with our professional designer, who will guide you step by step through the entire process with consultations.",
			url: "/service/kitchen-design",
			image: "/our_services/_Kitchen-Design.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Kitchen Tile",
			paragraph:
				"Upgrade your kitchen with elegant kitchen tile installation to complement your ideal cooking space.",
			url: "/service/kitchen-tile",
			image: "/our_services/_Kitchen_Tile.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Kitchen Layout",
			paragraph:
				"Optimize your kitchen space with our expert layout planning. We will ensure that it fits all your needs with comfort.",
			url: "/service/kitchen-layout",
			image: "/our_services/_Kitchen_Layout.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Kitchen Cabinets",
			paragraph:
				"Upgrade your kitchen storage with custom cabinet solutions or have us install prefabricated cabinets, installed within days.",
			url: "/service/kitchen-cabinets",
			image: "/our_services/_Custom_Cabinets.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Kitchen Countertops",
			paragraph:
				"Level up your kitchen's aesthetics with our customizable countertops, available for purchase and professional installation.",
			url: "/service/kitchen-countertops",
			image: "/our_services/_Kitchen-countertops.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Kitchen Flooring",
			paragraph:
				"Upgrade your kitchen flooring for durability and style. Tile or hardwood, we've got you covered with free delivery and discounts.",
			url: "/service/kitchen-flooring",
			image: "/our_services/_Kitchen_floorings.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Kitchen Appliances",
			paragraph:
				"Kitchen appliance installation service: save on delivery costs, free disposal of old appliances, new appliances installed in hours.",
			url: "/service/kitchen-appliances",
			image: "/our_services/_Kitchen_appliances.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Kitchen Lighting",
			paragraph:
				"Illuminate your kitchen with stylish and functional lighting. New kitchen lighting will make your kitchen countertops stand out.",
			url: "/service/kitchen-lighting",
			image: "/our_services/_kitchen_lighting.jpg",
			price: "Price starts at $2,000",
		},
		{
			heading: "Patio Kitchen",
			paragraph:
				"Create an outdoor kitchen oasis with our patio kitchen installation service.",
			url: "/service/patio-kitchen",
			image: "/our_services/_Patio_Kitchen.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Kitchen Plumbing",
			paragraph:
				"Ensure your kitchen's plumbing works flawlessly with our services. Our plumbers will safely install all your kitchen appliances.",
			url: "/service/kitchen-plumbing",
			image: "/our_services/_kitchen_plumbing.jpg",
			price: "Price starts at $1,800",
		},
	],
	bathroom: [
		{
			heading: "Bathroom Remodel",
			paragraph:
				"Remodel your bathroom with experts, change your layout, or do a completely new addition; we have the system down for the best results.",
			url: "/bathroom-remodel",
			image: "/our_services/_Bathroom_Remodel.jpg",
			price: "Price starts at $8,000",
		},
		{
			heading: "Bathroom Layout",
			paragraph:
				"Optimize your bathroom space; don't lose square footage. A change in layout can add more usable square footage to your bathroom.",
			url: "/service/bathroom-layout",
			image: "/our_services/_Bathroom_Layout.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Bathroom Design",
			paragraph:
				"Create a stylish and functional bathroom design with our designers, who will customize it to fit your needs and unique style.",
			url: "/service/bathroom-design",
			image: "/our_services/_Bathroom_Design.jpg",
			price: "Price starts at $0",
		},
		{
			heading: "Bathroom Cabinetry",
			paragraph:
				"Bathroom cabinet installation provides stylish and reliable storage, with cabinets designed for humid environments.",
			url: "/service/bathroom-cabinetry",
			image: "/our_services/_Bathroom_Cabinetry.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Heated Bathroom Floor",
			paragraph:
				"Experience the ultimate comfort of a heated bathroom floor with installation by licensed electricians.",
			url: "/service/heated-bathroom-floor",
			image: "/our_services/_Heated_Bathroom_Floor.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Bathroom Expansion",
			paragraph:
				"Expand your bathroom space to enhance comfort and functionality by adding a walk-in shower or tub, or a modern combination of both.",
			url: "/service/bathroom-expansion",
			image: "/our_services/_bathroom_Expansion.jpg",
			price: "Price starts at $7,000",
		},
		{
			heading: "Bathroom Shower",
			paragraph:
				"Upgrade your bathroom with a new shower installation. We provide both prefab and custom shower installations.",
			url: "/service/bathroom-shower",
			image: "/our_services/_Bathroom_Shower.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Bathroom Fixtures",
			paragraph:
				"Order and receive new bathroom fixtures hassle-free. Enjoy fast and seamless bathroom fixture installation service with free delivery.",
			url: "/service/bathroom-fixtures",
			image: "/our_services/_Bathroom_Fixtures.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Bathroom Plumbing",
			paragraph:
				"Ensure your bathroom plumbing works perfectly with our bathroom plumbing services; warranty is provided for all plumbing work.",
			url: "/service/bathroom-plumbing",
			image: "",
			price: "Price starts at $2,000",
		},
		{
			heading: "Bathroom Tile",
			paragraph:
				"Bathroom tile installation offers the opportunity to refresh your bathroom without major changes, keeping it simple and elegant.",
			url: "/service/bathroom-tile",
			image: "",
			price: "Price starts at $2,500",
		},
	],
	roofing: [
		{
			heading: "Roofing",
			paragraph:
				"Have your roof installed responsibly with our year-round roofing installation service, backed by our warranty.",
			url: "/roofing",
			image: "/our_services/_Roofing.jpg",
			price: "Price starts at $8,000",
		},
		{
			heading: "Roof Repair",
			paragraph:
				"Resolve roofing issues promptly with our roof repair services.",
			url: "/service/roof-repair",
			image: "/our_services/_Roof_Repair.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Metal Roofing",
			paragraph:
				"Upgrade to durable and fire-resistant metal roofing for long-lasting protection.",
			url: "/service/metal-roofing",
			image: "/our_services/_Metal_Roofing.jpg",
			price: "Price starts at $10,000",
		},
		{
			heading: "Roof Replacement",
			paragraph:
				"Install a new roof to better your home's exterior and prevent future issues. Our roof replacement service includes free disposal.",
			url: "/service/roof-replacement",
			image: "/our_services/_Roof_Replacement.jpg",
			price: "Price starts at $8,000",
		},
		{
			heading: "Commercial Roofing",
			paragraph:
				"Protect your commercial property with our reliable commercial roofing installation service, with warranty coverage included.",
			url: "/service/commercial-roofing",
			image: "/our_services/_Commercial_Roofing.jpg",
			price: "Price starts at $15,000",
		},
		{
			heading: "Flat Roofing",
			paragraph:
				"Install a flat roof for modern and minimalist aesthetics. Flat roofing services for commercial and residential properties.",
			url: "/service/flat-roofing",
			image: "/our_services/_Flat_Roofing.jpg",
			price: "Price starts at $12,000",
		},
		{
			heading: "Skylights",
			paragraph:
				"Bring natural light into your home with our skylight installations, which are great for reducing your energy costs.",
			url: "/service/skylights",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Shingles Roof",
			paragraph:
				"Upgrade to traditional shingles for a classic look and reliable protection, shingle roofing has various options for your home's roof.",
			url: "/service/shingles-roof",
			image: "/our_services/_Shingles_Roof.jpg",
			price: "Price starts at $6,000",
		},
		{
			heading: "Asphalt Roofing",
			paragraph:
				"Consider installing long-lasting and cost-effective asphalt roofing for your home.",
			url: "/service/asphalt-roofing",
			image: "/our_services/_asphalt_shingles.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Gutter Repair",
			paragraph:
				"Ensure proper drainage with our professional gutter repair services.",
			url: "/service/gutter-repair",
			image: "/our_services/_Gutter_Repair.jpg",
			price: "Price starts at $1,200",
		},
		{
			heading: "Gutter Cleaning",
			paragraph:
				"Ensure your gutters remain clear and fully functional with our professional gutter cleaning services.",
			url: "/service/gutter-cleaning",
			image: "/our_services/_Gutter_Cleaning.jpg",
			price: "Price starts at $600",
		},
	],
	siding: [
		{
			heading: "Siding",
			paragraph:
				"Enhance your home's exterior with durable siding solutions.",
			url: "/siding",
			image: "",
			price: "Price starts at $7,000",
		},
		{
			heading: "Siding Repair",
			paragraph:
				"Restore the beauty and integrity of your siding with our repair services.",
			url: "/service/siding-repair",
			image: "/our_services/_siding_repair.webp",
			price: "Price starts at $3,000",
		},
		{
			heading: "Vinyl Siding",
			paragraph:
				"Upgrade to low-maintenance and versatile vinyl siding for your home.",
			url: "/service/vinyl-siding",
			image: "",
			price: "Price starts at $6,000",
		},
		{
			heading: "Hardie Siding",
			paragraph:
				"Opt for durable and weather-resistant Hardie siding for long-lasting protection.",
			url: "/service/hardie-siding",
			image: "/our_services/_Hardie_Siding.jpg",
			price: "Price starts at $8,000",
		},
		{
			heading: "Cedar Siding",
			paragraph:
				"Enhance your home's natural charm with beautiful cedar siding.",
			url: "/service/cedar-siding",
			image: "/our_services/_Cedar_Siding.jpg",
			price: "Price starts at $10,000",
		},
		{
			heading: "Aluminum Siding",
			paragraph:
				"Choose lightweight and durable aluminum siding for your home's exterior.",
			url: "/service/aluminum-siding",
			image: "/our_services/_aluminium_siding.jpg",
			price: "Price starts at $9,000",
		},
		{
			heading: "Stone Veneer",
			paragraph:
				"Add elegance and texture to your home with stylish stone veneer siding.",
			url: "/service/stone-veneer",
			image: "",
			price: "Price starts at $11,000",
		},
		{
			heading: "Composite Siding",
			paragraph:
				"Opt for eco-friendly and durable composite siding for your home.",
			url: "/service/composite-siding",
			image: "/our_services/_Composite_Siding.jpg",
			price: "Price starts at $8,500",
		},
	],
	excavation: [
		{
			heading: "Excavation Service",
			paragraph: "P",
			url: "/excavation-contractors",
			image: "",
			price: "Price starts at $4,000",
		},
		{
			heading: "Site Preparation",
			paragraph:
				"Professional excavation services for site preparation, land clearing, grading, and earthwork.",
			url: "/service/site-preparation",
			image: "/our_services/_Site_Preparation.jpg",
			price: "Price starts at $7,000",
		},
		{
			heading: "Earthworks",
			paragraph:
				"Shape and mold the land to suit your construction needs with earthworks.",
			url: "/service/earthworks",
			image: "/our_services/_Earthworks.jpg",
			price: "Price starts at $10,000",
		},
		{
			heading: "Grading",
			paragraph:
				"Achieve a level and stable surface for construction with our grading services.",
			url: "/service/grading",
			image: "",
			price: "Price starts at $6,000",
		},
		{
			heading: "Land Clearing",
			paragraph:
				"Clear your land of obstacles and vegetation to prepare for construction.",
			url: "/service/land-clearing",
			image: "/our_services/_Land_Clearing.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Dirt Removal",
			paragraph:
				"Efficiently remove excess dirt and debris from your construction site.",
			url: "/service/dirt-removal",
			image: "/our_services/_Dirt_Removal.jpg",
			price: "Price starts at $4,000",
		},
	],
	basement: [
		{
			heading: "Basement Finishing",
			paragraph:
				"Transform your basement into functional living space with our finishing services.",
			url: "/basement-finishing",
			image: "/our_services/_Basement_Finishing.jpg",
			price: "Price starts at $10,000",
		},
		{
			heading: "Basement Flooring",
			paragraph:
				"Choose from a variety of flooring options to enhance your basement's comfort and style.",
			url: "/service/basement-flooring",
			image: "/our_services/_Basement_Flooring.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Basement Remodel",
			paragraph:
				"Revamp your basement for improved functionality and aesthetics with our remodeling services.",
			url: "/service/basement-remodel",
			image: "/our_services/_Basement_Remodel.jpg",
			price: "Price starts at $12,000",
		},
		{
			heading: "Basement Entertainment Center",
			paragraph:
				"Create the ultimate entertainment space in your basement with our customized solutions.",
			url: "/service/basement-entertainment-center",
			image: "/our_services/_Basement_Entertainment_Center.jpg",
			price: "Price starts at $8,000",
		},
		{
			heading: "Basement Bathroom",
			paragraph:
				"Add convenience and value to your basement with a professionally installed bathroom.",
			url: "/service/basement-bathroom",
			image: "/our_services/_Basement_Bathroom.jpg",
			price: "Price starts at $6,000",
		},
		{
			heading: "Basement Waterproofing",
			paragraph:
				"Protect your basement from moisture and water damage with our waterproofing solutions.",
			url: "/service/basement-waterproofing",
			image: "/our_services/_Basement_Waterproofing.jpg",
			price: "Price starts at $5,500",
		},
		{
			heading: "Basement Insulation",
			paragraph:
				"Ensure year-round comfort and energy efficiency in your basement with proper insulation.",
			url: "/service/basement-insulation",
			image: "/our_services/_Basement_Insulation.jpg",
			price: "Price starts at $4,500",
		},
		{
			heading: "Basement Bar",
			paragraph:
				"Create a stylish and functional bar space in your basement for entertaining guests.",
			url: "/service/basement-bar",
			image: "/our_services/_Basement_Bar.jpg",
			price: "Price starts at $7,000",
		},
		{
			heading: "Basement Windows",
			paragraph:
				"Brighten up your basement and improve ventilation with new windows.",
			url: "/service/basement-windows",
			image: "/our_services/_Basement_Windows.jpg",
			price: "Price starts at $3,500",
		},
	],
	attic: [
		{
			heading: "Attic Finishing",
			paragraph:
				"Transform your attic into usable living space with our finishing services.",
			url: "/public/our_services/_attic_finishing.jpg",
			image: "/our_services/_attic_finishing.jpg",
			price: "Price starts at $10,000",
		},
		{
			heading: "Attic Ladder",
			paragraph:
				"Gain easy access to your attic with a professionally installed attic ladder.",
			url: "/service/attic-ladder",
			image: "/our_services/_attic_ladder.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Attic Insulation",
			paragraph:
				"Ensure energy efficiency and comfort in your home with proper attic insulation.",
			url: "/service/attic-insulation",
			image: "/our_services/_attic_insulation.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Attic Drywall",
			paragraph:
				"Finish your attic walls with durable and attractive drywall.",
			url: "/service/attic-drywall",
			image: "/our_services/_attic_drywall.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Attic Windows and Skylights",
			paragraph:
				"Brighten up your attic space and improve ventilation with new windows and skylights.",
			url: "/service/attic-windows-and-skylights",
			image: "/our_services/_attic_windows_and_skylights.jpg",
			price: "Price starts at $2,800",
		},
		{
			heading: "Attic Storage Solutions",
			paragraph:
				"Maximize your attic space with customized storage solutions.",
			url: "/service/attic-storage-solutions",
			image: "/our_services/_attic_storage_solutions.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Attic Ventilation",
			paragraph:
				"Ensure proper airflow and ventilation in your attic for improved comfort and energy efficiency.",
			url: "/service/attic-ventilation",
			image: "/our_services/_attic_ventilation.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Attic Lighting",
			paragraph:
				"Illuminate your attic space with effective and energy-efficient lighting solutions.",
			url: "/service/attic-lighting",
			image: "/our_services/_attic_lighting.jpg",
			price: "Price starts at $1,800",
		},
		{
			heading: "Attic Heating and Cooling",
			paragraph:
				"Ensure year-round comfort in your attic with effective heating and cooling solutions.",
			url: "/service/attic-heating-and-cooling",
			image: "/our_services/_attic_heating_and_cooling.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Attic Bathroom Addition",
			paragraph:
				"Add convenience and value to your home with a professionally installed attic bathroom.",
			url: "/service/attic-bathroom-addition",
			image: "/our_services/_attic_bathroom_addition.jpg",
			price: "Price starts at $7,000",
		},
	],
	landscaping: [
		{
			heading: "Landscaping",
			paragraph:
				"We provide landscape services to cater all your backyard and front yard needs.",
			url: "/landscaping",
			image: "",
			price: "Price starts at $5,000",
		},
		{
			heading: "Landscape Design",
			paragraph:
				"Transform your outdoor space with customized landscape design solutions.",
			url: "/service/landscape-design",
			image: "/our_services/_landscape-design.webp",
			price: "Price starts at $3,500",
		},
		{
			heading: "Pergola Installation",
			paragraph:
				"Enhance your outdoor space with our free consultation on pergola designs and our professional pergola installation services.",
			url: "/service/pergola-installation",
			image: "/our_services/_pergola.webp",
			price: "Price starts at $3,000",
		},
		{
			heading: "Grading",
			paragraph:
				"Achieve a level and stable surface for your landscape with our grading services.",
			url: "/service/grading",
			image: "",
			price: "Price starts at $6,000",
		},
		{
			heading: "Planting",
			paragraph:
				"Enhance the beauty of your landscape with expert planting services.",
			url: "/service/planting",
			image: "/our_services/_Planting.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Tree Removal",
			paragraph:
				"Remove unwanted or hazardous trees from your landscape safely and efficiently.",
			url: "/service/tree-removal",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Patio Installation",
			paragraph:
				"Create an inviting outdoor living space with our professional patio installation services.",
			url: "/service/patio-installation",
			image: "/our_services/_patio_building.webp",
			price: "Price starts at $5,500",
		},
		{
			heading: "Sod Installation",
			paragraph:
				"Achieve a lush and healthy lawn quickly with our sod installation services.",
			url: "/service/sod-installation",
			image: "/our_services/_Sod_Installation.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Fence Installation",
			paragraph:
				"Enhance privacy and security in your outdoor space with our fence installation services.",
			url: "/service/fence-installation",
			image: "/our_services/_Fence_Installation.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Retaining Walls",
			paragraph:
				"Add functionality and visual appeal to your landscape with professionally built retaining walls.",
			url: "/service/retaining-walls",
			image: "/our_services/_retaining_wall.webp",
			price: "Price starts at $6,500",
		},
		{
			heading: "Fountain",
			paragraph:
				"Add elegance and tranquility to your landscape with a beautiful fountain feature.",
			url: "/service/fountain",
			image: "/our_services/_Fountain.jpg",
			price: "Price starts at $7,000",
		},
		{
			heading: "Fire Pits",
			paragraph:
				"Create a cozy gathering spot in your outdoor space with a custom fire pit.",
			url: "/service/fire-pits",
			image: "/our_services/_Fire_Pits.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Path Installation",
			paragraph:
				"Enhance accessibility and aesthetics in your landscape with professionally installed paths.",
			url: "/service/path-installation",
			image: "/our_services/_path-installation.webp",
			price: "Price starts at $2,800",
		},
		{
			heading: "Irrigation Installation",
			paragraph:
				"Ensure your landscape stays lush and healthy with a professionally installed irrigation system.",
			url: "/service/irrigation-installation",
			image: "/our_services/_Irrigation_Installation.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Power Washing",
			paragraph:
				"Restore the beauty of your outdoor surfaces with our power washing services.",
			url: "/service/power-washing",
			image: "",
			price: "Price starts at $800",
		},
		{
			heading: "Weed Control",
			paragraph:
				"Keep your landscape pristine and weed-free with our effective weed control solutions.",
			url: "/service/weed-control",
			image: "/our_services/_Weed_Control.jpg",
			price: "Price starts at $500",
		},
		{
			heading: "Landscape Lighting",
			paragraph:
				"Highlight the beauty of your landscape and enhance safety with professionally installed lighting.",
			url: "/service/landscape-lighting",
			image: "",
			price: "Price starts at $1,800",
		},
	],
	painting: [
		{
			heading: "Painting",
			paragraph:
				"Refresh and revitalize your indoor space with our professional interior painting services.",
			url: "/painting",
			image: "",
			price: "Price starts at $2,000",
		},
		{
			heading: "Interior Painting",
			paragraph:
				"Refresh and revitalize your indoor space with our professional interior painting services.",
			url: "/service/interior-painting",
			image: "/our_services/_Interior_Painting.jpg",
			price: "Price starts at $2,000",
		},
		{
			heading: "Exterior Painting",
			paragraph:
				"Protect and beautify your home's exterior with our expert exterior painting services.",
			url: "/service/exterior-painting",
			image: "/our_services/_Exterior_Painting.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Cabinet Painting",
			paragraph:
				"Transform the look of your cabinets with our high-quality cabinet painting services.",
			url: "/service/cabinet-painting",
			image: "",
			price: "Price starts at $1,800",
		},
		{
			heading: "Trim Painting",
			paragraph:
				"Enhance the visual appeal of your space with professionally painted trim.",
			url: "/service/trim-painting",
			image: "",
			price: "Price starts at $1,500",
		},
		{
			heading: "Room Painting",
			paragraph:
				"Add personality and style to any room with our expert room painting services.",
			url: "/service/room-painting",
			image: "/our_services/_Room_Painting.jpg",
			price: "Price starts at $2,000",
		},
		{
			heading: "Ceiling Painting",
			paragraph:
				"Brighten and refresh your space with professionally painted ceilings.",
			url: "/service/ceiling-painting",
			image: "/our_services/_Ceiling_Painting.jpg",
			price: "Price starts at $1,800",
		},
		{
			heading: "Deck Painting",
			paragraph:
				"Protect and enhance your deck with our professional deck painting services.",
			url: "/service/deck-painting",
			image: "/our_services/_Deck_Painting.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Siding Painting",
			paragraph:
				"Give your home's siding a fresh new look with our expert siding painting services.",
			url: "/service/siding-painting",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Fence Painting",
			paragraph:
				"Revitalize your fence and enhance your outdoor space with our fence painting services.",
			url: "/service/fence-painting",
			image: "/our_services/_Fence_Painting.jpg",
			price: "Price starts at $2,000",
		},
		{
			heading: "Varnishing",
			paragraph:
				"Protect and enhance the natural beauty of wood surfaces with our varnishing services.",
			url: "/service/varnishing",
			image: "",
			price: "Price starts at $2,500",
		},
		{
			heading: "Stucco",
			paragraph:
				"Restore and beautify your stucco surfaces with our professional stucco services.",
			url: "/service/stucco",
			image: "",
			price: "Price starts at $3,500",
		},
	],
	masonry: [
		{
			heading: "Masonry Services",
			paragraph:
				"Expert masonry services, including brick laying, stone masonry, and more.",
			url: "/masonry-contractors",
			image: "",
			price: "Price starts at $5,000",
		},
		{
			heading: "Brick Laying and Repair",
			paragraph:
				"Enhance your property with expert brick laying and repair services.",
			url: "/service/brick-laying-and-repair",
			image: "/our_services/_Brick_Laying_Repair.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Stone Masonry",
			paragraph:
				"Add timeless beauty to your property with our professional stone masonry services.",
			url: "/service/stone-masonry",
			image: "",
			price: "Price starts at $6,000",
		},
		{
			heading: "Seismic Retrofitting",
			paragraph:
				"Ensure the safety and stability of your property with our seismic retrofitting services.",
			url: "/service/seismic-retrofitting",
			image: "",
			price: "Price starts at $7,000",
		},
		{
			heading: "Chimney Masonry",
			paragraph:
				"Keep your chimney in top condition with our expert chimney masonry services.",
			url: "/service/chimney-masonry",
			image: "/our_services/_Chimney_Masonry.jpg",
			price: "Price starts at $4,500",
		},
		{
			heading: "Concrete Block",
			paragraph:
				"Build durable structures with our professional concrete block services.",
			url: "/service/concrete-block",
			image: "/our_services/_Concrete_Block.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Masonry Restoration",
			paragraph:
				"Restore the beauty and integrity of your masonry with our restoration services.",
			url: "/service/masonry-restoration",
			image: "/our_services/_Masonry_Restoration.jpg",
			price: "Price starts at $6,000",
		},
		{
			heading: "Stone Veneer",
			paragraph:
				"Enhance your property's appearance with stylish and durable stone veneer.",
			url: "/service/stone-veneer",
			image: "",
			price: "Price starts at $8,000",
		},
		{
			heading: "Commercial Masonry",
			paragraph:
				"Trust our expertise for all your commercial masonry needs.",
			url: "/service/commercial-masonry",
			image: "/our_services/_Commercial_Masonry.jpg",
			price: "Price starts at $12,000",
		},
	],
} */


