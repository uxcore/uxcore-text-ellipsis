export default {
  getHeightFromDOM: (dom) => {
    const styles = dom.currentStyle ? dom.currentStyle : window.getComputedStyle(dom);
    const height = dom.offsetHeight;
    const borderTopWidth = isNaN(parseFloat(styles.borderTopWidth)) ?
                            0 : parseFloat(styles.borderTopWidth);
    const borderBottomWidth = isNaN(parseFloat(styles.borderBottomWidth)) ?
                             0 : parseFloat(styles.borderBottomWidth);
    const paddingTop = isNaN(parseFloat(styles.paddingTop)) ?
                        0 : parseFloat(styles.paddingTop);
    const paddingBottom = isNaN(parseFloat(styles.paddingBottom)) ?
                         0 : parseFloat(styles.paddingBottom);

    return height - borderTopWidth - borderBottomWidth - paddingTop - paddingBottom;
  },
};
