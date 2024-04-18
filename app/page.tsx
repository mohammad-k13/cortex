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

	return (
		<section className="w-full min-h-[100vh] flex relative overflow-hidden">
			<Section sectionInfo={SectionsInfo.find((sec) => sec.id === currentSection)!} />
			{/* Slide Controllers */}
			<HomeNavigation />
		</section>
	);
}
