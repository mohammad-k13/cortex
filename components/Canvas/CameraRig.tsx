"use client";

import { SectionStore } from "@/Store";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useAnimate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { easing } from "maath";
import React, { useEffect, useRef } from "react";
import { type Group } from "three";
import { useSnapshot } from "valtio";

function CameraRig(props: any) {
	const groupRef = useRef<any>(null);
	const { currentSection, changingSection } = useSnapshot(SectionStore);


	useFrame((state, delta) => {
		
		easing.dampE(
			groupRef.current!.rotation,
			[-state.pointer.y / 6, state.pointer.x / 6, 0, "XYZ"],
			0.25,
			delta,
		);
	});

	return <motion.group ref={groupRef} whileHover={{scale: 1.05}}>{props.children}</motion.group>;
}

export default CameraRig;
