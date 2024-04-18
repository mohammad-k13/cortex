import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";

function MenuButton() {
	const [active, setActive] = useState<boolean>(false);
	console.log(active);

	return (
		<MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
			<motion.button
				onClick={() => setActive((pv) => !pv)}
				animate={active ? "open" : "close"}
				className="group relative bg-white/0 w-12 h-12 rounded-full hover:bg-white/20">
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
					className="absolute w-3 h-1 bg-white "
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
					className="absolute w-6 h-1 bg-white "
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
					className="absolute w-3 h-1 bg-white"
				/>
			</motion.button>
		</MotionConfig>
	);
}

export default MenuButton;
