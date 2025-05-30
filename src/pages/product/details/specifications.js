import React from 'react'

const SpecificationsCategory = ({ title, data, last }) => {
    return (
        <div>
            <h5>{title}</h5>
            {data && Object.entries(data).map(([key, value], index) => {
                if (typeof value === 'string') {
                    return (
                        <div key={index} className='row'>
                            <div className='fw-medium col-3'>{key.replace(/_/g, " ")}: </div>
                            <div className='col-9'>{value}</div>
                        </div>
                    );
                }
            })}
            {last || <hr /> }
        </div>
    )
}

export default SpecificationsCategory