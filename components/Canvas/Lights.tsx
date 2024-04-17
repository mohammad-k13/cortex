"use client";

import { Environment, Lightformer } from "@react-three/drei";
import React from "react";

function Lights() {
	return (
		<group name="lights">
			{/**
			 * @description Environment is used to create a background environment for the scene
			 * https://github.com/pmndrs/drei?tab=readme-ov-file#environment
			 */}
			<Environment resolution={512}>
				<group>
					{/**
					 * @description Lightformer used to create custom lights with various shapes and properties in a 3D scene.
					 * https://github.com/pmndrs/drei?tab=readme-ov-file#lightformer
					 */}
					<Lightformer
						form="rect"
						intensity={10}
						position={[-1, 0, 15]}
						scale={10}
						rotation-y={Math.PI / 2}
					/>
					<Lightformer
						form="rect"
						intensity={10}
						position={[-10, 0, 15]}
						scale={10}
						rotation-y={-Math.PI / 2}
					/>
				</group>
			</Environment>

			{/**
			 * @description spotLight is used to create a light source positioned at a specific point
			 * in the scene that emits light in a specific direction.
			 * https://threejs.org/docs/#api/en/lights/SpotLight
			 */}
			<spotLight
				position={[-1, 0, 10]}
				angle={0.25}
				penumbra={1} // the penumbra is the soft edge of a shadow cast by a point light
				decay={1} // the amount the light dims as it moves away from the source
                        intensity={20} // the light intensity
				color={"#f8f9fa"}
			/>
			<spotLight
				position={[1,-1, 10]}
				angle={0.35}
				penumbra={1.8} // the penumbra is the soft edge of a shadow cast by a point light
				decay={1} // the amount the light dims as it moves away from the source
                        intensity={10} // the light intensity
				color={"#f8fFfa"}
			/>
			<spotLight
				position={[0, 15, 10]}
				angle={0.15}
				penumbra={.5}
				decay={.1}
				intensity={5}
			/>
		</group>
	);
}

export default Lights;
