import React from 'react'

const SidePenal = ({content}) => {
    return (
        <div className='w-full h-full overflow-auto ' style={{
            scrollbarWidth:'thin'
        }}>
            <div className='vtl-same-item-align justify-start gap-3 w-full h-max p-2'>
                {content}
            </div>

        </div>
    )
}

export default SidePenal