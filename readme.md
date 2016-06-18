Broadcast is a simplified Pub-Sub solution.  

To install the module: `bower install jmusser.broadcast`

To get started using the module with AngularJS all you need to do is inject `Broadcast` into your controller(s) you want to link up and inject `jmusser.broadcast` into your app:
`var app = angular.module("AppName", [jmusser.broadcast]);`

To Subscribe to an event use:
`Broadcast.subscribe(<key-name>, <event-name>, <callback function>);`

```
Broadcast.subscribe("UserKey", "user-created", function(user) {
  $scope.usersArray.push(user);
});
```

To Publish an event use:
`Broadcast.publish(<event-name>, <callback function>);`

```
var newUser = {
  name: "Jeff",
  profession: "Coder"
};
Broadcast.publish("user-created", newUser);
```

To remove all subscriptions for a given Key use:
`Broadcast.remove(<key-name>`

`Broadcast.remove("UserKey");`

To remove all subscriptions in the app use:
`Broadcast.clear();`
