import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Tooltip.module.scss';

export interface TooltipProps {
    title: string;
    className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const onClick = (): void => {
        setOpen(!open);
    };

    return (
        <div className={styles.wrapper} ref={wrapperRef} onClick={onClick}>
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
                <span>{title}</span>
            </CSSTransition>
            {children}
        </div>
    );
};
