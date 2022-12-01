import React from "react";

export default function Search({ setUsername }) {
	const onChange = (e) => { setUsername(e.target.value) }

	return (
		<div className="header">
			<img alt="git" src="https://git-scm.com/images/logos/downloads/Git-Icon-White.png"></img>
			<input placeholder="Search" type="text" onChange={(event) => { onChange(event) }} />
		</div>
	);
}
