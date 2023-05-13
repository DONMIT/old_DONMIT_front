import axios from "axios";

const TestPage = () => {
  const GITHUB_API_URL = 'https://api.github.com';
  const GITHUB_USERNAME = 'your-username';
  const GITHUB_USER_URL = `${GITHUB_API_URL}/users/${GITHUB_USERNAME}`;
  
   async function handler(req, res) {
    try {
      const response = await axios.get(GITHUB_USER_URL);
      const data = response.data;
  
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  }
  return(
    <>
    
    </>
  )
}

export default TestPage;