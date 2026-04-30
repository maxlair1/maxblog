'use client';
import * as React from 'react';
import '@/components/animate.css';

export default function NumberPopIn({ children = '0000', duration = 150 }: { children?: string, duration?: number }): React.ReactElement {
    const [isAnimating, setIsAnimating] = React.useState<boolean>(false);
    const inputArray = children.split('');

    React.useEffect(() => {
        setIsAnimating(true);
    }, [])

    return (
        <span className={`t-digit-group${isAnimating ? ' is-animating' : ''}`}>
            {inputArray.map((item, key) =>
                <span style={{ animationDelay: `${(duration / inputArray.length) * key}ms` }} className="t-digit" key={key}>{item}</span>
            )}
        </span>
    )
}
