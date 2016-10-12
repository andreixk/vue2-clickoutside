# vue2-clickoutside
A click-outside directive for Vue 2.0

[Demo](https://jsfiddle.net/efkrkL44/)

I'm aware that there are other outside clicking directives for VueJS, however, they don't seem to work for me with Vue2.0.

So I created a new one.

Usage:

```javascript
import VueClickoutside from './clickoutside';
Vue.use(VueClickoutside);

//...component definition...
	methods : {
		someFunction () {
			console.log('clicked outside');
		}
	}
```
```html
<div v-clickoutside="someFunction"></div>
```

### Notes

If you're using it on a component that's hidden through v-if or v-show, you need to use a .hidden modifier:

```html
<div v-if="someVar">
	<div v-clickoutside.hidden="someFunction"></div>
</div>
```

Since Vue 2.0 I can't seem to get `this` to work inside the directive declaration, so to pass properties you would have to use args.
i.e. instead of 
```html
<div v-clickoutside="someFunction('hello')">
``` 
you would use:
```html
<div v-clickoutside:hello.hidden="someFunction">
```
