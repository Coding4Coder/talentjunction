

import styled from "styled-components";

export const MainContainer = styled.section `
       background:${props => props.bg ? "#f2f2f5" : "white"};
        width: 90%;
        min-height: 25rem;
        margin:0 auto 8rem auto;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        padding: 2.5rem;
        font-size:1.2rem;
        text-align:center;
        .card-columns{
            display:flex;
            flex-flow: row wrap;
            justify-content: space-evenly;
            .card{
                width:200px;
                margin:0 0 40px 0;
                img{
                    width:175px;
                    height:220px;
                }
                .card-title{
                    font-size: 1.2rem;
                    font-weight:bold;
                    text-transform:capitalize;
                }
                .card-title, .card-text{
                    font-size: 1rem;
                    color:#000;
                    text-align:center;
                    font-family: 'Nunito', sans-serif;
                }
                .card-footer{
                    button {
                        background: #e55984;
                        color: #fff;
                        border: navajowhite;
                        font-size: 15px;
                        padding: 3px 8px;
                    }
                }
                .react-read-more-read-less{
                    color:#ff6600;
                }
            }
        }
        .favList{
                        background: #e55984;
                        color: #fff;
                        border: navajowhite;
                        font-size: 15px;
                        padding: 3px 3px;
                        width:15rem;
                        
        }
        .imgRes{
            width:100%;
            height:auto;
        }
`;
export const PageHeading = styled.h1 `
    font-size: 2.5rem;
    color:#6699FF;
    text-align:center;
    font-family: 'Nunito', sans-serif;
    margin: 3rem;
`;
export const Center = styled.div `
    display: flex;
    justify-content:center;
    margin: 3rem;
`;
export const ErrorMsg = styled.div `
    font-size: 1rem;
    color:#ff6600;
    text-align:center;
    font-family: 'Nunito', sans-serif;
    margin: 1rem;
`;
export const ReadMore = styled.p `
    font-size: 1rem;
    margin-bottom:0;
`;

export const PageWrapper = styled.div `
display:flex;
flex-wrap:wrap;
    .item{
        flex-grow:1;
        padding:.23rem;
        width:50%;
        font-size:1rem;
        text-align:left;
        h2{
            font-size: 2rem;
            color:#ff6600;
            font-family: 'Nunito', sans-serif;
            margin: 1rem 0;
        }
      
           a.read-more:link, a.read-more:visited {
                color: #333333;
                text-decoration: none !important;
                cursor: pointer;

            }
            a.read-more:hover {
                color: #333333 !important;
                text-decoration: none  !important;
                cursor: pointer;

            }
    }
    @media only screen and (max-width: 850px) {
        .item{
        flex-grow:1;
        padding:.23rem;
        width:100%;
        font-size:1rem;
        text-align:center;
        h2{
            font-size: 1.5rem;
        }
    }
    
 }
`;