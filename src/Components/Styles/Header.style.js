import styled from "styled-components";

export const TopHeader = styled.header`
        background: #f1f1f0;
        color: azure;
        font-size: 1.2rem;
        padding: 0rem;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        height: 150px;
        display:flex;
        justify-content:space-between;
        align-items:center;
`;
export const Logo = styled.div`
        width:200px;
        padding-left:1rem;
        img{
                width:100%;
                height:auto;
        }
`;
export const TopNavBar = styled.nav`
    padding: 0 1rem 0 0;
    ul li {
      display: inline !important;
      padding: 0 0.71rem;

      a:link,
      a:visited {
        color: #541e64;
        padding: 0.5rem 0.5rem;
        text-decoration: none;
        font: normal 1.2rem $font-roboto;
      }
      a:hover {
        color: #ff0066 !important;
        padding: 0.5rem 0.5rem;
        text-decoration: none;
      }
      a.active:link {
        padding: 0.5rem 0.5rem;
        border-bottom: 1px solid #b10b5e;
      }
    }
`;
