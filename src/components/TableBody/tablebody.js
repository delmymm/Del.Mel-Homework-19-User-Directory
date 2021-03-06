import React from "react";
import "./style.css";

function TableBody(props) {
    const { result, index } = props;

    return (
        <tr className="tableitems" key={index}>
            <td>
                <img alt="headshot" src={result.picture.large} />
            </td>
            <td>
                {result.name.first} {result.name.last}
            </td>
            <td>{new Date(result.dob.date).toLocaleDateString()}</td>
            <td>{result.email}</td>
            <td>{result.phone}</td>
        </tr>
    );
}

export default TableBody;