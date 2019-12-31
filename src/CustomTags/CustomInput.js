import React from 'react';

export default function CustomInput({
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