import {
	Divider,
	Tabs,
	Tab,
	Box,
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Container,
	Button,
	CardActions,
	IconButton,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
import MyStoryList from "./components/MyStoryList";
import CollectStoryList from "./components/CollectStoryList";



const Reels = () => {
	const [tab, setTab] = useState("myStory");

	const uid = JSON.parse(localStorage.getItem('user'))
		? JSON.parse(localStorage.getItem('user')).id
		: 0

	const handleChange = (e, newTab) => {
		setTab(newTab);
	}

	return (
		<Box className={'storyTab'}>
			<Box className={'storyOrCollect'} display={"flex"} sx={{ width: "100%" }} justifyContent="center">
				<Tabs
					value={tab}
					onChange={handleChange}
					textColor="primary"
					indicatorColor="primary"
					aria-label="secondary tabs example">
					<Tab value="myStory" label="我的影片" />
					<Tab value="myCollect" label="我的收藏" />
				</Tabs>
			</Box>
			<Divider variant="middle" />
			{tab==='myStory'? <MyStoryList uid={uid} /> : <CollectStoryList uid={uid} />}
		</Box>
	);
};

export default Reels;
