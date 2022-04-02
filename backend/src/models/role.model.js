const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema(
	{
		name: [{ type: String, require: true }],
	},
	{
		versionKey: false, 
		timestamps: true,
	}
);



	const Role = mongoose.model("role", roleSchema);




module.exports = Role;