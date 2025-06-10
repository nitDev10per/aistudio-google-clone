import React from 'react'

const RangeInput = () => {
    const [temperature, setTemperature] = React.useState(1.0)
  return (
    <div className="flex items-center justify-between w-full space-x-14">
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full"
          />
          <span className="text-sm border border-white/35 rounded-md px-4 py-[2px]">{temperature}</span>
        </div>
  )
}

export default RangeInput