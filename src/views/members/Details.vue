<template>
	<v-container>
		<h3 class="headline" v-text="title"></h3>
		<breadcrumbs :items="breadcrumbItems"></breadcrumbs>
		<v-layout row>
			<v-flex xs2>
				<v-subheader>
					Nombre
				</v-subheader>
			</v-flex>
			<v-flex xs10>
				<v-text-field
				v-model="form.first_name"
				></v-text-field>
			</v-flex>
		</v-layout>
		<v-layout row>
			<v-flex xs2>
				<v-subheader>
					Apellido
				</v-subheader>
			</v-flex>
			<v-flex xs10>
				<v-text-field
				v-model="form.last_name"
				></v-text-field>
			</v-flex>
		</v-layout>
		<v-layout row>
			<v-flex xs2>
				<v-subheader>
					Edad
				</v-subheader>
			</v-flex>
			<v-flex xs10>
				<v-text-field type="number"
				v-model="form.age"
				></v-text-field>
			</v-flex>
		</v-layout>
		<v-layout row>
			<v-flex xs2>
				<v-subheader>
					Sexo
				</v-subheader>
			</v-flex>
			<v-flex xs10>
				<v-select :items="
				[
					{value: 1, text: 'Hombre'}, 
					{value: 2, text:'Mujer'},
				]" 
				v-model="form.sex" bottom ></v-select>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import Form from '../../utils/Form';

export default{
	data(){
		return {
			form: {},
			breadcrumbItems: 
			[
				{
					text: 'Miembros',
					disabled: false,
				},
			],
		};
	},
	computed: {
		title(){
			if(this.form !== {}){
				return "Detalles de " + this.form.fist_name + " " + form.last_name;
			}else{
				return "Cargando..."
			}
		}
	},
	created(){
		window.axios.get('http://api.gp.local/members/' + this.$route.params.id)
		.then((response) => {
			this.form = new Form(response.data);
			this.breadcrumbItems.push(
				{
					text: this.form.fist_name + " " + this.form.last_name,
					disabled: true,
				},
			);
		});
	},
};
</script>