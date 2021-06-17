import Layout from '../modules/layouts/Layout';

import GlobalState from '../modules/layouts/complements/GlobalStates'

import React from 'react';

function Home({ data }) {

  const [globalstate, setgloblastate] = React.useState({ data: "default" });
  
  React.useEffect(() => {
    setgloblastate({ data });
  },[]);

  return (
    <>
      <GlobalState.Provider value = {globalstate}> 
        <Layout/> 
      </GlobalState.Provider>      
    </>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  try {
    const json = await res.json();
    
    return {data: json}

  } catch(error) {

    return {data: error}

  }
}


export default Home;

