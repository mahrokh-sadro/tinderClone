

import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"



function TinderCards() {

    const [people, setPeople] = useState([

        { name: "eeee", mmm: "mmmm" },
    ]);

    return (
        <div className="tindercards">
            <div className="tindercardsContainer">
                {people.map(person => (
                    <TinderCard onSwipe={onSwipe}
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                        preventSwipe={['right', 'left']}
                    >
                        Hello, World! </TinderCard>

                ))}
            </div>
        </div>
    )
}

export default TinderCards
