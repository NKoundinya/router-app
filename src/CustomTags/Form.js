import React from 'react';
import '../CSS/CustomTable.css';

export default function Form({
    onSubmit,
    children,
    className
}) {
    return (
        <form onSubmit={onSubmit} className={className}>
            {children}
        </form>
    )
}

export function CustomTable(props) {
    return (
        <table className={'table'}>
            {props.children}
        </table>
    )
}

export function CustomInput({
    type = "text",
    name = "name",
    value = "value",
    onValueChange,
    placeholder,
    onSubmit,
    onClick,
    onFocus
}) {
    return (
        <input
            onFocus={onFocus}
            type={type}
            onChange={onValueChange}
            value={value}
            name={name}
            placeholder={placeholder}
            onSubmit={onSubmit}
            onClick={onClick}
            style={{}}
        />
    )
}

export function Select({
    data = [],
    onValueChange,
    defaultValue,
    onFocus
}) {
    return (
        <select onChange={onValueChange} onFocus={onFocus}>
            {
                (defaultValue !== "") ?
                    <option default={defaultValue} value={defaultValue}>
                        {defaultValue}
                    </option>
                    :
                    null
            }
            {
                data.map((element, i) =>
                    <option key={i} value={element}>
                        {element}
                    </option>
                )
            }
        </select >
    )
}