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

    const installTypeScript = `npm install --save typescript @types/node @types/react-dom @types/jest`;
    const installTypeScriptGlobally = `npm install typescript --save-dev`;

    const typescriptConfigFile = `{
        "compilerOptions":{
            "outDir": "build",
            "target": "esnext",
            "noEmit": true   
        },
    
        "include": ["scr/**/*"]
    
    }`;




  return (
    <div>

        <h1>Get Started with React.js</h1>
        <pre>
            <code>{install}</code>
            <button  onClick={() =>  navigator.clipboard.writeText(install)}>Copy</button>

        </pre>

        <section>
        <p>This is to make sure routing works on SWAS. set up a staticwebapp.confg.sjon file on the project add the following code.</p>

                <pre>
                    <code >{obj}</code>
                        <button  onClick={() =>  navigator.clipboard.writeText(obj)}>Copy</button>
                    
                </pre>
        </section>



        <h2>How to copy to clipboard in React</h2>
        <pre>
            <code>{copyReact}</code>
        </pre>
      

        <section>

        <h2>Install Type Script to a react project</h2>
        <pre>
            <code>{installTypeScript}</code>
            <button  onClick={() =>  navigator.clipboard.writeText(installTypeScript)}>Copy</button>

        </pre>
        </section>

        <section>

        <h2>Install Type Script globally</h2>
        <pre>
            <code>{installTypeScriptGlobally}</code>
            <button  onClick={() =>  navigator.clipboard.writeText(installTypeScriptGlobally)}>Copy</button>

        </pre>
        </section>

        <section>

        <h2>Set up typescript config file</h2>
        <p>You need to set up a config json file to use typescript tsconfig.json</p>
        <pre>
            <code>{typescriptConfigFile}</code>
            <button  onClick={() =>  navigator.clipboard.writeText(typescriptConfigFile)}>Copy</button>
        </pre>
        </section>

     

    </div>
  )
}


export default Setup