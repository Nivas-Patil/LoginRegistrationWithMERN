import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './homepage.css'
const homepage = ({setloginUser}) => {
    return (
        <>
            <div className="homepage">
                <h1>Home</h1>
                <b>Content / Brief about project</b><br />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><a href="" className="download">Project Download link</a></li>
                    <li className="list-group-item">Full <b>M E R N</b> implementation</li>
                    <li className="list-group-item">You can show this project in academics (mini project)</li>
                    <li className="list-group-item">Full dynamic implementation of login an registration</li>
                    <li className="list-group-item"><b>Frontend : </b> React</li>
                    <li className="list-group-item"><b>Backend :</b> NodeJs, Express Js, MongoDb</li>
                    <li className="list-group-item"><div className="button" onClick={()=>setloginUser({})}>User Logout</div></li>
                </ul>
            </div>
        </>
    )
}

export default homepage
