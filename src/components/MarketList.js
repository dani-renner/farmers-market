import React from 'react';
import Market from './Market';
import { Card, Carousel } from 'react-bootstrap';

const marketSchedule = [  
  {  
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {  
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {  
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {  
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {  
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {  
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

function MarketList(){
  return (
    <Card>
      <Card.Header style={{display: 'flex', flexDirection: 'row'}}>
        <h3>Market Schedule</h3>
      </Card.Header>
        <Card.Body>
          <Carousel>
            {marketSchedule.map((market, index) =>
              <Carousel.Item>
                <Market day={market.day}
                location={market.location}
                hours={market.hours}
                booth={market.booth}
                key={index}/>
              </Carousel.Item>
            )}
          </Carousel>
        </Card.Body>
      
    </Card>
  );
}

export default MarketList;