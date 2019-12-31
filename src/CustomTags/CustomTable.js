import React from 'react';
import '../CSS/CustomTable.css';

export default function CustomTable(props) {
    return (
        <table className={'table'}>
            {props.children}
        </table>
    )
}