interface Config {
    useMockAPI: boolean;
  }
  
  const useMockAPI: boolean = process.env.REACT_APP_USE_MOCK_API === 'true';
  
  const config: Config = {
    useMockAPI,
  };
  
  export default config;
  