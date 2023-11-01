<script lang="ts">
	import { getRandomFarewell } from '$lib';
	import Button from './Button.svelte';
  	import Farewell from './Farewell.svelte';

	let line = getRandomFarewell();

	const handleClick = () => {
		line = getRandomFarewell();
	}
</script>

<style lang="scss">
	.farewell-container {
		width: 100%;
		min-width: 80vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 32px;
	}
</style>


<div class="farewell-container">
	<Farewell {line}/>
	<Button handleClick={() => handleClick()} label="Ciao"/>
</div>