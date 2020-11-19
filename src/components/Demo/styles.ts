import styled from 'styled-components';

export const Header = styled.div`
  position: sticky;
  top: 0px;
  background-color: #60b4df;
  width: 100%;
  z-index: 1000;
`;

export const Container = styled.div`
  max-width: 65rem;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  position: relative;
`;

export const Nav = styled.div`
  flex: 3;
  display: flex;
`;
export const Links = styled.ul`
  flex: 2;
`;

export const Link = styled.li`
  position: relative;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    line-height: 3rem;
    color: #fff;
    padding: 0 0.8rem;
    letter-spacing: 1px;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.5s;
  }
  i {
    margin-left: 0.2rem;
  }
  &hover > a {
    transform: scale(1.1);
  }
`;
