import React, { useState, useEffect, useContext } from 'react';
import CustomTable from '../CustomTags/CustomTable'
import TRow from '../CustomTags/TRow'
import TokenContext from '../Contexts/TokenContext'
import { getData } from '../FetchData/about.request'

function About() {

    const [data, setData] = useState([])

    const tokenV = useContext(TokenContext)

    useEffect(() => {
        getData(tokenV).then(result => setData(result))
    }, [tokenV])

    return data ? (
        <div>
            <CustomTable>
                <TRow
                    data={
                        [
                            "ID",
                            "FirstName",
                            "LastName",
                            "Username"
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
                                    element.firstName,
                                    element.lastName,
                                    element.username
                                ]
                            }
                        />
                    )
                })}
            </CustomTable>
        </div>
    ) :
        <div>
            Token Expired... Logout and Login to see data
        </div>
}

export default About;