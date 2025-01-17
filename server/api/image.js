import { USER_TYPES } from '~/enums/enums'

export default defineEventHandler(async (event) => {
    // Grab the parameter from the route
    if (
        event.context.auth &&
        (event.context.auth.userType === USER_TYPES.user ||
            event.context.auth.userType === USER_TYPES.groupLeader)
    ) {
        const fileId = getQuery(event).id
        if (!fileId)
            throw createError({ statusCode: 400, statusMessage: 'No ImageId' })
        const file = await event.context.drive.files.get(
            {
                fileId,
                alt: 'media',
            },
            {
                responseType: 'arraybuffer',
            }
        )

        return Buffer.from(file.data)
    } else {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
        })
    }
})
