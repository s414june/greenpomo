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
          番茄時光：
          <input type="number" v-model.number="timeMinute.pomo"/> 分
          <input type="number" v-model.number="timeSecond.pomo"/> 秒
        </p>
        <p>
          小歇時光：
          <input type="number" v-model.number="timeMinute.shortBreak"/> 分
                    <input type="number" v-model.number="timeSecond.shortBreak"/> 秒
        </p>
        <p>
          休息時光：
          <input type="number" v-model.number="timeMinute.longBreak"/> 分
                    <input type="number" v-model.number="timeSecond.longBreak"/> 秒
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
      timeMinute:{
        pomo:Math.floor(this.$store.state.time.pomo/60),
        shortBreak:Math.floor(this.$store.state.time.shortBreak/60),
        longBreak:Math.floor(this.$store.state.time.longBreak/60)
      },
      timeSecond:{
        pomo:this.$store.state.time.pomo%60,
        shortBreak:this.$store.state.time.shortBreak%60,
        longBreak:this.$store.state.time.longBreak%60
      }
    };
  },
  methods: {
    changeTimeSet(){
      this.$store.state.time.pomo = this.timeMinute.pomo*60+this.timeSecond.pomo
      this.$store.state.time.shortBreak = this.timeMinute.pomo*60+this.timeSecond.shortBreak
      this.$store.state.time.longBreak = this.timeMinute.pomo*60+this.timeSecond.longBreak
      this.$store.commit('initDisplayTime')
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
</style>
