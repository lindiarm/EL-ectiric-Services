import React from 'react'

const comp = ({ children }) => {
    return (
        <div className="my-4 p-4 bg-gray-200 rounded-lg shadow-lg">
            {children}
        </div>
    )
}

export default comp