import express from "express";
import { googleAuth } from "../controllers/google";
import { facebookAuth } from "../controllers/facebook";
import { twitterAuth } from "../controllers/twitter";
import { githubAuth } from "../controllers/github";
import { linkedinAuth } from "../controllers/linkedin";
import { microsoftAuth } from "../controllers/microsoft";
import { metamaskAuth } from "../controllers/metamask";
import { appleAuth } from "../controllers/apple";
import { passkeyAuth, passkeyChallenge, passkeyLoginChallenge, passkeyLoginVerify, passkeyVerify } from "../controllers/passkey";
import { test } from "../controllers/test";
const router = express.Router();

router.post("/test",test)

router.post("/google",googleAuth );

router.post("/facebook", facebookAuth); 

router.post("/twitter", twitterAuth);

router.post("/github", githubAuth);

router.post("/linkedin", linkedinAuth);

router.post("/microsoft", microsoftAuth);

router.post("/apple", appleAuth);

router.post("/metamask",metamaskAuth);

router.post("/passkey", passkeyAuth);
router.post("/passkey-challenge", passkeyChallenge);
router.post("/passkey-verify", passkeyVerify);
router.post("/passkey-login-challenge", passkeyLoginChallenge);
router.post("/passkey-login-verify", passkeyLoginVerify);


export default router;
