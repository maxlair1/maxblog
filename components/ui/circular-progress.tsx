'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number | null
  max?: number
  size?: number
  thickness?: number
  children?: React.ReactNode
  label?: string
}

export default function CircularProgress({
  value = null,
  max = 100,
  size = 48,
  thickness = 3,
  children,
  label,
  className,
  ...props
}: CircularProgressProps) {
  const safeMax = Math.max(max, 1)
  const progress = value == null ? 0 : Math.min(Math.max(value / safeMax, 0), 1)
  const radius = (size - thickness) / 2
  const center = size / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference * (1 - progress) * -1

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={value ?? undefined}
      className={cn('relative inline-flex items-center justify-center', className)}
      {...props}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={thickness}
          strokeLinecap="round"
          style={{ opacity: 0.2 }}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ opacity: 0.75, transition: 'stroke-dashoffset 100ms linear' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-mono pointer-events-none">
        {children}
      </div>
      {label && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-70 whitespace-nowrap">
          {label}
        </div>
      )}
    </div>
  )
}
