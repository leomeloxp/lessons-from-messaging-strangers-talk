<script>
  export let height = '1.5rem';
  export let width = '2.25rem';
</script>

<svg
  style:--height={height}
  style:--width={width}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 300 200"
>
  <path fill="#2D2D2D" d="m0,0h300v200H0" />
  <path fill="#9B59D0" d="m0,0h300v150H0" />
  <path fill="#FFFFFF" d="m0,0h300v100H0" />
  <path fill="#FFF433" d="m0,0h300v50H0" />
</svg>

<style>
  svg {
    display: inline-block;
    height: var(--height);
    width: var(--width);
  }
</style>
