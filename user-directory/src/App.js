import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header/header";
import TableBody from "./components/TableBody/tablebody";
import API from "./utils/API";
import Search from "./components/Search/search";
import Wrapper from "./components/Wrapper/wrapper";
import Table from "./components/Table/table";


function App() {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    API.getEmployees().then(res => {
      setEmployees(res.data.results)
      console.log(res.data.results)
    })
  }, [])
  return (

    <div>
      <Header />
      <Search />
      <Table />
      <TableBody
        employees={employees}
      />
      <Wrapper />
    </div>

  );
}

export default App;