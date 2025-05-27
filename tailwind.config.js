module.exports = {
	content: ["./src/index.html"],
	safelist: [
		"text-testfluo",
		"bg-crazydebug",
		"bg-softLavender",
		"text-primary",
		"text-accent",
		"text-highlight",
	],
	theme: {
		extend: {
			colors: {
				primary: "#00494D",
				accent: "#9ABA4D",
				highlight: "#F4B400",
				softLavender: "#F4F4FA",
				testfluo: "#00FFAA",
				crazydebug: "#FF0000"
			}
		}
	}
}
