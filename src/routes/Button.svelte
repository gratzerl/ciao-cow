<script lang="ts">
  export let label = 'Ciao!';
  export let handleClick: () => void;
</script>

<style lang="scss">
  .default {
    height: 42px;
    align-items: center;
    background-image: linear-gradient(45deg, rgba(255,167,0,1), rgba(161,191,54,1));
    border: 0;
    border-radius: 6px;
    box-sizing: border-box;
    color: #FFFFFF;
    max-width: 100%;
    padding: 2px 2px;
    transition: 300ms;
  }

  .default > div {
    display: grid;
    place-content: center;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    padding: 12px 0;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
  }

  .default span {
    color: rgb(0, 0, 0);
    font-weight: bolder;
    font-size: 24px;
		font-family: 'Nunito Sans', 'Quicksand';
  }

  .default:hover {
    > div {
      background: none;
    } 
    span {
      color: rgb(255, 255, 255);
    }
  }

  .default:active,
  .default:hover {
    outline: 0;
  }
</style>

<button class="button default" on:click={handleClick}>
  <div>
    <span>{label}</span>
  </div>
</button>