import Alert from "react-bootstrap/Alert";

function WarningSing() {
  return (
    <Alert key={0} variant="warning">
      This is a warning alert with{" "}
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
      like.
    </Alert>
  );
}

export default WarningSing;
