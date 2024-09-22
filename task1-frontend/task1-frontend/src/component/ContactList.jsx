import React, { useState, useEffect } from "react";

// Sample data for contact Details
const mockContacts = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: 1234567890,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    mobile: 9876543210,
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    mobile: 5555555555,
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    mobile: 4444444444,
  },
  {
    id: 5,
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    mobile: 3333333333,
  },
  {
    id: 6,
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
    mobile: 2222222222,
  },
  {
    id: 7,
    name: "Noah Martinez",
    email: "noah.martinez@example.com",
    mobile: 1111111111,
  },
  {
    id: 8,
    name: "Ava Anderson",
    email: "ava.anderson@example.com",
    mobile: 9999999999,
  },
  {
    id: 9,
    name: "Liam White",
    email: "liam.white@example.com",
    mobile: 8888888888,
  },
  {
    id: 10,
    name: "Sophia Harris",
    email: "sophia.harris@example.com",
    mobile: 7777777777,
  },
  {
    id: 11,
    name: "Mason Clark",
    email: "mason.clark@example.com",
    mobile: 6666666666,
  },
  {
    id: 12,
    name: "Isabella Lewis",
    email: "isabella.lewis@example.com",
    mobile: 5556667777,
  },
  {
    id: 13,
    name: "Ethan Walker",
    email: "ethan.walker@example.com",
    mobile: 4445556666,
  },
  {
    id: 14,
    name: "Charlotte Young",
    email: "charlotte.young@example.com",
    mobile: 3334445555,
  },
  {
    id: 15,
    name: "Logan Hall",
    email: "logan.hall@example.com",
    mobile: 2223334444,
  },
];

const ContactList = () => {
  const [contacts, setContacts] = useState(mockContacts);
  const [searchType, setSearchType] = useState("");
  const [filterType, setFilterType] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredContacts = contacts.filter((contact) => {
    if (filterType === "name") {
      return contact.name.toLowerCase().includes(searchType.toLowerCase());
    } else if (filterType === "email") {
      return contact.email.toLowerCase().includes(searchType.toLowerCase());
    } else if (filterType === "mobile") {
      return contact.mobile.toString().includes(searchType);
    }
    return true;
  });

  const sortedContacts = filteredContacts.sort((a, b) => {
    let isAscending;

    // Determine sorting order
    if (sortOrder === "asc") {
      isAscending = 1;
    } else {
      isAscending = -1;
    }

    // Determine sorting field (name or email)
    if (filterType === "name") {
      return a.name.localeCompare(b.name) * isAscending;
    } else {
      return a.email.localeCompare(b.email) * isAscending;
    }
  });

  return (
    <div className="items-center">
      <h1 className="text-center text-6xl font-bold">Front End Project</h1>
      <div className="flex justify-center items-center pt-8 ">
        <input
          className="border border-2 mr-4"
          type="text"
          placeholder={`Search by ${filterType}`}
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        />
        <select
          className="border border-2 mr-4"
          onChange={(e) => setFilterType(e.target.value)}
          value={filterType}
        >
          <option value="name">Filter by Name</option>
          <option value="email">Filter by Email</option>
          <option value="mobile">Filter by Mobile Number</option>
        </select>
        <select
          className="border border-2 mr-4"
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="asc">Sort Ascending</option>
          <option value="desc">Sort Descending</option>
        </select>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center pb-8">
        {sortedContacts.map((contact) => (
          <li
            className="border border-2  w-50 mt-10 p-10 place-items-center"
            key={contact.id}
          >
            {contact.name} - {contact.email} - {contact.mobile}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
