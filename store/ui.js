export const state = () => ({
  visibleSectionTitle: '',
});

export const mutations = {
  setVisibleSectionTitle(state, title) {
    state.visibleSectionTitle = title;
  },
};
