<template>
  <transition
    name="slide"
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight"
  >
    <div class="menu" v-show="$parent.isMenu">
      <label>
        <h3>時間設定</h3>
                <p>
          番茄時光：<br>
          <input type="number" v-model.number="time.minute[0]" @input="quantityChanged($event)"/> 分
          <input type="number" v-model.number="time.second[0]" @input="quantityChanged($event)"/> 秒
        </p>
        <p>
          小歇時光：<br>
          <input type="number" v-model.number="time.minute[1]" @input="quantityChanged($event)"/> 分
                    <input type="number" v-model.number="time.second[1]" @input="quantityChanged($event)"/> 秒
        </p>
        <p>
          休息時光：<br>
          <input type="number" v-model.number="time.minute[2]" @input="quantityChanged($event)"/> 分
                    <input type="number" v-model.number="time.second[2]" @input="quantityChanged($event)"/> 秒
        </p>
        <button @click="changeTimeSet()"> 修改時間</button>
      </label>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      time:{
        minute:[
          Math.floor(this.$store.state.time.pomo/60),
          Math.floor(this.$store.state.time.shortBreak/60),
          Math.floor(this.$store.state.time.longBreak/60)
          ],
        second:[
          this.$store.state.time.pomo%60,
          this.$store.state.time.shortBreak%60,
          this.$store.state.time.longBreak%60
        ]
      }
    };
  },
  beforeMount(){
    let quantityInput = document.getElementsByTagName('input')
        for (let i = 0; i < quantityInput.length; i++) {
          quantityInput[i].addEventListener('change', this.quantityChanged)
    }
  },
  methods: {
    changeTimeSet(){
      this.$store.state.time.pomo = Math.floor(this.time.minute[0]*60)+Math.floor(this.time.second[0])
      this.$store.state.time.shortBreak = Math.floor(this.time.minute[1]*60)+Math.floor(this.time.second[1])
      this.$store.state.time.longBreak = Math.floor(this.time.minute[2]*60)+Math.floor(this.time.second[2])
      this.$store.commit('initDisplayTime')
    },
    quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 0
    }
    }
  },
};
</script>

<style>
.menu {
  position: fixed;
  width: 22vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.99);
  right: 0;
  top: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: -1;
  padding: 80px 50px 50px 50px;
}
svg {
  width: 30px;
  color: #fff;
  padding: 5px;
  position: relative;
  float: left;
  cursor: pointer;
}
h3 {
  font-weight: normal;
}
button{
  background-color:var(--green);
  padding:.5rem 1rem;
  border: 0;
  border-radius:.3rem;
  color: #fff;
}
input{
  width: 2rem;
}
</style>
