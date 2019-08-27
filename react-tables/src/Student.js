import React, { Component } from 'react';
import students from './students.json';


class Student extends Component {
    render() {
        const elements = students.data;


        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Math</th>
                        <th>History</th>
                        <th>Science</th>
                        <th>English</th>
                    </tr>
                    {elements.map(item => <tr> <td>{item.name} </td> <td>{item.grades}</td> </tr>)}
                </table>

            </div>
        )
    }
};


export default (Student);