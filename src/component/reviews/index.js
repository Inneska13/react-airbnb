import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";
import "./index.css";

export default function Reviews({ list }) {
  return (
    <div className="room__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="room__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="room">
      <div className="guestsRating">
        <span className="room__title">{guestName}</span>
        <span className="room__info">Рейтинг: {rating}</span>
      </div>
      <span className="room__info">{review}</span>
    </Box>
  );
}
