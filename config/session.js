'use strict';

module.exports = {
	/**
	 * The time to live for the session in seconds
	 */
	ttl: 600, // 10min
	/**
	 * True to enable debug session
	 */
	debug: false,
	/**
	 * The logger. If you use winston set your desired log level and set debug = true.
	 */
	logger: console,
	/**
	 * The number of characters to create the session ID.
	 */
	sidLength: 40,
	/**
	 * Persistence of session
	 * If persist is false, the session will expire after the ttl config.
	 * If persist is true, the session will never expire and ttl config will be ignored.
	 */
	persist: false,
	/**
	 * Connection REDIS connection information
	 */
	connection: {
		port: 6379,
		host: '127.0.0.1',
		db  : undefined,
		user: undefined,
		pass: undefined
	},
	/**
	 * The Header section name to store the session identifier
	 */
	sidHeader: 'Session-Id'
};