import React from 'react'

const SidePenal = ({content}) => {
    return (
        <div className='w-full flex-1 h-full overflow-auto vtl-same-item-align'>
            <div className='vtl-same-item-align justify-start gap-3 w-full flex-1'>
                {content}
            </div>

        </div>
    )
}

export default SidePenal