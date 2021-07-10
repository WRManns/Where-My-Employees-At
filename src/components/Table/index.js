import React, { useContext } from "react";
import Body from "../Body";
import GlobalContext from "../../utils/GlobalContext";
import "./Table.css";

//Reder the table for holding employee info
const Table = () => {
    const context = useContext(GlobalContext);

    return (

        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.employeeState.headings.map(({ name, width }) => {
                            return (
                                //Sets up the 'Name' header to be clickable for sorting
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <Body />
            </table>
        </div>
    );
}

export default Table;