import React, {Suspense} from 'react';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';

import {RecoilRoot} from "recoil";

import {GlobalStyle} from "./styles/GlobalStyle";
import Home from "./pages/Home";
import IosLoader from "./views/shared/components/Spinner/IosLoader";

const App = () => {
    return (
        <RecoilRoot>
            <Suspense fallback={<div>잠시만 기다려주세요오오오오오~~ :)</div>}>
                <Container>
                    <GlobalStyle/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                    </Routes>
                </Container>
            </Suspense>
        </RecoilRoot>

    )
}

const Container = styled.div`

`;
export default App;
