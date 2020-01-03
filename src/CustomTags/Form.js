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


export function TRow({
    data,
    th = false
}) {
    if (th) {
        return (
            <thead className={'tHead'}>
                <tr>
                    {data.map((element, i) => {
                        return (
                            <th key={i}>
                                {element}
                            </th>
                        )
                    })}
                </tr>
            </thead>
        )
    }
    return (
        <tbody>
            <tr>
                {data.map((element, i) => {
                    return (
                        <td key={i}>
                            {element}
                        </td>
                    )
                })}
            </tr>
        </tbody>
    )
}