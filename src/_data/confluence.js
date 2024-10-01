// const EleventyFetch = require("@11ty/eleventy-fetch");
// require('dotenv').config(); // Load .env variables

// module.exports = async function () {
//   // Environment variables
//   const confluenceBaseUrl = process.env.CONFLUENCE_BASE_URL; // Base URL from .env
//   const contentId = "393217"; // Replace with actual content ID
  
//   // Construct the API URL
//   const apiUrl = `${confluenceBaseUrl}/${contentId}?expand=body.storage`;

//   // Authentication details from .env
//   const username = process.env.CONFLUENCE_USERNAME;
//   const apiToken = process.env.CONFLUENCE_API_TOKEN;

//   // Create Basic Auth header
//   const authHeader = `Basic ${Buffer.from(`${username}:${apiToken}`).toString('base64')}`;

//   try {
//     // Fetch the Confluence content using eleventy-fetch
//     let response = await EleventyFetch(apiUrl, {
//       duration: "1s", // Cache for 1 day
//       type: "json",   // Specify response type
//       fetchOptions: {
//         headers: {
//           "Authorization": authHeader,
//           "Content-Type": "application/json"
//         }
//       }
//     });

//     // Return the fetched data (for example, the body.storage value)
//     return response.body;

//   } catch (error) {
//     console.error("Error fetching Confluence content:", error);
//     return null;
//   }
// };