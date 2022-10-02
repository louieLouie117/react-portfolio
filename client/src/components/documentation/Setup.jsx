import React from 'react'



const Setup = props => {

    const install =`npx create-react-app client`

    const obj = `
    {
        "navigationFallback": {
            "rewrite": "index.html",
            "exclude": ["/static/images/*.{png,jpg,gif}", "/static/css/*"]
        },
        "mimeTypes": {
            ".json": "text/json"
        }
    }
       `;


    const copyReact= `
    <button  onClick={() =>  navigator.clipboard.writeText(obj)}>Copy</button>
    `
  return (
    <div>

        <h1>Get Started with React.js</h1>
        <pre>
            <code>{install}</code>
            <button  onClick={() =>  navigator.clipboard.writeText(obj)}>Copy</button>

        </pre>

        <pre>
            <code className='testCopy'>{obj}</code>
                <button  onClick={() =>  navigator.clipboard.writeText(obj)}>Copy</button>
            

        </pre>

        <h2>How to copy to clipboard in React</h2>
        <pre>
            <code>{copyReact}</code>
        </pre>
      
     

    </div>
  )
}


export default Setup