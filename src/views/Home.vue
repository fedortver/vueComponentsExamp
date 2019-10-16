<template>
	<div>
		<p>Home</p>
		<AppButton @click.prevent="clicked">Create account</AppButton>
	</div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
export default {
	name: "home",
	components: {
		AppButton
	}
};
</script>
