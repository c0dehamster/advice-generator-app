const getAdvice = async () => {
	const response = await fetch("https://api.adviceslip.com/advice")

	if (!response.ok) {
		throw new Error(`An error occurred: ${response.status}`)
	}

	return await response.json()
}

const updateContents = (id, text) => {
	document.querySelector(".advice-number").textContent = id
	document.querySelector(".advice").textContent = text
}

const showAdvice = async () => {
	try {
		const adviceData = await getAdvice()
		const slip = await adviceData.slip
		updateContents(`advice #${slip.id}`, `"${slip.advice}"`)
	} catch (error) {
		console.log(error.message)
		updateContents("", "Couldn't reach for an advice. Please, try later")
	}
}

document.addEventListener("DOMContentLoaded", showAdvice)
document.querySelector(".button").addEventListener("click", showAdvice)
