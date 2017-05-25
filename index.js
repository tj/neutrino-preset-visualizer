
const Visualizer = require('webpack-visualizer-plugin')

module.exports = neutrino => {
  neutrino.config
    .plugin('visualizer')
    .use(Visualizer)
}
