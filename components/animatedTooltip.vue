<script setup>
import anime from "animejs"
import charming from "charming"

defineProps({
  text: {
    type: String,
    default: 'Tooltip',
  }
})

onMounted(() => {
  const config = {
    walda: {
      in: {
        base: {
          duration: 100,
          easing: "linear",
          opacity: 1,
        },
        deco: {
          duration: 500,
          easing: "easeOutExpo",
          scaleY: [0, 1],
        },
        content: {
          duration: 100,
          delay: function (t, i) {
            return i * 5
          },
          easing: "linear",
          translateY: ["50%", "0%"],
          opacity: [0, 1],
        },
      },
      out: {
        base: {
          duration: 100,
          delay: 100,
          easing: "linear",
          opacity: 0,
        },
        deco: {
          duration: 400,
          easing: "easeOutExpo",
          scaleY: 0,
        },
        content: {
          duration: 125,
          easing: "linear",
          translateY: ["0%", "50%"],
          opacity: 0,
        },
      },
    },
  }

  const tooltips = Array.from(document.querySelectorAll(".tooltip"))

  class Tooltip {
    constructor(el) {
      this.DOM = {}
      this.DOM.el = el
      this.type = this.DOM.el.getAttribute("data-type")
      this.DOM.trigger = this.DOM.el.querySelector(".tooltip__trigger")
      this.DOM.triggerSpan = this.DOM.el.querySelector(".tooltip__trigger-text")
      this.DOM.base = this.DOM.el.querySelector(".tooltip__base")
      this.DOM.shape = this.DOM.base.querySelector(".tooltip__shape")
      if (this.DOM.shape) {
        this.DOM.path =
          this.DOM.shape.childElementCount > 1
            ? Array.from(this.DOM.shape.querySelectorAll("path"))
            : this.DOM.shape.querySelector("path")
      }
      this.DOM.deco = this.DOM.base.querySelector(".tooltip__deco")
      this.DOM.content = this.DOM.base.querySelector(".tooltip__content")

      this.DOM.letters = this.DOM.content.querySelector(".tooltip__letters")
      if (this.DOM.letters) {
        // Create spans for each letter.
        charming(this.DOM.letters)
        // Redefine content.
        this.DOM.content = this.DOM.letters.querySelectorAll("span")
      }
      this.initEvents()
    }
    initEvents() {
      this.mouseenterFn = () => {
        this.mouseTimeout = setTimeout(() => {
          this.isShown = true
          this.show()
        }, 75)
      }
      this.mouseleaveFn = () => {
        clearTimeout(this.mouseTimeout)
        if (this.isShown) {
          this.isShown = false
          this.hide()
        }
      }
      this.DOM.trigger.addEventListener("mouseenter", this.mouseenterFn)
      this.DOM.trigger.addEventListener("mouseleave", this.mouseleaveFn)
    }
    show() {
      this.animate("in")
    }
    hide() {
      this.animate("out")
    }
    animate(dir) {
      if (config[this.type][dir].base) {
        anime.remove(this.DOM.base)
        const baseAnimOpts = { targets: this.DOM.base }
        anime(Object.assign(baseAnimOpts, config[this.type][dir].base))
      }
      if (config[this.type][dir].shape) {
        anime.remove(this.DOM.shape)
        const shapeAnimOpts = { targets: this.DOM.shape }
        anime(Object.assign(shapeAnimOpts, config[this.type][dir].shape))
      }
      if (config[this.type][dir].path) {
        anime.remove(this.DOM.path)
        const shapeAnimOpts = { targets: this.DOM.path }
        anime(Object.assign(shapeAnimOpts, config[this.type][dir].path))
      }
      if (config[this.type][dir].content) {
        anime.remove(this.DOM.content)
        const contentAnimOpts = { targets: this.DOM.content }
        anime(Object.assign(contentAnimOpts, config[this.type][dir].content))
      }
      if (config[this.type][dir].trigger) {
        anime.remove(this.DOM.triggerSpan)
        const triggerAnimOpts = { targets: this.DOM.triggerSpan }
        anime(Object.assign(triggerAnimOpts, config[this.type][dir].trigger))
      }
      if (config[this.type][dir].deco) {
        anime.remove(this.DOM.deco)
        const decoAnimOpts = { targets: this.DOM.deco }
        anime(Object.assign(decoAnimOpts, config[this.type][dir].deco))
      }
    }
    destroy() {
      this.DOM.trigger.removeEventListener("mouseenter", this.mouseenterFn)
      this.DOM.trigger.removeEventListener("mouseleave", this.mouseleaveFn)
    }
  }

  const init = (() => tooltips.forEach((t) => new Tooltip(t)))()

  if (init) {
    init()
  }
})
</script>

<template>
  <div class="tooltip tooltip--walda" data-type="walda">
    <div class="tooltip__trigger" role="tooltip" aria-describedby="info-walda">
      <span class="tooltip__trigger-text">
        <slot/>
      </span>
    </div>
    <div class="tooltip__base">
      <div class="tooltip__deco" />
      <div id="info-walda" class="tooltip__content">
        <span class="tooltip__letters">{{ text }}</span
        >
      </div>
    </div>
  </div>
</template>

<style>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip__trigger {
  cursor: pointer;
  position: relative;
}

.tooltip__trigger-text {
  display: block;
  padding: 0.85em;
}

.tooltip__base {
  position: absolute;
  bottom: 2em;
  left: 50%;
  margin-left: -150px;
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
}

.tooltip__content {
  color: #f1f1f1;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 65%;
  padding: 0 1em;
  opacity: 0;
  font-size: 1em;
  font-weight: 700;
}

.tooltip__shape,
.tooltip__deco {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.tooltip__shape {
  fill: #a855f7;
}

/* Indivudual styles */

/* Walda */
.tooltip--walda .tooltip__base {
  left: 0;
  bottom: 0.75em;
  position: absolute;
  margin-left: 0;
  width: 250px;
  height: 70px;
  padding: 0 0 0 0.25em;
}

.tooltip--walda .tooltip__trigger-text {
  padding: 1em;
}

.tooltip--walda .tooltip__content {
  margin: 0;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  text-align: left;
  font-size: 0.85em;
  line-height: 1;
  opacity: 1;
  justify-content: flex-start;
}

.tooltip--walda .tooltip__letters span {
  display: inline-block;
  white-space: pre;
  opacity: 0;
}

.tooltip--walda .tooltip__deco {
  width: 4px;
  height: 100%;
  background: #a855f7;
  transform-origin: 50% 100%;
}
</style>
