// See http://brunch.io for documentation.
exports.config = {
  files :{
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'},
  },

  plugins: {
    sass: {
      mode: 'native',
      options: {
        includePaths: [
          'node_modules/foundation-sites/scss'
        ],
      },
    }
  }
};
