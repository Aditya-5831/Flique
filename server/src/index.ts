import express from 'express'
import { clerkMiddleware } from '@clerk/express'
import { serve } from 'inngest/express';
import { inngest, functions } from './config/inngest.js';

// CONFIGURATION
const app = express();


// MIDDLEWARE
app.use(express.json())
app.use(clerkMiddleware())

app.use("/api/inngest", serve({ client: inngest, functions }))

// SEVER SETUP
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));