const people=require('../data');

const getPeople=(req,res)=>{
	res.status(200).json({success:true,data:people});
}

const getPerson=(req,res)=>{
	const {id} = req.params;
	const person=people.find((person)=>person.id===Number(id));
	if(!person){
		return res.status(404).json({success:false,message:`No person with id:${id}`});
	}
	res.status(200).json({success:true,data:person});
}

const createPerson=(req,res)=>{
	const {body}=req.body;
	res.status(200).json({success:true,data:people});
}

const updatePerson=(req,res)=>{
	const {id} = req.params;
	const {name} = req.body;
	const person=people.filter(person=>person.id===Number(id));
	if(!person){
		return res.status(404).json({success:false,message:`No person with id:${id}`});
	}
	const newPeople=people.map((person)=>{
		if(person.id===Number(id)){
			person.name=name;
		}
		return person;
	});
	res.status(200).json({success:true,data:newPeople});
}

const deletePerson=(req,res)=>{
	const person=people.find(person=>person.id===Number(req.params.id));
	if(!person){
		return res.status(404).json({success:false,message:`No person with id:${req.params.id}`});
	}
	const newPeople=people.filter((person)=>person.id!==Number(req.params.id));
	res.status(200).json({success:true,data:newPeople});
}

module.exports={
	getPeople,
	getPerson,
	createPerson,
	updatePerson,
	deletePerson
}