export const state = () => ({
  itemList: []
});

export const getters = {
  getItemList: state => state.itemList
};

export const mutations = {
  ADD_ITEM(state, el) {
    el.id = new Date().toLocaleString();
    state.itemList.push(el)
  },
  DELETE_ITEM(state, id) {
    let ind = state.itemList.indexOf(state.itemList.find(el => el.id == id));
    state.itemList.splice(ind, 1);
  },
  SAVE_ITEM_LIST(state) {
    localStorage.setItem('itemList', JSON.stringify(state.itemList));
  },
  LOAD_ITEM_LIST(state) {
    let itemList = JSON.parse(localStorage.getItem('itemList'));
    if (itemList) state.itemList = itemList;
  },
  SORT_ITEM_LIST(state) {
    let itemList = state.itemList;
    switch (state.sortBy) {
      case 'price-asc': state.itemList.sort(function compare(el, nextEl) { return el.price - nextEl.price }); break;
      case 'price-des': state.itemList.sort(function compare(el, nextEl) { return nextEl.price - el.price }); break;
      case 'name': state.itemList.sort(function compare(el, nextEl) {
        let elName = el.name.toUpperCase();
        let nextElName = nextEl.name.toUpperCase();
        if (elName < nextElName) {
          return -1;
        }
        return 1;
      }); break;
      default: state.itemList.sort(function compare(el, nextEl) { return new Date(el.id) - new Date(nextEl.id) }); break;
    }
  },
  SAVE_SORT_CRITERIA(state, el = "") {
    state.sortBy = el;
  },
};

export const actions = {
  addItem({ commit }, el) {
    commit('ADD_ITEM', el);
    commit('SORT_ITEM_LIST');
    commit('SAVE_ITEM_LIST');
  },
  deleteItem({ commit }, el) {
    commit('DELETE_ITEM', el);
    commit('SAVE_ITEM_LIST');
  },
  loadItemList({ commit }) {
    commit('LOAD_ITEM_LIST');
    commit('SAVE_SORT_CRITERIA');
    commit('SORT_ITEM_LIST');
  },
  sortItemList({ commit }, el) {
    commit('SAVE_SORT_CRITERIA', el);
    commit('SORT_ITEM_LIST');
  },
};
