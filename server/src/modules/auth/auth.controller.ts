import { NextFunction, Request, Response } from "express";
import { authService } from "./auth.service";

export const authController = {
    googleAuth: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { idToken } = req.body

            if (!idToken) {
                throw new Error('ID token is required')
            }

            const result = await authService.googleAuth(idToken)

            if (!result) {
                throw new Error('Failed to authenticate with Google')
            }

            const { user, accessToken, refreshToken } = result

            res.json({ user, accessToken, refreshToken })

        } catch (error) {
            next(error)
        }
    }
}