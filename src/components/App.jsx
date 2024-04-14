import { useState } from "react";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import Data from "../data/contactList.json";

const App = () => {
  const [users, setUsers] = useState(Data);
  const [filter, setFilter] = useState("");

  const onChangeFilter = (value) => {
    setFilter(value);
  };

  const onAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const onDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const filteredUsers = users.filter((user) => {
    const nameIncludesFilter =
      user.name && user.name.toLowerCase().includes(filter.toLowerCase());
    const numberIncludesFilter =
      typeof user.number === "string" &&
      user.number.toLowerCase().includes(filter.toLowerCase());
    return nameIncludesFilter || numberIncludesFilter;
  });

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddUser} />
      <SearchBox onChangeFilter={onChangeFilter} value={filter} />
      <ContactList users={filteredUsers} onUserDelete={onDeleteUser} />
    </div>
  );
};

export default App;
