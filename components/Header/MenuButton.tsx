"use client";

import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";

type MenuButtonProps = { active: boolean; setActive: (state: (pv: boolean) => boolean) => void };

function MenuButton({ active, setActive }: MenuButtonProps) {
	useState();
	return (
		<MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
			<motion.button
				className="group relative bg-white/0 w-12 h-12 rounded-full hover:bg-black/10 z-50"
				initial={false}
				animate={active ? "open" : "close"}
				onClick={() => setActive((pv) => !pv)}>
				<motion.span
					style={{
						top: "35%",
						left: "50%",
						x: "-50%",
						y: "-50%",
					}}
					variants={{
						open: {
							rotate: ["0deg", "0deg", "45deg"],
							top: ["35%", "50%", "50%"],
							width: "1.5rem",
						},
						close: {
							rotate: ["45deg", "0deg", "0deg"],
							top: ["50%", "50%", "35%"],
							width: ".75rem",
						},
					}}
					className="absolute w-3 h-1 bg-black"
				/>
				<motion.span
					style={{
						top: "50%",
						left: "50%",
						x: "-50%",
						y: "-50%",
					}}
					variants={{
						open: { opacity: 0, zIndex: -5 },
						close: { opacity: 1, zIndex: 0 },
					}}
					className="absolute w-6 h-1 bg-black"
				/>
				<motion.span
					style={{
						bottom: "35%",
						left: "50%",
						x: "-50%",
						y: "50%",
					}}
					variants={{
						open: {
							rotate: ["0deg", "0deg", "-45deg"],
							bottom: ["35%", "50%", "50%"],
							width: "1.5rem",
						},
						close: {
							rotate: ["-45deg", "0deg", "0deg"],
							bottom: ["50%", "50%", "35%"],
							width: ".75rem",
						},
					}}
					className="absolute w-3 h-1 bg-black"
				/>
			</motion.button>
		</MotionConfig>
	);
}

export default MenuButton;
