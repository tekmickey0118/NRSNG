import React from 'react';
import axios from 'axios';

const HubspotIntegration = async (email, username) => {
  const accessToken = 'pat-na1-a59ebb9a-6abf-4a6a-b584-594085f94c37';

  try {
    const data_sdfsdf = {
      properties: {
        email: 'sdfwsst@gmail.com',
        firstname: 'anthony sheldon',
      },
    };

    const response = await axios.post(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      data_sdfsdf,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      },
    );

    // Handle the response here if needed
    console.log('HubSpot API response:', response.data);
  } catch (error) {
    console.error('Error posting data to HubSpot:', error);
  }

  // Component rendering and UI goes here
};

export default HubspotIntegration;
