container.innerHTML = new Array(count)
.fill(`<span style="color: ${color}; opacity: ${opacity}; transform: rotate(${deg}deg);">${text}</span>`)
.join("");