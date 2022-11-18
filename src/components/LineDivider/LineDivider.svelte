<script lang="ts">
  export let small = false;
  export let medium = false;
</script>

<div class="flex justify-center">
  <div
    class="border-l-2 border-l-white {small ? 'h-4' : medium ? 'h-6' : 'h-8'}"
  />
</div>
