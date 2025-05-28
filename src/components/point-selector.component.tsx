import classNames from 'classnames'
import { Dispatch, FC, SetStateAction, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import LeftArrow from '../assets/common/left-arrow.svg?react'
import RightArrow from '../assets/common/right-arrow.svg?react'

export const PointSelector: FC<{
  currentIndex: number
  setCurrentIndex: Dispatch<SetStateAction<number>>
  size: number
}> = ({ size, currentIndex, setCurrentIndex }) => {
  const nextIndex = useCallback(() => setCurrentIndex((prev) => (prev + 1) % size), [size, setCurrentIndex])
  const prevIndex = useCallback(() => setCurrentIndex((prev) => (prev - 1) % size), [size, setCurrentIndex])

  const points = useMemo(() => new Array(size).fill(0), [size])

  return (
    <SliderWrapper>
      <SlideStepControl className={'prev'} onClick={prevIndex}>
        <LeftArrow />
      </SlideStepControl>
      {points.map((_, index) => (
        <SliderIndexControl
          key={index}
          className={classNames({ active: index === currentIndex })}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
      <SlideStepControl className={'next'} onClick={nextIndex}>
        <RightArrow />
      </SlideStepControl>
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 46px;
`

const SlideStepControl = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &.prev {
    margin-right: 7px;
  }

  &.next {
    margin-left: 7px;
  }
`

const SliderIndexControl = styled.div`
  position: relative;
  width: 42px;
  height: 42px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background: white;
    border: #0c021b solid 10px;
    border-radius: 50%;
    cursor: pointer;
    transition:
      border-width 0.3s ease-in-out,
      width 0.3s ease-in-out,
      height 0.3s ease-in-out;
  }

  &.active::before {
    width: 18px;
    height: 18px;
    border-width: 12px;
    background: linear-gradient(to bottom, #4da9ff 28%, #ce41ff 98%);
  }
`
