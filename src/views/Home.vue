<template>
	<div>
		<p>Home</p>
		<AppButton @click.prevent="clicked">Create account</AppButton>
		<AppInput type="password" :name="pass" />
	</div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppInput from "@/components/AppInput.vue";
export default {
	name: "home",
	components: {
		AppButton,
		AppInput
	}
};
</script>
