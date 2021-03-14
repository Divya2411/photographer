import React from 'react';
import Dp from "./img/profile.jpeg";
import Card from "./Card"
import Cdata from "./Cdata"

const Profile = () =>{
    return (
        <>
        <div className= "space">
        <div className = "main">
              <div className = "container profile">
              <div class="row">
    <div className="col">
    <img className= "dp" src = {Dp} alt = "profile pic"/>
    </div>
    <div className="col-6 sec">
   <h1>Nick Reynolds</h1>
   <p>Bio</p>
   <p className = "gap">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div className="col thir">
      <p>Phone</p>
      <p className = "red">555-555-5555</p>
      <p>Email</p>
      <p className = "red">nick.renolds@domain.com</p>
    </div>
  </div>
              </div>
              <div className = "container">
             
        <div className="row">
          <div className="col">
            <div className="row " >
              {
                Cdata.map((val, ind) =>{
                  return <Card 
                  imgsrc = {val.imgsrc}
                  title = {val.title}
                  content = {val.content}
                  date = {val.date}
                  />
                })
              }
              
              </div>
            </div>
          </div>
        </div>
              </div>
              </div>

        </>
    )
}

export default Profile;