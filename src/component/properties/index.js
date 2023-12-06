import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Properties({ price, discount, currency, ...rest }) {
  return (
    <Box className="price">
      <Heading border>Додаткові властивості </Heading>
      <List {...rest} />
    </Box>
  );
}

function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  check_in_instructions,
}) {
  return (
    <ul className="price__list">
      <ListItem title="Правила дому">
        <span>{house_rules}</span>
      </ListItem>

      <ListItem title="Політика скасування">
        <span>{cancellation_policy}</span>
      </ListItem>

      <ListItem title="Місцевий транспорт">
        <span>{local_transportation}</span>
      </ListItem>

      <ListItem title="Мови хоста">
        <span> {host_languages}</span>
      </ListItem>

      <ListItem title="Спеціальні пропозиції:">
        <span> {special_offers}</span>
      </ListItem>

      <ListItem title="Інструкції щодо реєстрації">
        <span> {check_in_instructions}</span>
      </ListItem>
    </ul>
  );
}
