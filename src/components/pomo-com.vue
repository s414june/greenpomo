<template>
  <div id='pomo-place'>
    <pomo-clock></pomo-clock>
    <pomo-footer></pomo-footer>
  </div>
</template>

<script>
import PomoClock from './containers/pomo-clock'
import PomoFooter from './containers/pomo-footer'

export default {
  components:{
    PomoClock,PomoFooter
  },
  data() {
    return{
        timesCookie: 0
    }
  }}
</script>

<style>
</style>
