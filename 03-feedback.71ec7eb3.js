function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return s.Date.now()};function g(e,t,n){var r,i,o,a,u,f,l=0,s=!1,c=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,u=setTimeout(O,t),s?y(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||c&&e-l>=o}function O(){var e=v();if(w(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-f);return c?d(n,o-(e-l)):n}(e))}function T(e){return u=void 0,g&&r?y(e):(r=i=void 0,a)}function j(){var e=v(),n=w(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return h(f);if(c)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(s=!!n.leading,o=(c="maxWait"in n)?m(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},j.flush=function(){return void 0===u?a:T(v())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");y.addEventListener("input",e(t)((function(e){const t={email:y.elements.email.value,message:y.elements.message.value},n=JSON.stringify(t);try{localStorage.setItem("feedback-form-state",n)}catch(e){console.error("Error setting")}}),500)),y.addEventListener("submit",(function(e){e.preventDefault();const t={email:y.elements.email.value,message:y.elements.message.value};if(console.log(t),e.currentTarget.reset(),""===email.value||""===message.value)return alert("Please fill in all the fields!");localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),dataForm={}})),window.addEventListener("DOMContentLoaded",(function(){const e=localStorage.getItem("feedback-form-state");e&&(y.elements.email.value=JSON.parse(e).email,y.elements.message.value=JSON.parse(e).message)}));
//# sourceMappingURL=03-feedback.71ec7eb3.js.map
