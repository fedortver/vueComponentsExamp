<template>
	<div>
		<p>Home</p>
		<AppButton :to="{ name: 'signin' }" />
		<AppButton :to="{ name: 'signin' }" theme="primary" size="large" />
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
