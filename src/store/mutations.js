const mutations = {
  clickTab(state, index) {
    state.defaultActive = index.id;
  },
  toggleMenu(state) {
    state.isCollapse = !state.isCollapse;
  }
};

export default mutations;
