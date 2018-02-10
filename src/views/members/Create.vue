<template>
	<v-flex md8>
		<v-form ref="form" lazy-validation @submit.prevent="onSubmit">
			<v-text-field label="Nombre" v-model="form.firstName" required
			></v-text-field>
			<v-text-field label="Apellido" v-model="form.lastName" required
			></v-text-field>
			<v-text-field label="Edad" v-model="form.age" type="number" required=""></v-text-field>
			<v-checkbox label="Aceptas los terminos y condiciones del GP?" v-model="form.accepts" required
			></v-checkbox>
			<v-select :items="
			[
				{value: 1, text: 'Hombre'}, 
				{value: 2, text:'Mujer'},
			]" 
			v-model="form.sex" label="Sexo" bottom ></v-select>
			<v-btn @click="form.post('http://api.gp.local/members')">submit</v-btn>
			<v-btn @click="form.reset">clear</v-btn>
		</v-form>
	</v-flex>
</template>

<script>
import Form from '../../utils/Form';

export default{
	name: 'members-create',
	data(){
		return {
			form: new Form({
				firstName: 'Nico',
				lastName: 'Paz',
				age: 22,
				sex: 1,
				accepts: true,
			}),
		};
	},
	methods: {
		onSubmit(){
			window.axios.post('http://api.gp.local', this.form.data());
		}
	},
	created(){
		window.form = this.form;
	}
}
</script>