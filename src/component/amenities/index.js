import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import pool from "./hasPool.svg";
import breakfast from "./hasFreeBreakfast.svg";
import gym from "./hasGym.svg";
import wifi from "./hasFreeWiFi.svg";
import parking from "./hasParking.svg";
import pets from "./hasPetsAllowed.svg";
import shuttle from "./shuttle.svg";
import concierge from "./concierge.svg";
import room from "./room.svg";
import child from "./child.svg";

export default function Amenities({ hasPool, hasGym, ...rest }) {
  return (
    <Box shadow className="price">
      <Heading border>Зручності </Heading>
      <div class="price__header">
        <span className="price__value">{hasPool}</span>

        <span className={`price__value`}>{hasGym}</span>
      </div>
      <List {...rest} />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="price__list">
      <ListItem>
        <span>
          <img src={pool} alt="Pool" height={24} />
          {hasPool}
        </span>
        <span>Басейн </span>
      </ListItem>

      <ListItem>
        <span>
          <img src={gym} alt="Gym" height={24} />
          {hasGym}
        </span>
        <span>Спортивний зал</span>
      </ListItem>

      <ListItem>
        <span>
          <img src={breakfast} alt="Breakfast" height={24} />
          {hasFreeBreakfast}
        </span>
        <span>Безкоштовний сніданок</span>
      </ListItem>

      <ListItem>
        <span>
          <img src={wifi} alt="Wi-fi" height={24} /> {hasFreeWiFi}
        </span>
        <span> Безкоштовний WI-FI</span>
      </ListItem>

      <ListItem>
        <span>
          <img src={parking} alt="Parking" height={24} /> {hasParking}
        </span>
        <span> Безкоштовний вуличний паркінг</span>
      </ListItem>

      <ListItem>
        <span>
          <img src={pets} alt="Pets" height={24} /> {hasPetsAllowed}
        </span>
        <span> Дозволено розміщення з домашніми тваринами</span>
      </ListItem>

      <ListItem>
        <span>
          <img src={shuttle} alt="Shuttle" height={24} /> {hasAirportShuttle}
        </span>
        <span> Трансфер до/з аеропорту</span>
      </ListItem>

      <ListItem>
        <span>
          <img src={concierge} alt="Concierge" height={24} />{" "}
          {hasConciergeService}
        </span>
        <span> Консьєрж-сервіс</span>
      </ListItem>

      <ListItem>
        <span>
          <img src={room} alt="Room" height={24} /> {hasRoomService}
        </span>
        <span> Обслуговування номерів</span>
      </ListItem>

      <ListItem>
        <span>
          <img src={child} alt="Child" height={24} /> {hasChildFriendly}
        </span>
        <span> Підходить для дітей</span>
      </ListItem>
    </ul>
  );
}
