"use client";

import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { SectionStore } from "@/Store";
import { SectionsInfo } from "@/constants";

type GLTFResult = GLTF & {
	nodes: {
		Object_2: THREE.Mesh;
	};
	materials: {
		kava_low: THREE.MeshStandardMaterial;
	};
};

function BagModel(props: JSX.IntrinsicElements["group"]) {
	const [breakPoint, setBreakPoint] = useState<boolean>(window.innerWidth <= 850 ? true : false);

	const { currentSection, changingSection } = useSnapshot(SectionStore);
	const group = useRef<any>(null);
	const ProductColor = SectionsInfo.find((sec) => sec.id === currentSection)!.ProductInfo.color;

	const { nodes, materials } = useGLTF("/models/CoffeeBag.glb") as GLTFResult;

	const Logo = useTexture("./Logo.png");

	useFrame((state, delta) => {
		if (changingSection) {
			easing.dampE(group.current!.rotation, [Math.PI, 2, 0, "XYZ"], 0.25, delta);
		} else {
			easing.dampE(group.current!.rotation, [Math.PI, 1.571, 0, "XYZ"], 0.25, delta);

		}
		easing.dampC(materials.kava_low.color, ProductColor, 0.15, delta);
	});

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth <= 850) {
				setBreakPoint(true);
			}
		});
		return () => {
			window.removeEventListener("resize", () => {
				if (window.innerWidth <= 850) {
					setBreakPoint(true);
				}
			});
		};
	}, [window.innerWidth]);

	return (
		<group
			{...props}
			ref={group}
			dispose={null}
			position={breakPoint ? [-0.2, -1, 0] : [0, -2, 0]}
			scale={breakPoint ? 0.15 : 0.2}
			rotation={[Math.PI, 1.571, 0]}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_2.geometry}
				material={materials.kava_low}
				material-roughness={1}>
				<Decal
					position={[3, -12, 1.3]}
					rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 2]}
					scale={5}
					depthTest={true}
					map={Logo}
				/>
			</mesh>
		</group>
	);
}
export default BagModel;
