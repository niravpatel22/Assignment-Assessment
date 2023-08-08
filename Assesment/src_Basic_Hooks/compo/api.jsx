import React, { Component } from 'react';

class api extends Component {

    constructor() {
        super()
        this.state = ({ status: "pending", fetchData: '' });

    }

    componentDidMount() {
        setTimeout(() => {
            const URL = 'https://jsonplaceholder.typicode.com/posts';


            fetch(URL).then(res => res.json())
                .then(Response => {
                    console.log(Response);
                    this.setState({ status: "Success", fetchData: Response })
                    let getData = document.getElementById('showData');
                    Response.forEach(element => {
                        getData.innerHTML += `
                    <tr>
                    <td>${element.id}</td>
                    <td>${element.userId}</td>
                    <td>${element.title}</td>
                    <td>${element.body}</td>
                    
                    </tr>
                    `
                    });
                })
        }, 2000);
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <h1>{this.state.status}</h1>
                            {/* {this.state.status=="Success"? <div>{JSON.stringify(this.state.fetchData)}</div>:"No Data Found"} */}
                            <table className='border border-2 border-dark text-center table table-dark table-hover table-striped'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>userID</th>
                                        <th>Title</th>
                                        <th>Body</th>
                                    </tr>
                                </thead>
                                <tbody id='showData'></tbody>
                            </table>







                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default api;