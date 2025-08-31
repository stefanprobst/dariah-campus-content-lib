"use client";

import type { ReactNode } from "react";

interface MermaidDiagramProps {
	diagram: string;
}

export function MermaidDiagram(props: Readonly<MermaidDiagramProps>): ReactNode {
	const { diagram } = props;

	return <pre data-diagram={true}>{diagram}</pre>;
}
