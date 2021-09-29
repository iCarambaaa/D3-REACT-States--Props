import Alert from "react-bootstrap/Alert";

function WarningSing(prop) {
  return (
    <Alert key={0} variant="warning">
      This is a warning alert with{prop.str}
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
      like.
    </Alert>
  );
}

export default WarningSing;
