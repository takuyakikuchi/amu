<template>
  <i class="fas fa-angle-double-down"></i>
</template>

<script>
export default {
  name: "ScrollDown"
};
</script>

<style scoped lang="scss">
i {
  color: rgba(255, 255, 255, 0.8);
  font-size: 2rem;
  position: absolute;
  bottom: 16px;
  left: 16px;
  animation: wait 5s linear 6s;
}
@keyframes wait {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
}
</style>
