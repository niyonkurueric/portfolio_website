export const welcome = (req, res, next) => {
    res.status(200).json({message: "Welcome to my Application"})
}