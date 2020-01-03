import React, { useState, useEffect, useContext } from 'react';
import { CustomTable, TRow } from '../CustomTags/Form'
import TokenContext from '../Contexts/TokenContext'
import { getData } from '../FetchData/about.request'

function About() {

    const [data, setData] = useState(null)

    const tokenV = useContext(TokenContext)

    useEffect(() => {
        getData(tokenV)
            .then(result => setData(result))
            .catch(error => setData(null))
    }, [tokenV])

    return data ? (
        <div>
            <CustomTable>
                <TRow
                    data={
                        [
                            "ID",
                            "Username",
                            "Role"
                        ]}
                    th={true}
                />
                {data.map((element, i) => {
                    return (
                        <TRow
                            key={i}
                            data={
                                [
                                    element.id,
                                    element.username,
                                    element.role
                                ]
                            }
                        />
                    )
                })}
            </CustomTable>
        </div>
    ) :
        <div>
            Loading...
        </div>
}

export default About;