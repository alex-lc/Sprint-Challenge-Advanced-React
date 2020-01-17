import React from 'react';
import styled from 'styled-components';

// components
import Player from './Player';

const PlayersContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export default function PlayerList(props) {

    const { players } = props;

    return (
        <PlayersContainer>
            {
                players.map((player) => {
                    return <Player key={player.id} player={player} />
                })
            }
        </PlayersContainer>
    )
}