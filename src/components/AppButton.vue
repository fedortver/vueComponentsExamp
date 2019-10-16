<template>
	<router-link
		class="btn"
		:to="to"
		:title="title"
		:disabled="disabled"
		:class="[themes[theme], sizes[size], { disabled: disabled }]"
		@click.native="$emit('click', $event)"
	>
		<slot />
	</router-link>
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
		theme: {
			required: false,
			type: String,
			default: ""
		},
		disabled: {
			required: false,
			type: Boolean,
			default: false
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
	},
	methods: {
		ckicked(e) {
			if (this.disabled) {
				return;
			}
			this.$emit("click", e);
		}
	}
};
</script>

<style>
</style>