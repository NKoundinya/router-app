import React from 'react'

export default function TRow({
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