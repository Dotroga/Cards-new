import { FC } from 'react'

import styled, { css } from 'styled-components'

import { SVG } from '@/components'

type EyeType = {
  show: boolean
  setShow: () => void
  disabled: boolean
}
export const Eye: FC<EyeType> = ({ show, setShow, disabled }) => {
  const handler = () => !disabled && setShow()

  return (
    <Wrapper onClick={handler} disabled={disabled}>
      {!show ? (
        <>
          <SVG viewBox="0 0 24 24" className={'first'}>
            <path d="M21.87 11.5C21.23 10.39 17.71 4.81999 11.73 4.99999C6.2 5.13999 3 9.99999 2.13 11.5C2.04223 11.652 1.99603 11.8245 1.99603 12C1.99603 12.1755 2.04223 12.348 2.13 12.5C2.76 13.59 6.13 19 12.02 19H12.27C17.8 18.86 21.01 14 21.87 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.87 11.5ZM12.22 17C7.91 17.1 5.1 13.41 4.22 12C5.22 10.39 7.83 7.09999 11.83 6.99999C16.12 6.88999 18.94 10.59 19.83 12C18.8 13.61 16.22 16.9 12.22 17Z" />
            <path d="M12 8.5C11.3078 8.5 10.6311 8.70527 10.0555 9.08986C9.47993 9.47444 9.03133 10.0211 8.76642 10.6606C8.50152 11.3001 8.4322 12.0039 8.56725 12.6828C8.7023 13.3618 9.03564 13.9854 9.52513 14.4749C10.0146 14.9644 10.6383 15.2977 11.3172 15.4327C11.9961 15.5678 12.6999 15.4985 13.3394 15.2336C13.9789 14.9687 14.5256 14.5201 14.9101 13.9445C15.2947 13.3689 15.5 12.6922 15.5 12C15.5 11.0717 15.1313 10.1815 14.4749 9.52513C13.8185 8.86875 12.9283 8.5 12 8.5ZM12 13.5C11.7033 13.5 11.4133 13.412 11.1666 13.2472C10.92 13.0824 10.7277 12.8481 10.6142 12.574C10.5007 12.2999 10.4709 11.9983 10.5288 11.7074C10.5867 11.4164 10.7296 11.1491 10.9393 10.9393C11.1491 10.7296 11.4164 10.5867 11.7074 10.5288C11.9983 10.4709 12.2999 10.5006 12.574 10.6142C12.8481 10.7277 13.0824 10.92 13.2472 11.1666C13.412 11.4133 13.5 11.7033 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5Z" />
          </SVG>
          <SVG viewBox="0 0 24 24" className={'second'}>
            <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" />
            <path d="M21.87 11.5C21.23 10.39 17.71 4.81999 11.73 4.99999C6.2 5.13999 3 9.99999 2.13 11.5C2.04223 11.652 1.99603 11.8245 1.99603 12C1.99603 12.1755 2.04223 12.348 2.13 12.5C2.76 13.59 6.13 19 12.02 19H12.27C17.8 18.86 21.01 14 21.87 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.87 11.5ZM12 15.5C11.3078 15.5 10.6311 15.2947 10.0555 14.9101C9.47993 14.5256 9.03133 13.9789 8.76642 13.3394C8.50151 12.6998 8.4322 11.9961 8.56725 11.3172C8.7023 10.6382 9.03564 10.0146 9.52513 9.52512C10.0146 9.03564 10.6383 8.70229 11.3172 8.56724C11.9961 8.4322 12.6999 8.50151 13.3394 8.76641C13.9789 9.03132 14.5256 9.47993 14.9101 10.0555C15.2947 10.6311 15.5 11.3078 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1312 12.9283 15.5 12 15.5Z" />
          </SVG>
        </>
      ) : (
        <>
          <SVG viewBox="0 0 24 24" className={'first'}>
            <path d="M4.71 3.29C4.61676 3.19676 4.50607 3.1228 4.38425 3.07234C4.26243 3.02188 4.13186 2.99591 4 2.99591C3.86814 2.99591 3.73757 3.02188 3.61575 3.07234C3.49393 3.1228 3.38324 3.19676 3.29 3.29C3.10169 3.47831 2.99591 3.7337 2.99591 4C2.99591 4.2663 3.10169 4.5217 3.29 4.71L8.92 10.34C8.5638 11.0026 8.43058 11.7624 8.54009 12.5067C8.64959 13.2509 8.99599 13.9401 9.52794 14.4721C10.0599 15.004 10.7491 15.3504 11.4934 15.4599C12.2376 15.5694 12.9974 15.4362 13.66 15.08L19.29 20.71C19.383 20.8037 19.4936 20.8781 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8781 20.617 20.8037 20.71 20.71C20.8037 20.617 20.8781 20.5064 20.9289 20.3846C20.9797 20.2627 21.0058 20.132 21.0058 20C21.0058 19.868 20.9797 19.7373 20.9289 19.6154C20.8781 19.4936 20.8037 19.383 20.71 19.29L4.71 3.29ZM12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12V11.93L12.06 13.49L12 13.5Z" />
            <path d="M12.22 17C7.92 17.1 5.1 13.41 4.22 12C4.84647 11.0007 5.59936 10.0865 6.46 9.27999L5 7.87C3.87133 8.93347 2.90441 10.1564 2.13 11.5C2.04223 11.652 1.99603 11.8245 1.99603 12C1.99603 12.1755 2.04223 12.348 2.13 12.5C2.76 13.59 6.13 19 12.02 19H12.27C13.3775 18.9671 14.4708 18.7404 15.5 18.33L13.92 16.75C13.3644 16.8962 12.7942 16.98 12.22 17Z" />
            <path d="M21.87 11.5C21.23 10.39 17.7 4.81999 11.73 4.99999C10.6225 5.03285 9.52924 5.25961 8.5 5.66999L10.08 7.24999C10.6356 7.10382 11.2058 7.01997 11.78 6.99999C16.07 6.88999 18.89 10.59 19.78 12C19.1381 13.0023 18.3682 13.9167 17.49 14.72L19 16.13C20.1428 15.0693 21.1234 13.8462 21.91 12.5C21.9918 12.3445 22.0311 12.1702 22.0241 11.9946C22.0171 11.8191 21.9639 11.6485 21.87 11.5Z" />
          </SVG>
          <SVG viewBox="0 0 24 24" className={'second'}>
            <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" />
            <path d="M15.29 18.12L14 16.78L13.93 16.71L12.66 15.44C12.4585 15.4753 12.2546 15.4954 12.05 15.5C11.5862 15.5066 11.1257 15.421 10.6952 15.2481C10.2648 15.0751 9.87306 14.8184 9.54274 14.4927C9.21242 14.167 8.95013 13.779 8.77112 13.351C8.59211 12.9231 8.49995 12.4639 8.5 12C8.50464 11.7954 8.5247 11.5915 8.56 11.39L6.56 9.39L5 7.87C3.87133 8.93347 2.90441 10.1564 2.13 11.5C2.04223 11.652 1.99603 11.8245 1.99603 12C1.99603 12.1755 2.04223 12.348 2.13 12.5C2.76 13.59 6.13 19 12.02 19H12.27C13.3775 18.9671 14.4708 18.7404 15.5 18.33L15.29 18.12Z" />
            <path d="M8.59 5.75999L11.39 8.55999C11.5915 8.52469 11.7954 8.50463 12 8.49999C12.9283 8.49999 13.8185 8.86874 14.4749 9.52512C15.1313 10.1815 15.5 11.0717 15.5 12C15.4954 12.2045 15.4753 12.4085 15.44 12.61L18.12 15.29L18.96 16.13C20.1028 15.0693 21.0834 13.8462 21.87 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.87 11.5C21.23 10.39 17.71 4.81999 11.73 4.99999C10.6225 5.03285 9.52924 5.25961 8.5 5.66999L8.59 5.75999Z" />
            <path d="M20.71 19.29L19.41 18L17.41 16L7.89 6.47L6.42 5L4.71 3.29C4.61676 3.19676 4.50607 3.1228 4.38425 3.07234C4.26243 3.02188 4.13186 2.99591 4 2.99591C3.86814 2.99591 3.73758 3.02188 3.61575 3.07234C3.49393 3.1228 3.38324 3.19676 3.29 3.29C3.1017 3.47831 2.99591 3.7337 2.99591 4C2.99591 4.2663 3.1017 4.5217 3.29 4.71L5.53 7L7.28 8.7L14.59 16L14.66 16.07L16 17.41L16.59 18L19.29 20.71C19.383 20.8037 19.4936 20.8781 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8781 20.617 20.8037 20.71 20.71C20.8037 20.617 20.8781 20.5064 20.9289 20.3846C20.9797 20.2627 21.0058 20.132 21.0058 20C21.0058 19.868 20.9797 19.7373 20.9289 19.6154C20.8781 19.4936 20.8037 19.383 20.71 19.29Z" />
          </SVG>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ disabled: boolean }>`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.light_100};
  svg {
    position: absolute;
    transition: opacity 0.2s ease;
  }
  .first {
    opacity: 1;
  }
  .second {
    opacity: 0;
  }
  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        .first {
          opacity: 0;
        }
        .second {
          opacity: 1;
        }
      }
    `}
`
