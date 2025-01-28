// Function	to fetch the current total compliments count
async function getComplimentCount()	{
	try	{
	const response = await fetch('https://compliment-gen-website-1.onrender.com/api/compliments/count');
	if (!response.ok)	{
		throw new Error(`Failed	to fetch count:	${response.status}`);
	}
	const data = await response.json();
	document.getElementById('counter').textContent = `Compliments generated: ${data.total}`;
	} catch	(error)	{
		console.error('Error fetching	compliment count:',	error);
	}
}

  // Function to increment the compliment count	on the server
async function incrementComplimentCount()	{
	try	{
	const response = await fetch('https://compliment-gen-website-1.onrender.com/api/compliments/increment', {
		method:	'POST',
		headers: { 'Content-Type': 'application/json' }
	});
	if (!response.ok) {
		throw new Error(`Failed	to increment count:	${response.status}`);
	}
	const data = await response.json();
	document.getElementById('counter').textContent = `Compliments	generated: ${data.total}`;
	} catch	(error)	{
	console.error('Error incrementing	compliment count:',	error);
	}
}

async function generateCompliment() {
	const complimentElement	= document.getElementById('compliment');
	const nameInput	= document.getElementById('name').value.trim();

	try	{
		const	response = await fetch('compliments.json');
		if (!response.ok)	{
			throw new Error(`Failed	to load	compliments: ${response.status}`);
		}

	const data = await response.json();
	const compliments = data.compliments;
	const randomIndex = Math.floor(Math.random() * compliments.length);

	let randomCompliment = compliments[randomIndex];
	if (nameInput) {
		randomCompliment = `${nameInput}, ${randomCompliment}`;
	}
	complimentElement.textContent = randomCompliment;

	await incrementComplimentCount();
	} catch	(error)	{
	complimentElement.textContent = 'Oops! Something went wrong.';
	console.error(error);
	}
}

getComplimentCount();
