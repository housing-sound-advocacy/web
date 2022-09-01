module.exports = {
  apps : [{
    name   : 'housing-sound-advocacy',
    script : './api-dist/server.js',
    env_production: {
      NODE_ENV: 'production',
      PORT: '8080',
    },
    env_development: {
      NODE_ENV: 'development',
      PORT: '4000',
    },
  }],
};
