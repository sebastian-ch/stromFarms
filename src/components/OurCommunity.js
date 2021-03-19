import React from 'react';
import styled from 'styled-components'
import fair from '../imgs/community/fair.png'


const CommunityWrap = styled.div`
 
  /*display: flex;   
  flex-direction: column;
  justify-content: center;
  align-content: center; */
  text-align: center;


`



export default function OurCommunity() {
  return (
    <CommunityWrap>
      <h3>We love being a part of the tight knit community of Pelican Town! Recently, we attended the Stardew Valley Fair where we displayed our crops and met with the mayor.</h3>
      
      <img style={{width: '600px'}} src={fair} />
      
   </CommunityWrap>
    

  )
}