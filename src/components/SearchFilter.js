import React from 'react';
import Mockdata from '../MOCK_DATA.json';
import { useState } from "react";
import Footer from './Footer';


const SearchFilter = () => {
    const [searchTerm, setsearchTerm] = useState("");
    return (
        <div className="container">
            <img src='' />
            <h1 style={{ marginTop: 50, marginBottom: 0, width: "100%", height: 0, color: " #4394e0 " }}>Bus Info | Embilipitiya </h1>
            <input
                type="text"
                placeholder="Where do you need to go .. ? |  Search anything !" className="form-control" style={{ marginTop: 150, marginBottom: 40, width: "60%", height: 60 }}

                onChange={(e) => {
                    setsearchTerm(e.target.value);
                }} />


            <table className="table table-bordered table table-striped table-hover" >
                <thead className="table table-dark">
                    <tr>
                        <th>Root Number</th>
                        <th>Bus Name</th>
                        <th>Departure</th>
                        <th>Destination</th>
                        <th>Intermediate stops</th>

                    </tr>
                </thead>
                <tbody>
                    {Mockdata.filter(val => {
                        if (searchTerm === '') {
                            return val;
                        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.ma.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }



                    }).map((m) => (
                        <tr key={m.id}>
                            <td>{m.first_name}</td>
                            <td>{m.last_name}</td>
                            <td>{m.email}</td>
                            <td>{m.gender}</td>
                            <td>{m.ma}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
       
    );
    <Footer/>
}

export default SearchFilter;