/** Person
 * Props:
 *  - name: string
 *  - age: number
 *  - hobbies: string[]
 *
 * Rules:
 *  - Always show: <p>Learn some information about this person</p>
 *  - If age > 18: show "please go vote!" else "you must be 18"
 *  - If name length > 8: display only first 6 characters
 *  - List hobbies as <li> items
 */
function Person({ name, age, hobbies = [] }) {
  const displayName = name.length > 8 ? name.slice(0, 6) : name; // trim to 6 if > 8
  const over18 = age > 18; // per spec: "over 18"

  return (
    <div className="person">
      <p>Learn some information about this person</p>

      <ul className="person__facts">
        <li><strong>Name:</strong> {displayName}</li>
        <li><strong>Age:</strong> {age}</li>
        <li>
          <strong>Hobbies:</strong>
          <ul className="person__hobbies">
            {hobbies.map((h, idx) => <li key={idx}>{h}</li>)}
          </ul>
        </li>
      </ul>

      <h3>{over18 ? "please go vote!" : "you must be 18"}</h3>
    </div>
  );
}

/** App renders at least three Person components */
function App() {
  return (
    <div>
      <Person name="Alexandria" age={22} hobbies={["reading", "dressage", "coding"]} />
      <Person name="Meg" age={18} hobbies={["React", "trail rides", "puzzles"]} />
      <Person name="RadarDog" age={5} hobbies={["fetch", "naps", "treats"]} />
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
