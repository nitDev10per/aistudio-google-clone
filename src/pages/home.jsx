import { useCallback, useMemo, useState } from 'react'
import Card from '../component/card'
import IcButton from '../component/icButton'
import OpenFeaturesList from '../component/openFeaturesList'
import Sidebar from '../component/sidebar'
import ToggleButton from '../component/toggleButton'
import { useApp } from '../contextApi/createContext'
import useOutSideClick from '../hooks/useOutSideClick'
import useWindowWidth from '../hooks/useWindowWirth'
import SidePenal from '../component/sidePenal'

const Home = ({ openSidebar }) => {
    const { isSidebarOpen, setSidebarOpen } = useApp();
    const width = useWindowWidth();
    const [inputValue, setInputValue] = useState('');
    const elementRef = useOutSideClick(() => {
        if (
            width <= 768
        ) {
            setSidebarOpen(false);
        }
    }, [width])

    const actionTypeMap = new Map([
        ['toggle', <ToggleButton />],
    ]);


    const cardData = [
        {
            title: 'Native speech generation',
            decs: 'Generate high quality text to speech with Gemini',
        },
        {
            title: 'Native speech generation',
            decs: 'Generate high quality text to speech with Gemini',
        },
        {
            title: 'Native speech generation',
            decs: 'Generate high quality text to speech with Gemini',
        },
        {
            title: 'Native speech generation',
            decs: 'Generate high quality text to speech with Gemini',
        },
    ]

    const items = [
        {
            title: 'Tools',
            type: 'wrap',
            data: [{
                topLabel: 'TopP',
                sideLabel: 'URL Context',
                actions: [{ type: 'toggle' }],
            }, {
                topLabel: 'TopP',
                sideLabel: 'URL Context',
                actions: [{ type: 'toggle' }],
            }]
        },
        {
            title: 'Thinking',
            type: 'single',
            data: [{
                topLabel: 'TopP',
                sideLabel: 'URL Context',
                actions: [{ type: 'toggle' }],
            }, {
                topLabel: 'TopP',
                sideLabel: 'URL Context',
                actions: [{ type: 'toggle' }],
            }]
        },

    ];

    const promptsGalleryData = [
        'Test if AI knows which number is bigger.',
        'Test if AI knows which number is bigger.',
        'Test if AI knows which number is bigger.',
        'Test if AI knows which number is bigger.',
        'Test if AI knows which number is bigger.',
     
    ]

    const penalContent = useCallback(() => {
        if (isSidebarOpen === 'setting') {
            return items.map((item, idx) => {
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
        } else{
            return promptsGalleryData.map((item, idx)=>{
                return <Card desc={item} key={idx+'promptsGalleryData'} className={'max-h-max'}/>
            })
        }

    },[isSidebarOpen])

    

    return (
        <div className='h-full w-full flex justify-center items-center bg-windowC gap-1 flex-1 overflow-y-hidden'>

            {/* chat */}
            <div className='card-style p-6 h-full flex-1 overflow-y-hidden'>
                <div className='hoz-diff-item-align border-b border-hoverC w-full pb-6'>
                    <h1>Chat Prompt</h1>
                    <div className='hoz-same-item-align'>
                        <IcButton
                            icon={''}
                            name={'Chat'}
                            iconOnly={true}
                            clicked={true}
                        />
                        <IcButton
                            icon={''}
                            name={'Chat'}
                            iconOnly={true}
                            clicked={true}
                        />
                        <IcButton
                            icon={''}
                            name={'Chat'}
                            iconOnly={true}
                            clicked={true}
                        />
                        <IcButton
                            icon={''}
                            name={'Chat'}
                            iconOnly={true}
                            clicked={true}
                        />
                    </div>
                </div>

                <div className='w-full flex-1 h-full vtl-same-item-align overflow-y-auto'>
                    <div className='vtl-same-item-align gap-8 w-full flex-1 h-max max435:mb-12'>
                        <h1 className='text-4xl text-buttonC text-center'>Welcome To Ai Studio</h1>
                        <div className='hoz-same-item-align gap-0 py-3 px-4 max-w-2xl w-full bg-hoverC rounded-[30px] max435:absolute max435:bottom-0 z-10'>
                            <input type='text' className='flex-1 bg-transparent border-none focus:border-none h-max p-0 w-full min-w-0' placeholder='Type your prompt here...' onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                            <IcButton
                                icon={''}
                                name={'Chat'}
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
                                        return <Card key={i + 'cardData'} className={`${openSidebar && isSidebarOpen ? 'min-w-[25vw]' : 'min-w-[30vw]'} lg:min-w-full max435:max-w-[70vw]`} desc={item.decs} img={true} title={item.title} newF={true} />
                                    })}

                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>

            {/* settings penal */}
            <div ref={elementRef} className={`card-style w-72 p-6 onResponsiveRightSift ${isSidebarOpen ? 'onResponsiveRightVisible ' : 'onResponsiveRightSift hidden'}`}>
                <div className='hoz-diff-item-align w-full'>
                    <h1>Run Setting</h1>
                    <div className='hoz-same-item-align'>
                        <IcButton
                            icon={'/assets/icons/plus.svg'}
                            name={'close'}
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