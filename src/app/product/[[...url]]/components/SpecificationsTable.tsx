import React from "react";

type SpecificationsTableProps = {
	title: string;
	data: {
		[key: string]: string;
	};
};

const SpecificationsTable: React.FC<SpecificationsTableProps> = ({
	title,
	data,
}) => {
	return (
		<div className="specifications-table">
			<h1>{title}</h1>
			<table>
				<tbody>
					{Object.entries(data).map(([key, value]) => (
						<tr key={key}>
							<td>{key.replace(/-/g, " ")}</td>
							<td>{value}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SpecificationsTable;
