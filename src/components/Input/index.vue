<template>

<!--        <section class="content bgcolor-1">

        <span class="input input&#45;&#45;haruki">
					<input class="input__field input__field&#45;&#45;haruki" type="text" id="input-1" />
					<label class="input__label input__label&#45;&#45;haruki" for="input-1">
						<span class="input__label-content input__label-content&#45;&#45;haruki">标题</span>
					</label>
				</span>
            <span class="input input&#45;&#45;haruki">
					<input class="input__field input__field&#45;&#45;haruki" type="text" id="input-2" />
					<label class="input__label input__label&#45;&#45;haruki" for="input-2">
						<span class="input__label-content input__label-content&#45;&#45;haruki">URL</span>
					</label>
				</span>
        </section>-->


    <section class="content">
				<span class="input input--hoshi">
					<input class="input__field input__field--hoshi" type="text" id="input-4" />
					<label class="input__label input__label--hoshi input__label--hoshi-color-1" for="input-4">
						<span class="input__label-content input__label-content--hoshi">标题</span>
					</label>
				</span>
        <span class="input input--hoshi">
					<input class="input__field input__field--hoshi" type="text" id="input-5" />
					<label class="input__label input__label--hoshi input__label--hoshi-color-2" for="input-5">
						<span class="input__label-content input__label-content--hoshi">URL</span>
					</label>
				</span>
    </section>
</template>

<script>

    export default{
        name:'Input'
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>

    /*.content {
        font-size: 100%;
        padding: 1em 0;
        text-align: center;
    }
    !*.bgcolor-1 { background:#e0ddd9; }*!
    .input {
        position: relative;
        z-index: 1;
        display: inline-block;
        margin: 1em;
        max-width: 370px;
        width: calc(100% - 2em);
        vertical-align: top;
    }
    .input--haruki {
        margin: 4em 1em 1em;
    }
    .input__field {
        position: relative;
        display: block;
        float: right;
        padding: 0.8em;
        width: 60%;
        border: none;
        border-radius: 0;
        background: #f0f0f0;
        color: #aaa;
        font-weight: bold;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-appearance: none; !* for box shadows to show on iOS *!
    }
    .input__field:focus {
        outline: none;
    }
    .input__label {
        display: inline-block;
        float: right;
        padding: 0 1em;
        width: 40%;
        color: #6a7989;
        font-weight: bold;
        font-size: 70.25%;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .input__label-content {
        position: relative;
        display: block;
        padding: 1.6em 0;
        width: 100%;
    }
    .input--haruki {
        margin: 4em 1em 1em;
    }

    .input__field--haruki {
        padding: 0.4em 0.25em;
        width: 100%;
        background: transparent;
        color: #AFB5BB;
        font-size: 1.55em;
    }

    .input__label--haruki {
        position: absolute;
        width: 100%;
        text-align: left;
        pointer-events: none;
    }

    .input__label-content--haruki {
        -webkit-transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
    }

    .input__label--haruki::before,
    .input__label--haruki::after {
        content: '';
        position: absolute;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 4px;
        background: #6a7989;
        -webkit-transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
    }

    .input__label--haruki::before {
        top: 0;
    }

    .input__label--haruki::after {
        bottom: 0;
    }

    .input__field--haruki:focus + .input__label--haruki .input__label-content--haruki,
    .input--filled .input__label-content--haruki {
        -webkit-transform: translate3d(0, -90%, 0);
        transform: translate3d(0, -90%, 0);
    }

    .input__field--haruki:focus + .input__label--haruki::before,
    .input--filled .input__label--haruki::before {
        -webkit-transform: translate3d(0, -0.5em, 0);
        transform: translate3d(0, -0.5em, 0);
    }

    .input__field--haruki:focus + .input__label--haruki::after,
    .input--filled .input__label--haruki::after {
        -webkit-transform: translate3d(0, 0.5em, 0);
        transform: translate3d(0, 0.5em, 0);
    }
*/

    .content {
        font-size: 150%;
        padding: 0.1em 0;
        text-align: center;
    }
    .input {
        position: relative;
        z-index: 1;
        display: inline-block;
        margin: 1em;
        max-width: 370px;
        width: calc(100% - 2em);
        vertical-align: top;
    }

    .input__field {
        position: relative;
        display: block;
        float: right;
        padding: 0.8em;
        width: 60%;
        border: none;
        border-radius: 0;
        background: #f0f0f0;
        color: #aaa;
        font-weight: bold;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-appearance: none; /* for box shadows to show on iOS */
    }

    .input__field:focus {
        outline: none;
    }

    .input__label {
        display: inline-block;
        float: right;
        padding: 0 1em;
        width: 40%;
        color: #6a7989;
        font-weight: bold;
        font-size: 70.25%;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .input__label-content {
        position: relative;
        display: block;
        padding: 1.6em 0;
        width: 100%;
    }
    .input--hoshi {
        overflow: hidden;
    }

    .input__field--hoshi {
        margin-top: 1em;
        padding: 0.85em 0.15em;
        width: 100%;
        background: transparent;
        color: #595F6E;
    }

    .input__label--hoshi {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 0.25em;
        width: 100%;
        height: calc(100% - 1em);
        text-align: left;
        pointer-events: none;
    }

    .input__label-content--hoshi {
        position: absolute;
    }

    .input__label--hoshi::before,
    .input__label--hoshi::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 10px);
        border-bottom: 1px solid #B9C1CA;
    }

    .input__label--hoshi::after {
        margin-top: 2px;
        border-bottom: 4px solid red;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        -webkit-transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
    }

    .input__label--hoshi-color-1::after {
        border-color: hsl(200, 100%, 50%);
    }

    .input__label--hoshi-color-2::after {
        border-color: hsl(160, 100%, 50%);
    }

    .input__field--hoshi:focus + .input__label--hoshi::after,
    .input--filled .input__label--hoshi::after {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    .input__field--hoshi:focus + .input__label--hoshi .input__label-content--hoshi,
    .input--filled .input__label-content--hoshi {
        -webkit-animation: anim-1 0.3s forwards;
        animation: anim-1 0.3s forwards;
    }

    @-webkit-keyframes anim-1 {
        50% {
            opacity: 0;
            -webkit-transform: translate3d(1em, 0, 0);
            transform: translate3d(1em, 0, 0);
        }
        51% {
            opacity: 0;
            -webkit-transform: translate3d(-1em, -40%, 0);
            transform: translate3d(-1em, -40%, 0);
        }
        100% {
            opacity: 1;
            -webkit-transform: translate3d(0, -40%, 0);
            transform: translate3d(0, -40%, 0);
        }
    }

    @keyframes anim-1 {
        50% {
            opacity: 0;
            -webkit-transform: translate3d(1em, 0, 0);
            transform: translate3d(1em, 0, 0);
        }
        51% {
            opacity: 0;
            -webkit-transform: translate3d(-1em, -40%, 0);
            transform: translate3d(-1em, -40%, 0);
        }
        100% {
            opacity: 1;
            -webkit-transform: translate3d(0, -40%, 0);
            transform: translate3d(0, -40%, 0);
        }
    }


</style>
