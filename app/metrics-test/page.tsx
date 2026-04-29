import * as React from 'react';

export type Metric = {
    body: string,
    label: string,    
}

export interface MetricsTableProps {
    metrics: Metric[];
}

export function MetricsTable({metrics}:MetricsTableProps) {
    return (
        <>
            <div className="">
                <ol className='list-none inline-flex group/metrics overflow-hidden rounded-lg bg-card text-sm text-card-foreground shadow-xs ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl"'>
                    {metrics.map((metric, key) => (
                        <li className="border flex flex-col gap-1 border py-3 px-4" key={key}>
                            <span className="uppercase font-medium font-narrow text-xs text-muted-foreground">
                                {metric.label}
                            </span>
                            <span className="font-narrow text-md text-foreground">
                                {metric.body}
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default function Page() {
    const TMP_DATA: Metric[] = [
        {
            label: 'Display', body: '5.5" Oled',
        },
        {
            label: 'Display', body: '5.5" Oled',
        },
        {
            label: 'Display', body: '5.5" Oled',
        },
    ]

    return (
        <MetricsTable metrics={TMP_DATA} />
    )
}