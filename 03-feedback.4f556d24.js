!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,o,a,u,l,f,s=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,s=t,u=e.apply(r,n)}function h(e){return s=e,l=setTimeout(w,t),c?y(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-s>=a}function w(){var e=p();if(j(e))return S(e);l=setTimeout(w,function(e){var n=t-(e-f);return d?g(n,a-(e-s)):n}(e))}function S(e){return l=void 0,m&&i?y(e):(i=o=void 0,u)}function T(){var e=p(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===l)return h(f);if(d)return l=setTimeout(w,t),y(f)}return void 0===l&&(l=setTimeout(w,t)),u}return t=O(t)||0,b(n)&&(c=!!n.leading,a=(d="maxWait"in n)?v(O(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=f=o=l=void 0},T.flush=function(){return void 0===l?u:S(p())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var h="feedback-form-state",j=document.querySelector(".feedback-form");j.addEventListener("input",e(t)((function(e){var t={email:j.elements.email.value,message:j.elements.message.value},n=JSON.stringify(t);try{localStorage.setItem(h,n)}catch(e){console.error("Error setting")}}),500)),j.addEventListener("submit",(function(e){if(""===j.elements.email.value||""===j.elements.message.value)return alert("Please fill in all the fields!");e.preventDefault();var t={email:j.elements.email.value,message:j.elements.message.value};console.log(t),e.currentTarget.reset(),localStorage.removeItem(h)})),window.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem(h);e&&(j.elements.email.value=JSON.parse(e).email,j.elements.message.value=JSON.parse(e).message)}))}();
//# sourceMappingURL=03-feedback.4f556d24.js.map