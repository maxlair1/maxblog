import * as React from 'react';
import NumberPopIn from './numberPopIn';

export type Metric = {
    body: string,
    label: string,
    type?: number | string    
}

export interface MetricsTableProps {
    metrics: Metric[];
}

export default function MetricsTable({metrics}:MetricsTableProps) {
    return (
        <>
            <div className="">
                <ol className='list-none inline-flex group/metrics overflow-hidden rounded-lg bg-card text-sm text-card-foreground shadow-xs ring-1 ring-foreground/10'>
                    {metrics.map((metric, key) => (
                        <li className="flex flex-col gap-1 py-3 px-4 border-r-1 last:border-r-0" key={key}>
                            <span className="uppercase font-medium font-narrow text-xs text-muted-foreground">
                                {metric.label}
                            </span>
                            <span className="font-mono text-base text-foreground">
                                {metric.type === 'number' ? 
                                    <NumberPopIn>{metric.body}</NumberPopIn>
                                : metric.body}
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}