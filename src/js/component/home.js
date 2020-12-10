import React from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Card from "./card";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const menu = [{ label: "Home", url: "/" }, { label: "About", url: "#" }];
	/* React.Fragment can be used instead of a wrapper div if you don't need the div */
	// const cards = [
	// 	{
	// 		title: "",
	// 		description: "",
	// 		buttonUrl: "",
	// 		buttonLabel: "",
	// 		imgSrc: ""
	// 	}
	// ];
	return (
		<div className="">
			<Navbar menu={menu} brand="Start Bootstrap" />
			<Jumbo
				headline="A Warm Welcome!"
				description="A bunch of words"
				buttonName="Call to action"
				buttonUrl="#"
			/>
			<div className="row container mx-auto">
				<div className="col-12 col-sm-6 col-md-3">
					<Card
						title="Card title"
						description="Some more words here"
						buttonUrl="#"
						buttonLabel="Find out more!"
						imgSrc="https://www.fillmurray.com/500/325"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-3">
					<Card
						title="Card title"
						description="Some more words here"
						buttonUrl="#"
						buttonLabel="Find out more!"
						imgSrc="https://www.placecage.com/500/325"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-3">
					<Card
						title="Card title"
						description="Some more words here"
						buttonUrl="#"
						buttonLabel="Find out more!"
						imgSrc="https://baconmockup.com/500/325"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-3">
					<Card
						title="Card title"
						description="Some more words here"
						buttonUrl="#"
						buttonLabel="Find out more!"
						imgSrc="http://placeimg.com/500/325/any"
					/>
				</div>
				<Footer />
			</div>
		</div>
	);
}
