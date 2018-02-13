<template>
	<v-container>
		<h3 class="headline">{{ title }}</h3>
		<edit-button :path="window.Url.editPath($route.params.id)"></edit-button>
		<delete-button :path="window.Url.deletePath($route.params.id)"></delete-button>
		<breadcrumbs :items="breadcrumbItems"></breadcrumbs>
		<v-layout row>
			<v-flex xs2>
				<v-subheader>
					Nombre
				</v-subheader>
			</v-flex>
			<v-flex xs10>
				<v-text-field
				v-model="form.first_name" :disabled="!isEdit"
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
				v-model="form.last_name" :disabled="!isEdit"
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
				v-model="form.age" :disabled="!isEdit"
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
				v-model="form.sex" bottom :disabled="!isEdit" ></v-select>
			</v-flex>
		</v-layout>
		<v-layout row>
			<v-spacer a>
			</v-spacer>
			<v-btn v-if="isEdit" color="green darken-3 white--text" @click="onSubmit">
				actualizar<v-icon right>fa-cloud-upload</v-icon>
			</v-btn>
		</v-layout>
	</v-container>
</template>

<script>
import Form from '../../utils/Form';
import Breadcrumbs from '../../partials/Breadcrumbs';
import EditButton from '../../partials/EditButton';
import DeleteButton from '../../partials/DeleteButton';

export default{
	name: 'members-details',
	components: { Breadcrumbs, EditButton, DeleteButton },
	data(){
		return {
			window: window,
			form: {},
			breadcrumbItems: 
			[
				{
					text: 'Miembros',
					disabled: false,
				},
			],
			loadingData: true,
			//isEdit: false,
		};
	},
	props: [
		"isEdit",
	],
	computed: {
		title(){
			if(this.loadingData){
				return "Cargando...";
			}else{
				return "Detalles de " + this.form.first_name + " " + this.form.last_name;
			}
		}
	},
	methods: {
		onSubmit(){
			this.form.post(window.Url.apiBaseUrl() + '/members/' + this.form.id + '/update').then((response) => {
				console.log(response.data);
				this.form = new Form(response.data);
			}).catch((error) => {
				console.log(error);
			});
		},
	},
	created(){
		window.axios.get('http://api.gp.local/members/' + this.$route.params.id)
		.then((response) => {
			this.form = new Form(response.data);
			this.loadingData = false;
			this.breadcrumbItems.push(
				{
					text: this.form.first_name + " " + this.form.last_name,
					disabled: true,
				},
			);
		});
	},
};
</script>