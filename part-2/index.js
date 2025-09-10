/** Tweet component
 * Props:
 *  - username: string (e.g., "megcodes")
 *  - name: string (e.g., "Meg Spellman")
 *  - date: string (e.g., "Sep 10, 2025")
 *  - message: string
 */
function Tweet({ username, name, date, message }) {
  return (
    <div className="tweet">
      <div className="tweet__header">
        <span className="tweet__name">{name}</span>
        <span className="tweet__username">@{username}</span>
        <span className="tweet__dot">·</span>
        <time className="tweet__date">{date}</time>
      </div>
      <p className="tweet__message">{message}</p>
    </div>
  );
}

/** App renders at least three tweets */
function App() {
  const tweets = [
    {
      username: "megcodes",
      name: "Meg Spellman",
      date: "Sep 10, 2025",
      message: "First Tweet component shipped! 🛠️ React + JSX feeling good."
    },
    {
      username: "radar_dog",
      name: "Radar",
      date: "Sep 9, 2025",
      message: "Heard there are treats for passing tests. I’m listening. 👂🍪"
    },
    {
      username: "js_helper",
      name: "JS Helper",
      date: "Sep 8, 2025",
      message: "Pro tip: keep components small & focused—props in, UI out."
    }
  ];

  return (
    <div>
      {tweets.map((t, i) => (
        <Tweet key={i} {...t} />
      ))}
    </div>
  );
}

// Mount app
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
