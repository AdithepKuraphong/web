import Jwt from "jsonwebtoken";
export const verifytoken = async (req, res, next) =>{
    try {
        let token = req.header("Authorization");

        if (!token) { // No token
            return res.status(403).send("Access Denied")
        }

        if (token.startWith("Bearer ")){ //token will be add to Bearer's tail!
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = jwt.verified(token, process.env.JWT_SECRET);
        req.user = verified;
    }catch (err){
        res.status(500).json({error: err.massage})
    }
}