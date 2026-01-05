import { Inngest } from 'inngest'

export const inngest = new Inngest({
    id: "flique"
})

const syncUser = inngest.createFunction(
    {
        id: "sync-user"
    },
    {
        event: "clerk/user.created"
    },
    async ({ event }) => {
        console.log(event.data)
    }
)

export const functions = [syncUser]