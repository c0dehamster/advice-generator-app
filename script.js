const getAdvice = async () => {
	const response = await fetch("https://api.adviceslip.com/advice")

	if (!response.ok) {
		throw new Error(`An error occurred: ${response.status}`)
	}

	return await response.json()
}

const showAdvice = async () => {
	const adviceData = await getAdvice()
	const slip = await adviceData.slip
	document.querySelector(".advice-number").textContent = `advice #${slip.id}`
	document.querySelector(".advice").textContent = slip.advice
}

document.addEventListener("DOMContentLoaded", showAdvice)
document.querySelector(".button").addEventListener("click", showAdvice)
