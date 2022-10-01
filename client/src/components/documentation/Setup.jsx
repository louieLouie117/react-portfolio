import React from 'react'
import ReactCodeSinppet from 'react-code-snippet'

const Setup = props => {
  return (
    <div>
        <h2>React SWA Setup</h2>
    
        <pre>
        <code >

            <ReactCodeSinppet  style={{backgroundColor: "red"}} lang="json" code={
                `
                {
                    "navigationFallback": {
                        "rewrite": "index.html",
                        "exclude": ["/static/images/*.{png,jpg,gif}", "/static/css/*"]
                    },
                    "mimeTypes": {
                        ".json": "text/json"
                    }
                }
                
                `
            }>


            </ReactCodeSinppet>

      
        </code>
        </pre>
    </div>
  )
}


export default Setup