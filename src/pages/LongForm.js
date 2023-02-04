import React, { useReducer } from "react";
import { initialState, reducer } from "../state/formReducer";

const LongForm = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const submit = (event) => {
		event.preventDefault();

		console.log("state :>> ", state);
	};

	return (
		<div className="border p-5 rounded-md">
			<form onSubmit={submit}>
				<div className="flex gap-8">
					<div className="flex flex-col items-start mb-2">
						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							className="border rounded-md"
							onBlur={(e) => {
								dispatch({
									type: "INPUT",
									payload: {
										name: e.target.name,
										value: e.target.value,
									},
								});
							}}
						/>
					</div>
					<div className="flex flex-col items-start mb-2">
						<label htmlFor="lastName">Last Name</label>
						<input
							onBlur={(e) => {
								dispatch({
									type: "INPUT",
									payload: {
										name: e.target.name,
										value: e.target.value,
									},
								});
							}}
							type="text"
							name="lastName"
							id="lastName"
							className="border rounded-md"
						/>
					</div>
				</div>

				<div className="flex gap-8">
					<div className="flex flex-col items-start mb-2">
						<label htmlFor="email">Email</label>
						<input
							onBlur={(e) => {
								dispatch({
									type: "INPUT",
									payload: {
										name: e.target.name,
										value: e.target.value,
									},
								});
							}}
							type="email"
							name="email"
							id="email"
							className="border rounded-md"
						/>
					</div>
					<div>
						<h1 className="font-semibold">Gender</h1>
						<div className="flex gap-2">
							<div>
								<input
									onBlur={(e) => {
										dispatch({
											type: "INPUT",
											payload: {
												name: e.target.name,
												value: e.target.value,
											},
										});
									}}
									type="radio"
									name="gender"
									id="male"
									value="male"
								/>
								<label
									htmlFor="male"
									className="ml-1"
								>
									Male
								</label>
							</div>
							<div>
								<input
									onBlur={(e) => {
										dispatch({
											type: "INPUT",
											payload: {
												name: e.target.name,
												value: e.target.value,
											},
										});
									}}
									type="radio"
									name="gender"
									id="female"
									value="female"
								/>
								<label
									htmlFor="female"
									className="ml-1"
								>
									Female
								</label>
							</div>
							<div>
								<input
									onBlur={(e) => {
										dispatch({
											type: "INPUT",
											payload: {
												name: e.target.name,
												value: e.target.value,
											},
										});
									}}
									type="radio"
									name="gender"
									id="Other"
									value="Other"
								/>
								<label
									htmlFor="Other"
									className="ml-1"
								>
									Other
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className="flex gap-8">
					<div className="flex flex-col w-1/2 mb-2">
						<label htmlFor="education">Education</label>
						<select
							onChange={(e) => {
								dispatch({
									type: "INPUT",
									payload: {
										name: e.target.name,
										value: e.target.value,
									},
								});
							}}
							name="education"
							id="education"
							className="border rounded-md"
						>
							<option value="">Pick one</option>
							<option value="SSC">SSC</option>
							<option value="HSC">HSC</option>
							<option value="underGrad">Under Graduate</option>
							<option value="graduate">Graduate</option>
						</select>
					</div>
					<div className="flex flex-col w-1/2">
						<label htmlFor="">Number of PCs</label>
						<div className="flex justify-between items-center gap-2">
							<p
								onClick={() =>
									dispatch({ type: "DECREMENT", payload: { count: 1 } })
								}
								className="btn btn-sm btn-primary"
							>
								-
							</p>
							<div className="border w-full rounded-md mx-1 text-center">
								<span>{state.quantity}</span>
							</div>
							<p
								onClick={() =>
									dispatch({ type: "INCREMENT", payload: { count: 1 } })
								}
								className="btn btn-sm btn-primary"
							>
								+
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col mr-8">
					<label htmlFor="feedback">Feedback</label>
					<textarea
						onBlur={(e) => {
							dispatch({
								type: "INPUT",
								payload: {
									name: e.target.name,
									value: e.target.value,
								},
							});
						}}
						className="border w-1/2 rounded-md"
						name="feedback"
						id="feedback"
						cols="30"
						rows="4"
					></textarea>
				</div>

				<div className="flex justify-between items-center">
					<div className="flex mt-2">
						<input
							onClick={() => dispatch({ type: "TOGGLE" })}
							type="checkbox"
							className="checkbox mr-2"
							name="term"
							id="terms"
						/>
						<label
							className="text-xs my-auto"
							htmlFor="terms"
						>
							I Agree to terms and conditions
						</label>
					</div>
					<button
						type="submit"
						disabled={!state.term}
						className="btn btn-sm btn-primary px-2 mt-2 border"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default LongForm;
