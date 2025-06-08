import React, { use, useCallback } from 'react';
import IcButton from './icButton';
import ToggleButton from './toggleButton';
import Card from './card';

const OpenFeaturesList = ({items, title='', openFeature=true, navButtonType=false, onClickButton=()=>{}, selectedButton}) => {
  const [open, setOpen] = React.useState(true);
  // 1. Map needs an iterable of entries
  const actionTypeMap = new Map([
    ['toggle', <ToggleButton />],
    ['card', <Card/>]
  ]);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className="h-max w-full">
      {openFeature && <div className="hoz-diff-item-align py-1">
        <h5>{title}</h5>
        <IcButton onClick={()=>handleToggle()}/>
      </div>}
      {(!openFeature && title) && <h5 className='mb-3'>{title}</h5>}

      <div className={`${open? 'flex' : 'hidden'}  flex-col justify-start items-start gap-3 h-max w-full`}>
        {items.map((item, idx) => (
          !navButtonType ? <div
            key={`feature-${idx}`}
            className="flex flex-col justify-start items-start gap-0 w-full"
          >
            {/* 2. show the top label */}
            {item.topLabel && <h5>{item.topLabel}</h5>}

            <div className="flex justify-between items-center flex-wrap w-full">
              {item.sideLabel && <h5>{item.sideLabel}</h5>}

              {/* 3. return value from map */}
              {item.actions.map((action, aIdx) => (
                <span key={`action-${idx}-${aIdx}`}>
                  {actionTypeMap.get(action.type)}
                </span>
              ))}
            </div>
          </div> : 
          <IcButton
           icon={item.icon}
           name={item.name}
           iconOnly={false}
           clicked={item.name==selectedButton}
           onClick={()=>{onClickButton(item.name)}}
          />
        ))}
      </div>
    </div>
  );
};

export default OpenFeaturesList;
