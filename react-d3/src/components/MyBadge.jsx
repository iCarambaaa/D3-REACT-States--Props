import Badge from "react-bootstrap/Badge";

const MyBadge = (prop) => (
  <div className="d-flex justify-content-center">
    <Badge className="p-3" pill variant={prop.color}>
      {prop.text}
    </Badge>
  </div>
);

export default MyBadge;
