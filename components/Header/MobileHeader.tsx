"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

//LOCAL IMPORT
import MenuButton from "./MenuButton";
import LogoImg from "../../public/NavBarLogo.png";
import { NavItems } from "@/constants";
import Link from "next/link";

const ToggleMenu = {
	open: {
		width: "80%",
		opacity: 1,
	},
	close: {
		width: 0,
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
			<AnimatePresence mode="wait">
				{active && (
					<motion.ul
						initial={{width: 0, opacity: 0}}
						className="h-screen flex-center flex-col gap-7 absolute top-0 right-0 bg-white z-40"
						onClick={() => setActive((pv) => !pv)}
						variants={ToggleMenu}
						animate={active && "open"}
						exit={active ? "close" : ""}>
						{NavItems.map((navItem, index: number) => (
							<motion.li
								initial={{x: -10, scale: 0, opacity: 0}}
								animate={{x: 0, opacity: 1, scale: 1}}
								transition={{delay: index * .25}}
								className="text-black text-3xl"
								key={index}>
								<Link href={navItem.path}>{navItem.name}</Link>
							</motion.li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
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
