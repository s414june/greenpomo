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
          <input type="number" v-model.number="inputTime.pomo" placeholder="25" /> 分鐘
        </p>
        <p>
          小歇時光：
          <input type="number" v-model.number="inputTime.shortBreak" placeholder="5" /> 分鐘
        </p>
        <p>
          休息時光：
          <input type="number" v-model.number="inputTime.longBreak" placeholder="10" /> 分鐘
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
      inputTime:{
        pomo:null,
        shortBreak:null,
        longBreak:null
      }
    };
  },
  methods: {
    changeTimeSet(){
      this.$emit('changeTimeSet')
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
