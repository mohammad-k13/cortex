"use client";

import { type SectionInfo } from "@/constants";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import React, { Fragment, use, useEffect, useState } from "react";
import ModelView from "./Canvas";
import { usePathname } from "next/navigation";
import Button from "./Button";

type SectionProps = {
	sectionInfo: SectionInfo;
};

function Section({ sectionInfo }: SectionProps) {
	const [scope, animate] = useAnimate();

	const LetterAnimationvariants = {
		initialState: {
			opacity: 0,
			clipPath: "polygon(100% 100%, 100% 100%, 99% 0, 98% 0)",
		},
		animateState: {
			opacity: 1,
			clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
		},
	};
	const animateLetters = (word: string, index: number, array: string[], isTitle: boolean) => (
		<Fragment key={index}>
			<div
				className="max-md:!m-0"
				style={{ marginLeft: index * 60 }}>
				{word === "and" && isTitle ? (
					<motion.span
						variants={LetterAnimationvariants}
						initial={"initialState"}
						animate={"animateState"}
						className="lg:text-6xl md:text-3xl text-2xl font-bold">
						&
					</motion.span>
				) : (
					word.split("").map((letter, index) => (
						<motion.span
							key={index}
							variants={LetterAnimationvariants}
							className={isTitle ? "hero-h2 md:ml-2" : ""}
							style={{ display: "inline-block" }}
							initial={"initialState"}
							animate={"animateState"}
							transition={{ duration: 0.25, type: "spring", delay: index * 0.1 }}>
							{letter}
						</motion.span>
					))
				)}
				{index !== array.length - 1 && (isTitle ? <br /> : <span className="mx-[4px]"></span>)}
			</div>
		</Fragment>
	);

	useEffect(() => {
		//ANIMATION
		const AnimationLogic = async () => {
			await animate(
				"#aside",
				{ backgroundColor: sectionInfo.sectionColor },
				{ type: "keyframes", duration: 0.5, delay: 0.1 },
			);
			// await animate("#hero-h2", { x: 0, opacity: 1 });
			await animate("#hero-p", { y: 0, opacity: 1 }, { type: "spring" });
			await animate("#hero-btn", { x: 0, opacity: 1 }, { type: "spring" });
			//todo: Animation for Coffee's Name
			// await animate(
			// 	"#coffee-name",
			// 	{ opacity: 1, top: "50%",right: "2%", transform: "rotate(90deg) translateY(-50%)" },
			// 	{ type: "spring" },
			// );
		};

		AnimationLogic();
	}, [sectionInfo.id]);

	return (
		<section
			className="hero-container"
			ref={scope}>
			<aside
				id="aside"
				className="aside">
				<div className="canvas-container">
					<ModelView />
				</div>

				{/* TODO: WORK ON MOBILE POSITION */}
				{/* <motion.div
					key={sectionInfo.id}
					initial={{ bottom: "2.5rem", opacity: 0, transform: "rotate(90deg)" }}
					exit={{ y: "-100vh", opacity: 0 }}
					className="coffee-name absolute right-14 rotate-90 z-50"
					id="coffee-name">
					<p className="tracking-widest">{sectionInfo.ProductInfo.name}</p>
				</motion.div> */}
			</aside>
			<section className="hero-text--container">
				<h2
					key={sectionInfo.hero.title}
					className="flex flex-col gap-3 max-md:flex-row"
					id="hero-h2">
					{sectionInfo.hero.title
						.split(" ")
						.map((word: string, index: number, array: string[]) =>
							animateLetters(word, index, array, true),
						)}
				</h2>
				<motion.p
					id="hero-p"
					className="hero-p"
					initial={{ y: 50, opacity: 0 }}
					exit={{ y: 60, opacity: 0 }}
					key={sectionInfo.id}>
					{sectionInfo.hero.text}
				</motion.p>
				<motion.div
					id="hero-btn"
					initial={{ x: -50, opacity: 0}}>
					<Button title="Order Now" isWhite={false} />
				</motion.div>
			</section>
		</section>
	);
}

export default Section;
