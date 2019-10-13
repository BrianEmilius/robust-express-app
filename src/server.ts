import e from "express"

export default async function(app: e.Application, debug: any): Promise<void> {
	try {
		const server = (await app.listen(parseInt(process.argv[2]) || 3000)) as any
		debug.info(`Application is listening on port ${server.address().port}`)
	} catch (error) {
		debug.error(error.stack)
		process.exit(1)
	}
}
