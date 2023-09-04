import * as Slider from '@radix-ui/react-slider'
import { SliderProps } from '@radix-ui/react-slider'

import { RangeWrapper } from './range.styled'

import { Typography } from '@/components'

export const Range = (props: SliderProps) => {
  return (
    <RangeWrapper>
      <Typography as={'body1'} className="Number">
        {props?.value![0]}
      </Typography>
      <Slider.Root className="SliderRoot" {...props}>
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>
      <Typography as={'body1'} className="Number">
        {props?.value![1]}
      </Typography>
    </RangeWrapper>
  )
}
