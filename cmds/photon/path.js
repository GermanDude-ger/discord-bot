const SQL = require('sql-template-strings')
const Command = require("../findercommand")

module.exports = class PathCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'path',
			group: 'util',
			memberName: 'path',
			description: 'Search for lua files used in photon addons.',
			args: [{
				key: 'path',
				label: 'File Path',
				prompt: 'Enter the path to search.',
				type: 'string',
			}]
		})

		this.queryTable = "files"
		this.queryType = "file"
		this.finderType = "paths"
		this.finderName = "path"
	}
}