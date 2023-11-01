<script>
  import { randomBetween } from "$lib/farewell";

    export let line = '';
    
    let no = randomBetween(1, 25);
    $: if(line) {
        no = randomBetween(1, 25);
    }

</script>

<style lang="scss">
    * {
		font-family: 'Nunito Sans', 'Quicksand';
    }
    
    .farewell {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 2vw;

        .card {
            background-color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            padding: 4vh 8vw;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            text-align: center;
        }

        .line, .title {
            font-size: 2rem;
            font-weight: bolder;

            @media (max-width: 48em) {
                font-size: 2rem;
            }
        }

        .line {
            margin-bottom: 16px;
        }

        p {
            justify-self: left;
            text-align: left;
            font-size: 1em;
        }

        p:not(:last-of-type) {
            margin-bottom: 6px
        }
    }
</style>

<div class="farewell">
    <div class="card">
        <h2 class="title">Verabschiedungsgesetzbuch (VaGB)</h2>
        <h3 class="line">§{no} {line}</h3>
        <p>(1) Verabschiedungen sind Sätze oder Phrasen, die nach einem Treffen
            mit einer oder mehrerer Personen das Ende ebenjenes indizieren.
        </p>
        <p>(2) Verabschiedungen müssen dem Anlass und der Situation angemessen sowie zweckdienlich sein.</p>
    </div>
</div>