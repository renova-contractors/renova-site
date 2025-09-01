import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const useFilters = (): any => {
	const [isChecked, setIsChecked] = useState(false);
	const [filters, setFilters] = useState();

	const router = useRouter();
	const pathname = usePathname();

	const getQueryPath = (obj: Record<string, unknown>): any => {
		const cleaned = (structuredClone(obj) ?? {}) as Record<
			string,
			string | boolean | number
		>;

		return Object.keys(cleaned)
			.map((key) => `${key}=${cleaned[key]?.toString() ?? ""}`)
			.join("&");
	};

	const adjustedPathname = pathname.split("/").slice(0, 3).join("/");

	useEffect(() => {
		if (isChecked && filters) {
			router.push(
				`${
					adjustedPathname.includes("search")
						? pathname
						: adjustedPathname + "/search"
				}?${getQueryPath(filters)}`,
			);

			setIsChecked(false);
		}
	}, [isChecked]);

	return {
		filters,
		setFilters,
		isChecked,
		setIsChecked,
	};
};
