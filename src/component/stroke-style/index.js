import { pick } from '../../util/minilo'

/**
 * @module stroke-style
 */
import Style from './style.vue'

/**
 * @alias module:stroke-style
 */
export default {
  /**
   * @alias module:stroke-style/style
   */
  Style,
  /**
   * @param {Vue} Vue
   * @param {VueLayersOptions} [options]
   */
  install (Vue, options = {}) {
    options = pick(options, 'dataProjection')
    Object.assign(Style, options)

    Vue.component(Style.name, Style)
  },
}
