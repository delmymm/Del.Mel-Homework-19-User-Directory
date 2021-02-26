import React from 'react';

function TableBody(props) {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => (
                    <tr>
                        <td><img src={employee.picture.thumbnail}></img></td>
                        <td>{employee.name.first} {employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default TableBody;