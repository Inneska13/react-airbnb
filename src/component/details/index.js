import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import test from "./test.svg";
import bed from "./bed.svg";
import bedroom from "./bedroom.svg";

export default function Details({ guests, bedrooms, beds, beths, ...rest }) {
  return (
    <Box shadow className="price">
      <Heading border>Деталі властивості:</Heading>
      <div class="price__header">
        <span className="price__value">{guests}</span>

        <span className={`price__value`}>{bedrooms}</span>
      </div>
      <List guests={2} bedrooms={1} beds={1} beths={1} {...rest} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, beths }) {
  return (
    <ul className="price__list">
      <ListItem>
        <span>
          <img src={test} alt="Test" height={24} />
          {guests}
        </span>
        <span>гості </span>
      </ListItem>

      <ListItem>
        <span>
          <img src={bedroom} alt="Bedroom" height={24} />
          {bedrooms}
        </span>
        <span>спальня</span>
      </ListItem>

      <ListItem>
        <span>
          <img src={bed} alt="Bed" height={24} />
          {beds}
        </span>
        <span>ліжко</span>
      </ListItem>

      <ListItem>
        <span>
          <img src={bedroom} alt="Beths" height={24} /> {beths}
        </span>
        <span> ванна кімната</span>
      </ListItem>
    </ul>
  );
}
