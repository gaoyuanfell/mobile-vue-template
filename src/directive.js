export default function (Vue) {
  /**
   *  <div v-listener-event:click="fn"></div>
   */
  Vue.directive('listener-event', {
    bind: function (el, binding, vnode) {
      if (!(typeof binding.value === 'function')) return;
      el.addEventListener(binding.arg, (event) => {
        binding.value(event)
      })
    }
  })
  /**
   * value = {
   *   data:{},
   *   func:()=>{}
   * }
   *
   * <div v-file-upload="{data:{},func:fn}"></div>
   */
  Vue.directive('file-upload', {
    bind: function (el, binding, vnode) {
      if (!(typeof binding.value.func === 'function')) return;
      let input = document.createElement('input')
      input.type = 'file';
      input.style.display = 'none';
      input.onchange = (event)=> {
        binding.value.func(event.target.files, binding.value.data)
        input.value = null;
      }
      el.addEventListener('click',()=> {
        if(binding.value.disabled) return;
        input.click()
      })
      el.appendChild(input)
    }
  })

  Vue.directive('ripple', {
    inserted: function(el, binding, vnode){
      const duration = 450
      el.addEventListener('touchstart',(event)=> {
        const containerRect = el.getBoundingClientRect();
        const x = event.touches[0].clientX
        const y = event.touches[0].clientY
        const radius = distanceToFurthestCorner(x, y, containerRect);
        const offsetX = x - containerRect.left;
        const offsetY = y - containerRect.top;

        const rippleBox = document.createElement('div')
        rippleBox.style.width = `${el.clientWidth}px`;
        rippleBox.style.height = `${el.clientHeight}px`;
        rippleBox.style.overflow = 'hidden';
        rippleBox.style.position = 'fixed';
        rippleBox.style.zIndex = 9999999999;
        el.style.contain = 'content'

        rippleBox.style.top = `${0}px`;
        rippleBox.style.left = `${0}px`;

        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.style.width = `${radius * 2}px`;
        ripple.style.backgroundColor = 'rgba(0,0,0,.1)'
        ripple.style.transitionDuration = `${duration}ms`;
        rippleBox.appendChild(ripple);
        el.appendChild(rippleBox);
        enforceStyleRecalculation(ripple)
        ripple.style.transform = 'scale(1)';
        setTimeout(() => {
          ripple.style.opacity = 0;
          ~function(_rippleBox){
            setTimeout(() => {
              el.removeChild(_rippleBox)
            }, duration);
          }(rippleBox)
        }, duration);
      })
    }
  })
}

// ripple
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}

// ripple
function enforceStyleRecalculation(element) {
  window.getComputedStyle(element).getPropertyValue('opacity');
}
