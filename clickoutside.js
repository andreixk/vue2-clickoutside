export default {
	id: 'clickoutside'
	,bind (el,props) {
		el.clickCatcher = function (e) {
			if(props.modifiers.hidden) { //.hidden modifier is required when target component is hidden using v-if or v-show
				props.modifiers.hidden = false;
				return;
			}
			if (!el.contains(e.target) && typeof props.value == 'function') {
				props.value(props.arg);
			}
		}
		window.addEventListener('click', el.clickCatcher);
	}
	,unbind : el => window.removeEventListener('click',el.clickCatcher)
	,install(Vue) {
		Vue.directive('clickoutside', {
			bind: this.bind,
			unbind: this.unbind
		});
	}
};
