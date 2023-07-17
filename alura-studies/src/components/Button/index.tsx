import React from 'react'
import style from './Button.module.scss'

// const Button = styled.button`
//     padding: 10px 20px;
//     border: none;
//     border-radius: 12px;
//     background-color: #d6d6d6;
//     font-weight: bold;
//     color: black;
// `

type PropsButton = {
    text?: string
    children?: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

export function Button({children, type, onClick}: PropsButton) {
    return (
        <button type={type} onClick={onClick} className={style.button}>{children}</button>
    )
}