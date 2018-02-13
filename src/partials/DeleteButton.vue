<template>
	<v-btn color="red white--text" @click="destroy()">
		<slot>
		eliminar	
		</slot>
		<v-icon right>fa-trash</v-icon>
	</v-btn>	
</template>

<script>
export default{
	name: 'delete-button',
	props: [
		'path'
	],
	methods: {
		destroy(){
			//To do
			//window.axios.delete(path) ?
		}
	},
};
</script>