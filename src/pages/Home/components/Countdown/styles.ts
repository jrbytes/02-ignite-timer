import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-size: 13rem;
  line-height: 8rem;
  color: ${({ theme }) => theme.gray100};

  display: flex;
  gap: 1rem;

  span {
    background: ${({ theme }) => theme.gray700};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme.green500};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
