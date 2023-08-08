import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function API(props) {
    const [data, setData] = useState({})
    const [loader, setLoader] = useState(true)

    const Tble = styled.table`
     margin:100px auto;
     width:100%;
    border:2px ridge black;
    background:#F0F0F0;
    
    `


    const T_head = styled.thead`
    font-size:20px;
    color:black;
    font-weight:700;
    text-transform: uppercase;        
    border-bottom:3px solid black;
    `;

    const T_r = styled.tr`
    
    border-bottom:1px solid #B2A4FF;    
    `;
    const T_body = styled.tbody`
    font-size:18px;
    padding:20px;
    color:#F37878;
    text-transform:capitalize; 

    ${T_r}:hover{
        background:#DAF5FF;
        cursor:pointer;
        
      }

    `

    useEffect(() => {
        setTimeout(() => {

            const URL = 'https://jsonplaceholder.typicode.com/albums'

            fetch(URL)
                .then((res) => res.json())
                .then((Response) => {
                    console.log(Response);
                    setLoader(false)
                    setData(Response);
                })
        }, 1000);
    })



    return (
        <>
            {/* <div>{loader == "Completed" ? <div>{JSON.stringify(data)}</div> : "no Data Found"}</div> */}

            {loader ?
                <>
                    <div class="position-absolute top-50 start-50 translate-middle">
                        <div className="d-flex justify-content-center  align-items-center " >
                            <div className="spinner-border text-danger" role="status" style={{ height: "5rem", width: "5rem" }}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </> :
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <Tble>
                                    <T_head>
                                        <tr>
                                            <th>id</th>
                                            <th>userId</th>
                                            <th>title</th>
                                        </tr>
                                    </T_head>
                                    <T_body>
                                        {Object.entries(data).map((res, i) => {

                                            return (
                                                <T_r key={i}>
                                                    <td>{res[1].id}</td>
                                                    <td>{res[1].userId}</td>
                                                    <td>{res[1].title}</td>

                                                </T_r>
                                            );
                                        })}
                                    </T_body>
                                </Tble>
                            </div>
                        </div>
                    </div>
                </>


            }



        </>
    );
}

export default API;