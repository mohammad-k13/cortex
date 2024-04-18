"use client";

import Section from "@/components/Section";
import { useSnapshot } from "valtio";
import { ChangingSectionToFalse, ChangingSectionToTrue, NextSection, PrevSection, SectionStore } from "@/Store";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { SectionsInfo } from "@/constants";
import { usePathname } from "next/navigation";
import HomeNavigation from "@/components/HomeNavigation";

export default function Home() {
	const { currentSection, changingSection } = useSnapshot(SectionStore);
	const [scope, animate] = useAnimate();
	// return (
	// 	<section className="w-full min-h-[100vh] flex relative overflow-hidden">
	// 		<Section sectionInfo={SectionsInfo.find((sec) => sec.id === currentSection)!} />
	// 		{/* Slide Controllers */}
	// 		<HomeNavigation />
	// 	</section>
	// );

	const ShowToastHandler = async () => {
		await animate(".button", { scale: 0, zIndex: -10 });
		await animate(".toast-container", { opacity: 1 });
		animate(
			".toast",
			{ width: 300, height: 200, opacity: 1, zIndex: 20 },
			{ type: "spring", duration: 0.56, damping: 5 },
		);
	};
	const HideToastHandler = async () => {
		animate(
			".toast",
			{ width: 0, height: 0, opacity: 0, zIndex: -10 },
			{ type: "spring", duration: 0.56, damping: 5 },
		);
		await animate(".toast-container", { opacity: 0 });
		animate(".button", { scale: 1, zIndex: 10 });
	};

	return (
		<section
			ref={scope}
			className="w-full min-h-[100vh] flex-center">
			<button
				className="button h-8 px-3 bg-black text-white text-lg rounded-md"
				onClick={ShowToastHandler}>
				Click ASSHOLE
			</button>

			<div className="toast-container w-full h-full bg-[#33333360] absolute flex-center opacity-0">
				<div
					className="toast w-[300px] h-[100px] bg-white shadow-ld rounded-xl flex items-center justify-between py-5 flex-col"
					onClick={HideToastHandler}>
					<h1 className="text-black w-[70%] text-center">
						IF I HAD A FACE LIEK YOURS, I'D SUE MY PARENTS.
					</h1>
					<p className="text-sm text-gray-500 text-center">
						poor loser
						<br /> haaaa
					</p>
				</div>
			</div>
		</section>
	);
}
