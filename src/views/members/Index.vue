<template>
	<v-flex xs-12 fill-height>
		<h3 class="headline">Consultar miembros registrados en el GP</h3>
		<breadcrumbs :items="breadcrumbItems"></breadcrumbs>
		<v-data-table class="elevation-1" :headers="headers" :items="members" hide-actions>
			<template slot="items" slot-scope="props">
				<tr @click="props.expanded = !props.expanded">
					<td>{{ props.item.first_name }}</td>
					<td class="text-xs-right">{{ props.item.last_name }}</td>
					<td class="text-xs-right">{{ props.item.age }}</td>
					<td class="text-xs-right">{{ props.item.sex === 1 ? 'Hombre' : 'Mujer' }}</td>						
				</tr>
			</template>
			<template slot="expand" slot-scope="props">
				<div class="text-xs-center">
					<v-btn color="green white--text" @click="goToDetails(props.item.id)">
						detalles
						<v-icon right>fa-search</v-icon>
					</v-btn>
					<v-btn color="yellow white--text" @click="goToEdit(props.item.id)">
						editar
						<v-icon right>fa-edit</v-icon>
					</v-btn>
					<v-btn color="red white--text" @click="delete(props.item.id)">
						eliminar
						<v-icon right>fa-trash</v-icon>
					</v-btn>									
				</div>
			</template>
			<template slot="no-data">
				<h3 class="body-2">No hay miembros registrados</h3>
			</template>
		</v-data-table>
	</v-flex>
</template>

<script>
import Breadcrumbs from '../../partials/Breadcrumbs';

export default{
	name: 'members-index',
	components: { Breadcrumbs },
	data(){
		return{
			breadcrumbItems: [
				{
					text: 'Miembros',
					disabled: false,
				},
				{
					text: 'Consultar',
					disabled: true,
				},
			],
			headers: [
				{
					text: "Nombre",
					align: 'left',
					value: 'firstName',
					sortable: false,
				},
				{
					text: "Apellido",
					value: 'lastName',
					sortable: false,
				},
				{
					text: "Edad",
					value: 'age',
				},
				{
					text: "Sexo",
					value: 'sex',
				},
			],
			members: [],
		};
	},
	methods: {
		goToDetails(userId){
			this.$router.push({path: '/members/' + userId });
		},
		goToEdit(userId){
			//To do
		},
		delete(userId){
			//To do
		}
	},
	created(){
		window.axios.get('http://api.gp.local/members').then((response) => {
			this.members = response.data;
		});
	}
}
</script>