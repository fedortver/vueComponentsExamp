<template>
	<router-link
		class="btn btn-primary"
		:to="to"
		:class="[themes[theme], sizes[size]]"
		@click.native="$emit('click', $event)"
	>
		Sign In</router-link
	>
</template>

<script>
export default {
	name: "AppButton",
	props: {
		theme: {
			required: false,
			type: String,
			default: "primary"
		},
		size: {
			required: false,
			type: String,
			default: "normal"
		},
		to: {
			required: false,
			type: Object,
			default() {
				return {
					name: "home"
				};
			}
		}
	},
	data() {
		return {
			themes: {
				"btn-primary": "primary",
				"btn-danger": "danger"
			},
			sizes: {
				"": "normal",
				"btn-lg": "large"
			}
		};
	}
};
</script>

<style>
</style>