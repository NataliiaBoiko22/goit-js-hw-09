!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),n=null;t.addEventListener("click",(function(){n=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,o.disabled=!1})),o.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,o.disabled=!0})),console.log("Hello")}();
//# sourceMappingURL=01-color-switcher.76124fd7.js.map