import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Tooltip.module.scss';

export interface TooltipProps {
    title: string;
    className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
    const [open, setOpen] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const childrenRef = useRef<HTMLDivElement>(null);
    const onClick = (): void => {
        setOpen(!open);
    };
    useEffect(() => {
        const onOutsideClick = (event: MouseEvent): void => {
            const isTargetRef = (ref: React.RefObject<HTMLElement>) => {
                return ref.current && ref.current.contains(event.target as Node);
            };
            if (!isTargetRef(childrenRef) && !isTargetRef(tooltipRef)) {
                setOpen(false);
            }
        };

        window.addEventListener('mousedown', onOutsideClick);
        return () => {
            window.removeEventListener('mousedown', onOutsideClick);
        };
    }, []);

    return (
        <div>
            <CSSTransition
                in={open}
                timeout={300}
                classNames={{
                    enter: styles['tooltip-enter'],
                    enterActive: styles['tooltip-enter-active'],
                    enterDone: styles['tooltip-enter-active'],
                    exit: styles['tooltip-exit'],
                    exitActive: styles['tooltip-exit-active'],
                }}
                unmountOnExit
            >
                <span ref={tooltipRef} className={className ?? styles.tooltip}>
                    {title}
                </span>
            </CSSTransition>
            <div ref={childrenRef} onClick={onClick}>
                {children}
            </div>
        </div>
    );
};
