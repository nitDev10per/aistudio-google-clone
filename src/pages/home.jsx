import Card from '../component/card'
import Sidebar from '../component/sidebar'
import ToggleButton from '../component/toggleButton'

const Home = () => {
    return (
        <div className='h-full w-full flex justify-center items-center bg-windowC gap-1 flex-1'>
            <div className='card-style p-6 h-full flex-1'>
                <div className='hoz-diff-item-align border-b border-hoverC w-full pb-6'>
                    <h1>Chat Prompt</h1>
                    <div className='hoz-same-item-align'></div>
                </div>

                <div className='w-full flex-1 h-full overflow-auto vtl-same-item-align'>
                    <div className='vtl-same-item-align gap-8 w-full flex-1'>
                        <h1>Welcome To Ai Studio</h1>
                        <div className='hoz-same-item-align gap-0 py-3 px-4 max-w-2xl w-full bg-hoverC rounded-[30px]'>
                            <input type='text' className='flex-1 bg-transparent border-none focus:border-none h-max p-0 w-full min-w-0' />
                            <Sidebar className='max-w-16 ' iconOnly={true} />
                            <button className='text-gray-400 px-3 py-2 rounded-3xl bg-gray-600'>Run ctrl-</button>
                        </div>

                        {/* <div className='vtl-same-item-align sm:max-w-2xl max-w-lg w-full overflow-y-auto'>
                            <div className='sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-4 sm:max-w-2xl hoz-same-item-align w-max'>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div> */}
                    </div>
                </div>


            </div>
            <div className='card-style w-72 p-6'>
                <div className='hoz-diff-item-align w-full'>
                    <h1>Run Setting</h1>
                    <div className='hoz-same-item-align'></div>
                </div>
                <div className='w-full flex-1 h-full overflow-auto vtl-same-item-align'>
                    <div className='vtl-same-item-align gap-1 w-full flex-1'>
                        <ToggleButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home