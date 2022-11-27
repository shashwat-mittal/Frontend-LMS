import { Grid } from "@mui/material";
import "./Admin_styles.css";
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

const Buttons = () => {
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
					CCE Exam wise Marks Report
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
							Exam:<br></br>
							<select name="Exam">
								<option value="C1">C1</option>
								<option value="C2">C2</option>
								<option value="C3">C3</option>
							</select>
							<br></br>
							<br></br>
							Report Type:<br></br>
							<input type="radio" name="Report Type" value="Cummulative Sheet"></input>Cummulative Sheet
							<br></br>
							<input type="radio" name="Report Type" value="Cummulative Sheet(Only Marks)"></input>Cummulative
							Sheet(Only Marks)<br></br>
							<input type="radio" name="Report Type" value="Strip Sheet"></input>Strip Sheet<br></br>
							<br></br>
							Sort By:<br></br>
							<input type="radio" name="Sort By" value="Roll No."></input>Roll No.<br></br>
							<input type="radio" name="Sort By" value="Rank"></input>Rank<br></br>
							<input type="radio" name="Sort By" value="Position"></input>Position<br></br>
							<br></br>
							<input type="Submit" value="Show Report"></input>
						</form>
					</div>
				</Grid>
			</Grid>
		</>
	);
};

export default Buttons;
