import Badge from "react-bootstrap/Badge";

const MyBadge = (prop) => (
  <Badge pill variant={prop.color}>
    {prop.text}
  </Badge>
);

export default MyBadge;
