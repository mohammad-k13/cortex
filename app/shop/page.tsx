"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, AnimationSequence, motion, useAnimate, useAnimation } from "framer-motion";
import { type SectionInfo, SectionsInfo } from "@/constants";
import GetOrderCard from "@/components/GetOrderCard";
import { useOrderSectionAnimation } from "@/Hooks";
import GetOrderCardMobile from "@/components/GetOrderCard_Mobile";

function Page() {
	const sectionsIds: string[] = [];
	SectionsInfo.map((section) => sectionsIds.push(section.id));
	const { DesktopSectionAnimationHandler, MobileSectionAnimationHandler, DesktopScope, isOpen } =
		useOrderSectionAnimation();

	const SectionClickHandler = (ref: React.RefObject<HTMLElement>) => {
		sectionsIds.forEach((id) => DesktopSectionAnimationHandler(id, ref));
	};

	const MobileSectionClickHandler = (ref: React.RefObject<HTMLElement>) => {
		sectionsIds.forEach((id) => MobileSectionAnimationHandler(id, ref));
	};

	return (
		<div
			ref={DesktopScope}
			className="w-full">
			<div className="max-md:hidden h-screen max-h-[1080px] flex items-center justify-between px-3 gap-5 relative overflow-hidden">
				{SectionsInfo.map((section: SectionInfo, index: number) => (
					<GetOrderCard
						key={index}
						Info={section}
						index={index}
						isOpen={isOpen}
						onClick={SectionClickHandler}
					/>
				))}
			</div>
			<div className="md:hidden w-full min-h-dvh flex-center flex-col gap-10 pt-16">
				{SectionsInfo.map((section: SectionInfo, index: number) => (
					<GetOrderCardMobile
						key={index}
						Info={section}
						index={index}
						isOpen={isOpen}
						onClick={MobileSectionClickHandler}
					/>
				))}
			</div>
		</div>
	);
}

export default Page;
