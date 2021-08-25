

import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"



function TinderCards() {

    const [people, setPeople] = useState([

        { name: "eeee", im: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/11.10.2015_Samoyed_%28cropped%29.jpg/220px-11.10.2015_Samoyed_%28cropped%29.jpg" },
        { name: "aaa", im: "https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450_960_720.jpg" },

    ]);

    const swiped = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
    return (
        <div className="tindercards">
            <div className="tindercardsContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        onSwipe={dir => swiped(dir, person.name)}
                        onCardLeftScreen={() => onCardLeftScreen(person)}
                        preventSwipe={['right', 'left']}
                    >
                        <div style={{backgroundImage:`url(${person.im})`}}>
                           <h3>{person.name}</h3> 
                        </div>
                        
                         </TinderCard>

                ))}
            </div>
        </div>
    )
}

export default TinderCards
