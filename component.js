'use strict';

var sessionServer = require('restify-session'),
		configDefault = require('./config/session'),
		name = 'session';

module.exports = {
	enable: true,

	name: name,

	afterServer: function (elefrant, server) {
		var config = configDefault,
				debug = true;
		if (elefrant && elefrant.getConfigComp) {
			config = elefrant.getConfigComp(name, configDefault);
			debug = elefrant.config.system.debug;
		}

		var session = sessionServer({
			debug : debug,
			ttl   : config.ttl,
			logger: config.logger,
			sidLength: config.sidLength,
			persist: config.persist,
			connection: config.connection,
			sidHeader: config.sidHeader
		});

		return server.use(session.sessionManager);
	}
};
