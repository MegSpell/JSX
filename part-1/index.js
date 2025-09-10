
/** FirstComponent
 * Renders an <h1> with the required text.
 */
function FirstComponent() {
  return <h1>My very first component</h1>;
}

/** NamedComponent
 * Accepts a "name" prop and shows "My name is {name}."
 */
function NamedComponent({ name }) {
  return <p>My name is {name}.</p>;
}

/** App
 * Renders a <div> containing the other two components.
 */
function App() {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Meg" />
      <NamedComponent name="Radar" />
    </div>
  );
}

// Mount the App into the #root div
const rootEl = document.getElementById("root");
ReactDOM.createRoot(rootEl).render(<App />);
