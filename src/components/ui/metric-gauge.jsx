import * as React from "react"
import { ProgressBar } from "./progress"

const MetricGauge = ({ label, value, max, description }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <div className="font-medium text-sm">{label}</div>
      <div className="text-xs text-gray-500">{value}/{max}</div>
    </div>
    <ProgressBar value={value} max={max} />
    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{description}</div>
  </div>
);

export { MetricGauge } 