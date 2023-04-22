export default function LoginPage() {
    return (
			<section>
				<form>
					<label htmlFor="username">Registered e-mail:</label>
					<input
						name="email"
						id="email"
						type="text"
						placeholder="eksamenuin@hiof.no"
					></input>
				</form>
			</section>
		);
}