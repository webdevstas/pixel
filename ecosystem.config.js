module.exports = {
  apps: [{
    name: 'hello',
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start',
    exec_mode: 'cluster',
    instances: 2,
    env: {
      NODE_ENV: "production",
    },
    error_file: 'err.log',
    out_file: 'out.log',
    log_file: 'combined.log',
    time: true
  }]
};
