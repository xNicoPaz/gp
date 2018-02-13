export default class Url{
	static apiBaseUrl(){
		return 'http:\/\/api.gp.local';
	}

	static detailsPath(userId){
		return '/members/' + userId;
	}

	static editPath(userId){
		return '/members/' + userId + '/edit';
	}
	
	static deletePath(userId){
		return '/members/' + userId;
	}	
}