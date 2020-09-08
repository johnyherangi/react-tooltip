import React, { useState, useRef } from "react"
import { CSSTransition } from "react-transition-group"

import styles from "./Tooltip.module.scss"

export interface TooltipProps {
    title: string
    className?: string
}

export const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
    const [open, setOpen] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const onClick = (): void => {
        setOpen(!open)
    }
    
    return (
        <div 
            className={styles.wrapper}
            ref={wrapperRef}
            onClick={onClick}
            >
            <CSSTransition
                in={open}
                timeout={100}
                classNames={{
                    enter: styles["tooltip-enter"],
                    enterActive: styles["tooltip-enter-active"]
                }}
                unmountOnExit
                >
                <span className={styles["tooltip-enter-active"]}>{title}</span>
            </CSSTransition>
            {children}
        </div>
    )
}