exports.home = (req,res)=>{
    res.sendFile(__dirname +
        '/public/index.html') 
};