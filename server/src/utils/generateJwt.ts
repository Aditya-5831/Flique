import jwt from 'jsonwebtoken'

// Access Token short-lived only for 15 min
export const generateAccessToken = (userId: string) => {
    return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET!, {
        expiresIn: "15m"
    })
}

// Refresh Token long-lived 
export const generateRefreshToken = (userId: string) => {
    return jwt.sign({ id: userId }, process.env.ACCESS_REFRESH_SECRET!, {
        expiresIn: "30d"
    })
}