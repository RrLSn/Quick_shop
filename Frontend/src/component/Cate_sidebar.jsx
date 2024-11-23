import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { sizes } from '../utils';

const Cate_sidebar = () => {
    const [value, setValue] = useState([0,100])

    const valueText = (value) => {
        return `${value}`
    }

    const handleSliderChange = (e, newValue) => {
        e.preventDefault()
        setValue(newValue)
    }
    
  return (
    <div className="w-[286px] h-[577px] flex flex-col gap-[56px]">
        <div className="w-full h-[114px] flex flex-col gap-[28px] font-Urbanist">
            <p className="text-[22px] text-[400] leading-[26.4px]">Gender</p>
            <div className="flex flex-col gap-[20px]">
                <span className="w-full h-[20px] flex gap-[8px] items-center font-Urbanist text-[14px] text-[400] leading-[16.8px]">
                    <Checkbox color='default' />    
                    Male
                </span>
                <span className="w-full h-[20px] flex gap-[8px] items-center">
                    <Checkbox color='default' />
                    Female
                </span>
            </div>
        </div>
        <div className="w-full h-[234px] flex flex-col gap-[28px]">
            <p className="text-[22px] text-[400] leading-[26.4px]">Size</p>
            <div className="w-full h-[180px] flex flex-col gap-[20px]">
                {
                    sizes.map((size, index) => {
                        return (
                            <span key={index} className="w-full h-[20px] flex gap-[8px] items-center font-Urbanist text-[14px] text-[400] leading-[16.8px]">
                                <Checkbox color='default' />
                            {size}
                        </span>
                        )
                    })
                }
            </div>
        </div>
        <div className='w-full h-[117px] flex flex-col gap-[32px]'>
            <span className="w-full h-[35px] flex justify-between">
                <p className="font-Urbanist text-[400] text-[22px] leading-[26.4px]">Price</p>
                <button className="w-[90px] h-[35px] border-[1px] flex justify-center items-center text-center border-[#f24810] font-Urbanist text-[16px] text-[#f24810] leading-[19.2px] hover:bg-[#f24810] hover:text-[#ffffff]">Apply</button>
            </span>
            <div className='w-full h-[50px] flex flex-col'>
                <Box sx={{width: 250}}>
                    <Slider
                    getAriaLabel={() => ""} 
                    value={value}
                    onChange={handleSliderChange}
                    getAriaValueText={valueText}
                    valueLabelDisplay="auto"
                    color='black'
                    sx={{
                        '& .MuiSlider-thumb': {
                        width: 20,       // Set thumb width
                        height: 20,      // Set thumb height
                        borderRadius: 0, // Make thumb square (borderRadius set to a smaller value)
                        },
                    }}
                    />
                </Box>
                <div className='w-full h-[20px] flex justify-between'>
                    <p>${value[0]}</p>
                    <p>${value[1]}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cate_sidebar