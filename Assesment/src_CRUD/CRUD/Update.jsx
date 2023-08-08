import React, { useEffect, useState } from 'react'
import { UpdateAPIAction } from '../Actions/index'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import GetDetailsId from '../Actions/index'


const Update = () => {

    const navigate = useNavigate();
    const { id } = useParams()

    console.log("EDIt Data id", id);

    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')
    const [phone, SetPhone] = useState('')
    const [country, SetCountry] = useState('')

    const [getData] = GetDetailsId(id);

    useEffect(() => {
        const myData = () => {
            if (getData.data) {
                SetName(getData.data.name)
                SetEmail(getData.data.email)
                SetPhone(getData.data.phone)
                SetCountry(getData.data.country)
            }
        }
        myData();
    }, [getData.data])


    const dispatch = useDispatch();

    const nameData = (e) => {
        SetName(e.target.value)
    };

    const EmailData = (e) => {
        SetEmail(e.target.value)
    };

    const PhoneData = (e) => {
        SetPhone(e.target.value)
    };

    const CountryData = (e) => {
        SetCountry(e.target.value)
    };

    const clickHandler = (e) => {
        const finalData = {
            name: name,
            email: email,
            phone: phone,
            country: country
        }
        dispatch(UpdateAPIAction(finalData, id))

    }



    return (
        <>
            <div className="container">


                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder='Enter Name'
                        onChange={(e) => nameData(e)} defaultValue={name} />
                </div>


                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder='Enter Email'
                        onChange={(e) => EmailData(e)} defaultValue={email} />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input type="text" className="form-control" id="phone" placeholder='Enter Phone'
                        onChange={(e) => PhoneData(e)}
                        defaultValue={phone}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Country</label>
                    <input type="text" placeholder='Enter Country' className="form-control" id="country"
                        onChange={(e) => CountryData(e)}
                        defaultValue={country} />
                </div>





                <button className="btn btn-primary" onClick={(e) => { clickHandler(e); navigate("/") }}>Submit</button>
            </div>
        </>
    )
}

export default Update;