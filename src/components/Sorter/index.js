//Establish Dependencies
import React, { useState, useEffect } from "react";
import Table from "../Table";
import NavBar from "../NavBar";
import API from "../../utils/API";
import GlobalContext from "../../utils/GlobalContext"

//Sets up umpty arrays to allow lists to be ordered
const Sorter = () => {
  const [employeeState, setEmployeeState] = useState({
    users: [],
    order: "ascend",
    filteredUsers: [],
    headings: [
      { name: "Image", width: "10%", },
      { name: "Name", width: "10%", },
      { name: "Phone", width: "10%", },
      { name: "Email", width: "20%", },
      { name: "DOB", width: "10%", }
    ]
  });

  //Re-Orders the list from Ascending to Descending, alphabetically
  const handleSort = heading => {
    if (employeeState.order === "ascend") {
      setEmployeeState({
        ...employeeState,
        order: "descend"
      })
    } else {
      setEmployeeState({
        ...employeeState,
        order: "ascend"
      })
    }

    //Compares and orders the list based off first names
    const compareFirstName = (a, b) => {
      if (employeeState.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    }
    const sortedUsers = employeeState.filteredUsers.sort(compareFirstName);

    setEmployeeState({
      ...employeeState,
      filteredUsers: sortedUsers
    });

  };

//Changes the filtered results based on Seach bar input
  const handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = employeeState.users.filter(item => {
      let values = item.name.first.toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    setEmployeeState({
      ...employeeState,
      filteredUsers: filteredList
    });
  };

  useEffect(() => {
    API.getUsers().then(results => {
      setEmployeeState({
        ...employeeState,
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{ employeeState, handleSearchChange, handleSort }}
    >
      <NavBar />
      <div className="data-area">
        {employeeState.filteredUsers.length > 0
          ? <Table />
          : <div></div>
        }
      </div>
    </GlobalContext.Provider>
  );
}

export default Sorter;