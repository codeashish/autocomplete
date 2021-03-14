let search = document.querySelector('#search');
let matchList = document.querySelector('#match-list');

let searchStates = async (searchText) => {
	let res = await fetch('./data.json');
	const persons = await res.json();

	let searchData = persons.filter((person) => {
		let regex = new RegExp(`^${searchText}`, 'gi');
		return person.firstname.match(regex) || person.lastname.match(regex);
	});

	if (searchText.length === 0) {
		searchData = [];
		matchList.innerHTML = '';
	}
	if (searchData.length === 0) matchList.innerHTML = '';
	outputHtml(searchData);
};

function outputHtml(data) {
	if (data.length > 0) {
		const html = data
			.map((match) => {
				return ` <div class="card card-body" >
				<h4>  ${match.firstname} ${match.lastname}

				
				<span class="text-danger">${match.gender}</span>  </h4>

				<small>BTC: ${match.bitcoinaddress} <br/>Card: ${match.cardnumber} </small>
				<small>BTC: ${match.ip} <br/>Card: ${match.mac} </small>
					
			
			
			</div> `;
			})
			.join('');
		matchList.innerHTML = html;
	}
}

search.addEventListener('input', () => searchStates(search.value));
