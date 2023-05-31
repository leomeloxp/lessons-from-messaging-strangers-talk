<script>
  export let trim = null;
  export let noescape = null;
  export let lineNumbers = null;
  export let lineStartFrom = null;
</script>

<pre>
    <code
    data-trim={trim}
    data-noescape={noescape}
    data-line-numbers={lineNumbers}
    data-ln-start-from={lineStartFrom}>
        <slot />
    </code>
</pre>
