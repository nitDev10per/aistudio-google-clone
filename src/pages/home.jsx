import Card from '../component/card'
import IcButton from '../component/icButton'
import OpenFeaturesList from '../component/openFeaturesList'
import Sidebar from '../component/sidebar'
import ToggleButton from '../component/toggleButton'
import { useApp } from '../contextApi/createContext'
import useOutSideClick from '../hooks/useOutSideClick'
import useWindowWidth from '../hooks/useWindowWirth'

const Home = ({ openSidebar }) => {
    const { isSidebarOpen, setSidebarOpen } = useApp();
    const width = useWindowWidth();
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
                    <div className='vtl-same-item-align gap-8 w-full flex-1 h-max '>
                        <h1>Welcome To Ai Studio</h1>
                        <div className='hoz-same-item-align gap-0 py-3 px-4 max-w-2xl w-full bg-hoverC rounded-[30px]'>
                            <input type='text' className='flex-1 bg-transparent border-none focus:border-none h-max p-0 w-full min-w-0' />
                            <IcButton
                                icon={''}
                                name={'Chat'}
                                iconOnly={true}
                                clicked={true}
                            />
                            <button className='text-gray-400 px-3 py-2 rounded-3xl bg-gray-600'>Run ctrl-</button>
                        </div>

                        <div className="vtl-same-item-align w-full overflow-x-hidden overflow-y-hidden ">
                            <div className={`${openSidebar && isSidebarOpen ? 'w-[30vw]' : !openSidebar && !isSidebarOpen ? 'w-full' : 'w-[50vw]'} max769:w-full lg:w-full overflow-x-auto max-w-2xl `} style={{
                                scrollbarWidth: 'none',
                            }}>
                                <div className="flex lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4 lg:w-full max769:grid max769:grid-cols-2 max769:grid-rows-2 max769:w-full">
                                    <Card className={`${openSidebar && isSidebarOpen ? 'min-w-[25vw]' : 'min-w-[30vw]'} lg:min-w-full`} />
                                    <Card className={`${openSidebar && isSidebarOpen ? 'min-w-[25vw]' : 'min-w-[30vw]'} lg:min-w-full`} />
                                    <Card className={`${openSidebar && isSidebarOpen ? 'min-w-[25vw]' : 'min-w-[30vw]'} lg:min-w-full`} />
                                    <Card className={`${openSidebar && isSidebarOpen ? 'min-w-[25vw]' : 'min-w-[30vw]'} lg:min-w-full`} />

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
                    <div className='hoz-same-item-align'></div>
                </div>

                <div className='w-full flex-1 h-full overflow-auto vtl-same-item-align'>
                    <div className='vtl-same-item-align justify-start gap-3 w-full flex-1'>
                        {items.map((item, idx) => {
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
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home