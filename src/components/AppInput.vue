<template>
	<div>
		<input
			:type="inputType"
			:name="name"
			id="email"
			class="form-control"
			@input="$emit('input', $event.target.value)"
			:value="value"
			v-bind="$attrs"
		/>
		<a
			href="#"
			v-if="type === 'password'"
			@click.prevent="passwordRevealed = !passwordRevealed"
			>{{ passwordRevealed ? "Hide" : "Reveal" }} Password</a
		>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			required: true,
			type: String
		},
		type: {
			required: false,
			type: String,
			default: "text"
		},
		value: {
			required: false,
			type: String,
			default: ""
		}
	},
	data() {
		return {
			passwordRevealed: false
		};
	},
	methods: {
		toogleVisibility() {
			this.inputType =
				this.inputType === "password" ? "text" : "password";
		}
	},
	computed: {
		inputType() {
			return this.passwordRevealed ? "text" : this.type;
		}
	}
};
</script>

<style>
</style>