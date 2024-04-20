"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

//LOCAL IMPORT
import MenuButton from "./MenuButton";
import LogoImg from "../../public/NavBarLogo.png";
import { NavItems } from "@/constants";
import Link from "next/link";

const ToggleMenu = {
	open: {
		right: 0,
		top: 0,
		width: "80dvw",
		height: "100dvh",
		opacity: 1,
	},
	close: {
		right: -10,
		top: -10,
		width: 0,
		height: "100dvh",
		opacity: 0,
	},
};

function MobileHeader() {
	const [active, setActive] = useState<boolean>(false);

	return (
		<motion.nav
			className="nav justify-end flex-row-reverse mt-2 md:hidden"
			animate={active ? "open" : "close"}>
			<MenuButton
				active={active}
				setActive={setActive}
			/>
			<motion.ul
				initial={false}
				className="flex-center flex-col gap-7 absolute top-0 right-0 opacity-0 bg-white z-40"
				onClick={() => setActive(pv => !pv)}
				variants={ToggleMenu}>
				{NavItems.map((navItem, index: number) => (
					<li className="text-black text-3xl" key={index}>
						<Link href={navItem.path}>{navItem.name}</Link>
					</li>
				))}
			</motion.ul>
			<div className="flex-center justify-self-start">
				<Image
					src={LogoImg}
					alt="LogoImg"
					width={70}
					height={16}
				/>
			</div>
		</motion.nav>
	);
}

export default MobileHeader;
