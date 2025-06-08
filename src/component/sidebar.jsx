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
      name: 'Genrate Media'
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

    <div className='vtl-diff-items-align w-full mb-20 h-full'>
      <div className={`min-w-16 w-full h-max vtl-same-item-align justify-start ${className} `}>
        {width >= 768 && studio.map((item, i) => (
          <IcButton
            key={i+'studio'}
            icon={item.icon}
            name={item.name}
            iconOnly={false}
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
        {width < 768 && <OpenFeaturesList
          items={Dashboard}
          navButtonType={true}
          onClickButton={handleClicked}
          title='Dashboard'
          openFeature={true}
          selectedButton={selectedButton}
        />}
      </div>
      <IcButton
        icon={''}
        name={'Chat'}
        iconOnly={iconOnly}
        clicked={true}
      />
    </div>
  )
}

export default Sidebar