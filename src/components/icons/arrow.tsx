import styled, { css } from 'styled-components'

export const ArrowIcon = (props: { visible: boolean }) => {
  return (
    <Wrapper visible={props.visible}>
      <span className="left-bar"></span>
      <span className="right-bar"></span>
    </Wrapper>
  )
}

export const Wrapper = styled.div<{ visible?: boolean }>(props => {
  const visible = props.visible
  const colors = props.theme.colors

  return css`
    height: 22px;
    display: flex;
    align-items: center;
    position: relative;
    top: 6px;
    cursor: pointer;
    
    span {
      display: inline-block;
      width: 14px;
      height: 14px;
      margin-right: 1px;
      border-radius: 5px;
    }
  
    .left-bar {
      position: absolute;
      background-color: transparent;
      transform: rotate(35deg);
      right: -15px;
      &:after {
        transition: 0.3s;
        content: '';
        background-color: ${colors.light_100};
        border-radius: 2px;
        width: 9px;
        height: 2px;
        float: left;
      }
    }
    .right-bar {
      position: absolute;
      background-color: transparent;
      transform: rotate(-35deg);

      &:after {
        transition: 0.3s;
        content: '';
        background-color: ${colors.light_100};
        border-radius: 2px;
        width: 9px;
        height: 2px;
        float: right;
      }
    }
    ${
      visible &&
      css`
        .left-bar:after {
          transform-origin: center center;
          transform: rotate(-70deg);
        }

        .right-bar:after {
          transform-origin: center center;
          transform: rotate(70deg);
        }
      `
    }

    span {
      display: inline-block;
      width: 14px;
      height: 14px;
      margin-right: 11px;
      border-radius: 5px;
    }

    img {
      transition: 0.4s;
      width: 20px;
      transform: rotate(${visible ? `90deg` : `-90deg`});
    }
  }
  `
})
