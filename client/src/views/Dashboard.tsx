import React from 'react'

const Dashboard = () => {

  let helloTypeScript: string = "Hello TypeScript";
  let age: number = 33;


  return (
    <div>
        <h1>Dashboard</h1>
        <p> {helloTypeScript} {typeof helloTypeScript} type</p>
        <p>  I am {age} {typeof age} type</p>

    </div>
  )
}

Dashboard.propTypes = {}
export default Dashboard