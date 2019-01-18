// registering the service-worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./service_worker.js')
	.then(function() {
		console.log('Service Worker registered. Get ready for some offline web experience!!!');
	})
	.catch(function() {
		console.log('Service Worker registration failed');
	});
}