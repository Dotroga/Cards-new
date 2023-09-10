import styled, { css } from 'styled-components'

export const RangeWrapper = styled.div(props => {
  const colors = props.theme.colors

  return css`
    display: flex;
    flex-direction: row;
    align-content: center;
    gap: 12px;
    box-sizing: border-box;
    height: 36px;

    .Number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      flex-shrink: 0;
      border-radius: 2px;
      border: 1px solid ${colors.dark_300};
    }
    .SliderRoot {
      position: relative;
      display: flex;
      align-items: center;
      user-select: none;
      touch-action: none;
      width: 155px;
      flex-shrink: 0;
    }

    .SliderTrack {
      background-color: ${colors.accent_900};
      position: relative;
      flex-grow: 1;
      border-radius: 9999px;
      height: 6px;
    }

    .SliderRange {
      position: absolute;
      background-color: ${colors.accent_500};
      border-radius: 9999px;
      height: 100%;
    }

    .SliderThumb {
      display: block;
      width: 12px;
      height: 12px;
      border: 5px solid ${colors.accent_500};
      background-color: white;
      box-shadow: 0 0 10px ${colors.dark_900};
      border-radius: 50%;
    }
    .SliderThumb:hover {
      outline: none;
      box-shadow: 0 0 0 6px ${colors.dark_transparent};
    }
    .SliderThumb:focus {
      outline: none;
    }
  `
})
