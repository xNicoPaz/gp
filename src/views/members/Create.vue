<template>
	<v-flex md8>
		<v-form v-model="valid" ref="form" lazy-validation @submit.prevent="onSubmit">
			<v-text-field label="Nombre" v-model="form.firstName" required
			></v-text-field>
			<v-text-field label="Apellido" v-model="form.lastName" required
			></v-text-field>
			<v-text-field label="Edad" v-model="form.age" type="number" required=""></v-text-field>
			<v-checkbox label="Aceptas los terminos y condiciones del GP?" v-model="form.accepts" required
			></v-checkbox>
            <v-select :items="['Hombre', 'Mujer']" v-model="form.sex" label="Sexo" bottom ></v-select>
			<v-btn @click="form.submit">submit</v-btn>
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
				firstName: '',
				lastName: '',
				age: null,
				sex: null,
				accepts: null,
			})
		};
	},
	methods: {
		onSubmit(){
			this.form.post('http://api.gp.local');
		}
	}
}
</script>