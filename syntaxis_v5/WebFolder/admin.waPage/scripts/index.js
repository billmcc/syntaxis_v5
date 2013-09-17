
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var login1 = {};	// @login
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
		var test = moment().format('dddd');
		debugger;
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		window.location = '';
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		window.location = '';
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//include(ds.getModelFolder().path + 'ssjs/myUtils.js');
		if(WAF.directory.currentUser() != null){
			//take action for a logged in request
			$$("main").loadComponent("/components/app.waComponent");
		} else {
			//take action for a non logged in request
			$$("main").loadComponent("/components/public.waComponent");
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
