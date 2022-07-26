export default {
  mounted(el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(event.target == el || el.contains(event.target))) {
        binding.value.call();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el, binding) {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};
