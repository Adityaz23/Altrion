"use client";
import UseTradingViewWidget from "@/hooks/useTradingViewWidget";
import { cn } from "@/lib/utils";
import  { memo } from "react";
interface TradingViewProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, any>;
  height?: number;
  className?: string;
}
const TradingViewWidget = ({
  title,
  scriptUrl,
  config,
  height = 600,
  className,
}: TradingViewProps) => {
  const containerRef = UseTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="font-semibold text-2xl text-orange-200 mb-5">{title}</h3>
      )}
      <div
        className={cn("tradingview-widget-container", className)}
        ref={containerRef}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: "100%" }}
        />
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
