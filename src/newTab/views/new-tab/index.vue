<template>
  <div>
    <n-button quaternary>
      <template #icon>
        <n-icon size="40" color="#0e7a0d">
          <GameControllerOutline />
        </n-icon>
      </template>
    </n-button>
  </div>
  <div class="w-full h-full flex items-center justify-center">这是我的自定义的newTab6</div>
</template>

<script>
import { defineComponent } from 'vue'
import { GameControllerOutline, GameController } from '@vicons/ionicons5'
export default defineComponent({
  name: 'NewTab',
  components: {
    GameControllerOutline,
    GameController
  }
})
</script>

<style lang="less" scoped></style>
