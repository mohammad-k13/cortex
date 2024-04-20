"use client";

import { useAnimate } from "framer-motion";
import { useState } from "react";

type AnimationProps = {
	ref: HTMLElement;
	id: string;
};

export function useOrderSectionAnimation() {
	const [DesktopScope, animate] = useAnimate();
	const [isOpen, setIsOpen] = useState<"expanded" | "collapsed">("expanded");

	const ShowSectionContent = async () => {
		await animate(".expanded-title", { y: 0, opacity: 1 }, { duration: .25 });
		await animate(".expanded-p", { y: 0, opacity: 1 }, { duration: .25 });
		await animate(".expanded-btn", { y: 0, opacity: 1 }, { duration: .25 });
	};
	const HideSectionContent = async () => {
		animate(".expanded-title", { y: -10, opacity: 0 }, { duration: .15 });
		animate(".expanded-p", { y: -10, opacity: 0 }, { duration: .15 });
		animate(".expanded-btn", { y: -10, opacity: 0 }, { duration: .15 });
	};

	const DesktopSectionAnimationHandler = async (id: string, ref: React.RefObject<any>) => {
		const SectionSelectedId: string = ref.current.id;

		if (isOpen === "expanded") {
			if (SectionSelectedId === id) {
				animate(
					`#${SectionSelectedId}`,
					{
						// flex: 999,
						width: 2000,
						height: 1100,
						transform: "translate(100px, 300px)",
					},
					{ duration: 0.4 },
				);
				await animate(".colorize-circle", { width: 5500, height: 4500, left: -800, top: -800 });
				ShowSectionContent();
			} else {
				animate(`#${id}`, { width: 0, height: 0, opacity: 0, zIndex: -1 });
			}

			setIsOpen("collapsed");
		} else {
			HideSectionContent();
			animate(
				".colorize-circle",
				{ width: 300, height: 300, left: -100, top: -100 },
				{ type: "spring", damping: 16 },
			);

			animate(`#${id}`, {
				// width: 'auto',
				// flex: 1,
				width: 380,
				height: 280,
				opacity: 1,
				zIndex: 1,
				transform: "translate(0px, 0px)",
			});

			setIsOpen("expanded");
		}
	};

	const MobileSectionAnimationHandler = async (id: string, ref: React.RefObject<any>) => {
		let MobileSectionSelectedId: string = ref.current.id;

		if (isOpen === "expanded") {
			if (MobileSectionSelectedId === id) {
				animate(`#${MobileSectionSelectedId}`, {
					height: 600,
				});
				await animate(".colorize-circle", { width: 1400, height: 1400, left: -300, top: -300 });
				ShowSectionContent();
			} else {
				animate(`#${id}`, { width: 0, height: 0, opacity: 0, zIndex: -1 });
			}

			setIsOpen("collapsed");
		} else {
			HideSectionContent();

			animate(`#${id}`, {
				width: "90%",
				height: 180,
				opacity: 1,
				zIndex: 1,
			});
			animate(
				".colorize-circle",
				{ width: 300, height: 300, left: -100, top: -100 },
				{ type: "spring", damping: 12 },
			);

			setIsOpen("expanded");
		}
	};

	return {
		DesktopScope,
		isOpen,
		DesktopSectionAnimationHandler,
		MobileSectionAnimationHandler,
	};
}
