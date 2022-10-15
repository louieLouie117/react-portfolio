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

    const registerSW = `<script>
    if (typeof navigator.serviceWorker !== 'undefined') {
      navigator.serviceWorker.register('sw.js')
    }
  </script>`;


  const swFile = `// This is the "Offline page" service worker

  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
  
  const CACHE = "pwabuilder-page";
  
  // TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
  const offlineFallbackPage = "ToDo-replace-this-name.html";
  
  self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
      self.skipWaiting();
    }
  });
  
  self.addEventListener('install', async (event) => {
    event.waitUntil(
      caches.open(CACHE)
        .then((cache) => cache.add(offlineFallbackPage))
    );
  });
  
  if (workbox.navigationPreload.isSupported()) {
    workbox.navigationPreload.enable();
  }
  
  self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
      event.respondWith((async () => {
        try {
          const preloadResp = await event.preloadResponse;
  
          if (preloadResp) {
            return preloadResp;
          }
  
          const networkResp = await fetch(event.request);
          return networkResp;
        } catch (error) {
  
          const cache = await caches.open(CACHE);
          const cachedResp = await cache.match(offlineFallbackPage);
          return cachedResp;
        }
      })());
    }
  });`;




  return (
    <div className='codDoc-Container'>

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


        <section>

        <h2>Set up service works 1 of 2</h2>
        <p>You need to add register your sw on the index.html</p>
        <pre>
            <code>{registerSW}</code>
            <button  onClick={() =>  navigator.clipboard.writeText(registerSW)}>Copy</button>
        </pre>
        </section>

        <section>

        <h2>Set up service works 2 of 2</h2>
        <p>You need to add your sw.js file to your project root folder</p>
        <pre>
            <code>{swFile}</code>
            <button  onClick={() =>  navigator.clipboard.writeText(swFile)}>Copy</button>
        </pre>
        </section>

     

    </div>
  )
}


export default Setup