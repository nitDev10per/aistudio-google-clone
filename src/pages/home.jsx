import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Card from '../component/card'
import IcButton from '../component/icButton'
import OpenFeaturesList from '../component/openFeaturesList'
import Sidebar from '../component/sidebar'
import ToggleButton from '../component/toggleButton'
import { useApp } from '../contextApi/createContext'
import useOutSideClick from '../hooks/useOutSideClick'
import useWindowWidth from '../hooks/useWindowWirth'
import SidePenal from '../component/sidePenal'
import RunSettings from '../component/runSetting'
import { button, cardData, items, promptsGalleryData } from '../data/dummyData'

const Home = ({ openSidebar }) => {
    const { isSidebarOpen, setSidebarOpen } = useApp();
    const ariatextRef = useRef()
    const width = useWindowWidth();
    const [inputValue, setInputValue] = useState('');

   const adjustTextareaHeight = () => {
    const textarea = ariatextRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto'; // reset
    const scrollHeight = textarea.scrollHeight;
    const maxHeight = 120; // Approx height of 5 lines (5 * 24px)

    textarea.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden';
    textarea.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

    const elementRef = useOutSideClick(() => {
        if (
            width <= 768
        ) {
            setSidebarOpen(false);
        }
    }, [width])

    useMemo(() => {
        if (width > 768) {
            setSidebarOpen(true);
        } else {
            setSidebarOpen(false);
        }
    }, [width])

    const actionTypeMap = new Map([
        ['toggle', <ToggleButton />],
    ]);


    const penalContent = useCallback(() => {
        if (isSidebarOpen === 'penal') {
            return promptsGalleryData.map((item, idx) => {
                return <Card desc={item} key={idx + 'promptsGalleryData'} className={'max-h-max'} />
            })
        } else {
            return <>
                {
                    items.map((item, idx) => {
                        if (item.type === 'wrap') {
                            return (
                                <>
                                    <OpenFeaturesList
                                        key={`feature-${idx}`}
                                        items={item.data}
                                        openFeature={true}
                                        title={item.title}
                                    />
                                    <div className='h-[1px] w-full bg-hoverC' />
                                </>
                            )
                        } else if (item.type === 'single') {
                            return (
                                <>
                                    <OpenFeaturesList
                                        key={`feature-${idx}`}
                                        items={item.data}
                                        openFeature={false}
                                        title={item.title}
                                    />
                                    <div className='h-[1px] w-full bg-hoverC' />
                                </>

                            );
                        }
                        return null;
                    })

                }
            </>
        }

    }, [isSidebarOpen])



    return (
        <div className='h-full w-full flex justify-center items-center bg-windowC gap-1 flex-1 overflow-y-hidden'>

            {/* chat */}
            <div className='card-style p-6 h-full flex-1 overflow-y-hidden'>
                <div className='hoz-diff-item-align border-b border-hoverC w-full pb-6'>
                    <h1>Chat Prompt</h1>
                    <div className='hoz-same-item-align'>
                        {button.map((item, i) => {
                            return <IcButton
                                key={i + 'button'}
                                icon={''}
                                name={item}
                                iconOnly={true}
                                clicked={false}
                                className='max769:hidden'
                            />
                        })}
                    </div>
                </div>

                <div className='w-full flex-1 h-full overflow-y-auto  grid place-items-center'>
                    <div className='vtl-same-item-align gap-8 w-full flex-1 h-max max435:mb-12' >
                        <h1 className="text-4xl text-transparent bg-clip-text text-center bg-gradient-to-r from-slate-200 to-blue-500">
                            Welcome To Ai Studio
                        </h1>

                        <div className='hoz-same-item-align gap-0 py-3 px-4 mx-[20px] my-0 max-w-2xl w-full bg-hoverC rounded-[30px] max435:fixed max435:bottom-1 z-[5] h-max'>
                            <textarea
                                ref={ariatextRef}
                                className="flex-1 bg-transparent border-none focus:outline-none focus:border-none resize-none w-full min-w-0 p-0"
                                placeholder="Type your prompt here..."
                                rows={1}
                                onChange={(e) => {

                                    setInputValue(e.target.value)
                                }}
                                value={inputValue}
                            />
                            <IcButton
                                icon={''}
                                name={'Plus'}
                                iconOnly={true}
                                clicked={true}
                            />
                            <button className={` px-3 py-2 rounded-3xl  ${inputValue ? 'bg-buttonC text-btnTextC' : 'bg-gray-600 text-gray-400'}`}>Run ctrl-</button>
                        </div>

                        <div className="vtl-same-item-align w-full overflow-x-hidden overflow-y-hidden ">
                            <div className={`${openSidebar && isSidebarOpen ? 'w-[30vw]' : !openSidebar && !isSidebarOpen ? 'w-full' : 'w-[50vw]'} max769:w-full lg:w-full overflow-x-auto max-w-2xl `} style={{
                                scrollbarWidth: 'none',
                            }}>
                                <div className="flex lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4 lg:w-full max769:grid max769:grid-cols-2 max769:grid-rows-2 max769:w-full  max435:flex max435:w-max">
                                    {cardData.map((item, i) => {
                                        return <Card key={i + 'cardData'} className={`${openSidebar && isSidebarOpen ? 'min-w-[25vw]' : 'min-w-[30vw]'} lg:min-w-full max435:max-w-[70vw]`} desc={item.decs} img={item.img} title={item.title} newF={true} />
                                    })}

                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>

            {/* settings penal */}
            <div ref={elementRef} className={`card-style w-72 p-4 onResponsiveRightSift ${isSidebarOpen ? 'onResponsiveRightVisible ' : 'onResponsiveRightSift hidden'} overflow-hidden`}>
                <div className='hoz-diff-item-align w-full'>
                    <h1>Run Setting</h1>
                    <div className='hoz-same-item-align'>
                        <IcButton
                            icon={''}
                            name={'Close Panel'}
                            iconOnly={true}
                            clicked={false}
                            onClick={() => {
                                setSidebarOpen(false)
                            }}
                        />
                    </div>
                </div>

                <SidePenal content={penalContent()} />

            </div>
        </div>
    )
}

export default Home