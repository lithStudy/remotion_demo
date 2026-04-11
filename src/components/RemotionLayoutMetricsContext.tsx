import React, { createContext, useContext } from "react";

export type RemotionLayoutMetrics = {
	width: number;
	height: number;
};

const RemotionLayoutMetricsContext = createContext<RemotionLayoutMetrics | null>(null);

export const RemotionLayoutMetricsProvider: React.FC<{
	value: RemotionLayoutMetrics;
	children: React.ReactNode;
}> = ({ value, children }) => (
	<RemotionLayoutMetricsContext.Provider value={value}>{children}</RemotionLayoutMetricsContext.Provider>
);

export function useRemotionLayoutMetricsOverride(): RemotionLayoutMetrics | null {
	return useContext(RemotionLayoutMetricsContext);
}
