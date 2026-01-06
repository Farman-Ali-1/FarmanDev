const projectPost = async(req,res)=>{
    const {description,title,link}= req.body;
    try {
        if(!description || !title || !link){
            res.status(400).json({message: "All fiedls are required! "})
        }
        res.status(400).json({message:"job posted successfully"})
        console.log(description)
    } catch (error) {
        console.log(error)
    }
}

export default projectPost;