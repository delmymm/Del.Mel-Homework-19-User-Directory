import React, { useState } from "react";
import TableBody from "../TableBody/tablebody";
import "./style.css";


function Table({ results, nameFilter = "" }) {
  const [sortDirection, setSortDirection] = useState(0);

  nameFilter = new RegExp(nameFilter, "i")
  results = results?.filter((result, index) => nameFilter.test(result.name.first))

  if (sortDirection) {
    results.sort((a, b) => {
      if (a.name.first < b.name.first) return -sortDirection;
      if (b.name.first < a.name.first) return sortDirection;
      return 0;
    })
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <h3>Profile Photo</h3>
          </th>
          <th scope="col">
            <button type="button" onClick={() => {
              if (sortDirection) {
                setSortDirection(-sortDirection)
              } else {
                setSortDirection(1);
              }
            }}>Name</button>
          </th>
          <th scope="col">
            <h3>Date of Birth</h3>
          </th>
          <th scope="col">
            <h3>Email</h3>
          </th>
          <th scope="col">
            <h3>Phone</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <TableBody key={index} result={result} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;