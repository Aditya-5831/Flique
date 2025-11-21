import { OAuth2Client } from 'google-auth-library'
import { db } from '../../config/db'
import { generateAccessToken, generateRefreshToken } from '../../utils/generateJwt'

export const authService = {
    googleAuth: async (idToken: string) => {
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
        const data = await client.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID
        })

        const payload = data.getPayload()

        if (!payload) {
            return null
        }

        const googleId = payload.sub;
        const email = payload.email

        let user = await db.user.findUnique({
            where: {
                googleId
            }
        })

        if (!user) {
            user = await db.user.create({
                data: {
                    googleId,
                    email
                }
            })
        }

        const accessToken = generateAccessToken(user.id)
        const refreshToken = generateRefreshToken(user.id)

        await db.refreshToken.create({
            data: {
                userId: user.id,
                token: refreshToken
            }
        })

        return { accessToken, user, refreshToken }
    }
}