import React from 'react';
import styled from 'styled-components';

import Item from "../Item";

const List = ({data = []}) => {
    return (
        <Container>
            <Row>
                {
                    data.map((item, index) => (
                        <Col>
                            <Item item={item} key={item.id}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Col = styled.div`
  width: 25%;
  @media screen and (max-width: 1127px) {
    width: 33.3333%;
  }

  @media screen and (max-width: 888px) {
    width: 50%;
  }

  @media screen and (max-width: 512px) {
    width: 100%;
  }

  padding: 0 7px;
`;
export default List;
