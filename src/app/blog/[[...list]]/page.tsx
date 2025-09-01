import { BlogCards } from "../components/BlogCards";
import { BlogFilter } from "../components/BlogFilter";
import { getBlogData } from "@/lib/getBlogData/getBlogData";
/* import { ServiceAreas } from "@/components/BottomButtons/BottomButtons"; */
import { LocationsList } from "@/components/LocationsList/LocationsList";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

type Props = {
	params: { list: string[] }; // Update type for 'list' to be an array of strings
};

export const metadata: Metadata = {
	title: 'Blog | RENOVA',
	description: 'Check out recent information and useful articles',
  }

const page: React.FC<Props> = async ({ params }: Props) => {
	let blogData;

	if (Object.keys(params).length === 0) {
		blogData = await getBlogData();
	} else {
		const paramsArray = params.list; // Use const for better immutability
		const search = paramsArray.join("/");
		blogData = await getBlogData(search);
	}

	return (
		<main>
			<BlogFilter />
			<BlogCards cards={blogData} />

			<ReactMarkdown className="markdown">
				{...blogData[0].markdown}
			</ReactMarkdown>

			{/* <ServiceAreas /> */}
			<LocationsList />
		</main>
	);
};

export default page;
