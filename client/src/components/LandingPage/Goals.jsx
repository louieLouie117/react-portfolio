import React,{useState} from 'react'

function Goals(props) {

  
  return (
    <div>
        {(() =>{
                    if (window.innerWidth < "750") {
                                     return(
            <main>
            <div className="myFocus-container">
            <h1>My Specializations</h1>
            <ul>  
                
                    <li >
                    <h2 >UX/ID Design</h2>
                    <p  >Something here</p>

                    </li>

                    <li >
                    <h2 >Frontend Development</h2>
                    <p  >Something here</p>

                    </li>

                
                </ul>

                {/* <ul>  
                {myProcess.map((myProcess)=>{ 
                if(myProcess.category === "MyFocus")
                return(       
                    // <li  id={myProcess._id +"list"}>
                    <h2 id={myProcess._id} onClick={(e)=>FocusItem(e)}>{myProcess.title}</h2>
                    <p onChange={firstItem}  id={myProcess._id +"text"}>{myProcess.summary}</p>
                    

                    </li>
                );})}
                

                
                </ul> */}
            </div>

            </main>    

)}
})()}

{(() =>{
                    if (window.innerWidth > "750") {
                                     return(
            <main>
            <div className="myFocus-container">
            <h1>My Specializations</h1>
            <ul>  
                
                    <li >
                    <h2 >UX/UI Design</h2>
                    <p >Something here</p>

                    </li>

                        <li >
                    <h2>Frontend Development</h2>
                    <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, earum ad! Omnis temp</p>

                    </li>

                    
                    <li >
                    <h2>Backend Development</h2>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil minima voluptatum nur?</p>

                    </li>
                    <li >
                    <h2>Backend Development</h2>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil minima voluptatum </p>

                    </li>

                    <li >
                    <h2>Backend Development</h2>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil minima voluptatum </p>

                    </li>


                    <li >
                    <h2>Backend Development</h2>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil minima voluptatum </p>

                    </li>

                    

                
                </ul>

                {/* <ul>  
                {myProcess.map((myProcess)=>{ 
                if(myProcess.category === "MyFocus")
                return(       
                    // <li  id={myProcess._id +"list"}>
                    <h2 id={myProcess._id} onClick={(e)=>FocusItem(e)}>{myProcess.title}</h2>
                    <p onChange={firstItem}  id={myProcess._id +"text"}>{myProcess.summary}</p>
                    

                    </li>
                );})}
                

                
                </ul> */}
            </div>

            </main>    

)}
})()}
    </div>
  )
}


export default Goals
