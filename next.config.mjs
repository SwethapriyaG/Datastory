export default {
    webpack: (config, { isServer }) => {
      
      config.module.rules.push({
        test: /\.csv$/,
        loader: 'csv-loader',
      });
  
      return config;
    },
  };

  