const asyncHandler=require("express-async-handler");


//@desc get all contact
//@route get /api/contacts
//@access public

const getContacts=asyncHandler(async(req,res)=>{
    res.status(200).send({message:"get all contacts"})
})



//@desc create new contact
//@route post /api/contacts/:id
//@access public

const createContact=asyncHandler (async (req,res)=>{
    console.log("the request body is :",req.body);
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error ("All fields are mandatory")
    }
    res.status(201).send({message:"create new contacts"})
})


//@desc create new contact
//@route put /api/contacts/:id
//@access public

const getContact=asyncHandler(async (req,res)=>{
    res.status(201).send({message:"gat a specific contacts"})
})


//@desc update a contact
//@route put /api/contacts/:id
//@access public

const updateContact=asyncHandler(async (req,res)=>{
    res.status(201).send({message:"update a contacts"})
})


//@desc delete a contact
//@route delete /api/contacts
//@access public

const deleteContact=asyncHandler(async (req,res)=>{
    res.status(201).send({message:"delete a contacts"})
})


module.exports={getContacts, createContact,deleteContact,updateContact,getContact};