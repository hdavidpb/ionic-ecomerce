import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 0 16px;
`;

export const RighSide = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const IconContainer = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const Badge = styled.div`
  position: absolute;
  width: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: orangered;
  border-radius: 26px;
  top: -1px;
  right: 0;
  font-size: 10px;
  color: #ffffff;
  font-weight: bold;
`;

/** GALLERY GRIDD **/

export const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  background: blue;
  color: white;
`;

export const HandleButton = styled.button`
  position: absolute;
  border: none;
  background: white;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 0;
`;
