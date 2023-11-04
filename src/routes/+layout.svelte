<script lang="ts">
  import '$lib/app.scss';
  import logo from '$lib/assets/cow.png';
  export const prerender = true;
</script>

<style lang="scss">
  .page {
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    background-color: rgb(235, 235, 235);
  }

  .header {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px -4px 5px 10px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px -4px 5px 10px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px -4px 5px 10px rgba(0, 0, 0, 0.1);

    .disable-select {
      -webkit-user-select: none;  
      -moz-user-select: none;    
      -ms-user-select: none;      
      user-select: none;
    }

    .logo {
      height: 48px;
      width: 48px;
    }

    .title {
      margin-left: 16px;
      font-size: 2rem;
    }
  }

  .content {
    height: 100%;
    min-height: 100%;
    margin:10vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;


    @media (max-width: 48em) {
      margin-top: 2vh;
      max-width: 90vw;
    }

    @media (min-width: 64em) {
      max-width: 40em;
    }
  }

</style>

<div class="page">
  <div class="header">
    <img class="logo" src={logo} alt="Logo"/>
    <h1 class="title disable-select">Ciao Cow</h1>
  </div>
  <div class="content">
    <slot/>
  </div>  
</div>