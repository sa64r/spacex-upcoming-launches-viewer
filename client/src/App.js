import './App.css';
import React, { useState, useEffect } from 'react';
import ListOfSpaceXLaunches from './components/molecules/ListOfSpaceXLaunches';
import styled from 'styled-components';



function App() {

  const [spacexData, setSpacexData] = useState([]);

  const getSpacexData = async () => {
    const response = await fetch('https://api.spacexdata.com/latest/launches');
    const data = await response.json();
    setSpacexData(data);
  }

  useEffect(() => {
    getSpacexData();
  }, []);

  const upcomingLaunches = spacexData.filter(launch => new Date(launch.date_local) > new Date());
  const numberOfUpcomingLaunches = upcomingLaunches.length;

  return (
    <div className="App">
      <StyledAppContainer>
        <h1>Upcoming SpaceX Launches</h1>
        <p>There are {numberOfUpcomingLaunches} upcoming launches 🚀</p>
        {spacexData.length > 0 && <ListOfSpaceXLaunches upcomingLaunches={upcomingLaunches} />}
      </StyledAppContainer>

    </div>
  );
}

export default App;

const StyledAppContainer = styled.div`
  color: #fff;
  background-color: #262626;
  padding: 10px;
`
