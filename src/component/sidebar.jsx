import React, { useState } from 'react'
import IcButton from './icButton'
import OpenFeaturesList from './openFeaturesList'
import useWindowWidth from '../hooks/useWindowWirth'

const Sidebar = ({ className = '', iconOnly = false }) => {
  const [selectedButton, setSelectedButton] = useState('Chat')
  const width = useWindowWidth()

  const studio = [
    {
      icon: '',
      name: 'Chat'
    },
    {
      icon: '',
      name: 'Stream'
    },
    {
      icon: '',
      name: 'Generate Media'
    },
    {
      icon: '',
      name: 'Build'
    },
    {
      icon: '',
      name: 'History'
    },
    {
      icon: '',
      name: 'Enable saving'
    },
  ]

  const Dashboard = [
    {
      icon: '',
      name: 'API Keys'
    },
    {
      icon: '',
      name: 'Usage & Billing'
    },
    {
      icon: '',
      name: 'Changelog'
    },
  ]

  const handleClicked = (name) => {
    setSelectedButton(name)
  }
  return (

    <div className='vtl-diff-items-align w-full mb-16 max769:mb-5  h-full min-h-max max769:border-b max769:border-hoverC pb-3'>
      <div className={`min-w-16 w-full h-max vtl-same-item-align justify-start ${className} `}>
        {width >= 768 && studio.map((item, i) => (
          <IcButton
            key={i+'studio'}
            icon={item.icon}
            name={item.name}
            iconOnly={iconOnly}
            clicked={item.name == selectedButton}
            onClick={() => { handleClicked(item.name) }}
          />
        )) }
        {width < 768 && <OpenFeaturesList
          items={studio}
          navButtonType={true}
          onClickButton={handleClicked}
          title='Studio'
          openFeature={true}
          selectedButton={selectedButton}
        />}
        {width < 768 &&<button className='w-full text-start'>Documentation</button>}
        {width < 768 && <OpenFeaturesList
          items={Dashboard}
          navButtonType={true}
          onClickButton={handleClicked}
          title='Dashboard'
          openFeature={true}
          selectedButton={selectedButton}
        />}
      </div>

     {iconOnly? <IcButton
        icon={''}
        name={'AlertCircle'}
        iconOnly={iconOnly}
        clicked={false}
      />: <p className='text-[12px] '> This model is not stable and may not be suitable for production use. <a href="https://ai.google.dev/gemini-api/docs/models#model-versions" target="blank" className='text-buttonC'>Learn more</a></p>}
    </div>
  )
}

export default Sidebar