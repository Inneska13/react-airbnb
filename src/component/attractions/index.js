import { Fragment } from "react";
import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Attractions({ list }) {
  return (
    <Box className="price">
      <Heading border>Пам'ятки поблизу </Heading>
      <div className="room">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ul className="attractions__list">
      <ListItem>
        <a href={link} className="attractions__link">
          <span>{name}</span>
        </a>
      </ListItem>
    </ul>
  );
}
