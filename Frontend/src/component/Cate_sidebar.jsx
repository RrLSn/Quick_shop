import {useState} from "react"
import Checkbox from '@mui/material/Checkbox';
import { sizes } from '../utils';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

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
    <div className="w-full h-[max-content] flex flex-col lg:gap-5 gap-3">
        <div className="w-full h-[max-content] flex flex-col lg:gap-5 gap-3 font-Urbanist">
            <p className="xl:text-2xl lg:text-xl text-[17px] font-medium leading-[26.4px]">Gender</p>
            <div className="flex flex-col xl:gap-5 lg:gap-3 gap-2">
            <span className="w-full h-[30px] flex lg:gap-2 gap-1 items-center font-Urbanist xl:text-[18px] lg:text-[15px] text-[13px] text-[400] leading-[16.8px]">
                <Checkbox color='default' size="small" />    
                Male
            </span>
            <span className="w-full h-[30px] flex lg:gap-2 gap-1 items-center font-Urbanist xl:text-[18px] lg:text-[15px] text-[13px] text-[400] leading-[16.8px]">
                <Checkbox color='default' size="small" />
                Female
            </span>
            </div>
        </div>
        <div className="w-full h-[max-content] flex flex-col lg:gap-5 gap-3">
            <p className="xl:text-2xl lg:text-xl text-[17px] font-medium leading-[26.4px]">Size</p>
            <div className="w-full h-[max-content] flex flex-col xl:gap-5 lg:gap-3 gap-2">
            {
            sizes.map((size, index) => {
                return (
                <span key={index} className="w-full h-[30px] flex lg:gap-2 gap-1 items-center font-Urbanist xl:text-[18px] lg:text-[15px] text-[13px] text-[400] leading-[16.8px]">
                    <Checkbox color='default' size="small" />
                {size}
                </span>
                )
            })
            }
            </div>
        </div>
        <div className='w-full lg:h-[117px] h-[100px] flex flex-col lg:gap-2'>
            <span className="w-full lg:h-[35px] h-[25px] flex justify-between">
                <p className="xl:text-2xl lg:text-xl text-[17px] font-medium leading-[26.4px]">Price</p>
                <button className="xl:w-[90px] lg:w-[70px] w-[55px] lg:h-[35px] h-[25px] border-[1px] flex justify-center items-center text-center border-[#f24810] font-Urbanist lg:text-[16px] text-[12px] text-[#f24810] leading-[19.2px] hover:bg-[#f24810] hover:text-[#ffffff]">Apply</button>
            </span>
            <div className='w-full lg:h-[50px] h-[30px] flex flex-col items-center'>
                <Box sx={{width: "100%"}}>
                  <Slider
                  getAriaLabel={() => ""} 
                  value={value}
                  onChange={handleSliderChange}
                  getAriaValueText={valueText}
                  color='black'
                  sx={{
                      '& .MuiSlider-thumb': {
                      width: "10%",       // Set thumb width
                      height: "40%",      // Set thumb height
                      borderRadius: 0, // Make thumb square (borderRadius set to a smaller value)
                      },
                }}
                />
                </Box>
                <div className='w-full h-[20px] flex justify-between lg:text-[18px] text-[14px]'>
                  <p>${value[0]}</p>
                  <p>${value[1]}</p>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Cate_sidebar