import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 30rem;
    margin: 3rem 0;
    background: #1d1d5e;
    box-shadow: 0 1px 4px 0 #13133d;
    padding: 3rem;
    color: #fafafa;
    font-weight: 300;
    font-size: 1.4rem;

    &:first-child {
        margin-top: 10%;
    }

    p {
        line-height: 2.8rem;
    }
`;

export default function Player(props) {

    const { player } = props;

    return (
        <Card>
            <p>Player Name: {player.name}</p>
            <p>Country: {player.country}</p>
        </Card>
    )
}