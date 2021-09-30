import Alert from "react-bootstrap/Alert";

function WarningSing(prop) {
  return (
    <div>
      <br />
      <Alert key={0} variant="warning" className="">
        This is a warning alert created with{prop.str}
      </Alert>
    </div>
  );
}

export default WarningSing;
