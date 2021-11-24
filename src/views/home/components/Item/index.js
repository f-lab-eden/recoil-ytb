import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Item = ({item}) => {
    const {snippet} = item;
    return (
        <Container>
            <ContentBox>
                <Thumb>
                    <img src={snippet?.thumbnails?.high?.url} alt=""/>
                </Thumb>
                <Desc>
                    <Title>{snippet?.title}</Title>
                    <ChannelTitle>{snippet?.channelTitle}</ChannelTitle>
                </Desc>
            </ContentBox>
        </Container>
    )
}

const Container = styled.div`
  margin-top: 24px;
`;

const ContentBox = styled.div`

`;

const Thumb = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`

`;

const Title = styled.div`
  margin: 4px 4px 0 0;
  font-weight: 500;
  line-height: 22px;
`;

const ChannelTitle = styled.div`
  margin: 4px 4px 0 0;
  font-size: 10px;
`;
export default Item;
