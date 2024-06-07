module.exports = {
    apps: [{
      name: 'panaderia-backend',
      script: 'dist/main.js',
      watch: false,
      env: {
        NODE_ENV: 'development',
        PORT: 3004,
        DATABASE_URL: 'mysql://SeptimoAdmin:cB7GHH3Pvh5i@gasolinera.c75cqprpydtw.us-east-2.rds.amazonaws.com:3306/final',
      }
    }]
  };
