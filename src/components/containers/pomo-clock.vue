<template>
  <section>
    <p class="show-msg">{{ displayMsg }}</p>
    <div class="pomoClock">
      <p>{{ pomoMinute(displayTime) }}：{{ pomoSecond(displayTime) }}</p>
      <span v-if="!isBreak">
        <i
          class="fa fa-pause-circle"
          aria-hidden="true"
          v-if="isCount"
          @click="pauser"
        ></i>
        <i
          class="fa fa-play-circle"
          aria-hidden="true"
          v-else
          @click="pomoer"
        ></i>
      </span>
      <i
        class="fa fa-stop-circle"
        aria-hidden="true"
        v-if="!isInit"
        @click="stopper"
      ></i>
    </div>
  </section>
</template>

<script>
export default {
  props:[],
  data() {
    return {
      displayMsg: null,
      displayTime: null,
      countInterval: null,
      notifyGranted: false,
      isBreak: false,
      isInit: true,
      isCount: false,
      msg: {
        beforePomo: "開始熱血🍅吧",
        pause: "🍅在等你採收喔~",
        pomo: "\\ 番茄🍅時光 /",
        shortBreak: "小歇片刻，🍅熟了最好吃",
        longBreak: "好好休息，等下一棵番茄樹……",
      },
      // time: {
      //   pomo: 3,
      //   shortBreak: 1,
      //   longBreak: 2,
      // },
    };
  },
  beforeMount() {
    this.initPomo();
    this.initNotify();
  },
  methods: {
    initPomo() {
      this.isBreak = false;
      this.isCount = false;
      this.isInit = true;
      this.displayMsg = this.msg.beforePomo;
      this.displayTime = this.$parent.$parent.time.pomo;/////
    },
    initNotify() {
      if (!("Notification" in window)) {
        console.log("This browser does not support notification");
      } else {
        console.log(Notification.permission);
      }
      switch (Notification.permission) {
        case "default":
        case "undefined":
          Notification.requestPermission();
          break;
        case "granted":
          this.notifyGranted = true;
          break;
      }
      console.log(Notification.permission);
    },
    //on-click
    pomoer() {
      this.isCount ? this.pause2recount() : this.start2countdown();
    },
    pauser() {
      this.countdown2pause();
    },
    stopper() {
      this.countdown2stop();
    },
    //倒數器
    countdown() {
      this.timeInterval = setInterval(() => {
        this.displayTime = this.displayTime - 1;
        if (this.displayTime < 0) {
          this.notifyGranted ? this.showNotify() : this.showAlert();
          clearInterval(this.timeInterval);
          this.displayTime = 0;
          this.check_break_start();
        }
      }, 1000);
    },
    check_break_start() {
      this.isBreak ? this.break2start() : this.countdown2break();
    },
    // ------------狀態機-----------
    start2countdown() {
      this.isInit = false;
      this.isCount = true;
      this.displayMsg = this.msg.pomo;
      this.countdown();
    },
    //暫停
    countdown2pause() {
      this.isCount = false;
      this.displayMsg = this.msg.pause;
      clearInterval(this.timeInterval);
    },
    pause2recount() {
      this.displayMsg = this.msg.pomo;
      this.countdown();
    },
    //倒數~休息
    countdown2break() {
      this.isBreak = true;
      if (this.$parent.timesCookie % 4 != 3) this.setShortBreak();
      else this.setLongBreak();
      this.countdown();
    },
    setShortBreak() {
      this.displayMsg = this.msg.shortBreak;
      this.displayTime = this.$parent.$parent.time.shortBreak;
    },
    setLongBreak() {
      this.displayMsg = this.msg.longBreak;
      this.displayTime = this.$parent.$parent.time.longBreak;
    },
    break2start() {
      this.$parent.timesCookie++;
      this.initPomo();
    },
    countdown2stop() {
      this.ask("臨時停止的話就無法採收這顆🍅了！\n確定要停止嗎？", () => {
        clearInterval(this.timeInterval);
        this.initPomo();
      });
    },
    ask(question, yes) {
      if (confirm(question)) yes();
    },
    //時間顯示
    padZero(numVar, numLength) {
      return (Array(numLength).join("0").slice(-numLength) + numVar).slice(
        -numLength
      );
    },
    pomoMinute(time) {
      return this.padZero(Math.floor(time / 60), 2);
    },
    pomoSecond(time) {
      return this.padZero(time % 60, 2);
    },
    //推播
    showNotify() {
      this.notify = new Notification("時間到", {
        body: "綠色番茄關心您",
        icon: "pomonoti.ico",
      });
    },
    showAlert() {
      alert("時間到");
    },
  },
};
</script>

<style>
section {
  position: absolute;
  font-size: var(--main-font-size);
  top: calc(42px + 50vh - (var(--main-font-size) + 1em * 2) + 30px);
  /* 視覺上置中：header高+螢幕一半高-(msg字總高+msg margin) + footer高) */
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: -2;
}

section .pomoClock {
  text-align: center;
  background-color: #fff;
}

.fa {
  color: var(--green);
  font-size: calc(var(--main-font-size) + 1.5rem);
  cursor: pointer;
  margin: 0 10px;
}
</style>
