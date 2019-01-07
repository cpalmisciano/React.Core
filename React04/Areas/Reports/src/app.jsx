import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { makeData, Tips } from "./Util";
import axios from 'axios';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            persons: []
        };
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {

                this.setState({
                    data: makeData(),
                    persons: res.data
                });

                console.log(res.data);
            });
    }

    render() {
        return (
            <div>
            <div>
                <ReactTable
                    data={this.state.data}
                    columns={[
                        {
                            Header: "Name",
                            columns: [
                                {
                                    Header: "First Name",
                                    accessor: "firstName"
                                },
                                {
                                    Header: "Last Name",
                                    id: "lastName",
                                    accessor: d => d.lastName
                                }
                            ]
                        },
                        {
                            Header: "Info",
                            columns: [
                                {
                                    Header: "Age",
                                    accessor: "age"
                                },
                                {
                                    Header: "Status",
                                    accessor: "status"
                                }
                            ]
                        },
                        {
                            Header: 'Stats',
                            columns: [
                                {
                                    Header: "Visits",
                                    accessor: "visits"
                                }
                            ]
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                <br />
                <Tips />
            </div>
            <br />
            <div>
                <ReactTable
                    data={this.state.persons}
                    columns={[
                        {
                            Header: "Name",
                            columns: [
                                {
                                    Header: "id",
                                    id: "id",
                                    accessor: d => d.id
                                },
                                {
                                    Header: "Name",
                                    accessor: "name"
                                },
                                {
                                    Header: "User Name",
                                    accessor: "username"
                                }
                            ]
                        },
                        {
                            Header: "Info",
                            columns: [
                                {
                                    Header: "Email",
                                    accessor: "email"
                                },
                                {
                                    Header: "Phone",
                                    accessor: "phone"
                                },
                                {
                                    Header: "Site",
                                    accessor: "website"
                                }
                            ]
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                </div>
            </div>
        );
    }
}
