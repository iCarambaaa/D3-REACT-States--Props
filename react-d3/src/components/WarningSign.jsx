import Alert from "react-bootstrap/Alert";

function WarningSing(prop) {
  return (
    <div>
      <br />
      <Alert key={0} variant="warning" className="">
        This is a warning alert with{prop.str}
        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
        you like.
      </Alert>
    </div>
  );
}

export default WarningSing;
