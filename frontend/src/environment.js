let IS_PROD = true;
const server = IS_PROD
  ? "https://deploy1-4k96.onrender.com"
  : "http://localhost:8000";


export default server;
