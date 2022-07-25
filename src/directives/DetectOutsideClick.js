export default {
  mounted(el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      console.log(event.target, el);
      console.log(event.target == el);
      console.log(event.target.contains(el));
      if (!(event.target == el || el.contains(event.target))) {
        console.log('should close');
        binding.value.call();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el, binding) {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};
