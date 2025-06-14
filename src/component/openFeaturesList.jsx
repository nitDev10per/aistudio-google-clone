import React, { use, useCallback } from 'react';
import IcButton from './icButton';
import ToggleButton from './toggleButton';
import Card from './card';
import RangeInput from './rangeInput';
import Dropdown from './dropdown';

const OpenFeaturesList = ({items, title='', openFeature=true, navButtonType=false, onClickButton=()=>{}, selectedButton}) => {
  const [open, setOpen] = React.useState(true);
  // 1. Map needs an iterable of entries
  const actionTypeMap = new Map([
    ['toggle', <ToggleButton />],
    ['card', <Card/>],
    ['range', <RangeInput/>],
    ['button', <button
       className='text-textC rounded-sm px-2 py-1 h-min w-min text-sm font-semibold hover:bg-buttonC/55 hover:text-btnTextC'
       >Edit</button>],
    ['text', <span className='text-textC text-sm font-semibold'>Text</span>],
    ['icon', <IcButton iconOnly={true} />],
    ['select', <Dropdown/>]
  ]);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className="h-max w-full">
      {openFeature && <div className="hoz-diff-item-align py-1">
        <h5 className='text-sm'>{title}</h5>
        <IcButton onClick={()=>handleToggle()} name={!open? 'arrowD' : 'arrowU'}/>
      </div>}
      {(!openFeature && title) && <h5 className='mb-3 text-sm'>{title}</h5>}

      <div className={`${open? 'flex' : 'hidden'}  flex-col justify-start items-start gap-3 h-max w-full`}>
        {items.map((item, idx) => (
          !navButtonType ? <div
            key={`feature-${idx}`}
            className="flex flex-col justify-start items-start gap-0 w-full"
          >
            {/* 2. show the top label */}
            {item.topLabel && <h5 className='text-sm'>{item.topLabel}</h5>}

            <div className="flex justify-between items-center flex-wrap w-full">
              {item.sideLabel && <h5 className='text-xs'>{item.sideLabel}</h5>}

              {/* 3. return value from map */}
              {item.actions.map((action, aIdx) => (
                <span key={`action-${idx}-${aIdx}` } className=''>
                  {actionTypeMap.get(action.type)}
                </span>
              ))}
            </div>
          </div> : 
          // when need only buttons
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
