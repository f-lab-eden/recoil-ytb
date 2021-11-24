import React from 'react';
import styled from 'styled-components';
import {useRecoilValue} from "recoil";
import _ from 'lodash';

import {getVideos} from "../recoil/atoms";
import List from "../components/List";

const HomeContainer = () => {

    const videos = useRecoilValue(getVideos)

    if (_.isEmpty(videos)) return null;

    return (
        <Container>
            <List data={videos.items}/>
        </Container>
    )
}

const Container = styled.div`
  padding-left: 50px;
`;

const Sentinel = styled.div`

`;
export default HomeContainer;
