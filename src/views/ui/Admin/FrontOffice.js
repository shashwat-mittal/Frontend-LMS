import "./App.css";
import React from "react";
import { Grid } from "@mui/material";
const data = [
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
	{
		name: "Anom",
		age: 19,
		gender: "Male",
		School: "MLZS",
		Contact: "XXXXXXXXXX",
		Address: "jbfjgskfkhgjbdskhgjbp",
		RollNo: "1",
		Marks: "50",
	},
];
const Forms = () => {
	return (
		<>
			<div>
				<h2
					style={{
						backgroundColor: "lightblue",
						alignSelf: "stretch",
						height: "40px",
						padding: "20px",
					}}
				>
					Exam Mark Result
				</h2>
			</div>
			<Grid container spacing={3}>
				<Grid item xs={9}>
					<>
						<div className="excelbox">
							<p className="text">GreenLand Public School</p>
							<table>
								<tr>
									<th>Name</th>
									<th>Age</th>
									<th>Gender</th>
									<th>School</th>
									<th>Contact</th>
									<th>Address</th>
									<th>RollNo</th>
									<th>Marks</th>
								</tr>
								{data.map((val, key) => {
									return (
										<tr key={key}>
											<td>{val.name}</td>
											<td>{val.age}</td>
											<td>{val.gender}</td>
											<td>{val.School}</td>
											<td>{val.Contact}</td>
											<td>{val.Address}</td>
											<td>{val.RollNo}</td>
											<td>{val.Marks}</td>
										</tr>
									);
								})}
							</table>
						</div>
					</>
				</Grid>

				<Grid item xs={3}>
					<div className="boxed">
						<form>
							Report Filters
							<hr></hr>
							Class:<br></br>
							<select name="Class">
								<option value="I">I</option>
								<option value="II">II</option>
								<option value="III">III</option>
							</select>{" "}
							<select name="Section">
								<option value="A">A</option>
								<option value="B">B</option>
								<option value="C">C</option>
							</select>
							<br></br>
							<br></br>
							Student Name:<br></br>
							<select name="Student Name">
								<option value="Raj">Raj</option>
								<option value="Ramesh">Ramesh</option>
								<option value="Riya">Riya</option>
							</select>
							<br></br>
							<br></br>
							Date of issue:
							<br></br>
							<input type="date" name="Date of issue"></input>
							<br></br>
							<br></br>
							Show Left Student: <input type="checkbox" name="Show Left Student"></input>
							<br></br>
							Show Late Admission: <input type="checkbox" name="Show Late Admission"></input>
							<br></br>
							<br></br>
							Report Type:<br></br>
							<input type="radio" name="Report Type" value="Report Card"></input>Report Card<br></br>
							<input type="radio" name="Report Type" value="Rank Report"></input>Rank Report<br></br>
							<br></br>
							<input type="Submit" value="Show Report"></input>
						</form>
					</div>
				</Grid>
			</Grid>
		</>
	);
};

export default Forms;
