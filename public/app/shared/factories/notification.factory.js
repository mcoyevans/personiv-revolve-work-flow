sharedModule
	.factory('Notification', ['$http', function($http){
		var urlBase = '/notification';

		return {
			index: function(){
				return $http.get(urlBase);
			},
			show: function(id){
				return $http.get(urlBase + '/' +id);
			},
			store: function(data){
				return $http.post(urlBase, data);
			},
			update: function(id, data){
				return $http.put(urlBase + '/' + id, data);
			},
			delete: function(id){
				return $http.delete(urlBase + '/' + id);
			},
			markAsRead: function(id){
				return $http.post(urlBase + '/mark-as-read/' + id);
			},
			markAllAsRead: function(){
				return $http.post(urlBase + '/mark-all-as-read');
			},
			paginate: function(data, page){
				if(!page)
				{
					return $http.post(urlBase + '/paginate', data);
				}
				
				return $http.post(urlBase + '/paginate?page=' + page, data);
			}
		}
	}]);