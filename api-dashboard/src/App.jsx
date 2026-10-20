import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");

  async function fetchUsers() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Unable to load users. Please try again.");
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("The API returned invalid data.");
      }

      setUsers(data);
    } catch (err) {
      setError(
        err.message || "Network error. Please check your internet."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const cities = [
    ...new Set(users.map((user) => user.address.city)),
  ].sort();

  const filteredUsers = users.filter((user) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText) ||
      user.company.name.toLowerCase().includes(searchText);

    const matchesCity =
      selectedCity === "all" ||
      user.address.city === selectedCity;

    return matchesSearch && matchesCity;
  });

  return (
    <main className="app">
      <header className="header">
        <div>
          <p className="eyebrow">AUREX INTERNSHIP · Month 2 . WEEK 2</p>
          <h1>Users Dashboard</h1>
          <p className="subtitle">
            Find user details quickly with search and filters.
          </p>
        </div>

        <button
          className="refresh-btn"
          onClick={fetchUsers}
          disabled={loading}
        >
          {loading ? "Loading..." : "↻ Refresh Data"}
        </button>
      </header>

      <section className="stats" aria-label="Dashboard summary">
        <article className="stat-card">
          <span>Total Users</span>
          <h2>{users.length}</h2>
        </article>

        <article className="stat-card">
          <span>Matching Results</span>
          <h2>{filteredUsers.length}</h2>
        </article>

        <article className="stat-card">
          <span>Available Cities</span>
          <h2>{cities.length}</h2>
        </article>
      </section>

      <section className="dashboard">
        <div className="section-heading">
          <div>
            <h2>User Directory</h2>
            <p>Search by name, email, or company.</p>
          </div>
        </div>

        <div className="filters">
          <label className="search-box">
            <span>Search users</span>
            <input
              type="search"
              placeholder="e.g. Leanne, email, company..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <label className="city-filter">
            <span>Filter by city</span>
            <select
              value={selectedCity}
              onChange={(event) =>
                setSelectedCity(event.target.value)
              }
            >
              <option value="all">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
        </div>

        {loading && (
          <div className="message" role="status">
            <div className="spinner"></div>
            <h3>Loading users...</h3>
            <p>Please wait while we get the latest data.</p>
          </div>
        )}

        {!loading && error && (
          <div className="message error" role="alert">
            <h3>Oops! Something went wrong.</h3>
            <p>{error}</p>
            <button className="refresh-btn" onClick={fetchUsers}>
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && filteredUsers.length === 0 && (
          <div className="message">
            <h3>No users found</h3>
            <p>Try a different search or city filter.</p>
            <button
              className="clear-btn"
              onClick={() => {
                setSearch("");
                setSelectedCity("all");
              }}
            >
              Clear Search & Filters
            </button>
          </div>
        )}

        {!loading && !error && filteredUsers.length > 0 && (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>City</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="user-name">
                        <span className="avatar">
                          {user.name.charAt(0)}
                        </span>
                        {user.name}
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.company.name}</td>
                    <td>
                      <span className="city-tag">
                        {user.address.city}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && !error && users.length > 0 && (
          <p className="results-note">
            Showing {filteredUsers.length} of {users.length} users
          </p>
        )}
      </section>

      <footer>
        <p>Built with React · useState · useEffect · Fetch API</p>
      </footer>
    </main>
  );
}

export default App;
