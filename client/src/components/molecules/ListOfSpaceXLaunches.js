
import React, { useState, useEffect } from 'react';
import LaunchCard from '../atoms/LaunchCard';
import styled from 'styled-components';




const ListOfSpaceXLaunches = ({ upcomingLaunches }) => {


    return (
        <>
            {upcomingLaunches.length > 0 && upcomingLaunches.map(data => (
                <LaunchCard launchData={data} key={data.flight_number} />
            ))}
        </>
    )
}

export default ListOfSpaceXLaunches;
