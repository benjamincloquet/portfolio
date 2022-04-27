export const state = () => ({
  visibleSectionTitle: 'Title',
});

export const mutations = {
  setVisibleSectionTitle(state, title) {
    state.visibleSectionTitle = title;
  },
};
