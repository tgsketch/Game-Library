import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  let items = ["new york", "orlando", "Kissimmee"];

  return (
    <div>
      {alertVisible && (
        <Alert onClick={() => setAlertVisible(false)}>
          This is the Alert Message
        </Alert>
      )}
      <Button
        text="Button"
        color="primary"
        onClick={() => setAlertVisible(true)}
      />
      <ListGroup
        heading="Cities"
        items={items}
        onSelectedItem={() => console.log("clicked")}
      />
    </div>
  );
}

export default App;
