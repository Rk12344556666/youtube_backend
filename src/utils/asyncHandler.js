
const asyncHandler=(requestHandler)=>{
(req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).
    catch((err)=>next(err))
}
}




// higher function use kiya he yaha
// const asyncHandler=()=>{}
// const asyncHandler=(func)=>()=>{}
// const asyncHandler=(func)=>async()=>{}

// const asyncHandler = (fn) => async () => {
//     try {
//         fn(req, res, next)
//     } catch (error) {
//         resizeBy.status(err.code || 500).json({
//             sucess: false,
//             message: err.message
//         })
//     }
// }
export {asyncHandler}
